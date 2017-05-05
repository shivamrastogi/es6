'use strict';

var myArray = [11, 33, 22, 44, 11];
var mySet = new Set(myArray);

console.log(mySet);

mySet.add('tom');
mySet.add(12);
mySet.delete(22);

mySet.forEach(function (val) {
  console.log(val);
});