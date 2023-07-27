/* What Does “Mutate” Mean in JavaScript?

Mutation means:

Changing the ORIGINAL array/object directly.

MUST MUTATE

Means: You ARE REQUIRED to change the original array.

MUST NOT MUTATE

Means: You are NOT allowed to change the original array.

You must create a NEW array instead. */

/*1. Very Odd
Write a function, veryOdd, that accepts an array of numbers as an argument. It should return a new array that contains only the odd numbers from the given array. veryOdd must not mutate the given array.

let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = veryOdd(allTheNums);

console.log('oddNums:', oddNums); // [1, 3, 5, 7];
console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8] */

function veryOdd(arr) {
  let oddNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      oddNumbers.push(arr[i]);
    }
  }

  return oddNumbers;
}

describe("veryOdd", () => {
  it("is a function", () => {
    expect(typeof veryOdd).toEqual("function");
  });

  it("returns an array", () => {
    let returnedValue = veryOdd([1, 2, 3]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it("returns an array with only the odd numbers from the given array", () => {
    let returnedValue = veryOdd([5, 10, 15, 20]);
    expect(returnedValue).toEqual([5, 15]);
  });

  it("does not mutate the original array", () => {
    let originalArray = [5, 10, 15, 20];
    veryOdd(originalArray);
    expect(originalArray).toEqual([5, 10, 15, 20]);
  });
});

/* 2. 
Very Odd Mutant
' Write a function, veryOddMutant, that accepts an array of numbers as an argument. The function should mutate the given 
array by replacing every even number in the array with the string 'normie'.

veryOddMutant should return a count of the number of even numbers it replaced.

let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let countReplaced = veryOddMutant(allTheNums);

console.log('allTheNums:', allTheNums);
 [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

console.log('countReplaced:', countReplaced);
 4 (because 4 even numbers were replaced with 'normie')
*/

function veryOddMutant(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = "normie";
      count++;
    }
  }

  return count;
}

// Don't change below
describe("veryOddMutant", () => {
  it("is a function", () => {
    expect(typeof veryOddMutant).toEqual("function");
  });

  it("returns a number", () => {
    let returnedValue = veryOddMutant([1, 2, 3]);
    expect(typeof returnedValue).toEqual("number");
  });

  it('mutates the original array, replacing even numbers with the string "normie"', () => {
    let originalArray = [5, 10, 15, 20];

    veryOddMutant(originalArray);
    expect(originalArray).toEqual([5, "normie", 15, "normie"]);
  });

  it("returns the count of the number of even numbers replaced", () => {
    let originalArray = [5, 10, 15, 20];
    let returnedValue = veryOddMutant(originalArray);
    expect(returnedValue).toEqual(2);
  });
});

/* 3.Clone Machine
Write a function cloneMachine, that, given an argument animal (represented as an object), returns a clone of animal.

The name of the clone should be the name of its parent, concatenated with the word 'Clone'.

cloneMachine should also push the name of the clone to the parent's offspring array.

let dolly = {
  name: 'Dolly',
  species: 'sheep',
  offspring: []
}

let dollyClone = cloneMachine(dolly);

console.log(dollyClone) // {name: 'DollyClone', species: 'sheep', offspring: []}
console.log(dolly) // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']} */

function cloneMachine(animal) {
  let Parentclone = {
    name: animal.name + "Clone",
    species: animal.species,
    offspring: [],
  };

  animal.offspring.push(Parentclone.name);

  return Parentclone;
}
console.log;

describe("cloneMachine", () => {
  let dolly;
  let snuppy;

  // reassign the dolly and polly objects before each test
  beforeEach(() => {
    dolly = {
      name: "Dolly",
      species: "sheep",
      offspring: [],
    };

    snuppy = {
      name: "Snuppy",
      species: "dog",
      offspring: [],
    };
  });

  it("is a function", () => {
    expect(typeof cloneMachine).toEqual("function");
  });

  it("returns an object", () => {
    let returnedValue = cloneMachine(dolly);
    expect(typeof returnedValue).toEqual("object");
  });

  it('names the clone after its parent, plus the string "Clone"', () => {
    let dollyClone = cloneMachine(dolly);
    let snuppyClone = cloneMachine(snuppy);

    expect(dollyClone.name).toEqual("DollyClone");
    expect(snuppyClone.name).toEqual("SnuppyClone");
  });

  it("gives the clone the same species as its parent", () => {
    let dollyClone = cloneMachine(dolly);
    let snuppyClone = cloneMachine(snuppy);

    expect(dollyClone.species).toEqual("sheep");
    expect(snuppyClone.species).toEqual("dog");
  });

  it("gives the clone an empty offspring array", () => {
    let dollyClone = cloneMachine(dolly);
    let snuppyClone = cloneMachine(snuppy);

    expect(dollyClone.offspring).toEqual([]);
    expect(snuppyClone.offspring).toEqual([]);
  });

  it("adds the name of the offspring to its parent's offspring property", () => {
    let dollyClone = cloneMachine(dolly);
    let snuppyClone = cloneMachine(snuppy);

    expect(dolly.offspring).toEqual(["DollyClone"]);
    expect(snuppy.offspring).toEqual(["SnuppyClone"]);
  });

  it("adds the name of each offspring to its parent if called multiple times", () => {
    let dollyClone = cloneMachine(dolly);
    let dollyClone2 = cloneMachine(dolly);
    let dollyClone3 = cloneMachine(dolly);

    expect(dolly.offspring).toEqual(["DollyClone", "DollyClone", "DollyClone"]);
  });
});

/* 4. My Splice
Write a mySplice function that mirrors the behavior of JavaScript's .splice() array method. However, mySplice should accept the array to operate on as an argument, rather than being invoked as a method on that array.

mySplice only needs to take one element to add to the array (the .splice method can actually take any number of values to add).

Do not use .splice in your function.

let myArray = [1, 2, 3];

mySplice(myArray, 1, 1, 'apples')) // => [2]

console.log(myArray)    // [1,'apples', 3] */

// IDEA Break array into:

// LEFT + NEW VALUE + RIGHT

// STEP 1 — Removed

// Start at index 1.

// Remove 1 item:

// removed = [2]
// STEP 2 — Build Result
// LEFT side

// Before index 1:

// [1]
// Add new value
// [1, "apples"]
// RIGHT side

// After removed section:

// [3]

// Final result:

// [1, "apples", 3]
// STEP 3 — Mutate Original

// Clear original:

// arr.length = 0;

// Now:

// []

// Push result values back:

// [1, "apples", 3]
// Final
// Returned:
// [2]
// Original array becomes:
// [1, "apples", 3]
// SUPER EASY Memory Trick
// splice =
// take out middle
// put something new
// rebuild array
// Visual Formula
// LEFT + INSERT + RIGHT

function mySplice(arr, startIdx, deleteCount, newValue) {
  let removed = [];

  // STEP 1: collect removed items
  for (let i = 0; i < deleteCount; i++) {
    removed.push(arr[startIdx + i]);
  }

  // STEP 2: build new array manually
  let result = [];

  // left side
  for (let i = 0; i < startIdx; i++) {
    result.push(arr[i]);
  }

  // new value
  if (newValue !== undefined) {
    result.push(newValue);
  }

  // right side
  for (let i = startIdx + deleteCount; i < arr.length; i++) {
    result.push(arr[i]);
  }

  // STEP 3: mutate original array
  arr.length = 0;

  for (let i = 0; i < result.length; i++) {
    arr.push(result[i]);
  }

  return removed;
}

/* What .splice() Does

.splice() does TWO things:

Removes elements from original array
Optionally inserts new elements AND it MUTATES the original array.

SYNTAX- splice(startIdx, deleteCount, newValue)
startIdx: the index at which to start changing the array
deleteCount: the number of elements to remove from the array, starting with startIdx
newValue: the value to insert into the array at startIdx (optional) */

// Step-by-Step
//splice(1, 1, "apples")
// Original:

// [1, 2, 3]

// Start at index 1: which is 2
// Remove it:

// [1, 3]

// Insert "apples" at index 1:

// [1, "apples", 3]
// Return Value

// .splice() returns REMOVED elements.

// So:

//[2];

// Another way
function mySplice(arr, startIdx, deleteCount, newValue) {
  let removed = [];

  // STEP 1: Save removed elements
  for (let i = 0; i < deleteCount; i++) {
    removed.push(arr[startIdx + i]);
  }

  // STEP 2: Shift elements right to make space
  for (let i = arr.length; i > startIdx; i--) {
    arr[i] = arr[i - 1];
  }

  // STEP 3: Insert new value
  arr[startIdx] = newValue;

  // STEP 4: Remove extra deleted elements
  for (let i = startIdx + 1; i < arr.length - deleteCount + 1; i++) {
    arr[i] = arr[i + deleteCount - 1];
  }

  // Adjust array length
  arr.length = arr.length - deleteCount + 1;

  return removed;
}
/*5.Reverse Array
Write a function, reverse, that accepts an array as an argument, and reverses the array.

The behavior should mimic the behavior of the native .reverse() array method. However, your reverse function should accept the array to operate on as an argument, rather than being invoked as a method on that array.

Do not use the native .reverse() method in your own implementation.

let myArray = [1, 2, 3, 4];
reverse(myArray);
console.log(myArray) // [4, 3, 2, 1] */

function reverseArray(arr) {
  let reversed = [];

  // loop backward
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  // empty original
  arr.length = 0;

  // copy back
  for (let i = 0; i < reversed.length; i++) {
    arr.push(reversed[i]);
  }

  return arr;
}

describe("reverseArray", () => {
  it("is a function", () => {
    expect(typeof reverseArray).toEqual("function");
  });

  it("returns a reference to the given array", () => {
    let originalArray = ["here", "we", "go"];

    let returnedValue = reverseArray(originalArray);
    expect(returnedValue).toEqual(originalArray);
  });

  it("mutates the original array by reversing its elements in place", () => {
    let originalArray = ["here", "we", "go"];

    reverseArray(originalArray);

    expect(originalArray).toEqual(["go", "we", "here"]);
  });
});

/* 6.Deeper Copy
Write a function, deeperCopy, that, unlike .slice, will deeply copy a two-dimensional array.

let myArray = [1, [2, 3]];

let copy = deeperCopy(myArray);
copy[1].push(4);

console.log(myArray); // [1, [2, 3]]

let copy2 = myArray.slice();
copy2[1].push(4);

console.log(myArray); // [1, [2, 3, 4]] */

// Primitive Values

// Primitive values are copied normally.

// let a = 5;
// let b = a;

// b = 10;

// console.log(a); // 5
// console.log(b); // 10

// a and b are separate.

// No problem here.

// Arrays and Objects Work Differently

// Arrays and objects are stored by reference.

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// This does NOT create a new array.

// Both variables point to the SAME array in memory.

// arr2.push(4);

// console.log(arr1); // [1,2,3,4]
// console.log(arr2); // [1,2,3,4]

// Shallow Copy

// A shallow copy copies only the first level.

// Methods like:

// slice()
// spread ...
// Object.assign()

// make shallow copies.

function deeperCopy(arr) {
  let copy = [];

  for (let i = 0; i < arr.length; i++) {
    // check if current element is an array
    if (Array.isArray(arr[i])) {
      let innerCopy = [];

      // copy inner array elements
      for (let j = 0; j < arr[i].length; j++) {
        innerCopy.push(arr[i][j]);
      }

      copy.push(innerCopy);
    } else {
      // copy normal values
      copy.push(arr[i]);
    }
  }

  return copy;
}

describe("deeperCopy", () => {
  it("is a function", () => {
    expect(typeof deeperCopy).toEqual("function");
  });

  it("returns an array", () => {
    let returnedValue = deeperCopy([1, 2, 3]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it("returns a deep copy of the original array", () => {
    let fruits = ["apples", ["bananas", "citrus"]];

    let returnedValue = deeperCopy(fruits);
    returnedValue[1].push("dragon fruit");

    expect(fruits).toEqual(["apples", ["bananas", "citrus"]]);
  });
});
