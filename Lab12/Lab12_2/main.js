function main()
{
  var ws = new WebSocket("ws://149.153.106.133:8080/wstest");
  //called when the websocket is opened
  ws.onopen = function() {
     var message = {};
     message.type = "test";
     message.data = "hello";
     ws.send(JSON.stringify(message));

  };
  //called when the client receives a message
  ws.onmessage = function (evt) {
     alert(evt.data);
  };
}
