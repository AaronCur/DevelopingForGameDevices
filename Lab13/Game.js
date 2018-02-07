var gameNs = {};
class Game
{
  /**
  *helper funtion that constructs game setting up each of the animated sprites
  *can also set ptoperties of the sprite objects, width, height, image, its y position and fps
  */
  constructor()
  {
   var message = {}
    this.ws = new WebSocket("ws://149.153.106.133:8080/wstest");
    gameNs.ws = this.ws
    //called when the websocket is opened
       initCanvas();

       gameNs.ws.onopen = function() {
       message.type = "test";
       message.data = "hello";
       gameNs.ws.send(JSON.stringify(message));
     };


  }

  updateLocalState(updateStateMessage)
  {
    console.log(msg);
  }

  /**
  *helper funtion that records the time when the application is loaded
  */
  initWorld() //prints out “Initialising game world”
  {
    console.log("Initialising game world");
      var joinButton = document.getElementById("join");
      joinButton.addEventListener("click", this.join);
      var gameOverButton = document.getElementById("GameOver");
      gameOverButton.addEventListener("click", this.gameover);
      gameNs.ws.addEventListener('message', this.handleMessage);

  }
  handleMessage(evt)
  {
    var msg = JSON.parse(evt.data);
    console.log(msg)
    if(msg.type === 'updateState')
    {
      this.updateLocalState(msg)
    }
    else if(msg.type === "error")
    {
      alert(msg.data)
    }
  }
  join()
  {
    var message={}
    message.type = "join"
    //if(gameNs.ws.readyState === gameNs.ws.OPEN)
    //{
      gameNs.ws.send(JSON.stringify(message));
    //}
    console.log(message);

  }
  gameover()
  {
    var message={}
    message.type = "GameOver"
    //if(gameNs.ws.readyState === gameNs.ws.OPEN)
    //{
      gameNs.ws.send(JSON.stringify(message));
    //}
    console.log(message);

  }
  /**
  *Update function called every frame. sets the current time when the function is called
  * calls updates for each sprite object and clears the screen
  */
  update()
  {

    window.requestAnimationFrame(gameNs.game.update);
  }

  draw()
  {

    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);

  }

}
