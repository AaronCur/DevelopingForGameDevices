//document.addEventListener("keydown", keyDownHandler);

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
	//document.addEventListener("keydown", keyDownHandler, true);
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0,0,canvas.width, canvas.height);
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);

	x = this.x;
	y = this.y;

	width = 200;
	height = 200;

	ctx.fillStyle = rgb(r,g,b);
	// args are x,y,width,height
	//ctx.fillRect(x, y, width, height);
	ctx.fillRect(x, y, width, height);



}
