var Graphics = require("js/graphics");
var Gamepad = require("js/gamepad");
var Utilities = require("js/utilities");
var interval;
var context = document.getElementById("canv").getContext("2d");
var text = 'Welcome to our lightbike game!';
Graphics.setUp(context, "30pt Verdana", "left", "top", "black");
Graphics.drawText(context, text, 0, 0);
Gamepad.setUp(interval);
function gameLoop(ctx)
{
	Graphics.setUp(ctx, "12pt Source Code Pro", "left", "top", "darkgreen");
	if(navigator.getGamepads().length)
	{
		ctx.clearRect(0, 50, 768, 768);
		var controllerIndex = 0;
		for(var i2=0; i2!=navigator.getGamepads().length;i2++)
		{
			var tmp = Gamepad.getController(i2);
			//console.log(tmp);
			if(tmp)
			{
				var decal = 0;
				//console.log(tmp.buttons.toString());
				Graphics.drawText(ctx, "Controller " + controllerIndex + "(" + tmp.index + ")", 300*controllerIndex, 50);
				for(var i=0;i<tmp.buttons.length;i++)
				{
					//console.log(i);
					Graphics.drawText(ctx, "Button " + i + " state: " + Utilities.boolSConvert(tmp.buttons[i].pressed), 300*controllerIndex, (30*(decal+1)+50));
					decal++;
				}
				for(var i=0;i<tmp.axes.length;i++)
				{
					Graphics.drawText(ctx, "Axe " + i + " state: " + Utilities.turnArrondi(tmp.axes[i]) + " (" + Utilities.troncature(tmp.axes[i], 3) + ")", 300*controllerIndex, (30*(decal+1)+50));
					decal++;
				}
				controllerIndex++;
			}
		}
		controllerIndex = 0;
	}
}
