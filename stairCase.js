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
function createTheHashLine (n, l) {
    var stair = ''
    for (var i = 0; i < l; i++) {
        // if i is greater than l-n add some hashes
        stair = (i+1 >= l-n) ? stair.concat('#') : stair.concat(' ')
    }
    return stair
}

function printTheStair (n) {
    for(var i = 0; i < n; i++) {
        console.log(createTheHashLine(i, n))
    }
}

function main() {
    var n = parseInt(readLine());
    printTheStair(n)

}
