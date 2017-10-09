Set.prototype.intersection = function(setB) {
  var intersection = new Set()
  for ( var element of setB) {
    if(this.has(element)){
      intersection.add(element)
    }
  }
  return intersection
}

const commonChild = (str1, str2) => {
  var setA = new Set(str1),
      setB = new Set(str2)
  return setA.intersection(setB).size
}


module.exports = commonChild
