//Coded by JesFot
var javascript_pixi_jescode_version = "1.0.0";
var save = {"sprite":[],"textures":[],"id":{}};
var degres_one = 15705;
var temporary = "tmp";
var rotationIndicator = 10000;

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
	var tmpType = newTexture.baseTexture.imageUrl.split(".")[newTexture.baseTexture.imageUrl.split(".").length - 1];
	save.textures[tmpID].type = tmpType;
	save.textures[tmpID].name = name;
	save.textures[tmpID].data = newTexture;
	save.id[name] = tmpID;
	return tmpID;
}

function rename_texture_oldName(oldName, newName)
{
	var tmpID = save.id[oldName];
	rename_texture(tmpID, newName);
}

function rename_texture(id, newName)
{
	var tmpName = save.textures[id].name;
	save.textures[id].name = newName;
	save.id[tmpName] = null;
	save.id[newName] = id;
}

function setup_sprite(textureID, textureName = null)
{
	if (textureName != null)
	{
		textureID = save.id[textureName];
	}
	var texture = save.textures[textureID].data;
	newSprite = new PIXI.Sprite(texture);
	save.sprite[textureID] = {};
	save.sprite[textureID].name = save.textures[textureID].name;
	save.sprite[textureID].id = save.textures[textureID].id;
	save.sprite[textureID].type = save.textures[textureID].type;
	save.sprite[textureID].data = newSprite;
	return textureID;
}

function set_anchor(id, anchorX, anchorY)
{
	save.sprite[id].data.anchor.x = anchorX;
	save.sprite[id].data.anchor.y = anchorY;
}

function reSize(id, sizeX, sizeY, proportionnal = true)
{
	if (proportionnal)
	{
		sizeY = sizeX;
	}
	save.sprite[id].data.scale.x = sizeX;
	save.sprite[id].data.scale.y = sizeY;
}

function rePlace(id, posX, posY, relative = true)
{
	if (relative)
	{
		save.sprite[id].data.x += posX;
		save.sprite[id].data.y += posY;
	}
	else
	{
		save.sprite[id].data.x = posX;
		save.sprite[id].data.y = posY;
	}
}

function visible(id, sys = null)
{
	if (sys == true)
	{
		save.sprite[id].data.visible = true;
		return true;
	}
	else if (sys == false)
	{
		save.sprite[id].data.visible = !true;
		return false;
	}
	else
	{
		save.sprite[id].data.visible = !save.sprite[id].data.visible;
		return save.sprite[id].data.visible;
	}
}

function rotate(id, rotation, relative = true)
{
	var rotate = rotation * rotationIndicator;
	if (relative)
	{
		save.sprite[id].data.rotation += rotate;
	}
	else
	{
		save.sprite[id].data.rotation = rotate;
	}
	return save.sprite[id].data.rotation;
}
