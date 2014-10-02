var prev = []; //Ancien jets
var index = 0;
var victoires = 0;
var defaites = 0;
var mnuls = 0;
var sexe;
// Coups:
// 1: Pierre
// 2: Feuille
// 3: Ciseaux
function init()
{
	sexe = prompt("Êtes vous un homme? (1/0)");
}
function rdm(min, max)
{
	return Math.floor((Math.random() * max) + min);
}
function chooseShot()//Here comes the AI
{
	if(index == 0) // Premier coup
	{
		if(sexe == 1)
		{
			index = 1;
			return response(1);
		}
		else
		{
			index = 1;
			return response(3);
		}
	}
	else
	{
		return rdmShot();
	}
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
		ret = "Vous avez gagné avec " + transform(chPlayer) + ", contre " + transform(chAI) + "!";
		victoires++;
	}
	else
	{
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
	var aiShot = chooseShot();
	if(choix == aiShot)//Si l'IA et le joueur ont choisi le même signe
	{
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
}
init();
