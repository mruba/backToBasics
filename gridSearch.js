process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function convertNumberToArray (arr) {
    return arr.toString().split('').map(Number)
}



function matchMatrix (g, p, i, j) {
   for (var pi = 0; pi < p.length;  pi++) {
       for(var pj = 0; pj < p[pi].length; pj++) {
           if(g[i+pi][j+pj] != p[pi][pj]){
               return false
           }
       }
   }
   return true
}

function checkMatrixPattern (g, p) {
    for (var i = 0; i < g.length; i++){
        for( var j = 0; j < g[i].length; j++){
            if(g[i][j] == p[0][0]){
                // here we should start the matrix match
                if (matchMatrix(g, p, i, j)){
                   return 'YES'
                }
            }
        }
    }
    return 'NO'
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var R_temp = readLine().split(' ');
        var R = parseInt(R_temp[0]);
        var C = parseInt(R_temp[1]);
        var G = [];
        for(var G_i = 0; G_i < R; G_i++){
           G[G_i] = convertNumberToArray(readLine());
        }
        var r_temp = readLine().split(' ');
        var r = parseInt(r_temp[0]);
        var c = parseInt(r_temp[1]);
        var P = [];
        for(var P_i = 0; P_i < r; P_i++){
           P[P_i] = convertNumberToArray(readLine());
        }
        console.log(checkMatrixPattern(G, P))
    }

}
