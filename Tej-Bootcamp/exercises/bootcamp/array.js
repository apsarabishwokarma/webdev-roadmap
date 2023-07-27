/* Odd Couple
Define a function, oddCouple, that accepts an array of numbers as an argument.

oddCouple should return a new array with the first two odd numbers from the original array:

oddCouple([1, 2, 3, 4, 5]); // => [1, 3]
If fewer than two odd numbers exist in the original array, return an array with only the one odd number, or an empty array if there are no odd numbers:

oddCouple([10, 15, 20]); // => [15]
oddCouple(2, 4, 6, 8); // => [] */

function oddCouple(arr) {
  let oddNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNumbers.push(arr[i]);
    }
    if (oddNumbers.length === 2) {
      //This line stops the loop as soon as we have found the first two odd numbers.
      break;
    }
  }
  return oddNumbers;
}
console.log(oddCouple([1, 2, 3, 4, 5]));

/*2 My Includes
Define a function, myIncludes, that accepts an array and a searchValue as arguments.

myIncludes should return true if the searchValue is an element in the array. Otherwise, myIncludes should return false.

Do not use the built-in .includes array method during this problem. Feel free to use it on any future problem though! Note that strings have an .includes method, too.

myIncludes([10, 20, 30], 20); // => true
myIncludes(['apples', 'bananas', 'citrus'], 'pears'); // => false*/

function myIncludes(arr, searchValue) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      return true;
    }
  }
  return false;
}

describe("myIncludes", () => {
  it("is a function", () => {
    expect(typeof myIncludes).toEqual("function");
  });

  it("returns a boolean", () => {
    let returnedValue = myIncludes([1, 2, 3], 3);
    expect(typeof returnedValue).toEqual("boolean");
  });

  it("returns true if the searchValue is in the array", () => {
    let returnedValue = myIncludes(["ruby", "go", "javascript"], "javascript");
    expect(returnedValue).toEqual(true);
  });

  it("returns false if the searchValue is not in the array", () => {
    let returnedValue = myIncludes(
      ["fun", "happy things", "kittens"],
      "sad things",
    );
    expect(returnedValue).toEqual(false);
  });

  it("returns false if the searchValue is loosely equal to an element in the array", () => {
    let returnedValue = myIncludes([5, 10, 15], "10");
    expect(returnedValue).toEqual(false);
  });
});

/* 3.My Last Index Of
Define a function, myLastIndexOf, that accepts up to three arguments:

array
searchValue
startIdx (optional)
myLastIndexOf should return the last index at which searchValue appears in the array.

myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3
If searchValue isn't in the array, myLastIndexOf should return -1.

myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica'); // => -1
If startIdx is defined, myLastIndexOf should start looking for the searchValue at that index, and then move towards the front of the array as it looks for searchValue.

myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 0
You cannot use the built-in .lastIndexOf method for this problem, but feel free to use it in the future! Note that strings also have a .lastIndexOf method. */

function myLastIndexOf(array, searchValue, startIdx) {
  // If startIdx is not provided, start from the last index
  if (startIdx === undefined) {
    startIdx = array.length - 1; // Start from the last index of the array and startIdx  is length - 1 because array indices are zero-based.
  }

  // Search backwards
  for (let i = startIdx; i >= 0; i--) {
    if (array[i] === searchValue) {
      return i;
    }
  }

  return -1;
}

describe("myLastIndexOf", () => {
  it("is a function", () => {
    expect(typeof myLastIndexOf).toEqual("function");
  });

  it("returns a number", () => {
    let returnedValue = myLastIndexOf([1, 2, 3], 2);
    expect(typeof returnedValue).toEqual("number");
  });

  it("returns the last index at which the searchValue appears in the array", () => {
    let returnedValue = myLastIndexOf([0, 10, 20, 10, 0], 10);
    expect(returnedValue).toEqual(3);
  });

  it("returns -1 if the searchValue does not exist in the array", () => {
    let returnedValue = myLastIndexOf(["peanut", "cashew", "walnut"], "lemon");
    expect(returnedValue).toEqual(-1);
  });

  it("returns the last index of the searchValue that is less than the startIdx", () => {
    let returnedValue = myLastIndexOf([0, 10, 20, 10, 0], 10, 2);
    expect(returnedValue).toEqual(1);
  });
});

