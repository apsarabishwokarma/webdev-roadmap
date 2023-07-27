/* 1.Define a function, howEqual, that accepts two arguments of any type.

howEqual should return the string 'loosely' if the two values passed into the function are 
loosely equal. howEqual should return 'strictly' if the two values are strictly equal. howEqual should return the string 'not equal'
 if the two values are neither strictly nor loosely equal. */

function howEqual(a, b) {
  if (a === b) {
    return "strictly";
  } else if (a == b) {
    return "loosely";
  } else {
    return "not equal";
  }
}

console.log(howEqual(2, "2"));

describe("howEqual", () => {
  it("is a function", () => {
    expect(typeof howEqual).toEqual("function");
  });

  it("returns a string", () => {
    let returnedValue = howEqual(10, 5 + 5);
    expect(typeof returnedValue).toEqual("string");
  });

  it("returns the string 'loosely' if the values are loosely equal", () => {
    let returnedValue = howEqual(0, false);
    expect(returnedValue).toEqual("loosely");
  });

  it("returns the string 'strictly' if the values are strictly equal", () => {
    let returnedValue = howEqual(0 === -1, false);
    expect(returnedValue).toEqual("strictly");
  });

  it("returns the string 'not equal' if the values are not equal", () => {
    let returnedValue = howEqual(0, -1);
    expect(returnedValue).toEqual("not equal");
  });
});

/*2.
Write a function isTruthy that accepts a single argument of any type.

isTruthy should return true if that argument is 'truthy'.

If the value is 'falsey', return one of the messages below, corresponding to the type of the value tested.

'The boolean value false is falsey'
'The null value is falsey'
'undefined is falsey'
'The number 0 is falsey (the only falsey number)'
'The empty string is falsey (the only falsey string)' */

function isTruthy(value) {
  if (value) {
    return true;
  } else if (value === false) {
    return "The boolean value false is falsey";
  } else if (value === null) {
    return "The null value is falsey";
  } else if (value === undefined) {
    return "undefined is falsey";
  } else if (value === 0) {
    return "The number 0 is falsey (the only falsey number)";
  } else if (value === "") {
    return "The empty string is falsey (the only falsey string)";
  }
}

console.log(isTruthy(0));

function isTruthy(value) {
  if (value) {
    return true;
  } else if (value === null) {
    return "The null value is falsey";
  } else if (value === undefined) {
    return "undefined is falsey";
  } else if (value === "") {
    return "The empty string is falsey (the only falsey string)";
  } else if (value === 0) {
    return "The number 0 is falsey (the only falsey number)";
  } else if (value === false) {
    return "The boolean value false is falsey";
  }
}
console.log(isTruthy(8));

describe("isTruthy", () => {
  it("is a function", () => {
    expect(typeof isTruthy).toEqual("function");
  });

  it("returns true if given the boolean true", () => {
    let returnedValue = isTruthy(true);
    expect(returnedValue).toEqual(true);
  });

  it("returns true if given a truthy number", () => {
    let returnedValue = isTruthy(1);
    expect(returnedValue).toEqual(true);
  });

  it("returns true if given a truthy string", () => {
    let returnedValue = isTruthy("Honesty is the best policy");
    expect(returnedValue).toEqual(true);
  });

  it("returns the expected string if given the boolean false", () => {
    let returnedValue = isTruthy(false);
    expect(returnedValue).toEqual("The boolean value false is falsey");
  });

  it("returns the expected string if given null", () => {
    let returnedValue = isTruthy(null);
    expect(returnedValue).toEqual("The null value is falsey");
  });

  it("returns the expected string if given undefined", () => {
    let returnedValue = isTruthy();
    expect(returnedValue).toEqual("undefined is falsey");
  });

  it("returns the expected string if given the number 0", () => {
    let returnedValue = isTruthy(0);
    expect(returnedValue).toEqual(
      "The number 0 is falsey (the only falsey number)",
    );
  });

  it("returns the expected string if given an empty string", () => {
    let returnedValue = isTruthy("");
    expect(returnedValue).toEqual(
      "The empty string is falsey (the only falsey string)",
    );
  });
});

