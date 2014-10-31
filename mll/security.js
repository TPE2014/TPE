var username, action, param;
var password = "tuveuxdeslolis";
if(localStorage['admin'] != "yes")
{
	var inp = prompt("Mot de passe:");
	if(inp != password)
	{
		document.location = "http://pururin.com/";
	}
	else
	{
		localStorage['admin'] = "yes";
	}
}
