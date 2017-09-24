const util = require('util');
const EventEmitter = require('events');
function SyncEmit() {
 this.emit('ready');
}
util.inherits(SyncEmit, EventEmitter);
var syncEmit = new SyncEmit();
syncEmit.on('ready', function() {
 console.log('Object is ready to be used');
});


 function helloEvents() {
   var eventEmitter = new EventEmitter();
   setInterval(function() {
     eventEmitter.emit('hello', 'world');
   }, 100);
   return eventEmitter;
 }

 helloEvents().on('hello', function(e){
   console.log(e);
 })


 helloEvents().on('hello', function(e){
   console.log(e+' 2d emit');
 })
