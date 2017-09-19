function main()
{
	initCanvas();

	console.log("Hello world");

	for (var i = 0; i < 200; i++) {
		draw();
	}

}

function initCanvas()
{
	//Use the document object to create a new element canvas.
	var canvas = document.createElement("canvas");
	//Assign the canvas an id so we can reference it elsewhere.
	canvas.id = 'mycanvas';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	//We want this to be a 2D canvas.
	var ctx = canvas.getContext("2D");
	//Adds the canvas element to the document.
	document.body.appendChild(canvas);
}

function clamp(value,min,max)
{
	if(max<min) {
		var temp = min;
		min = max;
		max = temp;
	}
	return Math.max(min, Math.min(value, max));
}

function rgb(r, g, b)
{
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

function draw()
{
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);

	var canvas = document.getElementById('mycanvas');
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = rgb(r,g,b);
	// args are x,y,width,height
	ctx.fillRect(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 200, 200);
}
