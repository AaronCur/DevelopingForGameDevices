/**
*helper funtion that constructs game
*/
var gameNs = {};
class Game
{
  constructor()
  {
    this.img=new Image();
    this.img.src = "Images/PlayerSS.png";
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    gameNs.mySpriteObject;
    gameNs.mySpriteObject = new Sprite(ctx, {
    width: 100,
    height: 222,
    image: this.img
}, 100, 100);

  gameNs.mySpriteObject1 = new Sprite(ctx, {
    width: 100,
    height: 222,
    image: this.img
  }, 25, 300);

    console.log("game constructed");
    this.sprite = new Sprite(100,100);

  }

  initWorld() //prints out “Initialising game world”
  {
    console.log("Initialising game world");
      gameNs.previousTime = Date.now();	// previousTime is initially 0

  }

  update()
  {
    var now = Date.now();
    var deltaTime = (now - gameNs.previousTime);
    gameNs.previousTime = now;	// previousTime is initially 0
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);
    gameNs.mySpriteObject.update(deltaTime);
    gameNs.mySpriteObject1.update(deltaTime);

    window.requestAnimationFrame(gameNs.game.update);
  }

  draw()
  {

    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);

  }

}
