var javascript_Gamepad_Chifumi_Version = "1.0";
var who = "world";

exports.setUp = function(interval)
{
  window.addEventListener("gamepadconnected", function(e) {
  console.log("Contrôleur n°%d connecté : %s. %d boutons, %d axes.",
  e.gamepad.index, e.gamepad.id,
  e.gamepad.buttons.length, e.gamepad.axes.length);
  alert("Gamepad connected!");
  interval = setInterval(function() { searchLoop() }, 10);
});
}

exports.getController = function(index)
{
  var tmp = navigator.getGamepads()[index];
  return tmp;
}