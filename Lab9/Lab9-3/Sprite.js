class Sprite
{

  constructor(x,y)
  {
   this.img=new Image();
   this.img.src = "Images/PlayerSS2.png";
   this.x = x;
   this.y = y;
   this.width = 86;
   this.height = 85;
   this.frameIndex = 0;
   this.tickCount = 0;
   this.tickCount1 = 0;
   this.ticksPerFrame = 100;
   this.numberOfFrames = 5;
   this.loop = true;

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
     this.tickCount +=1;

     if (this.tickCount > this.ticksPerFrame)
      {

        	this.tickCount = 0;

            // If the current frame index is in range
            if (this.frameIndex < this.numberOfFrames - 1) {
                // Go to the next frame
                this.frameIndex += 1;
            }
          //  else if (this.loop == true)
          //  {
            //  frameIndex = 0;
          //}
        }


   }
   draw()
  {

    this.tickCount +=1;
    if(this.tickCount >= 60)
    {
      this.tickCount1 +=1;
      console.log(this.tickCount1);

    }

    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    //ctx.clearRect(0,0,canvas.width, canvas.height);
    this.img.onload = function() {
     //for (var i = 0; i < 8; i++)
  //   {

       ctx.drawImage(this, this.tickCount1* this.width , 0, (this.tickCount1+1) * this.width, this.height ,0,0, 100,100);

//  }
        // ctx.clearRect(0,0,canvas.width, canvas.height);
   };
     console.log("Image 1 ready to append");
  }

}
