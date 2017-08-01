// the output should be positive negative and ceros
// 6
// -4 3 -9 0 4 1

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

var data = {
    positive : 0,
    negative : 0,
    cero : 0
}

function checkNumber (number) {
    if(number > 0) {
        return 'positive'
    } else if ( number < 0) {
        return 'negative'
    } else {
        return 'cero'
    }
}

function getData (arr) {
    for( var i = 0; i < arr.length; i++){
        var numberType = checkNumber(arr[i])
        data[numberType] = data[numberType] + 1
    }
    for ( numberType in data) {
        var result = data[numberType]/arr.length
        console.log(result.toFixed(6))
    }

}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    getData(arr)
}
