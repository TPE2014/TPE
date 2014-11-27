//JS Code Chifumi by lacaulac and JësFot
var javascrpit_Chifumi_Version = "2.7.3";
var prev = []; //Ancien jets
var wins = []; //Ancien win du joueur
var index = 0;
var winerEngaged = 0;
var victoires = 0;
var defaites = 0;
var mnuls = 0;
var bourinEngaged = 0;
var bourinEngaged2 = 0;
var sexe;
var tmpGamepad;
var interval;
var Gamepad = require("gamepad");
var Utilities = require("utilities");
//function play(choix);
Gamepad.setUp(interval);
function searchLoop()
{
	// Button 14-> 1, 12->2, 15->3
	if(navigator.getGamepads().length)
	{
		var controllerIndex = 0;
		for(var i2=0; i2!=navigator.getGamepads().length;i2++)
		{
			tmpGamepad = Gamepad.getController(i2);
			//console.log(tmp);
		}
	}
}
// Coups:
// 1: Pierre
// 2: Feuille
// 3: Ciseaux
function detectButton(tmp)
{
	if(tmp)
	{
		if (tmp.buttons[14].pressed)
		{
			console.log("Button 14 pressed.");
			play(1);
			return true;
		}
		else if (tmp.buttons[12].pressed)
		{
			console.log("Button 12 pressed.");
			play(2);
			return true;
		}
		else if (tmp.buttons[15].pressed)
		{
			console.log("Button 15 pressed.");
			play(3);
			return true;
		}
	}
}
function detectBBoucle(tmp)
{
	interval = setInterval(function() { if(detectButton(tmp)){return true;} }, 1000);
	return interval;
}

