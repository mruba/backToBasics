function Animal(type){
  this.type = type
  this.jump = function(){
    return 'the '+this.type+' jumped'
  }

  this.jumpCount = (function(){
    var count = 0
    return function(){
      return count++
    }
  })()
}

var bear = new Animal('bear')
console.log(bear.type)

console.log(bear.jump())
console.log(bear.jumpCount())
console.log(bear.jumpCount())
console.log(bear.jumpCount())
console.log(bear.jumpCount())
console.log(bear.jumpCount())
console.log(bear.jumpCount())
console.log(bear.jumpCount())
console.log(bear.jumpCount())
