function main()
{
  initCanvas();

  var touchTest = new TouchTest();
  console.log(touchTest.is_touch_device());
  document.addEventListener("touchstart", onTouchStart);
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
function onTouchStart(e)
{
   var touches = e.touches;
   // Print out (x,y) co-ords of touch: touches[0].clientX contains
   //  the x position.
   console.log((touches[0].clientX) + ' , '+ (touches[0].clientX));
}