function init()
{
	sexe = prompt("Êtes vous un homme? (1/0)");
}
function lastVar(arr)
{
	return arr[arr.length-1];
}
function lastVar2(arr)
{
	return arr[arr.length-2];
}
function lastVar3(arr)
{
	return arr[arr.length-3];
}
function lastVar4(arr)
{
	return arr[arr.length-4];
}
function lastVar5(arr)
{
	return arr[arr.length-5];
}
function lastVar6(arr)
{
	return arr[arr.length-6];
}
function lastVar7(arr)
{
	return arr[arr.length-7];
}
function lastVar8(arr)
{
	return arr[arr.length-8];
}
function lastVar9(arr)
{
	return arr[arr.length-9];
}
function getLast(var1, var2)// Nous donne le troisieme nombre (1, 2, 3)
{
	if(var1 == var2)
	{
		console.log("685");
	}
	else if(var1 < 1 || var1 > 3)
	{
		console.log("684");
	}
	else if(var2 < 1 || var2 >3)
	{
		console.log("683");
	}

	if(var1 == 1 || var2 == 1)
	{
		if(var2 == 2 || var1 == 2)
		{
			return 3;
		}
		else
		{
			return 2;
		}
	}
	else if(var1 == 2 || var2 == 2)
	{
		if(var2 == 1 || var1 == 1)
		{
			return 3;
		}
		else
		{
			return 1;
		}
	}
	else
	{
		if(var2 == 2 || var1 == 2)
		{
			return 1;
		}
		else
		{
			return 2;
		}
	}
	console.log("NaN");
}
function rdm(min, max)
{
	return Math.floor((Math.random() * max) + min);
}
function isDefined(val)
{
	var typeofval = typeof val;
	if(typeofval != "undefined")
	{
		return true;
	}
	else
	{
		return false;
	}
}
function iaShot()
{
	play(chooseShot());
}
function chooseShot(choose = 0)//Here comes the AI
{
	var baseTest = isDefined(lastVar(prev)) && isDefined(lastVar(prev)) && isDefined(lastVar(prev));
	var testAllerRetour1 = ((lastVar(prev) != lastVar2(prev)) && (lastVar2(prev) != lastVar3(prev))) && (lastVar3(prev) != lastVar(prev));
	var testAllerRetour2 = (((lastVar2(prev) != lastVar3(prev)) && (lastVar3(prev) != lastVar4(prev))) && (lastVar4(prev) != lastVar2(prev))) && (lastVar(prev) == lastVar3(prev) || lastVar2(prev) == lastVar4(prev));
	var testAllerRetour3 = (lastVar4(prev) == lastVar3(prev) && lastVar2(prev) == lastVar(prev) && lastVar3(prev) != lastVar2(prev));
	var testAllerRetour4 = (lastVar6(prev) == lastVar5(prev) && lastVar5(prev) == lastVar2(prev) && lastVar5(prev) != lastVar3(prev));
	//var testAllerRetour5 = (lastVar6(prev) == lastVar5(prev) && lastVar5(prev) != lastVar2(prev) && lastVar5(prev) != lastVar3(prev));
	var test5Wins = (lastVar(wins) == lastVar2(wins) && lastVar(wins) == lastVar3(wins) && lastVar(wins) == lastVar4(wins) && lastVar(wins) == lastVar5(wins) && isDefined(lastVar5(wins)) && lastVar(wins) == true);
	var test3Wins = (lastVar(wins) == lastVar2(wins) && lastVar(wins) == lastVar3(wins) && isDefined(lastVar3(wins)) && lastVar(wins) == true);
	if(index == 0) // Premier coup
	{
	console.log("1");
	index = 1;
		if(sexe == 1)
		{
			return response(1);
		}
		else if(sexe == 42)
		{
			alert("10.255.4.141");
			console.log("10.255.4.141");
		}
		else
		{
			return response(3);
		}
	}
	else if(test3Wins || winerEngaged >= 1)
	{
		winerEngaged++;
		if(winerEngaged >= 3){ winerEngaged = 0; }
		console.log("Cheat");
		return response(choose);
	}
	else if(testAllerRetour3 && isDefined(lastVar4(prev)) || bourinEngaged2 == 30)
	{
		if(bourinEngaged2 == 30)
		{
			bourinEngaged2 = 0;
		}
		else
		{
			bourinEngaged2 = 30;
		}
		if (testAllerRetour4 && isDefined(lastVar6(prev)))// 33 22 33 => 2
		{
		console.log("6");
			return response(lastVar3(prev));
		}
		/*else if(testAllerRetour5 || isDefined(lastVar6(prev)))
		{
		console.log("7")
			return response(lastVar6(prev));
		}*/
		else // 33 22 => 1
		{
		console.log("5");
			return response(getLast(lastVar(prev), lastVar3(prev)));
		}
		console.log("420");
	}
	else if(lastVar(prev) == lastVar2(prev) && isDefined(lastVar2(prev)))
	{
	console.log("2");
		bourinEngaged++;
		var tmp = rdm(1, 4);
		if(tmp == 1)
		{
			return rdmShot();
		}
		else if(tmp == 2 && isDefined(lastVar3(prev)))
		{
			return response(lastVar3(prev));
		}
		else if(tmp == 3 && isDefined(lastVar4(prev)))
		{
			return response(lastVar4(prev));
		}
		else
		{
			return response(lastVar(prev));
		}
	}
	else if(!testAllerRetour2 && isDefined(lastVar3(prev)))
	{
	console.log("3");
		return response(lastVar3(prev));
	}
	else if(testAllerRetour2 && isDefined(lastVar4(prev)))
	{
	console.log("4");
		return response(lastVar4(prev));
	}
	console.log("lol");
	bourinEngaged = 0;
	return rdmShot();
}
function response(nmb)
{
	if(nmb == 1)
	{
		return 2;
	}
	if(nmb == 2)
	{
		return 3;
	}
	if(nmb == 3)
	{
		return 1;
	}
	else
	{
		return "Spock";
	}
}
function rdmShot()
{
	var jet = rdm(0, 1000);
	if(jet < 354)//La personne devrait choisir pierre, on joue feuille
	{
		return 2;
	}
	else if(jet < 704)//La personne devrait choisir ciseaux, on joue pierre
	{
		return 1;
	}
	else//La personne devrait choisir feuille, on joue ciseaux
	{
		return 3;
	}
}
function transform(nmb)
{
	if(nmb == 1)
	{
		return "la pierre";
	}
	if(nmb == 2)
	{
		return "la feuille";
	}
	if(nmb == 3)
	{
		return "les ciseaux";
	}
	else
	{
		return "Spock";
	}
}
function endRound(win, chPlayer, chAI)//win => Si le joueur a gagné
{
	var ret;
	if(win)
	{
		wins.push(win);
		ret = "Vous avez gagné avec " + transform(chPlayer) + ", contre " + transform(chAI) + "!";
		victoires++;
	}
	else
	{
		wins.push(win);
		ret = "Vous avez perdu avec " + transform(chPlayer) + ", contre " + transform(chAI) + "!";
		defaites++;
	}
	return ret;
}
function display(ret)
{
	var divOut = document.getElementById("sortie");
	var divVictoires = document.getElementById("victoires");
	var divDefaites = document.getElementById("defaites");
	var divDraw = document.getElementById("draw");
	divOut.innerHTML = ret + "<br/>" + divOut.innerHTML
	divVictoires.innerHTML = victoires;
	divDefaites.innerHTML = defaites;
	divDraw.innerHTML = mnuls;
}
function play(choix)
{
	var ret;
	var aiShot = chooseShot(choix);
	prev.push(choix);
	if(choix == aiShot)//Si l'IA et le joueur ont choisi le même signe
	{
		wins.push(null);
		ret = "Match nul! Vous avez tous les deux choisi " + transform(choix) + "!";
		mnuls++;
	}
	else//Sinon
	{
		if(choix == 1)//Si le joueur a choisi la pierre
		{
			if(aiShot == 2)//Si l'IA a choisi la feuille
			{
				ret = endRound(false, choix, aiShot);
			}
			if(aiShot == 3)//Si l'IA a choisi les ciseaux
			{
				ret = endRound(true, choix, aiShot);
			}
		}
		if(choix == 2)//Si le joueur a choisi la feuille
		{
			if(aiShot == 3)//Si l'IA a choisi les ciseaux
			{
				ret = endRound(false, choix, aiShot);
			}
			if(aiShot == 1)//Si l'IA a choisi la pierre
			{
				ret = endRound(true, choix, aiShot);
			}
		}
		if(choix == 3)//Si le joueur a choisi les ciseaux
		{
			if(aiShot == 1)//Si l'IA a choisi la pierre
			{
				ret = endRound(false, choix, aiShot);
			}
			if(aiShot == 2)//Si l'IA a choisi la feuille
			{
				ret = endRound(true, choix, aiShot);
			}
		}
	}
	display(ret);
	aiShot = null;
	ret = null;
}
init();
function playFor(choix, nb, subdivide)
{
	for(var i=0; i <subdivide; i++)
	{
		subLoop(choix, nb/subdivide);
		alert(i + "/" + subdivide);
	}
}
function subLoop(choix, nb)
{
	for(var i=0; i <nb; i++)
	{
		play(choix);
	}
}
