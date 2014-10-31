var username, action, param;
var inp = prompt("Mot de passe:");
if(inp != "tuveuxdupoulet" && localStorage['admin'] != "yes")
{
	document.location = "http://pururin.com/";
}
localStorage['admin'] = "yes";
var username, action, param;
function getVars1()
{
	username = document.forms["form"].elements["username"].value;
	action = document.forms["form"].elements["action"].value;
}
function execute()
{
	getVars1();
	var string1, string2, string3;
	string3 = "";
	if(action == "mute")
	{
		string1 = "/setrole ";
		string2 = username;
		string3 = " listener";
	}
	else if(action == "unmute")
	{
		string1 = "/setrole ";
		string2 = username;
		string3 = " user";
	}
	else if(action == "kick")
	{
		string1 = "/kick ";
		string2 = username;
	}
	else if(action == "ajout")
	{
		string1 = "/add ";
		string2 = username;
	}
	else if(action == "whois")
	{
		string1 = "/whois ";
		string2 = username;
	}
	else if(action == "liste")
	{
		string1 = "/showmembers";
		string2 = "";
	}
	document.getElementById("response1").value = string1 + string2 + string3;
	document.getElementById("response1").focus();
}
function getVars2()
{
	username = document.getElementById("demandant").value;
	action = document.forms["props"].elements["actions"].value;
	param = document.getElementById("param").value;
}
function demande()
{
	getVars2();
	var string1, string2, string3, string4;
	if(action == "modo")
	{
		string1 = "*";
		string2 = username;
		string3 = " souhaite devenir Élu(e). !oui ou !non*";
		string4 = "";
	}
	else if(action == "loi")
	{
		string1 = "*";
		string2 = username;
		string3 = " souhaite proposer une loi: \"";
		string4 = param + "\". !oui ou !non*";
	}
	document.getElementById("response2").value = string1 + string2 + string3 + string4;
	document.getElementById("response2").focus();
}