/*4.My Reverse
Define a function myReverse that accepts an array.

myReverse should return a new array with the elements in reverse order.

myReverse([1, 2, 3]); // => [3, 2, 1]
Do not use the built-in .reverse method for this problem. You can use it on all future problems though! */

function myReverse(arr) {
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

console.log(myReverse([1, 2, 3])); // [3, 2, 1]

/*5.My Unshift
Write a function myUnshift that takes an array and a value of any type as arguments.

myUnshift should return a new array, with value as the first element in the new array.

myUnshift([1, 2, 3], 0); // => [0, 1, 2, 3];
Do not use the built-in .unshift method for this problem! */

function myUnshift(arr, value) {
  let result = [value];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }

  return result;
}

console.log(myUnshift([1, 2, 3], 0)); // [0, 1, 2, 3]
// Idea

// unshift() adds an element to the beginning of an array.

// Since we cannot use the built-in .unshift(), we create a new array manually.

// Array 2:-----------------

// Nested array: any array inside another array.
// Multidimensional array: array of arrays.
// Matrix: a 2D array with equal row sizes.
// a[i][j] means:
// first get a[i]
// then get [j] from that inner array.

// 1 Even and Odd
// Define a function, evenAndOdd, that accepts an array.

// evenAndOdd should return a new array containing two smaller arrays. The first element in the new array should be an array with all of the even numbers from the original array. The second element in the new array should be an array with all of the odd numbers from the original array.

// evenAndOdd([1, 2, 3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]

function evenAndOdd(arr) {
  let evens = [];
  let odds = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    } else {
      odds.push(arr[i]);
    }
  }

  return [evens, odds];
}

console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));
// [[2, 4, 6], [1, 3, 5]]

/* 
2.Array Flattener
Define a function, arrayFlattener, that accepts a two-dimensional array as an argument.

arrayFlattener should return a new, one-dimensional array.

arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4] */

//Nested array
// [1, [2, 3], 4]
// What “Flatten” Means?
// Flattening removes one level of nesting.

