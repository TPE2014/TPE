var javascript_IA_lightbike_Version = "3.0";
var fileName = "IA_test.js";

function getDirection(x1, y1, x2, y2)
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
	else
	{
		console.error("Error : in function getDirection() cannot compare " + x1 + " with " + x2 + " or " + y1 + " with " + y2 + " in " + fileName);
		return "noDir";
	}
}

function cannot_move(Player)
{
	console.log("Player " + Player + " can't move anymore");
}

function AI(data)
{
	var Pia = data.ia.P;
	var exX = data.ia.pos.ex[0];
	var exY = data.ia.pos.ex[1];
	var map = data.map;
	var x = getPlayer(map, Pia)[0];
	var y = getPlayer(map, Pia)[1];
	var dir = getDirection(exX, exY, x, y);
	if (dir == "noDir")
	{
		AI1(map, data);
	}
	else if (dir == "down")
	{
		if (testforWall(x, y-1, map) || testforWall(x, y-1, map) == "player")
		{
			var rightZone = calc(x, y, 'x', 1, map);
			var leftZone = calc(x, y, 'y', -1, map);
			if (rightZone == leftZone)
			{
				AI1(map, data);
			}
			else if (rightZone < leftZone)
			{
				movePlayer("left", Pia, map);
				setTable(theMap);
			}
		}
	}
}
