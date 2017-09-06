
const pascalTriangle = (n, triangle) => {
  console.log(n)
  if (n < 2) {
    console.log(triangle)
   return 'done'
  }
  const currentElement = triangle[triangle.length-1]
  let newLevel = [1]
  for(var i = 0; i < currentElement.length-1; i ++){
    newLevel.push(currentElement[i] + currentElement[i+1])
  }
 newLevel.push(1)
 triangle.push(newLevel)

  pascalTriangle(n-1, triangle)
}

let initTriangle = [[1], [1,1]]

let tree = pascalTriangle(15, initTriangle)
console.log(tree)
