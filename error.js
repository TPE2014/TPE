//js code by JesFot
function getJson(url)
{
  return "{'list':['chi','fu','mi']}";
}
function getErrorText(url, int)
{
  var textJSON = getJson(url);//get JSON;
  return textJSON.list[int];
}
function getUser()
{
  return "Guest";
}
function printerror(text, int, user)
{
  var txt = "Error " + num + " : " + text;
  if(user != null && user != "")
  {
    txt += " Generated by " + user;
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
  printerror(getErrorText(url, int), int, getUser());
}
