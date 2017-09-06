for (var i = 0 ; i < 10; i++) {
  var y+=1
  var myFunc = (function(copyOfy){
    console.log(copyOfy)
  }(y))
  myFunc(y)
}


function Car (brand, year, color) {

  this.brand = brand
  this.year = year
  this.color = color

}

var myCar = new Car('civic', 2012, 'blue')


Car.prototype.niceSintax = function () {
 return this.brand+' '+this.color
}

callback(function () {
  debbug
  try {
    if (myCar === null) throw 'something is missing'
  }catch(err) {
    console.log(err)
  }
})

Object.create()

myvariable.bind()

var newObject = {}

function closure (count) {
  console.log(count)
  return true
}

var logScope = function(count) {
  return function () {
    console.log(count)
  }
}

var count = 0
for(var i = 0; i < 10; i++){
  count+=1
  setTimeout((function() {
   console.log(count)
  })(count), 500)
}

for (var i = 1; i <= 3; i++) {
  (function(index) {
    setTimeout(function() { console.log(index) }, 500)
  })(i)
}

npm


Write a function, which return whether first half of the byte is bigger than the right one. Try to write the most effective algorithm.

Usage example:
function isFirstHalfBigger(num){...}
var num = 231; // binary representation is 11100111
isFirstHalfBigger(num); // returns true, because 1110(decimal 14) is bigger than 0111(decimal 7).

function converNumberToBinary (num) {
  return Number(num).toString(2)
}

function converBinaryToInt (bin) {
  return parseInt(bin, 2)
}

function compareBinarySides (bin) {
  var middleIndex = (bin.length - 1)/2
  var side01 = converBinaryToInt(bin.substr(0, middleIndex))
  var side02 = converBinaryToInt(bin.substr(middleIndex+1))
  if (side01 > side02) {
    return true
  }else {
    return false
  }
}

compareBinarySides('11100111')

////////////////////
// second interview
////////////////////
function Person (name, age) {
  this.name = name;
  this.age = age;
  this.nice = function () {
   return this.name+' '+this.age;
  }
}


var myperson = new Person('miguel', 27)
myperson.nice()

var deviceType = 'Hub';
var obj = {

  deviceType: 'Switch',

  prop: {
      deviceType: 'Router',
      getDeviceType: function() {
          return this.deviceType;
      }
  }

};
console.log(obj.prop.getDeviceType());
var test = obj.prop.getDeviceType;
console.log(test());

test().call('Hub2')

function () {

}

String.prototype.myFucntion = function () {
 return 'whatever'
}

var newMap = [1,2,3,4,5].map(function(i){
  return i+3
})

var arr = [1, 2, 3, [4,5,6], [10,11, [17,18]], 0]

var total = []

var isThereMore = function(arrayNum) {
  for ( var i = 0; i< arrayNum.length; i++) {
    var element = typeof arrayNum[i]
    if ( 'object' === element) {
     isThereMore(arrayNum[i])
    }else {
      total.push(arrayNum[i])
    }
  }
}



var arr = [1, 2, 3, [4,5,6], [10,11, [17,18]], 0]
function topReducer (arr) {
  arr.reduce(function(a, b) {
    return a.concat(b);
  }, [])
}


event.onPress(function(e){
  var total = date().miliseconds - e.date.miliseconds
  if(total > 400)
  var setTimeOut(function(){
    $('#popup').text(e.value)
  }, 400)
})

$ajax('https://google.com', function(data){

}).then(function(data){
  console(data)
})

apisouce({url: 'http://whatever.com', method: 'GET'}).then((data) => {

})

$http()



typeof null === object

typeof undefine === undefine

1 in line
2
3




Name:  venkata Singapalli - AT&T
Email:   vs119f@att.com
Number:    630-536-4032

Name: Rakesh Muthyala
Email: rx809v@att.com
Number: 323 364 3199



// hositing
console.log(notyetdeclared);
// prints out 'undefined'

var notyetdeclared = 'now it is declared';

hoisting();

function hoisting(){
  console.log(notyetdeclared);
  // prints out 'undefined'

  var notyetdeclared = 'declared differently';

  console.log(notyetdeclared);
  // prints out 'declared differently'
}
