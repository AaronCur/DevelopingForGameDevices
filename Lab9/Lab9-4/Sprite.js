class Sprite
{
  /**
  *helper funtion that constructs the sprite object assigning the passed in values
  *can access cvalues by using imageOptions. also sets up a ticksPerFrame and this.time
  *variables to be used in the update function for controlling animation settings
  *can also set ptoperties of the sprite objects, width, height, image, its y position and fps
  *@param {Canvas} context - passes in the deltaTime value from the game class
  *@param {Image} imageOptions - passes in the deltaTime value from the game class
  *@param {Integer} fps - passes in the fps value from 
  *@param {Integer} y - passes in the y value from the game constructor
  */
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
  *update function which is called every frame by the game class.
  *this function draws the image
  *@param {Time} deltaTime - passes in the deltaTime value from the game class
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
