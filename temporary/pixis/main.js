var save = {"sprite":[],"textures":[],"id":{}};
var degres = 15705;

function newID(table)
{
  return table.length;
}

function add_image(link)
{
  var tmpID = newID(save.textures);
  var newTexture = new PIXI.Texture.fromImage(link);
  save.textures[tmpID] = {};
  save.textures[tmpID].id = tmpID;
  save.textures[tmpID].name = name;
  save.textures[tmpID].data = newTexture;
  return tmpID;
}
