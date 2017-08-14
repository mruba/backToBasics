var http = require('http')
var fs = require('fs')
var through = require('through2')


var server = http.createServer(function(req, res) {
  if(req.method === 'POST'){
    req.pipe(through(write, end)).pipe(res)

  }
})

server.listen(process.argv[2])

function write(buff, _, next) {
  this.push(buff.toString().toUpperCase())
  next()
}

function end(done){
  done()
}

var x = 'hello'
