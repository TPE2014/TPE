//here comme the AI code
//A venir
function main(Player, map)
{
  //C
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
          cannot_move();
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
