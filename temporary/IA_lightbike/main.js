var theMap = []; // variable utile pour la simplification => en bas						                                			\ /

function setTheMap(map)
{
	theMap = map;
}

function createMap(Xmax, Ymax) // cree mon tableau de taille Xmax, Ymax avec une valeur predefinie
{
	var map = [];
	for (var i = 0; i < Xmax; i++) {
		map[i] = [];
		for (var j = 0; j < Ymax; j++) {
			map[i][j] = " "; // Valeur predefinie ici
		};
	};
	return map;
}

function testforWall(x, y, map)
{
	var wall = map[x][y];
	if (wall == " ") // Il n'y a pas de mur, on dit non;
	{
		return false;
	}
	else if (wall == "wall") // Oui, il y a  un mur => oui
	{
		return true;
	}
	else if (wall == "P1" || wall == "P2") // un joueur, ca va pas tarder a devenir un mur...
	{
		return "player";
	}
	else // On ne sait pas, au cas où on dit "mur"
	{
		console.log("error: in function testforWall() unknown value \"" + wall + "\" in funlight.js.");
		return true;
	}
}

function getPlayer(map, Player) // retourne dans un tableau la position du joueur n° Player, sur la map donnée
{
	var table = [];
	var srch = "P" + Player;
	for (var i = 0; i < map.length; i++)
	{
		for (var j = 0; j < map[i].length; j++)
		{
			if (map[i][j] == srch)
			{
				table[0] = i;//X
				table[1] = j;//Y
				return table;
			}
		}
	}
	return table; // table[0] = x; table[1] = y;
}

function setWall(x, y, map) // Fonction rapide pour definir un mur sur la map
{
	map[x][y] = "wall";
	return true;
}

function setPlayer(x, y, map, Player) // Definie un joueur N° Player aux coordonnées x, y dans le tableau map
{
	map[x][y] = "P" + Player;
	return true;
}

function movePlayer(move, Player, map) // On bouge le joueur N° Player, sur la map "map"
{
	var ex = getPlayer(map, Player);
	var exX = ex[0];
	var exY = ex[1];
	map[exX][exY] = "wall";
	if (move == "down") // on monte /!\Coordonnées y inversées par la gestion des lignes en Html/!\
	{
		exY--;
	}
	else if (move == "up") // on descend ... voir dessus pour y
	{
		exY++;
	}
	else if (move == "right") // Droite, meme si a mon avis tu n'a pas besoin de cette traduction axe x dans le bon sens
	{
		exX++;
	}
	else if (move == "left") // bon, hein, voila, quoi !!
	{
		exX--;
	}
	else // ici, on ne doit pas avoir autre chose
	{
		console.log("error: in function movePlayer() unknown value \"" + move + "\" in funlight.js.")
	}

	if (!testforWall(exX, exY, map)) // si il n'y a pas de mur, c'est bon, il bouge
	{
		map[exX][exY] = "P" + Player;
		return true;
	}
	else // sinon le joueur meurt
	{
		alert("Dead"); //j'aime bien ... :D
		return false;
	}
}

function calc(x, y, XY, dir, map) // dir = +1 ou (exlusif pour ceux qui se posent la question) -1
{
	var alpha = 318;
	var top;
	var topX = map.length - x;
	var topY = map[0].length - y;
	var mX, mY;
	if (XY == 'x')
	{
		mX = dir;
		mY = 0;
		top = topX;
	}
	else if (XY = 'y')
	{
		mX = 0;
		mY = dir;
		top = topY;
	}
	else
	{
		console.log("error: in function calc() unknown value \"" + XY + "\" in funlight.js.");
	}
	if (testforWall(x, y, map) == "player")
	{
		for (var i = 0; i < top; i++) {
			var tmpX = x + (mX * i);
			var tmpY = y + (mY * i);
			if (testforWall(tmpX, tmpY, map) == true)
			{
				alpha = i;
				break;
			}
		};
	}
	return alpha;
}

//Simplification pour taper le code dans la console

function up(p) {movePlayer("down", p, theMap);setTable(theMap);}
function right(p) {movePlayer("right", p, theMap);setTable(theMap);}
function left(p) {movePlayer("left", p, theMap);setTable(theMap);}
function down(p) {movePlayer("up", p, theMap);setTable(theMap);}