var matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

function rotateMatrix() {
  var N = 4
  for( var x = 0; x < N/2; x++) {
    for( var y= x; y < N-x-1; y++) {
      var temp = matrix[x][y]
      matrix[x][y] = matrix[y][N-1-x]
      matrix[y][N-1-x] = matrix[N-1-x][N-1-y]
      matrix[N-1-x][N-1-y] = matrix[N-1-y][x]
      matrix[N-1-y][x] = temp
    }
  }

  return matrix
}
// first iteration [0][0] = []


console.log(rotateMatrix(matrix))
