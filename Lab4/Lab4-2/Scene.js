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
    var canvas = document.getElementById("mycanvas");
    var ctx = mycanvas.getContext('2d');
    ctx.font = '48px serif';
    ctx.fillText(this.title, 10, 50);
  }

}
