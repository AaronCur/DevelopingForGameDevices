

//this listens for keydown events
//document.addEventListener("keydown", keyDownHandler);

function main()
{
	var square = new Square(0,0,0,0,0);
	initCanvas();
	console.log("Hello world");

	for (var i = 0; i < 2; i++) {
		square.draw();
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
window.addEventListener("keydown", function(e) {
    // Space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


//function keyDownHandler (e)
//{
//code triggered when UP arrow is pressed
	//if(e.keyCode === 38)
	//{
		//square[0].x +=5;
		//console.log("Pressed")
	//}
//
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
