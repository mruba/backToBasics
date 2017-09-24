var finalString = []
function superReduce(s){
  // let charMap = {}
  // s.split('').forEach((char)=>{
  //   if(!charMap[char]) charMap[char] = 0
  //   charMap[char]++
  // })
  // if(s == '') return finalString.join('')
  //
  // if(s[s.length-2] == s[s.length-1]){
  //   // remove the last two digits
  //   s.pop()
  //   s.pop()
  //   return superReduce(s)
  // }else if(s[0] == s[1]){
  //   // remove the first two elements
  //   s.shift()
  //   s.shift()
  //   return superReduce(s)
  // }else if(s[0] == s[s.length-1]){
  //   s.shift()
  //   s.pop()
  //   return superReduce(s)
  // }else {
  //   finalString.push(s.shift())
  //   return superReduce(s)
  // }
  const line = s.split('\n')[0];
   var acc = "";
   for(let i = 0; i < line.length; i++) {

       const c = line[i];
       console.log(acc, c, i, line, acc.length > 0 , acc[acc.length - 1] === c);
       if(acc.length > 0 && acc[acc.length - 1] === c) {
           acc = acc.slice(0, acc.length - 1);
       } else {
           acc += c;
       }
   }
   return (acc.length === 0 ? "Empty String" : acc)


}

function callFunction(s){
  s = s.split('')
  return superReduce(s)
}

// superReduce('aaabccddd')

module.exports = superReduce
