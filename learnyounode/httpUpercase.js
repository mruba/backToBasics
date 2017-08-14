var net = require('net')
var fs = require('fs')
var http = require('http')
var map = require('through2-map')


var port = process.argv[2]
var transform = map(function(chunk){
  return chunk.toString().toUpperCase()
})
var server = http.createServer(function(request, response){
  request.pipe(transform).pipe(response)
})

server.listen(port)
