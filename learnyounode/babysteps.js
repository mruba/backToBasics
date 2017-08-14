


var numbers = process.argv
numbers.shift()
numbers.shift()
var total = 0
for(var i = 0; i < numbers.length; i++) {
  total += Number(numbers[i])
}
console.log(total)
