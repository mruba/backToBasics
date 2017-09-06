function selectionSort(arr){
  var minIdx, temp
  for(var i = 0; i < arr.length; i++){
    minIdx = i;
    for(var  j = i+1; j<arr.length; j++){
       if(arr[j]<arr[minIdx]){
          minIdx = j;
       }
    }
    //swap
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}
