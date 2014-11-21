var lightbike_AI_tableEdit_javascript_Version = "1.5.2";
var tableID;
var lines;
var colones;

function setID(id) // definie l'id de la zone de text HTML
{
	tableID = id;
}
function getID() // Ca ce voit non ?
{
	return tableID;
}
function setSize(map) // definie les variables necessaires pour addAll() selon la taille de la map
{
	colones = map.length;
	lines = map[0].length;
}
function addLine() // ajoute une ligne a mon tableau HTML
{
	var line = document.getElementById(tableID).insertRow(-1);
	return line;
}
function addColomn(line) // ajoute une colone a mon tableau HTML
{
	var colone = line.insertCell(-1);
	return colone;
}
function addAll() // ajoute toutes les lignes et colones de mon tableau selon la taille de la map
{
	for (var i = 0; i < lines; i++)
	{
		var tmpL = addLine();
		for (var j = 0; j < lines; j++)
		{
			var tmpC = addColomn(tmpL);
		}
	}
}
function editPart(x, y, text) // inutile... // sert a modifier une case x, y
{
	document.getElementById(tableID).rows[y].cells[x].innerHTML = text;
}
function setTable(map) // affiche le tableau "map" dans mon tableau HTML
{
	for (var i = 0; i < map.length; i++)
	{
		for (var j = 0; j < map[0].length; j++)
		{
			editPart(i, j, map[i][j]);
		}
	}
}


function setAll(maxX, maxY) // fonction pour plus de rapidite au debug
{
	setID('Table');
	setTheMap(createMap(maxX, maxY));
	setSize(theMap);
	addAll();
	setTable(theMap);
}
