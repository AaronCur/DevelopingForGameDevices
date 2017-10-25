/**
 * @fileoverview
 * @author Aaron Curry
 */
//
var gameNs = {};
/**
*Initiialises the canvas
*Creates a touchTest object
*/
function main()
{
  initCanvas();

  var touchTest = new TouchTest();
  console.log(touchTest.is_touch_device());
}

/**
 * Initialises the canvas - the drawing surface. The canvas
 * is added to the document. When a HTML document is loaded into a
 * browser, it becomes a document object. This document object is
 * the root node of the HTML document and is considered the 'owner' of all other
 * nodes such as forms, buttons, the canvas etc.
 *
 * defines the handlers for touchmove(passive:false to stop scrolling),touchend
  * and touchstart(binded canvas so it doesnt haveto be declared again)
 */
function initCanvas()
{
//Use the document object to create a new element canvas.
 var canvas = document.createElement("canvas");
 //Assign the canvas an id so we can reference it elsewhere.
 canvas.id = 'mycanvas';
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 //We want this to be a 2D canvas.
 var ctx = canvas.getContext("2d");
 //Adds the canvas element to the document.
 document.body.appendChild(canvas);
 document.addEventListener("touchstart", onTouchStart.bind(null,canvas));
 document.addEventListener("touchmove", onTouchMove, {passive:false});
 document.addEventListener("touchend", onTouchEnd);

}
/**
 * function that handles all information when the first touch is detected
 * sets the first touch position and assigns this to a variable so it can be
 * accessed for finding the length of a line
 * the two as the touch position moves
 * @param {Param} canvas - passes in the canvas so it doesnt have to be declared again
 * @param {Param} e - passes in touch start handler
 */
function onTouchStart(canvas, e)
{
   touches = e.touches;
   // Print out (x,y) co-ords of touch: touches[0].clientX contains
   //  the x position.
   startX = touches[0].clientX;
   startY = touches[0].clientY;

   startPosX = startX;
   startPosY = startY;

   gameNs.time1 = new Date().getTime();
   var ctx = canvas.getContext("2d");
}
/**
 * function that handles the start and end points to draw a line between
 * the two as the touch position moves
 * @param {Param} e - passes in touch move handler
 */
function onTouchMove(e)
{
 e.preventDefault();
 var canvas = document.getElementById("mycanvas");
 var ctx = canvas.getContext("2d");
 //var touches = e.changedTouches;
 //var touches = e.touches;
 var change = e.changedTouches;
 endX = change[0].clientX;
 endY = change[0].clientY;

 ctx.beginPath();
 ctx.moveTo(startX,startY);    //the previous touch
 ctx.lineTo(endX,endY);    //the current touch
 ctx.stroke();

 startX = change[0].clientX;
 startY = change[0].clientY;

 endPosX = endX;
 endPosY = endY;
}
/**
 * function that calculates how long the line is between the first startpoint
 * and the last enpoint.
 * Then calculates if a line was a swipe or a drawing depending on the duration
 * of the tocuh and the length of the line
 * the two as the touch position moves
 * @param {Param} e - passes in touch end handler
 */
function onTouchEnd(e)
{
  var canvas = document.getElementById("mycanvas");
  var ctx = canvas.getContext("2d");

  var time2 = new Date().getTime();
  var elapsedTime = time2 - gameNs.time1;

  var a = startPosX - endPosX;
  var b = startPosY - endPosY;

  var distBetween = Math.sqrt(a *a + b * b);

  if(elapsedTime  > 0 && elapsedTime <= 200 && distBetween > 150)
  {
    console.log("Swipe");
    ctx.clearRect(0,0,canvas.width, canvas.height);

  }

}
