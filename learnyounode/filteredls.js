var fs = require('fs')

var filterExt = function(path, extFile, callback) {
  fs.readdir(path, function (err, data) {
    if(err) {
      return callback(err)
    }

    var listFiles = []
    for( var i = 0; i < data.length; i++) {
      var ext = data[i].split('.')
      if(extFile == ext[1]){
        listFiles.push(data[i])
        //return callback(null, data[i])
      }
    }
    callback(null, listFiles)
  })
}


module.exports = filterExt

// this is a better solution
// if (path.extname(file) === ext) {
//    console.log(file)
//  }
