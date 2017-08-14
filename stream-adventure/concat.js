var concat = require('concat-stream')

process.stdin.pipe(concat(function(data){
  console.log(reverseString(data.toString()))
}))

function reverseString(str) {
    return str.split("").reverse().join("");
}
