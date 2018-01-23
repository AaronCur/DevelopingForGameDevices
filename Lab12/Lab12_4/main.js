function main()
{
  var ws = new WebSocket("ws://149.153.106.133:8080/wstest");
  //called when the websocket is opened
   var message = {};

   initCanvas();

  ws.onopen = function() {
     message.type = "test";
     message.data = "hello";
     ws.send(JSON.stringify(message));


  };
  //called when the client receives a message
  ws.onmessage = function (evt) {
    var msg = JSON.parse(evt.data);
    if(msg.type === 'updateState')
    {
      updateLocalState(msg)
    }

  };
    document.addEventListener("click", updateState.bind(null,ws));

}
  function updateLocalState(updateStateMessage)
  {
    console.log(msg);
  }

  function updateState(ws, e)
  {
    var updateStateMessage = {};
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2D");
    var mouseX = e.clientX - canvas.offsetLeft;
    var mouseY = e.clientY - canvas.offsetTop;

    updateStateMessage.type = "updateState"
    updateStateMessage.data = {x:mouseX,y:mouseY};

    if(ws.readyState === ws.OPEN)
    {
      ws.send(JSON.stringify(updateStateMessage));
    }

  }

  function initCanvas()
  {
  	//Use the document object to create a new element canvas.

  	var canvas = document.createElement("canvas");
  	//Assign the canvas an id so we can reference it elsewhere.
  	canvas.id = 'mycanvas';
  	canvas.width = window.innerWidth;
  	canvas.height = window.innerHeight;
  	//We want this to be a 2D canvas.
  	var ctx = canvas.getContext("2D");
  	//Adds the canvas element to the document.
  	document.body.appendChild(canvas);
  }
