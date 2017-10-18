/**
*helper funtion that constructs game
*/
class Game
{
  constructor()
  {

    console.log("game constructed");


  }

  initWorld()
  {
      console.log("game initialising");

      this.player = new Player(100,100,200,200);
      this.goal = new Goal(500,500,200,200);
    


  }

  update()
  {
    window.requestAnimationFrame(gameNs.game.update);

    if(gameNs.game.player.checkCollision(gameNs.game.goal)===true)
    {
      gameNs.game.goal.alive=false;
      gameNs.game.response();
    }
  }

  response()
  {
    var ctx = document.getElementById("mycanvas").getContext("2d");
    ctx.save();
    ctx.font = "italic 40pt Calibri";
    ctx.textBaeLine = "top";
    ctx.fillText("You win!!!!",200,200);
    ctx.restore;


  }
  draw()
  {
    this.player.draw();
    this.goal.draw();

  }

}
