/**
 * @author Aaron Curry
 * This is an application which uses a scene manager to switch between
 * scenes on mouse click (title screen inherits from scene)
 */
 /**
 *Initiialises the canvas
 *Initialises all the scenes along with the scene manager
 *Adds scenes to the scene manager.
 *Event Handler to detect mousclick is defined
 */
function main()
{
  initCanvas();

  var game = new Game();
  var scene = new MenuScene('Menu');
  var sceneTwo = new PlayScene('Playing');
  var sceneThree = new GameOverScene('Game Over');
  var sceneManager = new SceneManager();

  sceneManager.addScene(scene);
  sceneManager.addScene(sceneTwo);
  sceneManager.addScene(sceneThree);
  sceneManager.goToScene(scene.title);
  game.init();
  document.addEventListener("click", clickHandler.bind(null, sceneManager));
  draw(sceneManager);


}
/**
 * Initialises the canvas - the drawing surface. The canvas
 * is added to the document. When a HTML document is loaded into a
 * browser, it becomes a document object. This document object is
 * the root node of the HTML document and is considered the 'owner' of all other
 * nodes such as forms, buttons, the canvas etc.
 */
function initCanvas()
{
  // Use the document object to create a new element canvas.
 var canvas = document.createElement("canvas");
 // Assign the canvas an id so we can reference it elsewhere.
 canvas.id = 'mycanvas';
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 // We want this to be a 2D canvas.
 var ctx = canvas.getContext("2d");
 // Adds the canvas element to the document.
 document.body.appendChild(canvas);
}
/**
 * function that calls the draw method in the scene manager
 * Example: if the current scene is 'MenuScene' the draw method is called and the text 'Menu'
 * is displayed on the screen
 * @param {object} sceneManager - passes in the scene manager to access render() function
 */
function draw(sceneManager)
{
  sceneManager.render();
}
/**
 * function that listens for mouse click input and executes related code
 * Example: if the left click is pressed the scenmanager will assign the next scene to
 * current scene and the next scene will be displayed
 * @param {object} sceneManager - passes in the scene manager to access goToNextScene()
 * and render() functions.
 * @param {events} e listener
* After a keypress has been detected the fuction calls the square.draw function updating
*the square position on screen
 */
function clickHandler(sceneManager, e)
{
  sceneManager.goToNextScene();
  sceneManager.render();
}
