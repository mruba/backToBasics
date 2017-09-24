var fullname = 'john doe'
var obj = {
 fullname: 'Colin hirin',
 prop: {
   fullname: 'Aurelio',
   getFullname: function(){
     return this.fullname
   }
 }
}



console.log(obj.prop.getFullname());
var test = obj.prop.getFullname
console.log(test());
