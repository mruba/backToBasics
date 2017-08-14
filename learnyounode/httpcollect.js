var http = require('http')

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8')
  var text = ''
  var count = 0
  response.on('data', function(data){
    count+=data.length
    text+=data

  })
  response.on('end', function(){
    console.log(count);
    console.log(text);
  })
})
