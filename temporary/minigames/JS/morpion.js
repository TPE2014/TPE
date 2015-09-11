//Created by JësFot
var morpion_javascript_version = "1.0";
var board = [[], [], []];
/*
  1 2 3 // 11 12 13
  4 5 6 // 21 22 23
  7 8 9 // 31 32 33
*/
var boardID = [];

function getCoords(idnum)
{
  var coord1 = 0;
  var coord2 = 0;
  if(idnum-6 <= 0)
  {
    if(idnum-3 <= 0)
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
  return [coord1-1, coord2-1];
}
function getID(c1, c2)
{
  if(c1 == 1)
  {
    if(c2 == 1)
    {
      return 1;
    }
    else if(c2 == 2)
    {
      return 4;
    }
    else
    {
      return 7;
    }
  }
  else if(c1 == 2)
  {
    if(c2 == 1)
    {
      return 2;
    }
    else if(c2 == 2)
    {
      return 5;
    }
    else
    {
      return 8;
    }
  }
  else
  {
    return c2*3;
  }
}

function placeX(idnum)
{
  boardID[idnum] = 1;
  board[getCoords(idnum)[0]][getCoords(idnum)[1]] = 1;
}
function placeO(idnum)
{
  boardID[idnum] = 2;
  board[getCoords(idnum)[0]][getCoords(idnum)[1]] = 2;
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

function getOX(idnum)
{
  return boardID[idnum];
}
function getXO(c1, c2)
{
  return board[c1-1][c2-1];
}

function getStr(idnum)
{
  if(getOX(idnum) == 1)
  {
    return "X";
  }
  else if(getOX(idnum) == 2)
  {
    return "O";
  }
  else
  {
    return "%";
  }
}
function getStr(c1, c2)
{
  if(getXO(c1, c2) == 1)
  {
    return "X";
  }
  else if(getXO(c1, c2) == 2)
  {
    return "O";
  }
  else
  {
    return "%";
  }
}
function isFull()
{
  for(var i=0; i<boardID.length; i++)
  {
    if(!(isX(i) || isO(i)))
    {
      return false;
    }
  }
  return true;
}
function hasWinner()
{
  for(var i=1; i<board.length+1; i++)
  {
    if(isO(getID(i, 1)) || isX(getID(i, 1)))
    {
      if(getXO(i, 2) == getXO(i, 1) && getXO(i, 2) == getXO(i, 3))
      {
        return getXO(i, 1);
      }
      else if(getXO(i+1, 2) == getXO(i, 1) && getXO(i, 1) == getXO(i+2, 3))
      {
        return getXO(i, 1);
      }
      else if(getXO(i+1, 1) == getXO(i, 1) && getXO(i, 1) == getXO(i+2, 1))
      {
        return getXO(i, 1);
      }
      else if(getXO(i, 1) == getXO(i-1, 2) && getXO(i, 1) == getXO(i-2, 3))
      {
        return getXO(i, 1);
      }
    }
    if(isO(getID(i, 2)) || isX(getID(i, 2)))
    {
      if(getXO(i+1, 2) == getXO(i, 2) && getXO(i, 2) == getXO(i+2, 2))
      {
        return getXO(i, 1);
      }
    }
    if(isO(getID(i, 3)) || isX(getID(i, 3)))
    {
      if(getXO(i+1, 3) == getXO(i, 3) && getXO(i, 3) == getXO(i+2, 3))
      {
        return getXO(i, 1);
      }
    }
  }
  return false || -1;
}
