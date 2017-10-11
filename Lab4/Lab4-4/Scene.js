
class Scene
{
  constructor(title)
  {
    this.title = title;
  }

  start()
  {

  }

  stop()
  {

  }

  render()
  {
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    document.body.style.background = "#00ff00 ";
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    ctx.font = '48px serif';
    ctx.fillText(this.title, 10, 50);

  }
}
