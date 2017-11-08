class Sprite
{
  constructor(context, imageOptions, fps,y)
  {
   this.img= imageOptions.image;
   this.fps = fps;
   this.y = y;
   this.index = 0;
   this.width = imageOptions.width;
   this.height = imageOptions.width;
   this.time = 0;
   this.ticksPerFrame = 1000/this.fps;
  }

  /**
   * function of Square which gives the r g b varialbles an
   * initial value and thrn fills the sqare  colour initially
   * @type {Integer} r -given value of 10
   * @type {Integer} b -given value of 255
   * @type {Integer} g -given value of 10
  *fills the rectanglewith this rgb value at the positon this.x, this.y
   */
   update(deltaTime)
   {
     if(deltaTime != null)
     {
       this.time = this.time + deltaTime;
     }

     var canvas = document.getElementById('mycanvas');
     var ctx = canvas.getContext('2d');

     var image = this.img;
     ctx.drawImage(image, this.index* 110 , 14,100, 122 ,0,this.y, this.width,this.height);

     if(this.ticksPerFrame < this.time)
     {
       this.index = this.index +1;
       if(this.index > 7)
       {
         this.index = 0;
       }
         this.time =0;
     }
   }
}
