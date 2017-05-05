'use strict';

var theString = "Hello, I love Javascript";

console.log(theString.includes('love'));

function greet() {
  var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello World';

  console.log(greeting);
}

greet();