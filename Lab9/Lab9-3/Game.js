/**
*helper funtion that constructs game
*/
class Game
{
  constructor()
  {

    console.log("game constructed");
    this.sprite = new Sprite(100,100);

  }

  initWorld()
  {
      console.log("game initialising");



  }

  update()
  {

    //this.sprite.update();
  //  this.sprite.draw();
  }

  draw()
  {
    window.requestAnimationFrame(gameNs.game.draw);
    this.sprite.draw();

  }

}
