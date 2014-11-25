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
