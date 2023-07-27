/* Function Logger
Define a function functionLogger that accepts 2 arguments:

1) func (function) - a function to run

2) arg (any type) - a value to pass into func as an argument

functionLogger should complete the following steps:

1) log the message "Function starting"

2) invoke the provided function

3) log "Function complete"

4) return the result of the function call

Note that the unit tests will check that the correct value is returned; they do not check if you console logged the right values at the right time. */

function functionLogger(func, arg) {
  console.log("Function starting");

  let result = func(arg);

  console.log("Function complete");

  return result;
}

/* 2
Finder Function
Define a function finderFunction that accepts an array and a callback function as arguments. finderFunction should pass each element from the array into the callback function.

If the callback returns true for any of the elements in the array, return the index of the current element. If the callback never returns true, return -1;

let numbers = [1, 3, 5, 64, 7, 12];
let odds = [9, 13, 15, 17];

function isEven(num) {
  return !(num % 2);
}

console.log(finderFunction(numbers, isEven)) // 3
console.log(finderFunction(odds, isEven)) // -1 */

function finderFunction(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    // pass current element into callback
    if (callback(arr[i])) {
      return i;
    }
  }

  return -1;
}
// example

let numbers = [1, 3, 5, 64, 7, 12];
let odds = [9, 13, 15, 17];

function isEven(num) {
  return !(num % 2);
}

console.log(finderFunction(numbers, isEven));
// 3

console.log(finderFunction(odds, isEven));
// -1

/* 3.Who's a Special?
Write a function whosASpecial that takes an array of pets as an argument and returns a string confirming what you already knew: all of the pets are very special! Feel free to add your own special pets to the array!

Use .forEach in your answer.

let specialPets = [{
    name: 'Sadie',
    species: 'cat'
  }, {
    name: 'Layla',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }
]; */

whosASpecial(specialPets);
// => Sadie the cat is very special! Layla the cat is very special! Bogie the dog is very special!
