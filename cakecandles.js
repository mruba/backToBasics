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

function getMax(arr) {
    var max = arr[0]
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

function getDuplicates (arr, max) {
    var duplicates = 0
    for( var i = 0; i < arr.length; i++) {
        if(arr[i] === max) {
            duplicates+=1
        }
    }
    return duplicates
}

function birthdayCakeCandles(n, ar) {
    // Complete this function
    return getDuplicates(ar, getMax(ar))
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = birthdayCakeCandles(n, ar);
    process.stdout.write("" + result + "\n");

}
