var lightbike_AI_main_javascript = "1.6";
var theMap = []; // variable utile pour la simplification => en bas						                                			\ /

function setTheMap(map)
{
	theMap = map;
}
var getTheMap = function()
{
	return theMap;
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

function isDefined(val) // Verifie que val possede une valeur
{
	var typeofval = typeof val;
	if(typeofval != "undefined")
	{
		return true;
	}
	else
	{
		return false;
	}
}

function testforWall(x, y, map) // On verifie si il a un mur en x, y
{
	if (!isDefined(map[x]))
	{
		console.error("Error: in function testforWall() undefined value map[x], x=" + x + " in main.js.");
		return true;
	}
	var wall = map[x][y];
	if (wall == " ") // Il n'y a pas de mur, on dit non;
	{
		return false;
	}
	else if (wall == "wall") // Oui, il y a  un mur => oui
	{
		return true;
	}
	else if (wall == "P1" || wall == "P2" || wall == "P0") // un joueur, ca va pas tarder a devenir un mur...
	{
		return "player";
	}
	else // On ne sait pas, au cas où on dit "mur"
	{
		console.error("Error: in function testforWall() unknown value \"" + wall + "\" in main.js.");
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
		console.error("Error: in function movePlayer() unknown value \"" + move + "\" in main.js.")
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

function calc(x, y, XY, dir, map) // dir = +1 ou -1; sert a donner la taille de la ligne donnée
{
	var alpha = 318;
	var top;
	var topX = map.length - x; // On doit connetre la taille de la map sur sa longeur
	var topY = map[0].length - y; // ou largeur
	var mX, mY;
	if (XY == 'x') // On voit si le programme veut tester la taille sur les x
	{
		mX = dir;
		mY = 0;
		top = topX;
	}
	else if (XY = 'y') // Ou sur les y
	{
		mX = 0;
		mY = dir;
		top = topY;
	}
	else // Ni x, ni y : on peut pas faire
	{
		console.error("Error: in function calc() unknown value \"" + XY + "\" in main.js.");
	}
	if (testforWall(x, y, map) == "player") // Si on demare sur un joueur...
	{
		for (var i = 0; i < top; i++) { // On lance la boucle de verification
			var tmpX = x + (mX * i);
			var tmpY = y + (mY * i);
			if (testforWall(tmpX, tmpY, map) == true) // Si on trouve un mur, on renvoie le nombre de 'case' avant
			{
				alpha = i;
				break;
			}
		};
	}
	return alpha;
}

function getDirection(x1, y1, x2, y2) // Done la direction prise sur UN mouvement pour 1 position precedante
{
	if (x1 > x2)
	{
		console.log("left");
		return "left";
	}
	else if (x1 < x2)
	{
		console.log("right");
		return "right";
	}
	else if (y1 > y2)
	{
		console.log("down");
		return "down";
	}
	else if (y1 < y2)
	{
		console.log("up");
		return "up";
	}
	else // N'a peut-etre pas encore bougé, ou erreur
	{
		console.warn("Warning : in function getDirection() cannot compare " + x1 + " with " + x2 + " or " + y1 + " with " + y2 + " in main.js");
		return "noDir";
	}
}

function getTall(x1, x2, y1, y2) // Renvoie la taille de la zone donnée
{
	var tX, tY;
	if (y1 < y2)
	{
		tY = y2-y1;
	}
	else if (y1 > y2)
	{
		tY = y1-y2;
	}
	else if (y1 == y2)
	{
		tY = 0;
	}
	else
	{
		console.error("Error : in function getTall([4]) cannot compare " + y1 + " and " + y2 + " in main.js");
		tY = -1;
	}
	
	if (x1 < x2)
	{
		tX = x2-x1;
	}
	else if (x1 > x2)
	{
		tX = x1-x2;
	}
	else if (x1 == x2)
	{
		tx = 0;
	}
	else
	{
		console.error("Error : in function getTall([4]) cannot compare " + x1 + " and " + x2 + " in main.js");
		tX = -1;
	}
	tX++;
	tY++;
	return tX*tY;
}

function wallInZone(x1, y1, x2, y2, map) //cherche le nombre de mur dans cette zone
{
	var nbWall = 0;
	var tall = getTall(x1, x2, y1, y2);
	var tallX = getTall(x1, x2, 1, 1);
	var tallY = getTall(1, 1, y1, y2);
	if (tall == 0 || tall == 1)
	{
		console.warn("Warning : in function wallInZone([4]) tall(" + tall + ") is too small in main.js");
		if (tall == 1)
		{
			if (testforWall(x1, y1, map))
			{
				return 1;
			}
		}
		else
		{
			return 0;
		}
	}
	else
	{
		for (var i=0; i<tallX; i++)
		{
			for (var j=0; j < tallY; j++)
			{
				if (testforWall(i, j, map) || testforWall(i, j, map) == "player")
				{
					nbWall++;
				}
			}
		}
	}
	return nbWall;
}

//Simplification pour taper le code dans la console

function up(p) {movePlayer("down", p, theMap);setTable(theMap);}
function right(p) {movePlayer("right", p, theMap);setTable(theMap);}
function left(p) {movePlayer("left", p, theMap);setTable(theMap);}
function down(p) {movePlayer("up", p, theMap);setTable(theMap);}
