function proccesData(input, length) {

  for (var i = 0; i < input.length; i++) {
    var dlls = parseInt(input[i][0])
    var flavorCost = input[i][2].split(' ')
    var answer = []

    for (var j = 0; j < flavorCost.length; j++) {
      for (var e = j+1; e < flavorCost.length; e++) {
        if ((parseInt(flavorCost[j]) + parseInt(flavorCost[e])) == dlls) {
          answer.push({index: j+1, value: parseInt(flavorCost[j])})
          answer.push({index: e+1, value: parseInt(flavorCost[e])})
          break
        }
      }
      if(answer.length > 0){
        var sortedAwanswer = answer.sort(function(a, b){
          return a['value'] - b['value']
        })
        console.log(sortedAwanswer[0].index+' '+sortedAwanswer[1].index);
        answer = []
        break
      }
    }
  }

}


function arrayChunks(arr, size) {
  var array = arr.slice()
  var results = [];
  while (array.length) {
    results.push(array.splice(0, size));
  }
  return results;
}

// input.split('\n')
var input = [ '2', '4', '5', '1 4 5 3 2', '4', '4', '2 2 4 3' ]
var length = input.shift()
proccesData(arrayChunks(input, 3), parseInt(length))
