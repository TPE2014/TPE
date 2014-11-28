var javascript_IA_lightbike_Version = "2.5";
var fileName = "IA_test.js";
var adder = function(){setTable(theMap);};

function cannot_move(Player, x, y, map)
{
	setWall(x, y, map);
	console.log("Player " + Player + " can't move anymore");
}

function AI(data)
{
	console.log("Start AI(data) function !!");
	var Pia = data.ia.P;
	var exX = data.ia.pos.ex[0];
	var exY = data.ia.pos.ex[1];
	var map = data.map();
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
			var leftZone = calc(x, y, 'x', -1, map);
			if (rightZone == leftZone && rightZone != 0)
			{
				AI1(map, data);
			}
			else if (rightZone == leftZone && rightZone == 0)
			{
				cannot_move(x, y, map);
			}
			else if (rightZone < leftZone)
			{
				movePlayer("left", Pia, map);
				adder();
			}
			else if (rightZone > leftZone)
			{
				movePlayer("right", Pia, map);
				adder();
			}
			else
			{
				console.error("Error: in function AI() cannot compare " + rightZone + " and " + leftZone + " in " + fileName);
				cannot_move(x, y, map);
			}
		}
		else if (testforWall(x, y-1, map) == false)
		{
			movePlayer("down", Pia, map);
			adder();
		}
		else
		{
			console.error("Error : in function AI() cannot understand what \"" + testforWall(x, y-1, map) + "\" can be ... in " + fileName);
			cannot_move(x, y, map);
		}
	}
	else if (dir == "up")
	{
		if (testforWall(x, y+1, map) || testforWall(x, y+1, map) == "player")
		{
			var rightZone = calc(x, y, 'x', 1, map);
			var leftZone = calc(x, y, 'x', -1, map);
			if (rightZone == leftZone && rightZone != 0)
			{
				AI1(map, data);
			}
			else if (rightZone == leftZone && rightZone == 0)
			{
				cannot_move(x, y, map);
			}
			else if (rightZone < leftZone)
			{
				movePlayer("left", Pia, map);
				adder();
			}
			else if (rightZone > leftZone)
			{
				movePlayer("right", Pia, map);
				adder();
			}
			else
			{
				console.error("Error: in function AI() cannot compare " + rightZone + " and " + leftZone + " in " + fileName);
				cannot_move(x, y, map);
			}
		}
		else if (testforWall(x, y+1, map) == false)
		{
			movePlayer("up", Pia, map);
			adder();
		}
		else
		{
			console.error("Error : in function AI() cannot understand what \"" + testforWall(x, y+1, map) + "\" can be ... in " + fileName);
			cannot_move(x, y, map);
		}
	}
	else if (dir == "right")
	{
		if (testforWall(x+1, y, map) || testforWall(x+1, y, map) == "player")
		{
			var upperZone = calc(x, y, 'y', 1, map);
			var downZone = calc(x, y, 'y', -1, map);
			if (upperZone == downZone)
			{
				if (upperZone == 0)
				{
					cannot_move(x, y, map);
				}
				else
				{
					AI1(map, data);
				}
			}
			else if (upperZone < downZone)
			{
				movePlayer("down", Pia, map);
				adder();
			}
			else if (upperZone > downZone)
			{
				movePlayer("up", Pia, map);
				adder();
			}
			else
			{
				console.error("Error : in function AI() cannot compare " + upperZone + " and " + downZone + " in " + fileName);
				cannot_move(x, y, map);
			}
		}
		else if (testforWall(x+1, y, map) == false)
		{
			movePlayer("right", Pia, map);
			adder();
		}
		else
		{
			console.error("Error : in function AI() cannot understand what \"" + testforWall(x+1, y, map) + "\" can be ... in " + fileName);
			cannot_move(x, y, map);
		}
	}
	else if (dir == "left")
	{
		if (testforWall(x-1, y, map) || testforWall(x-1, y, map) == "player")
		{
			var upperZone = calc(x, y, 'y', 1, map);
			var downZone = calc(x, y, 'y', -1, map);
			if (upperZone == downZone)
			{
				if (upperZone == 0)
				{
					cannot_move(x, y, map);
				}
				else
				{
					AI1(map, data);
				}
			}
			else if (upperZone < downZone)
			{
				movePlayer("down", Pia, map);
				adder();
			}
			else if (upperZone > downZone)
			{
				movePlayer("up", Pia, map);
				adder();
			}
			else
			{
				console.error("Error : in function AI() cannot compare " + upperZone + " and " + downZone + " in " + fileName);
				cannot_move(x, y, map);
			}
		}
		else if (testforWall(x-1, y, map) == false)
		{
			movePlayer("left", Pia, map);
			adder();
		}
		else
		{
			console.error("Error : in function AI() cannot understand what \"" + testforWall(x-1, y, map) + "\" can be ... in " + fileName);
			cannot_move(x, y, map);
		}
	}
	var newX = getPlayer(map, Pia)[0];
	var newY = getPlayer(map, Pia)[1];
	if (x == newX && y == newY)
	{
		console.error("Error : in function AI() the player " + Pia + " didn't move in " + fileName);
	}
	data.ia.pos.ex[0] = x;
	data.ia.pos.ex[1] = y;
	console.log("IA finished.");
}
