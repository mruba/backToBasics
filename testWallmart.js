function sum(){
  var value = 0
  return function(){
    return value +=1
  }
}
var sumFunc = sum()
console.log(sumFunc())
console.log(sumFunc())
console.log(sumFunc())
console.log(sumFunc())
