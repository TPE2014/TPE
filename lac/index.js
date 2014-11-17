function redirect(url)
{
  document.location.href = url;
}

var fall = "nop.html";
var goback = function() {redirect("index.html") };

function logon()
{
  var pass = document.getElementById('password').value;
  var passurl = "win/" + pass + ".html";
}
