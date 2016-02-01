// Nothing now
// Par Cyril
var translator_code_version = "0.0.0";

function Object_Word()
{
	this.word = "";
}

function Object_Gender()
{
	this.m = "M";
	this.f = "F";
	this.g = "U";
	this.getMasculine = function()
	{
		return this.m;
	}
	this.getFeminine = function()
	{
		return this.f;
	}
	this.getGender = function()
	{
		return this.g;
	}
	this.setGender = function(newGander)
	{
		if(newGender == this.f || newGender == this.m)
		{
			this.g = newGender;
		}
	}
	this.isMasculine()
	{
		return this.g == this.m;
	}
	this.isFeminine()
	{
		return this.g == this.f;
	}
	
}

function Object_Singular()
{
	this.p = "P";
	this.s = "S";
	this.t = "U";
	this.getPlural = function()
	{
		return this.p;
	}
	this.getSingular = function()
	{
		return this.s;
	}
	this.getThis = function()
	{
		return this.t;
	}
	this.setThis = function(newSingular)
	{
		if(newGender == this.s || newGender == this.p)
		{
			this.t = newGender;
		}
	}
	this.isPlural()
	{
		return this.t == this.p;
	}
	this.isSingular()
	{
		return this.t == this.s;
	}
}

function Object_WordDescriptio()
{
	this.gender = new Object_Gender();
	this.singular = new Object_Singular();
}
