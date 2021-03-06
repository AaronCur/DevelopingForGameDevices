/**
 * @author Aaron Curry
 * This is an application which uses a scene manager to switch between
 * scenes on mouse click (title screen inherits from scene)
 */

function main()
{
  initCanvas();

  var game = new Game();
  var scene = new TitleScene('Title Scene');
  var sceneTwo = new MenuScene('Main Scene');
  var sceneManager = new SceneManager();

  sceneManager.addScene(scene);
  sceneManager.addScene(sceneTwo);
  sceneManager.goToScene(sceneTwo.title);
  game.init();
  document.addEventListener("click", clickHandler.bind(null, sceneManager));
  draw(sceneManager);


}

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

function draw(sceneManager)
{
  sceneManager.render();
}

function clickHandler(sceneManager, e)
{
  sceneManager.goToNextScene();
  sceneManager.render();
}
