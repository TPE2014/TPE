var javascript_IA_lightbike_Version = "3.0";
var fileName = "IA_test.js";

function getDirection(x1, y1, x2, y2)
{
  else if (x1 > x2)
  {
    console.log("down ?");
    return "down";
  }
  else if (x1 < x2)
  {
    console.log("up");
    return "up";
  }
  else if (y1 > y2)
  {
    console.log("left");
    return "left";
  }
  else if (y1 < y2)
  {
    console.log("right");
    return "right";
  }
  else
  {
    console.error("Error : in function getDirection() cannot compare " + x1 + " with " + x2 + " or " + y1 + " with " + y2 + " in " + fileName);
  }
}
