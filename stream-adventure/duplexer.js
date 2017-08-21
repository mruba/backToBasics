// var spawn = require('child_process').spawn;
// var duplexer2 = require('duplexer2')
// module.exports = function (cmd, args) {
//     // spawn the process and return a single stream
//     // joining together the stdin and stdout here
//     var ps = spawn(cmd, args);
//     return duplexer(ps.stdin, ps.stdout)
// }


var Button = function(content) {
  this.content = content;
};
Button.prototype.click = function() {
  console.log(this.content + ' clicked');
}

var myButton = new Button('OK');
myButton.click();
