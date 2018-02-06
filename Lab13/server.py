from tornado import websocket, web, ioloop, httpserver
import tornado
import json

session ={}
WAITING_FOR_PLAYERS=0
GAME_IN_PROGRESS=1
game_state=WAITING_FOR_PLAYERS

class WSHandler(tornado.websocket.WebSocketHandler):

    def check_origin(self, origin):
        return True

    def open(self):
        pass
        print("Connection opened")

    def on_message(self, message):
        pass
        #self.write_message("You said: " + message)
        print(self.request.remote_ip)
        print(self.stream.socket.getpeername()[1])
        ##self.send_to_other_player(message, player_address);
        msg = json.loads(message)
        if(msg["type"]=="updateState"):
            print(msg);
        if(msg["type"]=="join"):
            self.join();

    def join(self):
        message = {}
        print(len(session))
        if(len(session) < 2):
            session[self.get_player_address] = self
            game_state=1
            print(len(session))
            data = game_state
            type = "join"
            self.format_message(type,data)
        else:
            game_state = 0
            type = "error";
            data = "No available space: Two players already in the game!"
            self.format_message_to_self(type,data)

    def format_message(self,type,data):
        msg = {}
        msg["type"] = type
        msg["data"] = data
        self.send_to_other_player(json.dumps(msg))

    def format_message_to_self(self,type,data):
        msg = {}
        msg["type"] = type
        msg["data"] = data
        self.write_message(json.dumps(msg))

    def send_to_other_player(self,message):
        pass
        #iterate through the connections
        for key, value in session.items():
            if(key != self.get_player_address()):
                value.write_message(message)
                pass

    def get_player_address(self):
        player_address =str(self.request.remote_ip) + ":" + str(self.stream.socket.getpeername()[1])
        return player_address

    def on_close(self):
        pass



app= tornado.web.Application([
        	#map the handler to the URI named "test"
        	(r'/wstest', WSHandler),
])

if __name__ == '__main__':
        	server_port=8080
        	app.listen(server_port)
        	ioloop.IOLoop.instance().start()
