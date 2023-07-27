function functionLogger(func, arg) {
  console.log("Function starting");

  let result = func(arg);

  console.log("Function complete");

  return result;
}

//2
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
