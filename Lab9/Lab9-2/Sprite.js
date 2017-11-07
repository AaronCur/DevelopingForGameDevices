class Sprite
{

  constructor(x,y)
  {
   this.img=new Image();
   this.img.src = "Images/Player.gif";
   this.x = x;
   this.y = y;
  }

  /**
   * function of Square which gives the r g b varialbles an
   * initial value and thrn fills the sqare  colour initially
   * @type {Integer} r -given value of 10
   * @type {Integer} b -given value of 255
   * @type {Integer} g -given value of 10
  *fills the rectanglewith this rgb value at the positon this.x, this.y
   */
   draw()
  {
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width, canvas.height);
    this.img.onload = function() {
     console.log("Image 1 ready to append");
     ctx.drawImage(this,this.x,this.y);
   };



  }


}
