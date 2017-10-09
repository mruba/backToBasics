const areAnagrams = (str1, str2) => {
  let countChars = {}
  for (var i = 0; i < str1.length; i++) {
    if(!countChars[str1[i]]) countChars[str1[i]] = 0
    if(!countChars[str2[i]]) countChars[str2[i]] = 0
    countChars[str1[i]]++
    countChars[str2[i]]--
  }

  for (key in countChars) {
    if (countChars[key]) return false
  }

  return true

}

const str1 = "geeksforgeeks"
const str2 = "forgeeksgeeks"

console.log(areAnagrams(str1, str2));
