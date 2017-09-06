var EventEmitter = require('events').EventEmitter
var util = require('util');

function setLogic(){
  var emitter = new EventEmitter()
  setInterval(function(){
    emitter.emit('call', function(){
      console.log('my first emitter');
    })
  }, 1000)
  return emitter
}


setLogic().on('call', function(cb){
  cb()
})



function FindPattern(regex) {
   EventEmitter.call(this);
   this.regex = regex;
   this.files = [];
}
util.inherits(FindPattern, EventEmitter);

var eveemit = new FindPattern()
console.log(eveemit);
