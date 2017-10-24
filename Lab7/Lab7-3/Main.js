function main()
{
  initCanvas();

  var touchTest = new TouchTest();
  console.log(touchTest.is_touch_device());
}

function initCanvas()
{
  document.addEventListener("touchstart", onTouchStart);
  document.addEventListener("touchmove", onTouchMove, {passive:false});
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
}
function onTouchStart(e)
{
   touches = e.touches;
   // Print out (x,y) co-ords of touch: touches[0].clientX contains
   //  the x position.
   console.log((touches[0].clientX) + ' , '+ (touches[0].clientX));
   startX = touches[0].clientX;
   startY = touches[0].clientY;
}
function onTouchMove(e)
{
 e.preventDefault();
 var canvas = document.getElementById("mycanvas");
 var ctx = canvas.getContext("2d");
 //var touches = e.changedTouches;
 //var touches = e.touches;
 var change = e.changedTouches;
 var endX = change[0].clientX;
 var endY = change[0].clientY;



 ctx.beginPath();
 ctx.moveTo(startX,startY);    //the previous touch
 ctx.lineTo(endX,endY);    //the current touch
 ctx.stroke();

 startX = change[0].clientX;
 startY = change[0].clientY;



}
