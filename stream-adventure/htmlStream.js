var fs = require('fs')
var through = require('through2')
var trumpet = require('trumpet')
var tr = trumpet()

// fs.createReadStream()
process.stdin.pipe(tr).pipe(process.stdout)

var stream = tr.select('.loud').createStream()

stream.pipe(through(write, end)).pipe(stream)

function write(buff, _, next) {
  this.push(buff.toString().toUpperCase())
  next()
}

function end(done) {
  done()
}
