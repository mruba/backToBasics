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
function getSums (arr){
    var stack = []
    for ( var i = 0; i < arr.length; i++) {
        var sum = 0
        for ( var j = 0; j < arr.length; j++) {
            if (j !== i){
                sum = sum + arr[j]
            }
        }
        stack.push(sum)
    }
    return stack
}

function getMax (stack) {
   var max = stack[0]
   for ( var i = 0; i < stack.length; i++) {
        if(stack[i] > max) {
            max = stack[i]
        }
   }
   return max
}

function getMin (stack) {
   var max = stack[0]
   for ( var i = 0; i < stack.length; i++) {
        if(stack[i] < max) {
            max = stack[i]
        }
   }
   return max
}

function main() {
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var stack = getSums(arr)
    var min = getMin(stack)
    var max = getMax(stack)
    console.log(min+' '+max)

}