/* 3.
My Or, My And
Define a function, myOr, that accepts three arguments of any type.

myOr should return the same result as the buit-in || operator:

myOr(true, true, false) === (true || true || false); // => true
Then, define a function, myAnd, that accepts three arguments of any type.

myAnd should return the same result as the buit-in && operator:

myAnd(1, 'apples', true) === (1 && 'apples' && true); // => true
Hint: Refer to the two rules for and and or [from this lecture on truthiness and type coercion] */

function myOr(a, b, c) {
  if (a) {
    return a;
  } else if (b) {
    return b;
  } else {
    return c;
  }
}

function myAnd(a, b, c) {
  if (!a) {
    return a;
  } else if (!b) {
    return b;
  } else if (!c) {
    return c;
  }
}

describe("myOr", () => {
  it("is a function", () => {
    expect(typeof myOr).toEqual("function");
  });

  it("returns the first value if it is the first truthy value", () => {
    let returnedValue = myOr("apples", 1, false);
    expect(returnedValue).toEqual("apples");
  });

  it("returns the second value if it is the first truthy value", () => {
    let returnedValue = myOr(null, "i am truthy", "also true");
    expect(returnedValue).toEqual("i am truthy");
  });

  it("returns the third value if it is the first truthy value", () => {
    let returnedValue = myOr(false, false, true);
    expect(returnedValue).toEqual(true);
  });

  it("returns the third value if none of the values are truthy", () => {
    let returnedValue = myOr("", 0, null);
    expect(returnedValue).toEqual(null);
  });
});

describe("myAnd", () => {
  it("is a function", () => {
    expect(typeof myAnd).toEqual("function");
  });

  it("returns the first value if it is the first falsey value", () => {
    let returnedValue = myAnd(0, 1, false);
    expect(returnedValue).toEqual(0);
  });

  it("returns the second value if it is the first falsey value", () => {
    let returnedValue = myAnd(20, "", "i am truthy");
    expect(returnedValue).toEqual("");
  });

  it("returns the third value if it is the first falsey value", () => {
    let returnedValue = myAnd(true, "happy", 0);
    expect(returnedValue).toEqual(0);
  });

  it("returns the third value if all of the values are truthy", () => {
    let returnedValue = myAnd("finally", "we did it!", "yay!");
    expect(returnedValue).toEqual("yay!");
  });
});

/* 4.
Only One
Write a function onlyOne that accepts three arguments of any type.

onlyOne should return true only if exactly one of the three arguments are truthy. Otherwise, it should return false.

Do not use the equality operators (== and ===) in your solution.

onlyOne(false, false, true); // => true
onlyOne(0, 1, 2) // => false */

//Return true only when exactly one value is truthy.

function onlyOne(a, b, c) {
  if (a && !b && !c) {
    return true;
  } else if (!a && b && !c) {
    return true;
  } else if (!a && !b && c) {
    return true;
  } else {
    return false;
  }
}

/* 
This checks these three cases:

Only a is truthy.
Only b is truthy.
Only c is truthy.

Version 2 (Different) */
function onlyOne(a, b, c) {
  if (a || b || c) {
    return true;
  } else {
    return false;
  }
}

//This returns true if at least one value is truthy.

/* 5.Zero Dark Thirty
Write a function zeroDarkThirty that accepts a number as an argument.

zeroDarkThirty should return a number with all of the zeroes removed:

zeroDarkThirty(102302) // => 1232
zeroDarkThirty(606.203) // => 66.23
If the number 0 is passed in as the argument, return NaN. */

function zeroDarkThirty(num) {
  let str = num.toString();
  let result = "";
  if (num === 0) {
    return NaN;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] != 0) {
      result += str[i];
    }
  }
  return Number(result);
}
console.log(zeroDarkThirty(0));
console.log(zeroDarkThirty(20011));

describe("zeroDarkThirty", () => {
  it("is a function", () => {
    expect(typeof zeroDarkThirty).toEqual("function");
  });

  it("returns a number", () => {
    let returnedValue = zeroDarkThirty(10);
    expect(typeof returnedValue).toEqual("number");
  });

  it("returns the original number after stripping out the zeros", () => {
    let returnedValue = zeroDarkThirty(10000000000);
    expect(returnedValue).toEqual(1);
  });

  it("returns NaN if given an 0", () => {
    let returnedValue = zeroDarkThirty(0);
    expect(returnedValue).toEqual(NaN);
  });
});
