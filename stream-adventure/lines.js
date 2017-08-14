var through = require('through2')
var split = require('split')
var count = 1
process.stdin
  .pipe(split())
  .pipe(through(function(line, _, next){
      if(!(count%2)){
        console.log(line.toString().toUpperCase())
      }else{
        console.log(line.toString().toLowerCase())
      }
      count++
      next()
  }))
