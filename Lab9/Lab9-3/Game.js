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
    width: 280,
    height: 40,
    image: this.img
}, 100, 100);

    console.log("game constructed");
    this.sprite = new Sprite(100,100);

  }

  initWorld()
  {
      console.log("game initialising");



  }

  update()
  {
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);
    gameNs.mySpriteObject.update();

    window.requestAnimationFrame(gameNs.game.update);
  }

  draw()
  {

    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);

  }

}
