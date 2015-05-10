//Created by JësFot
var morpion_javascript_version = "1.0";
var board = [[], [], []];
var boardID = [];

function placeX(idnum)
{
  boardID[idnum] = 1;
  var coord1 = 0;
  var coord2 = 0;
  if(idnum-6 < 0)
  {
    if(idnum-3 < 0)
    {
      coord1 = idnum-0;
      coord2 = 1;
    }
    else
    {
      coord1 = idnum-3;
      coord2 = 2;
    }
  }
  else
  {
    coord1 = idnum-6;
    coord2 = 3;
  }
  board[coord1][coord2] = 1;
}
function placeO(idnum)
{
  boardID[idnum] = 2;
  var coord1 = 0;
  var coord2 = 0;
  if(idnum-6 < 0)
  {
    if(idnum-3 < 0)
    {
      coord1 = idnum-0;
      coord2 = 1;
    }
    else
    {
      coord1 = idnum-3;
      coord2 = 2;
    }
  }
  else
  {
    coord1 = idnum-6;
    coord2 = 3;
  }
  board[coord1][coord2] = 2;
}

function isX(idnum)
{
  if(boardID[idnum] == 1)
  {
    return true;
  }
  return false;
}

function isO(idnum)
{
  if(boardID[idnum] == 2)
  {
    return true;
  }
  return false;
}

function verifNoReplaceX(idnum)
{
  if(isX(idnum) || isO(idnum))
  {
    return false;
  }
  placeX(idnum);
  return true;
}

function verifNoReplaceO(idnum)
{
  if(isO(idnum) || isX(idnum))
  {
    return false;
  }
  placeO(idnum);
  return true;
}
