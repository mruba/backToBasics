var net = require('net')
var fs = require('fs')
var http = require('http')

var port = process.argv[2]
var path = process.argv[3]
var server = http.createServer(function(request, response){
  var fileStream = fs.createReadStream(path)
  fileStream.pipe(response)

})

server.listen(port)
