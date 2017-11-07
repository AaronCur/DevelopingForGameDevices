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
      this.sprite = new Sprite(100,100);


  }

  update()
  {
    window.requestAnimationFrame(gameNs.game.update);
  }

  draw()
  {
    this.sprite.draw();
  }

}
