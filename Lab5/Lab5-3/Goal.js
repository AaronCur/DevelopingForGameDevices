class Goal
{

  constructor(x,y,width,height)
  {
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
  }

  draw()
  {

    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');

    ctx.strokeRect(this.x,this.y,this.width,this.height);
  }

}
