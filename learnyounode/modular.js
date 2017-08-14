var filter = require('./filteredls.js')

var callback = function(err, file) {
  if(err){
    console.log(err)
  }else{
    for(var i = 0; i < file.length; i++) {
      console.log(file[i])
    }
  }
}
filter(process.argv[2], process.argv[3], callback)
