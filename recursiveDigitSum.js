function parseNumberToArray(number){
  return number.toString().split('').map(function(num) {
    return parseInt(num)
  })
}

function processData(number){
  number = parseNumberToArray(number)
  if(number.length > 1){
    number = number.reduce(function(acc, next){
      return acc + next
    }, 0)
    return processData(number)
  }
  return number[0]
}


// processData(148148148)
// console.log(jest);

module.exports = processData
