function removeFirstLast(word){
  return word.slice(1, -1)
}


function palindrome(word){
  if(word.length <= 1){
    return true
    // check if the last and the first char are equals
  }else if(word[0] != word[word.length-1]){
    return false
  }
  word = removeFirstLast(word)
  return palindrome(word)
}


console.log(palindrome('ana'))


console.log(palindrome('ana'))

console.log(palindrome('radar'))

console.log(palindrome('olvido'))
