function Square(x,y,width,height,colour)
{
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.colour = colour;
}

Square.prototype.draw = function()
{
	var canvas = document.getElementById('mycanvas');
	var ctx = canvas.getContext('2d');

	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);

	x = Math.floor(Math.random() *canvas.width);
	y = Math.floor(Math.random()*canvas.height);

	width = 200;
	height = 200;




	ctx.fillStyle = rgb(r,g,b);
	// args are x,y,width,height
	ctx.fillRect(x, y, width, height);
}
