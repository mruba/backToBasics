
function getUniques(a){

  var frequencies = {}
  for(var i = 0; i < a.length; i++){
    if(!frequencies[a[i]]) frequencies[a[i]] = 0
    frequencies[a[i]]+= 1
  }

  var total = []
  for(key in frequencies){
    total.push(frequencies[key])
  }
  console.log(frequencies);
  return  [...new Set(total)];
}

function getSubFrequencies(){
  var frequencies = {}
  for(var i = 0; i < a.length; i++){
    if(!frequencies[a[i]]) frequencies[a[i]] = 0
    frequencies[a[i]]+= 1
  }

  var total = {}
  for(key in frequencies){
    if(!total[frequencies[key]]) total[frequencies[key]] = 0
    total[frequencies[key]]++
  }
  return total
}

function isValid(a){

  // get the unique values in the array
  if(getUniques(a).length == 1){
    return 'YES'
  }else{
    var frequencies = getSubFrequencies(a)
    var total = []
    for(key in frequencies){
      total.push(frequencies[key])
    }

  }
  // var lastTotal = {}
  // total.forEach(function(item){
  //   if(!lastTotal[item]) lastTotal[item]=0
  //   lastTotal[item]+=1
  // })
  // console.log(lastTotal);
  //
  // let unique = [...new Set(total)];
  // console.log(unique);
  //
  // if(unique.length == 1){
  //   return 'YES'
  // }if(unique.length > 2){
  //   return 'NO'
  // }else if (Math.abs(unique[0]-unique[1]) == 1 ){
  //   return 'YES'
  // }else{
  //   return 'NO'
  // }
}

function getOcurrences(input){
  var bIsValidString = false;
  var oCharMapCount = input.trim().split("").reduce((acc, val) => {
      if (acc[val]) {
          acc[val] += 1;
      }
      else {
          acc[val] = 1;
      }
      return acc;
  }, {});

  var oCharOccuranceMap = {};
  for(let key in oCharMapCount) {
      if (oCharOccuranceMap[oCharMapCount[key]]) {
          oCharOccuranceMap[oCharMapCount[key]] += 1;
      }
      else {
          oCharOccuranceMap[oCharMapCount[key]] = 1;
      }
  }

  var iCharOccurances = (Object.keys(oCharOccuranceMap) || []).length;
  console.log(oCharOccuranceMap);
  console.log(iCharOccurances);
}


var a = 'hfchdkkbfifgbgebfaahijchgeeeiagkadjfcbekbdaifchkjfejckbiiihegacfbchdihkgbkbddgaefhkdgccjejjaajgijdkd'

// console.log(isValid(a));
console.log(getOcurrences(a));
