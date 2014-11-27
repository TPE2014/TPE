var Javascript_Require_License_Version = "GNU Lesser General Public License V3";
var Javascript_Require_License_Link = "http://www.gnu.org/licenses/";
//
// This file is part of Smoothie.
//
// Copyright (C) 2013,14 Torben Haase, Flowy Apps (torben@flowyapps.com)
//
// Smoothie is free software: you can redistribute it and/or modify it under the
// terms of the GNU Lesser General Public License as published by the Free
// Software Foundation, either version 3 of the License, or (at your option) any
// later version.
//
// Smoothie is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
// A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more
// details.You should have received a copy of the GNU Lesser General Public
// License along with Smoothie.  If not, see <http://www.gnu.org/licenses/>.
//
////////////////////////////////////////////////////////////////////////////////
(function(load) { 'use strict';

var SmoothieError = function(message, fileName, lineNumber) {
	this.name = "SmoothieError";
	this.message = message;
}
SmoothieError.prototype = Object.create(Error.prototype);
var paths = window.Smoothie&&window.Smoothie.paths!==undefined?window.Smoothie.paths.slice(0):['./'];
var pwd = Array('');
var parser = document.createElement('A');
var cache = new Object();
var locks = new Object();
function require(identifier, callback) {
	var descriptor = resolve(identifier);
	var cacheid = '$'+descriptor.id;

	if (cache[cacheid]) {
		if (typeof cache[cacheid] === 'string')
			load(descriptor, cache, pwd, cache[cacheid]);
		callback && setTimeout(function(){callback(cache[cacheid])}, 0);
		return cache[cacheid];
	}

	var request = new XMLHttpRequest();
	callback && (request[request.onload===null?'onload':'onreadystatechange'] = onLoad);
	request.open('GET', descriptor.uri, !!callback); 
	locks[cacheid] = locks[cacheid]++||1;
	request.send();
	locks[cacheid]--;
	!callback && onLoad();
	return cache[cacheid];

	function onLoad() {
		if (request.readyState != 4)
			return;
		if (request.status != 200)
			throw new SmoothieError('unable to load '+descriptor.id+" ("+request.status+" "+request.statusText+")");
		if (locks[cacheid]) {
			console.warn("module locked: "+descriptor.id);
			callback && setTimeout(onLoad, 0);
			return;
		}
		if (!cache[cacheid])
			load(descriptor, cache, pwd, 'function(){\n'+request.responseText+'\n}');
		callback && callback(cache[cacheid]);
	}
}
function resolve(identifier) {
	var m = identifier.match(/^(?:([^:\/]+):)?(\.\.?)?\/?((?:.*\/)?)([^\.]+)?(\..*)?$/);
	var p = pwd[0].match(/^(?:([^:\/]+):)?(.*)/);
	var root = m[2] ? paths[p[1]?parseInt(p[1]):0] : paths[m[1]?parseInt(m[1]):0];
	parser.href = (m[2]?root+p[2]+m[2]+'/':root)+m[3]+(m[4]?m[4]:'index');
	var id = parser.href.replace(/^[^:]*:\/\/[^\/]*\/|\/(?=\/)/g, '');
	var uri = "/"+id+(m[5]?m[5]:'.js');
	root.replace(/[^\/]+\//g, function(r) {
		id = (id.substr(0, r.length) == r) ?id.substr(r.length) : id = '../'+id;
	});
	return {'id':id,'uri':uri};
}

if (window.require !== undefined)
	throw new SmoothieError('\'require\' already defined in global scope');

try {
	Object.defineProperty(window, 'require', {'value':require});
	Object.defineProperty(window.require, 'resolve', {'value':resolve});
	Object.defineProperty(window.require, 'paths', {'get':function(){return paths.slice(0);}});
}
catch (e) {
	window.require = require;
	window.require.resolve = resolve;
	window.require.paths = paths.slice(0);
	cache = document.createElement('DIV');
}

for (var id in (window.Smoothie && window.Smoothie.preloaded))
	cache['$'+id] = window.Smoothie.preloaded[id].toString();

for (var i=0; i<paths.length; i++) {
	parser.href = paths[i];
	paths[i] = '/'+parser.href.replace(/^[^:]*:\/\/[^\/]*\/|\/(?=\/)/g, '');
}

})(

// INFO Module loader
//      Takes the module descriptor, the global variables and the module code,
//      sets up the module envirinment, defines the module getter in the cache
//      and evaluates the module code. If module is a bundle the code of the
//      pre-loaded modules will be stored in the cache afterwards.
// NOTE This functions is defined as an anonymous function, which is passed as
//      a parameter to the closure above to provide a clean environment (only
//      global variables, module and exports) for the loaded module. This is
//      also the reason why `source`, `pwd` & `cache` are not named parameters.

function /*load*/(module/*, cache, pwd, source*/) {
	var global = window;
	var exports = new Object();
	Object.defineProperty(module, 'exports', {'get':function(){return exports;},'set':function(e){exports=e;}});
	arguments[2].unshift(module.id.match(/(?:.*\/)?/)[0]);
	Object.defineProperty(arguments[1], '$'+module.id, {'get':function(){return exports;}});
	arguments[3] = '('+arguments[3]+')();\n//# sourceURL='+module.uri;
	eval(arguments[3]);
	if (typeof module.id !== 'string')
		for (id in module)
			arguments[1]['$'+require.resolve(id).id] = module[id].toString();
	arguments[2].shift();
}

);
