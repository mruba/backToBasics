var arr1 = [1,2,3,4,5,5,6,6,7]
var arr2 = [2,5,6,9,1]

function getIntersection(arr1, arr2){
  var obj = {}
  for (var i = 0; i < arr1.length; i++) {
    if(!obj[arr1[i]]) obj[arr1[i]] = 0
    obj[arr1[i]]++
  }
  return arr2.filter(function(value){
    return obj[value]
  }).sort(function(a, b){
    return a - b
  })
}

console.log(getIntersection(arr1, arr2))
