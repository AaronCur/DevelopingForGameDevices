from tornado import websocket, web, ioloop, httpserver
import tornado

class WSHandler(tornado.websocket.WebSocketHandler):

             def check_origin(self, origin):
                return True

             def open(self):
                pass
                print("Connection opened")

             def on_message(self, message):
                pass
                self.write_message("You said: " + message)

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
