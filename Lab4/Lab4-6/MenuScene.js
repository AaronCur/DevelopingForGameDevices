class MenuScene extends Scene
{
  constructor(title)
  {
    super(title);
  }

  render()
  {

    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    document.body.style.background = "#ffffff";
    ctx.font = '50px Arial';
    ctx.fillText(this.title, 10, 50);

  }


}
