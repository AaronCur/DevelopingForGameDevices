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

  }

  update()
  {
    window.requestAnimationFrame(gameNs.game.update);
  }

  draw()
  {

  }

}
