/**
 * Constructor function , creates a square with parameters which are passed in on construction
 * initial value and thrn fills the sqare  colour initially
 * @param {Integer} x -gives the square its initial x position
 * @param {Integer} y -gives the square its initial y position
 * @param {Integer} width -gives the square its initial width
 *@param {Integer} height -gives the square its initial height
 */
function Square(x,y,width,height)
{
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}
/**
 * Prototype function of Square which gives the r g b varialbles an
 * initial value and thrn fills the sqare  colour initially
 * @type {Integer} r -given value of 10
 * @type {Integer} b -given value of 255
 * @type {Integer} g -given value of 10
*fills the rectanglewith this rgb value at the positon this.x, this.y
 */
Square.prototype.draw = function()
{
	var canvas = document.getElementById('mycanvas');
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0,0,canvas.width, canvas.height);
	//var r = Math.floor(Math.random() * 255);
	//var g = Math.floor(Math.random() * 255);
	//var b = Math.floor(Math.random() * 255);
	var r = 10;
	var g = 10;
	var b = 255;

	ctx.fillStyle = rgb(r,g,b);
	// args are x,y,width,height
	ctx.fillRect(this.x, this.y, this.width, this.height);



}
