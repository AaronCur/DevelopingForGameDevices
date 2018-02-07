class Player
{
  /**
  *Constructor function that accepts key pressed events and initiates code
  moves square based on which button that's pressed
  @param {number}x assigns squares x position
  @param {number}y assigns squares y position
  @param {number}width assigns height of sqaure
  @param {number}height assigns height of square
  @param {number}colour assigns colour of square
  */
  constructor(x,y,width,height)
  {
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
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
    //var r = Math.floor(Math.random() * 255);
    //var g = Math.floor(Math.random() * 255);
    //var b = Math.floor(Math.random() * 255);
    var r = 10;
    var g = 10;
    var b = 255;

    ctx.fillStyle = rgb(r,g,b);
    // args are x,y,width,height
    ctx.fillRect(this.x, this.y, this.width, this.height);

  }
  updateFromNet(x,y)
  {
    this.x = x;
    this.y = y;
  }

  moveLeft()
  {
    this.x -= 10;
  }

  moveRight()
  {
    this.x += 10;
  }

  moveDown()
  {
    this.y += 10;
  }
  moveUp()
  {
    this.y -= 10;
  }

  checkCollision(e)
  {
    var collides = false;

    if((this.x< e.x + e.width)&&
      (this.x+this.width>e.x)&&
      (this.y+this.height>e.y)&&
      (this.y<e.y+e.height) )
      {
        collides = true;
      }
      return collides;


  }
}
