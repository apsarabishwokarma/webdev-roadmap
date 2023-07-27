// 1. Define a function greeting that accepts an optional string argument called name.
// greeting should return a personalized string if the name is present.
function greeting(name) {
  if (name) {
    return "Hello " + name + "!";
  } else {
    return "Hello!";
  }
}

describe("greeting", () => {
  it("is a function", () => {
    expect(typeof greeting).toEqual("function");
  });

  it("returns a string", () => {
    let returnedValue = greeting();
    expect(typeof returnedValue).toEqual("string");
  });

  it("returns a personalized greeting, given a name", () => {
    let returnedValue = greeting("Layla");
    expect(returnedValue).toEqual("Hello Layla!");
  });

  it("returns an anonymous greeting if no name is provided", () => {
    let returnedValue = greeting();
    expect(returnedValue).toEqual("Hello!");
  });
});

/* 2. Define a function doYouPlayTheTheremin that accepts a string as an argument. doYouPlayTheTheremin should return true if the inputted string starts with the letters s or S. Otherwise, doYouPlayTheTheremin should return false.

doYouPlayTheTheremin('Griffin'); // => false
doYouPlayTheTheremin('Scott'); // => true */
function doYouPlayTheTheremin(str) {
  if (str.startsWith("s") || str.startsWith("S")) {
    return true;
  } else {
    return false;
  }
}

describe("doYouPlayTheTheremin", () => {
  it("is a function", () => {
    expect(typeof doYouPlayTheTheremin).toEqual("function");
  });

  it("returns an boolean", () => {
    let returnedValue = doYouPlayTheTheremin("Mark");
    expect(typeof returnedValue).toEqual("boolean");
  });

  it("returns true if the first letter of the name starts with s", () => {
    let returnedValue = doYouPlayTheTheremin("sarah");
    expect(returnedValue).toEqual(true);
  });

  it("returns true if the first letter of the name starts with S", () => {
    let returnedValue = doYouPlayTheTheremin("Sarah");
    expect(returnedValue).toEqual(true);
  });

  it("returns false given any other input", () => {
    let returnedValue = doYouPlayTheTheremin("Frank");
    expect(returnedValue).toEqual(false);
  });
});

/* 3.Define a function lastCharacter that accepts two strings as arguments. lastCharacter should return true if both strings end with the same character. Otherwise, lastCharacter should return false.

lastCharacter('apples', 'pumpkins'); // => true

lastCharacter('marker', 'pen'); // => false */

// function lastCharacter(str1,str2){
//   if(str1.endsWith()==str2.endsWith()){
//     return true;
//   }else{
//     return false;
//   }

// } can't use endsWith method, so I will use charAt and length to get the last character of the string since
// the last character of a string is at the index of length - 1

//  What endsWith() Does

// endsWith(searchString) checks whether a string ends with a specific substring.

// Example:

// "hello".endsWith("o"); // true
// "hello".endsWith("lo"); // true

// To compare the last character of two strings, get the last character from each string

function lastCharacter(str1, str2) {
  if (str1[str1.length - 1] == str2[str2.length - 1]) {
    return true;
  } else {
    return false;
  }
}

describe("lastCharacter", () => {
  it("is a function", () => {
    expect(typeof lastCharacter).toEqual("function");
  });

  it("returns a boolean", () => {
    let returnedValue = lastCharacter("happy string1", "happy string2");
    expect(typeof returnedValue).toEqual("boolean");
  });

  it("returns true if both strings end with the same character", () => {
    let returnedValue = lastCharacter("funiful", "wonderful");
    expect(returnedValue).toEqual(true);
  });

  it("returns false if the strings end with different characters", () => {
    let returnedValue = lastCharacter("happy", "sad");
    expect(returnedValue).toEqual(false);
  });
});

/* 
4.Write a function maxOfThree that accepts three number arguments. maxOfThree should 
return largest number of the three


 */

function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > c && b > a) {
    return b;
  } else {
    return c;
  }
}

describe("maxOfThree", () => {
  it("is a function", () => {
    expect(typeof maxOfThree).toEqual("function");
  });

  it("returns a number", () => {
    let returnedValue = maxOfThree(1, 2, 3);
    expect(typeof returnedValue).toEqual("number");
  });

  it("returns the first number if it is the largest", () => {
    let returnedValue = maxOfThree(10, 8, 6);
    expect(returnedValue).toEqual(10);
  });

  it("returns the second number if it is the largest", () => {
    let returnedValue = maxOfThree(20, 40, 10);
    expect(returnedValue).toEqual(40);
  });

  it("returns the third number if it is the largest", () => {
    let returnedValue = maxOfThree(3, 6, 9);
    expect(returnedValue).toEqual(9);
  });
});

/* 5.Every Which Way
Write a function everyWhichWay that accepts three number arguments. everyWhichWay should:

return 'sum' if the sum of the first two numbers equals the third
return 'difference' if the first number minus the second equals the third
return 'product' if the product of the first two numbers equals the third
return 'fraction' if the first number divided by the second equals the third
return null if none of the above are true */

function everyWhichWay(a, b, c) {
  if (a + b == c) {
    return "sum";
  } else if (a - b == c) {
    return "difference";
  } else if (a * b == c) {
    return "product";
  } else if (a / b == c) {
    return "fraction";
  } else {
    return null;
  }
}

describe("everyWhichWay", () => {
  it("is a function", () => {
    expect(typeof everyWhichWay).toEqual("function");
  });

  it('returns "sum" if the sum of the first two numbers equals the third', () => {
    let returnedValue = everyWhichWay(1, 2, 3);
    expect(returnedValue).toEqual("sum");
  });

  it('return "difference" if the first number minus the second equals the third', () => {
    let returnedValue = everyWhichWay(10, 9, 1);
    expect(returnedValue).toEqual("difference");
  });

  it('returns "product" if the product of the first two numbers equals the third', () => {
    let returnedValue = everyWhichWay(10, 5, 50);
    expect(returnedValue).toEqual("product");
  });

  it('returns "fraction" if the first number divided by the second equals the third', () => {
    let returnedValue = everyWhichWay(30, 3, 10);
    expect(returnedValue).toEqual("fraction");
  });

  it("returns if none of the other conditions are true", () => {
    let returnedValue = everyWhichWay(124, 2345, 1);
    expect(returnedValue).toEqual(null);
  });
});
