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
	document.addEventListener("keydown", keyDownHandler, true);
	var ctx = canvas.getContext('2d');

	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);

	x = 100;
	y = 100;

	width = 200;
	height = 200;





	ctx.fillStyle = rgb(r,g,b);
	// args are x,y,width,height
	//ctx.fillRect(x, y, width, height);
	ctx.fillRect(100, 100, width, height);

	function keyDownHandler (e)
	{
		//code triggered when left arrow is pressed
		if(e.keyCode === 37)
		{
			ctx.clearRect(0,0,canvas.width, canvas.height);
			x = x-10;
			ctx.fillRect(x, y, width, height);
			console.log("Key pressed");
		}
	//code triggered when UP arrow is pressed

		if(e.keyCode === 38)
		{
			ctx.clearRect(0,0,canvas.width, canvas.height);
			y = y-10;
			ctx.fillRect(x, y, width, height);
			console.log("Key pressed");
		}
		//Code is triggered when right arrow is pressed
		if(e.keyCode === 39)
		{
			ctx.clearRect(0,0,canvas.width, canvas.height);
			x = x+10;
			ctx.fillRect(x, y, width, height);
			console.log("Key pressed");
		}
		if(e.keyCode === 40)
		{
			ctx.clearRect(0,0,canvas.width, canvas.height);
			y = y+10;
			ctx.fillRect(x, y, width, height);
			console.log("Key pressed");
		}

	}

}
