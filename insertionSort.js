function isNumber(num) {
  return (typeof num == 'number' ? true : false)
}

function insertionSort(length, arr){
  var minValue = null
  for(var i = length; i--;){
    if(isNumber(minValue) && arr[i] > minValue){
      arr[i] = arr[i-1]
    }else if(isNumber(minValue) && arr[i] < minValue){
      arr[i+1] = minValue
      minValue = null
    }else if(arr[i]< arr[i-1]){
      minValue = arr[i]
      arr[i] = arr[i-1]
    }
    console.log(arr);
  }
}


// console.log();
insertionSort(5, [2, 4, 6, 8, 3])
