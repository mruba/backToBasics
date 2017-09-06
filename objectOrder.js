var list = {
  "you": 100,
  "me": 75,
  "foo": 116,
  "bar": 15
}
var arr = []
for( item in list) {
  arr.push([item, list[item]])
}
arr.sort(function(a, b){
  return a[1] - b[1]
})
console.log(arr);


// this an example
// hello -> llohe
// goodbye byegood

var str1 = 'goodbye'
var str2 = 'byegooe'
function isRotation(str1, str2){
  return str1.concat(str1).includes(str2)
}

console.log(isRotation('goodbye', 'byegood'));

console.log(isRotation('goodbye', 'goo'));


var text = 'hello'

function print() {
  console.log(text);
  var text = 'world'
}
print()
