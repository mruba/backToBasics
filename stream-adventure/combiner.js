var combine = require('stream-combiner')
var split = require('split')
var through = require('through2')
var zlib = require('zlib');


var library
var process = through(function(chunk, enc, callback){
  if (chunk.length === 0) return callback();
  var item = JSON.parse(chunk.toString())
   if(!library){
     library = {
       name : item.name,
       books : []
    }
   } else if (item.type != 'genre') {
     library.books.push(item.name)
   } else{
     console.log(item);
     this.push(JSON.stringify(library)+ '\n')
     library = {
       name : item.name,
       books : []
    }
   }


  callback()
})

module.exports = function(){

  return combine(split(), process, zlib.createGzip())

}

expected:
  [ { name: 'alternate history', books: [ 'Bring the Jubilee', 'The Man in the High Castle' ] }, { name: 'apocalypse', books: [ 'Alas, Babylon', 'Earth Abides', 'Riddley Walker' ] }, { name: 'cyberpunk', books: [ 'Accelerando', 'Heavy Weather', 'Neuromancer', 'Snow Crash', 'The Diamond Age' ] }, { name: 'new wave', books: [ 'Bug Jack Barron', 'Dangerous Visions', 'The Heat Death of the Universe' ] }, { name: 'space opera', books: [ 'A Deepness in the Sky', 'Skylark', 'Void' ] }, { name: 'time travel', books: [ 'A Connecticut Yankee in King Arthur\'s Court', 'The Time Machine' ] } ]
actual:
  [ { name: 'alternate history', books: [ 'Bring the Jubilee', 'The Man in the High Castle' ] }, { name: 'apocalypse', books: [ 'Alas, Babylon', 'Earth Abides', 'Riddley Walker' ] }, { name: 'cyberpunk', books: [ 'Accelerando', 'Heavy Weather', 'Neuromancer', 'Snow Crash', 'The Diamond Age' ] }, { name: 'new wave', books: [ 'Bug Jack Barron', 'Dangerous Visions', 'The Heat Death of the Universe' ] }, { name: 'time travel', books: [ 'A Connecticut Yankee in King Arthur\'s Court', 'The Time Machine' ] } ]
