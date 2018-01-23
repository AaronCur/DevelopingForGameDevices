from tornado import websocket, web, ioloop, httpserver
import tornado

session ={}

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
        player_address =str(self.request.remote_ip) + ":" + str(self.stream.socket.getpeername()[1])
        session[player_address] = self
        print(session)
        self.send_to_other_player(message, player_address);

    def send_to_other_player(self,message, player_address):
        pass
        #iterate through the connections
        for key, value in session.items():
            if(key != player_address):
                self.write_message("You said: " + message)
                pass


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
