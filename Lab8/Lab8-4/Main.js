/**
 * @fileoverview
 * @author Aaron Curry
 *Start Date:31/10/2017
 *End Date: 03/11/2017
 */
//
var gameNs = {};
/**
*Initiialises the canvas
*Creates a touchTest object
*Creates a soundmanager object
*Loads all the soundfiles
*Creates each of the divs
*/
function main()
{
  initCanvas();

  var touchTest = new TouchTest();
  console.log(touchTest.is_touch_device());

  gameNs.soundManager = new SoundManager();
  gameNs.soundManager.init();
  gameNs.soundManager.loadSoundFile("Concentrate", "Sounds/Concentrate.mp3");
  gameNs.soundManager.loadSoundFile("BadEnglish", "Sounds/EnglishBad.mp3");
  gameNs.soundManager.loadSoundFile("QuickMaths", "Sounds/QuickMaths.mp3");
  gameNs.soundManager.loadSoundFile("LearnEnglish", "Sounds/StudyThat.mp3");
  gameNs.soundManager.loadSoundFile("NotHot", "Sounds/NotHot.mp3");
  gameNs.count = 0;
  createDiv("Concentrate");
  createDiv("BadEnglish");
  createDiv("QuickMaths");
  createDiv("LearnEnglish");
  createDiv("NotHot");


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

}
/**
*helper function that creates each div for the soundboard and its associatrd image
*depending on its divId
* @param {string} divId takes the div Id
*/
function createDiv(divId)
{
  var timer;
  var Counter = 0;

  var div = document.createElement("div");
  div.id = divId;
  if(div.id === "Concentrate")
  {
    div.innerHTML = "<img src=\'Images/Concentrate.jpg\'>";
    this.div = div;
  }
  else if(div.id === "BadEnglish")
  {
    div.innerHTML = "<img src=\'Images/BadEnglish.jpg\'>";
  }
  else if (div.id === "QuickMaths")
  {
    div.innerHTML = "<img src=\'Images/QuickMaths.jpg\'>";
  }
  else if (div.id === "LearnEnglish")
  {
    div.innerHTML = "<img src=\'Images/LearnEnglish.jpg\'>";
  }
  else if (div.id === "NotHot")
  {
    div.innerHTML = "<img src=\'Images/NotHot.jpg\'>";
  }
  div.addEventListener("touchstart", onTouchStart);
  document.body.appendChild(div);

}

/**
 * function that handles all information when the first touch is detected
 * sets the first touch position and assigns this to a variable so it can be accessed
 * it then checks what div was pressed by getting the filename from the url
 * triggering the sound related to each div
 * @param {Param} e - passes in touch start handler
 */
function onTouchStart(e)
{

  var currentElement = e.target;
	var parentDiv = currentElement.parentNode;
  console.log("Div id = " + parentDiv.id);
  console.log("Image URL = " + currentElement.src);

  var parentDiv = currentElement.parentNode;
  var fullPath = currentElement.src;
  console.log("Current element" + fullPath);

  if (fullPath !== undefined)
  {
    console.log(gameNs.count);
  	var index = fullPath.lastIndexOf("/");
  	var filename = fullPath;
  	if(index !== -1)
  	{
      gameNs.count += 1;

  	   filename = fullPath.substring(index+1,fullPath.length);
  	   if(filename === "Concentrate.jpg" && gameNs.count <2)
       {
         gameNs.soundManager.playSound("Concentrate", false, 1);

       }
       else if (filename === "Concentrate.jpg" && gameNs.count == 2)
       {
         gameNs.soundManager.playSound("Concentrate", true, 0.2);
         div.style.background = "Red";
       }
       else if (filename === "Concentrate.jpg" && gameNs.count == 3)
       {
         div.style.background = "Teal";
         gameNs.soundManager.Stop();
         gameNs.count = 0;

       }
       else if (filename === "BadEnglish.jpg")
       {
         gameNs.soundManager.playSound("BadEnglish", false, 1);
       }
       else if (filename === "QuickMaths.jpg")
       {
         gameNs.soundManager.playSound("QuickMaths", false, 1);
       }
       else if (filename === "LearnEnglish.jpg")
       {
         gameNs.soundManager.playSound("LearnEnglish", false, 1);
       }
       else if (filename === "NotHot.jpg")
       {
         gameNs.soundManager.playSound("NotHot", false, 1);
       }
     }
    }

}
