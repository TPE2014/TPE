var who = "world";

exports.setUp = function(interval)
{
		window.addEventListener("gamepadconnected", function(e) {
		console.log("Contrôleur n°%d connecté : %s. %d boutons, %d axes.",
		e.gamepad.index, e.gamepad.id,
		e.gamepad.buttons.length, e.gamepad.axes.length);
		alert("Gamepad connected!");
		interval = setInterval(function() { gameLoop(context) }, 10); // gameLoop(context) ... exCode : interval = setInterval(function() { searchLoop(context) }, 10);
});
}
exports.getController = function(index)
{
	var tmp = navigator.getGamepads()[index];
	return tmp;
}
