var net = require('net')
var fs = require('fs')
var http = require('http')
var map = require('through2-map')
var url = require('url')

var strftime = require('strftime')

var port = process.argv[2]

function makeTime(date){
	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}
}

function unixTime(date){
	return {
		unixtime: date.getTime()
	}
}

var server = http.createServer(function(request, response){
  // from request we need query and pathname
  var req = url.parse(request.url, true)
  let date = new Date(req.query.iso);
  var time = ''
  switch (req.pathname) {
    case '/api/parsetime':
      time = makeTime(date)
      break;
    case '/api/unixtime':
      time = unixTime(date)
      break;
    default:

  }
  let jsonString = JSON.stringify(time)
  response.end(jsonString)
})

server.listen(port)
