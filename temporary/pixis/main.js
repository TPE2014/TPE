var save = {"sprite":[],"textures":[],"id":{}};
var degres = 15705;

function newID(table)
{
  return table.length;
}

function add_image(link, name)
{
  var tmpID = newID(save.textures);
  var newTexture = new PIXI.Texture.fromImage(link);
  save.textures[tmpID] = {};
  save.textures[tmpID].id = tmpID;
  save.textures[tmpID].name = name;
  save.textures[tmpID].data = newTexture;
  return tmpID;
}

function setSprite(id)
{
  var texture = save.textures[id].data;
	var newSprite = new PIXI.Sprite(texture);
	save.sprite[id] = {};
	save.sprite[id].id = id;
	save.sprite[id].name = save.textures[id].name;
	save.sprite[id].data = newSprite;
	return id;
}