function arrayFlattener(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // Array.isArray(arr[i]) ? result.push(...arr[i]) : result.push(arr[i]);  // This line uses the spread operator to push all elements
    //  of arr[i] into result if arr[i] is an array. If arr[i] is not an array, it simply pushes arr[i] itself into result.
    if (Array.isArray(arr[i])) {
      // This line checks if the current element arr[i] is an array. If it is, we need to flatten it by
      // iterating through its elements and adding them to the result array.
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}
// if (Array.isArray(arr[i])) { ... } is a check to see whether the value at position i in the array arr is itself an array.

/* 3. Zoo Inventory Define a function, zooInventory, that accepts a multi-dimensional array of animal facts. zooInventory should 
return a new, flat array of strings. Each element in the new array should be a sentence about each of the animals in the zoo.
 Hint: nested for-loops are not necessary to complete this problem. This would be a great time to use template literals, also known as 
 string interpolation.
  let myZoo = [ ['King Kong', ['gorilla', 42]], ['Nemo', ['fish', 5]], ['Punxsutawney Phil', ['groundhog', 11]] ]; 
zooInventory(myZoo); */ /* => ['King Kong the gorilla is 42.', 'Nemo the fish is 5.' 'Punxsutawney Phil the groundhog is 11.'] */

function zooInventory(zoo) {
  let result = [];

  for (let i = 0; i < zoo.length; i++) {
    // Get one animal record
    let animal = zoo[i];
    // Example: ["King Kong", ["gorilla", 42]]

    // Get the details array
    let details = animal[1];
    // Example: ["gorilla", 42]

    // Extract values
    let name = animal[0];
    let species = details[0];
    let age = details[1];

    // Build the sentence
    result.push(`${name} the ${species} is ${age}.`);
  }

  return result;
}

//another approach

function zooInventory(zoo) {
  let result = [];

  for (let i = 0; i < zoo.length; i++) {
    let name = zoo[i][0];
    let species = zoo[i][1][0];
    let age = zoo[i][1][1];

    result.push(`${name} the ${species} is ${age}.`);
  }

  return result;
}

// another approach to zooInventory function using destructuring assignment

function zooInventory(zoo) {
  let result = [];

  for (let i = 0; i < zoo.length; i++) {
    let [name, [species, age]] = zoo[i]; // This line uses destructuring assignment to extract the name, species, and age from the nested array structure of each animal's information in the zoo array.

    result.push(`${name} the ${species} is ${age}.`);
  }
}

/* 
4.Make Grid
Write a function makeGrid that accepts two arguments:

numColumns (number) - how many columns we want our grid to have
numRows (number) - how many rows we want our grid to have
makeGrid should return a two-dimensional array that represents a grid of the given dimensions.

makeGrid(3,4); */
/* => [[1, 2, 3],
       [1, 2, 3],
       [1, 2, 3],
       [1, 2, 3]]
*/
function makeGrid(numColumns, numRows) {
  let grid = [];

  for (let i = 0; i < numRows; i++) {
    let row = [];

    for (let j = 1; j <= numColumns; j++) {
      row.push(j);
    }

    grid.push(row);
  }

  return grid;
}

console.log(makeGrid(3, 4));

describe("makeGrid", () => {
  it("is a function", () => {
    expect(typeof makeGrid).toEqual("function");
  });

  it("returns an array", () => {
    let returnedValue = makeGrid(1, 1);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it("returns a grid with the correct number of rows", () => {
    let returnedValue = makeGrid(3, 6);
    expect(returnedValue.length).toEqual(6);
  });

  it("returns a grid with the correct number of columns", () => {
    let returnedValue = makeGrid(5, 1);
    let row = returnedValue[0];
    expect(row.length).toEqual(5);
  });

  it("returns a grid with the correct cell values", () => {
    let returnedValue = makeGrid(2, 2);
    let expectedValue = [
      [1, 2],
      [1, 2],
    ];
    expect(returnedValue).toEqual(expectedValue);
  });
});

// 5.Remove Columns
// Write a function removeColumns that accepts two arguments:

// originalGrid (two-dimensional array)
// numColums (number)
// removeColumns should return a new grid with the correct number of columns removed.

// removeColumns([[1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3]], 2);
/* => [[1],
       [1],
       [1],
       [1]]
*/

function removeColumns(originalGrid, numColumns) {
  let newGrid = [];

  for (let i = 0; i < originalGrid.length; i++) {
    let newRow = [];

    // Keep only the columns that remain
    for (let j = 0; j < originalGrid[i].length - numColumns; j++) {
      newRow.push(originalGrid[i][j]);
    }

    newGrid.push(newRow);
  }

  return newGrid;
}

describe("removeColumns", () => {
  it("is a function", () => {
    expect(typeof removeColumns).toEqual("function");
  });

  it("returns an array", () => {
    let returnedValue = removeColumns([[1, 2]], 1);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it("returns a grid with one column removed, given the number 1", () => {
    let originalGrid = [
      [1, 2, 3],
      [1, 2, 3],
    ];

    let returnedValue = removeColumns(originalGrid, 1);

    let expectedValue = [
      [1, 2],
      [1, 2],
    ];

    expect(returnedValue).toEqual(expectedValue);
  });

  it("returns a grid with two columns removed, given the number 2", () => {
    let originalGrid = [[1, 2, 3, 4, 5, 6]];

    let returnedValue = removeColumns(originalGrid, 2);

    let expectedValue = [[1, 2, 3, 4]];

    expect(returnedValue).toEqual(expectedValue);
  });
});
/* 
6.My Join
Define a function, myJoin, that accepts up to two arguments:

array
separator (string, optional)
myJoin should return a string with all of the elements from the array joined together. The separator should separate the joined elements:

myJoin(['let\'s', 'make', 'a', 'list'], ' '); // => "let's make  a list"
myJoin(['a', 'b', 'c'], '+'); // => "a+b+c"
If separator is undefined, use ',' as the default separator.

myJoin(['Peter', 'Paul', 'Mary']); // => "Peter,Paul,Mary"
If any elements in the array are undefined or null, they should be replaced with an empty string in the returned string.

myJoin(['hello', undefined, 'world'], '-'); // => "hello--world"
Do not use the built-in .join array method in your answer. Feel free to use it in all future problems though! */

function myJoin(array, separator) {
  // Default separator if none is provided
  if (separator === undefined) {
    separator = ",";
  }

  let result = "";

  for (let i = 0; i < array.length; i++) {
    let value = array[i];

    // Replace null or undefined with empty string
    if (value === undefined || value === null) {
      value = "";
    }

    // Add separator before every element except the first
    if (i > 0) {
      result += separator;
    }

    // Add current value
    result += value;
  }

  return result;
}

describe("myJoin", () => {
  it("is a function", () => {
    expect(typeof myJoin).toEqual("function");
  });

  it("returns a string", () => {
    let returnedValue = myJoin(["apples", "bananas"]);
    expect(typeof returnedValue).toEqual("string");
  });

  it("returns a string with all of the array element joined together, separated by the separator", () => {
    let returnedValue = myJoin(["Beyonce", "Kelly", "Michelle"], " and ");
    expect(returnedValue).toEqual("Beyonce and Kelly and Michelle");
  });

  it("returns a string with all of the array element joined together using a comma as the default separator", () => {
    let returnedValue = myJoin(["Beyonce", "Kelly", "Michelle"]);
    expect(returnedValue).toEqual("Beyonce,Kelly,Michelle");
  });

  it("returns a string that replaces null or undefined values with an empty string", () => {
    let returnedValue = myJoin([null, "came, ", "saw, ", "conquered."], "I ");
    expect(returnedValue).toEqual("I came, I saw, I conquered.");
  });
});
/* 
7.My Slice
Define a function, mySlice, that accepts up to three arguments:

originalArray (array)
startIdx (number, optional)
endIdx (number, optional)
mySlice should return a copy of the original array. The copy should include all of the elements from originalArray, starting at and including the startIdx, up through and excluding the endIdx.

mySlice([1, 2, 3], 1, 2) // => [2]
If endIdx is undefined, include all the indices starting at and including the startIdx through the end of the original array.

mySlice([1, 2, 3], 1) // => [2, 3]
If startIdx is undefined, return a copy of the original array.

mySlice([1, 2, 3]) // => [1, 2, 3]
startIdx and endIdx can be negative numbers, in which case they count indices from the back of the array.

mySlice([1, 2, 3], -1) // => [3]
Do not use the built-in .slice array method in your answer. Feel free to use it in all future problems though! */

// What slice() Does

// slice(startIdx, endIdx) returns:

// starting at startIdx
// including startIdx
// stopping before endIdx

// So:

// [1, 2, 3].slice(1, 3);

// returns:

// [2, 3]
// Rule to Remember
// startIdx → included
// endIdx   → excluded

function mySlice(originalArray, startIdx, endIdx) {
  let result = [];

  // Default startIdx
  if (startIdx === undefined) {
    startIdx = 0;
  }

  // Convert negative startIdx
  if (startIdx < 0) {
    startIdx = originalArray.length + startIdx;
  }

  // Default endIdx
  if (endIdx === undefined) {
    endIdx = originalArray.length;
  }

  // Convert negative endIdx
  if (endIdx < 0) {
    endIdx = originalArray.length + endIdx;
  }

  // Copy elements from startIdx up to (but not including) endIdx
  for (let i = startIdx; i < endIdx; i++) {
    result.push(originalArray[i]);
  }

  return result;
}

describe("mySlice", () => {
  it("is a function", () => {
    expect(typeof mySlice).toEqual("function");
  });

  it("returns an array", () => {
    let returnedValue = mySlice([1, 2, 3]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it("returns a copy of the array with the correct starting value", () => {
    let returnedValue = mySlice(["bagel", "baguette", "bialy", "brioche"], 2);
    expect(returnedValue).toEqual(["bialy", "brioche"]);
  });

  it("returns a copy of the array with the correct ending value", () => {
    let returnedValue = mySlice(
      ["bagel", "baguette", "bialy", "brioche"],
      0,
      2,
    );
    expect(returnedValue).toEqual(["bagel", "baguette"]);
  });

  it("returns a copy of the array with the correct starting and ending values", () => {
    let returnedValue = mySlice(
      ["bagel", "baguette", "bialy", "brioche"],
      1,
      3,
    );
    expect(returnedValue).toEqual(["baguette", "bialy"]);
  });

  it("returns a copy of the array with the correct starting value if the startingIdx is negative", () => {
    let returnedValue = mySlice(["bagel", "baguette", "bialy", "brioche"], -2);
    expect(returnedValue).toEqual(["bialy", "brioche"]);
  });

  it("returns a copy of the array with the correct ending value if the endingIdx is negative", () => {
    let returnedValue = mySlice(
      ["bagel", "baguette", "bialy", "brioche"],
      0,
      -1,
    );
    expect(returnedValue).toEqual(["bagel", "baguette", "bialy"]);
  });

  it("returns a copy of the array if startingIdx and endingIdx are undefined", () => {
    let returnedValue = mySlice(["bagel", "baguette", "bialy", "brioche"]);
    expect(returnedValue).toEqual(["bagel", "baguette", "bialy", "brioche"]);
  });
});

/* 
8.Rotate Array
Define a function, rotateArray, that accepts two arguments:

originalArray (array)
rotateNum (number)
If rotateNum is positive, rotate should return a copy of the original array rotated to the right by the rotateNum `of indices.

rotate([1, 2, 3, 4, 5], 1) // => [5, 1, 2, 3, 4]
If rotateNum is negative, rotate should return a copy of the original array rotated to the left by the rotateNum of indices.

rotate([1, 2, 3, 4, 5], -1) // => [2, 3, 4, 5, 1]
If rotateNum is 0, rotate should return a copy of the original array without rotating it.

rotate([1, 2, 3, 4, 5], 0) // => [1, 2, 3, 4, 5]
You can assume the absolute value of rotateNum will be less than the length of the original array. */

function rotateArray(originalArray, rotateNum) {
  let result = [];
  let length = originalArray.length;

  // Rotate right
  if (rotateNum > 0) {
    // Step 1: copy last rotateNum elements
    for (let i = length - rotateNum; i < length; i++) {
      result.push(originalArray[i]);
    }

    // Step 2: copy remaining elements
    for (let i = 0; i < length - rotateNum; i++) {
      result.push(originalArray[i]);
    }
  }

  // Rotate left
  else if (rotateNum < 0) {
    let leftLength = -rotateNum; // convert to positive

    // Step 1: copy from shift to end
    for (let i = leftLength; i < length; i++) {
      result.push(originalArray[i]);
    }

    // Step 2: copy first shift elements
    for (let i = 0; i < leftLength; i++) {
      result.push(originalArray[i]);
    }
  }

  // No rotation
  else {
    for (let i = 0; i < length; i++) {
      result.push(originalArray[i]);
    }
  }

  return result;
}
describe("rotateArray", () => {
  it("is a function", () => {
    expect(typeof rotateArray).toEqual("function");
  });

  it("returns an array", () => {
    let returnedValue = rotateArray([1, 2, 3], 0);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it("returns a copy of the array rotated to the right, if rotateNum is positive", () => {
    let returnedValue = rotateArray(["first", "second", "third", "fourth"], 1);
    expect(returnedValue).toEqual(["fourth", "first", "second", "third"]);
  });

  it("returns a copy of the array rotated to the left, if rotateNum is negative", () => {
    let returnedValue = rotateArray(["first", "second", "third", "fourth"], -3);
    expect(returnedValue).toEqual(["fourth", "first", "second", "third"]);
  });

  it("returns the original array if rotateNum is 0", () => {
    let returnedValue = rotateArray(["first", "second", "third", "fourth"], 0);
    expect(returnedValue).toEqual(["first", "second", "third", "fourth"]);
  });
});
