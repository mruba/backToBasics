var net = require('net')
var port = process.argv[2]
var strftime = require('strftime')

var server = net.createServer(function (socket) {
  // socket handling logic
  // "2013-07-06 17:42"
  socket.end(strftime('%Y-%m-%d %H:%M')+'\n')
})

server.listen(port)
