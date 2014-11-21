//here comme the AI code

var lightbike_AI_javascript_Version = "1.0.0";

function main(Player, map)
{
  //C
}

function cannot_move(pl)
{
  console.log("The player " + pl + " can't ove anymore...")
}

function AI1(map, data)
{
  var Pia = data.ia.Nbp;
  var x = getPlayer(map, Pia)[0];
  var y = getPlayer(map, Pia)[1];
  if (testforWall(x+1, y, map))
  {
    if (testforWall(x, y+1, map))
    {
      if (testforWall(x-1, y, map))
      {
        if (testforWall(x, y-1, map))
        {
          cannot_move(Pia);
        }
        else
        {
          movePlayer("down", Pia, map);
          setTable(theMap);
        }
      }
      else
      {
        movePlayer("left", Pia, map);
        setTable(theMap);
      }
    }
    else
    {
      movePlayer("up", Pia, map);
      setTable(theMap);
    }
  }
  else
  {
    movePlayer("right", Pia, map);
    setTable(theMap);
  }
}

function AI2(map, data)
{
	var Pia = data.ia.Nbp;
	var exX = data.ia.pos.ex[0];
	var exY = data.ia.pos.ex[1];
	var x = getPlayer(map, Pia)[0];
	var y = getPlayer(map, Pia)[1];
	var dir = getDirection(exX, exY, x, y);
	if (dir == "noDir")
	{
		AI1(map, data);
	}
	else if (dir == "down")
	{
		//y-1
		if (testforWall(x, y-1, map) || testforWall(x, y-1, map) == "player")
		{
			var rightZone = calc(x, y, 'x', 1, map);
			var leftZone = calc(x, y, 'x', -1, map);
			if (rightZone == leftZone)
			{
				AI1(map, data); // droite ...
			}
			else if (rightZone > leftZone)
			{
				movePlayer("right", Pia, map);
				setTable(theMap);
			}
			else if (rightZone < leftZone)
			{
				movePlayer("left", Pia, map);
				setTable(theMap);
			}
			else
			{
				console.log("error: in function AI2() cannot compare " + rightZone + " and " + leftZone + " in IA.js");
			}
		}
		else if (testforWall(x, y-1, map) == false)
		{
			movePlayer("down", Pia, map);
			setTable(theMap);
		}
		else
		{
			console.log("Maybe a player ?");
		}
	}
}
