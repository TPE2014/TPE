var javascript_IA_lightbike_Version = "3.0";
var fileName = "ReIA_test.js";

var direction = [{
	"name":"left",
	"id":0
},{
	"name":"right",
	"id":1
},{
	"name":"up",
	"id":2
},{
	"name":"down",
	"id":3
},{
	"name":"noDir",
	"id":4
}];

var IA = function(_name, _id)
{
	this.name = _name;
	this.id = _id;
	this.pos = [-1, -1];
	this.lastPos = [-1, -1];
	
	this.getDirection = function()
	{
		if(this.pos[0] == this.lastPos[0] - 1)
		{
			return 0;
		}
		if(this.pos[0] == this.lastPos[0] + 1)
		{
			return 1;
		}
		if(this.pos[1] == this.lastPos[1] - 1)
		{
			return 2;
		}
		if(this.pos[1] == this.lastPos[1] + 1)
		{
			return 3;
		}
		return 4;
	}
	
	this.move = function(directionID, map)
	{
		movePlayer(direction[directionID], this.id, map);
	}
}

function calcZone(startX, startY, startDir, map)
{
	//StartDir: 0->up, 1->down, 2->left, 3->right;
	if(startDir == 0)
	{
		var x = startX;
		var y = startY - 1;
		var total = 1;
		var subtotal = 0;
		
		if(testforWall(x, y, map) || testforWall(x, y, map) == "player")
		{
			return 0;
		}
		
		for(var i = y; i > 0; i--)
		{
			var stop = false;
			while(!stop)
			{
				if(x == 0 || x == map.length)
				{
					stop = true;
					x++;
				}
				x--;
				if(testforWall(x, i, map) == false)
				{
					subtotal++;
				}
				else
				{
					stop = true;
					x = startX;
					total += subtotal;
				}
			}
			stop = false;
			while(!stop)
			{
				if(x == 0 || x == map.length)
				{
					stop = true;
					x++;
				}
				x++;
				if(testforWall(x, i, map) == false)
				{
					subtotal++;
				}
				else
				{
					stop = true;
					x = startX;
					total += subtotal;
				}
			}
		}
		return total;
	}
	if(startDir == 1)
	{
		var x = startX;
		var y = startY + 1;
		var total = 1;
		var subtotal = 0;
		
		if(testforWall(x, y, map) || testforWall(x, y, map) == "player")
		{
			return 0;
		}
		
		for(var i = y; i < map[0].length; i++)
		{
			var stop = false;
			while(!stop)
			{
				if(x == 0 || x == map.length)
				{
					stop = true;
					x++;
				}
				x--;
				if(testforWall(x, i, map) == false)
				{
					subtotal++;
				}
				else
				{
					stop = true;
					x = startX;
					total += subtotal;
				}
			}
			stop = false;
			while(!stop)
			{
				if(x == 0 || x == map.length)
				{
					stop = true;
					x++;
				}
				x++;
				if(testforWall(x, i, map) == false)
				{
					subtotal++;
				}
				else
				{
					stop = true;
					x = startX;
					total += subtotal;
				}
			}
		}
		return total;
	}
	if(startDir == 3)
	{
		var x = startX + 1;
		var y = startY;
		var total = 1;
		var subtotal = 0;
		
		if(testforWall(x, y, map) || testforWall(x, y, map) == "player")
		{
			return 0;
		}
		
		for(var i = x; i < map.length; i++)
		{
			var stop = false;
			while(!stop)
			{
				if(y == 0 || y == map.length)
				{
					stop = true;
					y++;
				}
				y--;
				if(testforWall(i, y, map) == false)
				{
					subtotal++;
				}
				else
				{
					stop = true;
					y = startY;
					total += subtotal;
				}
			}
			stop = false;
			while(!stop)
			{
				if(y == 0 || y == map.length)
				{
					stop = true;
					y++;
				}
				y++;
				if(testforWall(i, y, map) == false)
				{
					subtotal++;
				}
				else
				{
					stop = true;
					y = startY;
					total += subtotal;
				}
			}
		}
		return total;
	}
	if(startDir == 2)
	{
		var x = startX - 1;
		var y = startY;
		var total = 1;
		var subtotal = 0;
		
		if(testforWall(x, y, map) || testforWall(x, y, map) == "player")
		{
			return 0;
		}
		
		for(var i = x; i > 0; i--)
		{
			var stop = false;
			while(!stop)
			{
				if(y == 0 || y == map.length)
				{
					stop = true;
					y++;
				}
				y--;
				if(testforWall(i, y, map) == false)
				{
					subtotal++;
				}
				else
				{
					stop = true;
					y = startY;
					total += subtotal;
				}
			}
			stop = false;
			while(!stop)
			{
				if(y == 0 || y == map.length)
				{
					stop = true;
					y++;
				}
				y++;
				if(testforWall(i, y, map) == false)
				{
					subtotal++;
				}
				else
				{
					stop = true;
					y = startY;
					total += subtotal;
				}
			}
		}
		return total;
	}
}
