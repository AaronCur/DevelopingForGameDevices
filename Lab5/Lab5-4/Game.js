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
  }


  draw()
  {
    this.player.draw();
    this.goal.draw();
  
  }

}
