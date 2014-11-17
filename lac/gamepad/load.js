//commantaires
var toBody = '<canvas id="canv" width="768" height="768">It seems that your browser doesn\'t know what canvas are. Please update, or use a recent web browser, like Firefox Nightly</canvas>';

var passw = document.getElementById('password').value;
document.getElementById('password').value = "BAKA !";
if (passw != x)
{
  passw = x;
}

function log()
{
  var pass = document.getElementById('passt').value;
  if (pass == passw)
  {
    return true;
  }
  else
  {
    return false;
  }
}
