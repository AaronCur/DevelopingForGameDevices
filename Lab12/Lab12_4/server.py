from tornado import websocket, web, ioloop, httpserver
import tornado
import json

session ={}

class WSHandler(tornado.websocket.WebSocketHandler):

    def check_origin(self, origin):
        return True

    def open(self):
        pass
        print("Connection opened")

    def on_message(self, message):
        print(message)
        print(self.request.remote_ip)
        print(self.stream.socket.getpeername()[1])
        player_address =str(self.request.remote_ip) + ":" + str(self.stream.socket.getpeername()[1])
        session[player_address] = self
        print(session)
        self.send_to_other_player(message,player_address);
        msg = json.loads(message)
        if(msg["type"]=="updateState"):
            self.send_to_other_player(message, player_address);
    def get_player_address(self,player_address):
        pass
        return player_address

    def send_to_other_player(self,message, player_address):
        pass
        #iterate through the connections
        for key, value in session.items():
            if(key != self.get_player_address(player_address)):
                value.write_message(message)


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
