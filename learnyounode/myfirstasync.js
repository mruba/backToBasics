var fs = require('fs')
var count = 0
var options = {
  encoding: 'utf8'
}
var file = process.argv[2] || 'lorem.txt'
fs.readFile(file, options, function (err, data) {
  var arrayLines = data.split('\n')
  console.log(arrayLines.length-1)
})
