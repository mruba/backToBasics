var http = require('http')


http.get(process.argv[2], function(response) {
  response.setEncoding('utf8')
  var text = ''
  response.on('data', function(data){
    text+=data
  })
  response.on('end', function(){
    console.log(text);
    http.get(process.argv[3], function(response) {
      response.setEncoding('utf8')
      var text = ''
      response.on('data', function(data){
        text+=data
      })
      response.on('end', function(){
        console.log(text);
        http.get(process.argv[4], function(response) {
          response.setEncoding('utf8')
          var text = ''
          response.on('data', function(data){
            text+=data
          })
          response.on('end', function(){
            console.log(text);
          })
        })
      })
    })
  })
})
