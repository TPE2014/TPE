//js code by JesFot
function getJson()
{
  return jsonData;
}
function getErrorText(int)
{
  var textJSON = getJson();
  return textJSON.list[int];
}
function getUser()
{
  var usr = document.getElementsByTagName("usr");
  uusr = usr.innerHTML;
  return uusr;
}
function printerror(text, int, user)
{
  var txt = "Error " + int + " : " + text;
  if(user != null && user != "")
  {
    txt += "\nGenerated by " + user;
  }
  else
  {
    txt += ".";
  }
  
  alert(txt);
  //send notification
  return true;
}
function testerror(int)
{
  alert(int);
}
function error(int)
{
  printerror(getErrorText(int), int, getUser());
}
