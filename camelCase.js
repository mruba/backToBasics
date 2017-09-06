
function countWords(s){
  s = s.split('')
  var count = 1
  for(var i = 0; i < s.length; i++) {
    if(s[i] === s[i].toUpperCase()) count ++
  }
  return count
}

console.log(countWords('saveChangesInTheEditor'));
