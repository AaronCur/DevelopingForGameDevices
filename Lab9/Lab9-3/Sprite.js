class Sprite
{

  constructor(context, imageOptions, x,y)
  {
   this.img= imageOptions.image;
   this.x = x;
   this.y = y;
   this.index = 0;
   this.width = 100;
   this.height = 222;
  // this.frameIndex = 0;
//   this.tickCount = 0;
//   this.tickCount1 = 0;
//   this.ticksPerFrame = 100;
//   this.numberOfFrames = 5;
//   this.loop = true;

  }

  /**
   * function of Square which gives the r g b varialbles an
   * initial value and thrn fills the sqare  colour initially
   * @type {Integer} r -given value of 10
   * @type {Integer} b -given value of 255
   * @type {Integer} g -given value of 10
  *fills the rectanglewith this rgb value at the positon this.x, this.y
   */
   update()
   {
     var canvas = document.getElementById('mycanvas');
     var ctx = canvas.getContext('2d');

     var image = this.img;
     ctx.drawImage(image, this.index* 35 , 14,97, 122 ,0,0, this.width,this.height);
     this.index = this.index +1;
     if(this.index > 4)
     {
       this.index = 0;
     }


  //   if (this.tickCount > this.ticksPerFrame)
    //  {

        //this.tickCount = 0;

            // If the current frame index is in range
          //  if (this.frameIndex < this.numberOfFrames - 1) {
                // Go to the next frame
            //    this.frameIndex += 1;
          //  }
          //  else if (this.loop == true)
          //  {
            //  frameIndex = 0;
          //}
      //  }


  // }

}
}
