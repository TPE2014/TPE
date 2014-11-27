var javascript_Utilities_Chifumi_Version = "1.0";
var who = "world";

exports.boolSConvert = function(inp)
{
  if(inp)
  {
    return "true";
  }
  else
  {
    return "false";
  }
}

exports.turnArrondi = function(inp)
{
  return Math.round(inp);
}

exports.troncature = function(inp, dec)
{
  return inp.toFixed(dec);
}

exports.getjavascript_Utilities_Chifumi_Version = function()
{
  return javascript_Utilities_Chifumi_Version;
}
