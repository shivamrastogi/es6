let myArray = [11, 33, 22, 44, 11];
let mySet = new Set(myArray);

console.log(mySet);

mySet.add('tom');
mySet.add(12);
mySet.delete(22);

mySet.forEach(function(val) {
  console.log(val);
});


/////////  Map ///////////

let myMap = new Map([['a1', 'Hello'], ['a2', 'GoodBye']]);
console.log(myMap);
myMap.set('c3', 'Foo');
myMap.delete('a1');
console.log(myMap);


///// WeakSet ////////
let carWeakSet = new WeakSet();
let car1 = {
  'name' : 'honda',
  'model' : 'civic'
}
carWeakSet.add(car1);
console.log(carWeakSet);
carWeakSet.delete(car1);
console.log(carWeakSet);


///// WeakMap //////

let carWeakMap = new WeakMap();
let key1 = {
  'id' : 1
};

carWeakMap.set(key1,car1);
console.log(carWeakMap);
carWeakMap.delete(key1);
console.log(carWeakMap);
