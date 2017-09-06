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

for (let i = 1; i <= 3; i++) {
  setTimeout(function() { console.log(i) }, 500)
  (function(index) {
    setTimeout(function() { console.log(index) }, 500)
  })(i)
}




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


isThereMore(arr)
console.log(total)


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







google analytics
google adwords
Solr
SEO optimizations
CMS edit tools
Capistrano taks for deployments
landing pages
prerender library
Location Maps SOlr
SOAP conection btw sap and rails
Send grid and SES
Predictor
Perfomance search rails
Used Phantom to generate Charts in base64 format to emebed in emails
Cart reminder with smart recommendations
