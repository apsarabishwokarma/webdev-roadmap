/* Only Odds
Define a function, onlyOdds, that accepts a number as an argument. onlyOdds should should return the sum of all the odd numbers between 1 and the given number.

If onlyOdds receives an argument less than 1, it should return 0. */

function onlyOdds(n) {
  let oddSum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      oddSum += i;
    }
  }
  return oddSum;
}
console.log(onlyOdds(7));

describe("onlyOdds", () => {
  it("is a function", () => {
    expect(typeof onlyOdds).toEqual("function");
  });

  it("returns a number", () => {
    let returnedValue = onlyOdds(6);
    expect(typeof returnedValue).toEqual("number");
  });

  it("returns the sum of all odd nums between the provided argument and 0", () => {
    let returnedValue = onlyOdds(10);
    expect(returnedValue).toEqual(9 + 7 + 5 + 3 + 1);
  });

  it("returns 0 if inputted argument is less than 1", () => {
    let returnedValue = onlyOdds(-5);
    expect(returnedValue).toEqual(0);
  });
});

/*
Define a function, crazyCaps, that accepts a string as an argument. 
crazyCaps should return a string in which every other character is capitalized. The first letter should be lower-cased.

 */

function crazyCaps(str) {
  let strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 === 0) {
      strArr[i] = strArr[i].toLowerCase();
    } else {
      strArr[i] = strArr[i].toUpperCase();
    }
  }

  let result = strArr.join("");
  return result;
}
console.log(crazyCaps("This Is Crazy"));

describe("crazyCaps", () => {
  it("is a function", () => {
    expect(typeof crazyCaps).toEqual("function");
  });

  it("returns a string", () => {
    let returnedValue = crazyCaps("any value");
    expect(typeof returnedValue).toEqual("string");
  });

  it("returns a string with alternating lower-case and upper-case letters", () => {
    let returnedValue = crazyCaps("this is crazy");
    expect(returnedValue).toEqual("tHiS Is cRaZy");
  });
});
// ANOTHER WAY TO SOLVE THIS PROBLEM
function crazyCaps(str) {
  return str[0].toLowerCase() + str.slice(1).toUpperCase();
}

console.log(crazyCaps("apsara")); // aPSARA
/* Bacteria Time
Define a function, bacteriaTime, that accepts two arguments:

currentNum (number) - number of starting bacteria
targetNum (number) - desired number of bacteria
Assuming that the number of bacteria doubles every 20 minutes, bacteriaTime 
should return the number of minutes required for the number of bacteria to grow 
from currentNum to a number equal to or larger than targetNum.
You can assume that currentNum will be a positive integer. If targetNum is smaller than currentNum,
 return the string 'targetNum must be larger than currentNum'. */

//Understanding the problem

/*  Every 20 minutes, the number of bacteria doubles.

Example:

Start: 100
After 20 min: 200
After 40 min: 400
After 60 min: 800

We need to find how many minutes it takes until:

currentNum >= targetNum 


bacteriaTime(100, 800);
|   Time | Bacteria |
| -----: | -------: |
|  0 min |      100 |
| 20 min |      200 |
| 40 min |      400 |
| 60 min |      800 |



if bacteriaTime(10, 80);

| Loop | Before Doubling | After Doubling | Minutes |
| ---: | --------------: | -------------: | ------: |
|    1 |              10 |             20 |      20 |
|    2 |              20 |             40 |      40 |
|    3 |              40 |             80 |      60 |
|    4 |              80 |            160 |      80 |

Now 160 >= 90, so stop. Return 80.
*/
function bacteriaTime(currentNum, targetNum) {
  let reqTime = 0;
  if (currentNum < 0) {
    return "currentNum must be positive integer";
  }
  // if (!Number.isInteger(currentNum) || currentNum <= 0) {
  //   return "currentNum must be positive integer";
  // }

  if (targetNum <= currentNum) {
    return "targetNum must be larger than currentNum";
  }

  while (currentNum < targetNum) {
    currentNum = currentNum * 2;
    reqTime += 20;
  }

  return reqTime;
}

console.log(bacteriaTime(10, 80));
describe("bacteriaTime", () => {
  it("is a function", () => {
    expect(typeof bacteriaTime).toEqual("function");
  });

  it("returns the number of minutes required to reach the target", () => {
    let returnedValue = bacteriaTime(1, 8);
    expect(returnedValue).toEqual(60);
  });

  it("returns the number of minutes required to reach a large target", () => {
    let returnedValue = bacteriaTime(3, 6000);
    expect(returnedValue).toEqual(220);
  });

  it("returns a string warning if the targetNum is invalid", () => {
    let returnedValue = bacteriaTime(100, 50);
    expect(returnedValue).toEqual("targetNum must be larger than currentNum");
  });
});

/*
Exponentiate
Write a function exponentiate that accepts two arguments:

base (number)
power (number)
exponentiate should return the result of raising the base by the power. Assume that power will always be an integer greater than or equal to zero.
 Don't forget that any number raised to the 0th power is equal to 1! .   // 9 ko power 0 = 1

Do not use the built-in Math.pow() method 
𝙼𝚊𝚝𝚑.𝚙𝚘𝚠(x,y)= x ko power y
or Javascript's built-in exponentiation operator but feel free to use them moving forward!
*/
//5^5 = 5 * 5 * 5 * 5 * 5=3125

function exponentiate(base, power) {
  let result = 1;
  if (!Number.isInteger(power) || power < 0) {
    return "Power should be greater than 0 ";
  }
  for (i = 0; i < power; i++) {
    if (i == 0) {
      result = base;
    } else {
      result *= base;
    }
  }

  return result;
}
console.log(exponentiate(5, 8));

describe("exponentiate", () => {
  it("is a function", () => {
    expect(typeof exponentiate).toEqual("function");
  });

  it("returns a number", () => {
    let returnedValue = exponentiate(1, 1);
    expect(typeof returnedValue).toEqual("number");
  });

  it("returns the value of the first num raised to the second", () => {
    let returnedValue = exponentiate(3, 6);
    expect(returnedValue).toEqual(Math.pow(3, 6));
  });

  it("returns 1 if the power is 0", () => {
    let returnedValue = exponentiate(20, 0);
    expect(returnedValue).toEqual(1);
  });
});

/* Write a function mySlice that accepts up to three arguments:

originalString (string)
startIdx (number, optional)
endIdx (number, optional)
mySlice should return a string. The returned string should be a copy of the original string. 
If the user defines a startIdx, the returned string should start at that index: */

function mySlice(
  originalString = "",
  starIdx = 0,
  endIdx = originalString.length,
) {
  let result = "";
  for (let i = starIdx; i < endIdx; i++) {
    result += originalString[i];
  }
  return result;
}

console.log("apsara", 1, 4);

describe("mySlice", () => {
  it("is a function", () => {
    expect(typeof mySlice).toEqual("function");
  });

  it("returns a string", () => {
    let returnedValue = mySlice("a piece of pie");
    expect(typeof returnedValue).toEqual("string");
  });

  it("returns a new string starting at the startIdx", () => {
    let returnedValue = mySlice("a piece of pie", 2);
    expect(returnedValue).toEqual("piece of pie");
  });

  it("returns a new string with the correct starting and ending indices", () => {
    let returnedValue = mySlice("a piece of pie", 2, 7);
    expect(returnedValue).toEqual("piece");
  });

  it("returns the original string if no indices are inputted", () => {
    let returnedValue = mySlice("a piece of pie");
    expect(returnedValue).toEqual("a piece of pie");
  });
});

/* 
My Index Of
Define a function, myIndexOf, that accepts three arguments:

source (string)
searchValue (string)
startIdx (number, optional)
If the source contains the searchValue, return the index at which the searchValue starts. If the searchValue appears more than once in the source, return the index from the first occurrence of the searchValue. If the searchValue doesn't exist in the source, return -1.

If a startIdx is passed into the function, ignore any instances of the searchValue that occur before startIdx. If no startIdx is provided, start searching from the beginning of the source.

Hint: Javascript's .slice string method may be useful here.

Do not use the built-in .indexOf string method in your answer.  */

// Understanding the problem
/* myIndexOf("hello", "e");

Indexes:

h e l l o
0 1 2 3 4

"e" starts at index 1. */
/* 
myIndexOf("twice twice", "ice");

Indexes:

t w i c e   t w i c e
0 1 2 3 4 5 6 7 8 9 10

"ice" starts at index 2.
*/

/* myIndexOf("twice twice", "ice", 5);

Ignore everything before index 5.

Search begins at:

t w i c e   t w i c e
0 1 2 3 4 5 6 7 8 9 10
          ^

The next "ice" starts at index 8. */

//NOTE: myIndexOf looks for the searchValue as one continuous substring, with all
//  characters in the same order and next to each other.

myIndexOf("hello", "eo");

// We are checking whether "eo" appears consecutively.
// h e l l o
// 0 1 2 3 4
// since "eo" has length 2, the function checks every 2-character slice.

// | `i` | `source.slice(i, i + 2)` | Compare to `"eo"` |
// | --: | ------------------------ | ----------------- |
// |   0 | `"he"`                   | No                |
// |   1 | `"el"`                   | No                |
// |   2 | `"ll"`                   | No                |
// |   3 | `"lo"`                   | No                |

// No match is found. Return -1.

//with using slice method:
/* Example
source = "hello"      // length = 5
searchValue = "ll"    // length = 2

We need 2 characters.

Possible starting indices:

Start Index	Characters Taken
0	"he"
1	"el"
2	"ll"
3	"lo"

Start index 4 is invalid because there is only one character left ("o").

Calculate the Last Valid Index
source.length - searchValue.length
= 5 - 2
= 3

So the loop should allow:

i <= 3 */

function myIndexOf(source = "", searchValue = "", startIdx = 0) {
  // Check each possible starting index
  for (let i = startIdx; i <= source.length - searchValue.length; i++) {
    // Extract a substring from source
    let piece = source.slice(i, i + searchValue.length);

    // Compare it to searchValue
    if (piece === searchValue) {
      return i;
    }
  }

  // No match found
  return -1;
}

console.log(myIndexOf("hello", "eo"));
describe("myIndexOf", () => {
  it("is a function", () => {
    expect(typeof myIndexOf).toEqual("function");
  });

  it("returns a number", () => {
    let returnedValue = myIndexOf("i love apples", "apples");
    expect(typeof returnedValue).toEqual("number");
  });

  it("returns the first instance of the searchValue in the source", () => {
    let returnedValue = myIndexOf("here and there", "here");
    expect(returnedValue).toEqual(0);
  });

  it("returns the first instance of the searchValue at or after the startIdx", () => {
    let returnedValue = myIndexOf("here and there", "here", 4);
    expect(returnedValue).toEqual(10);
  });

  it("returns -1 if the searchValue is not in the source", () => {
    let returnedValue = myIndexOf("here and there", "nowhere");
    expect(returnedValue).toEqual(-1);
  });
});

//our earlier mySlice function:

function mySlice(str, start, end) {
  let result = "";

  for (let i = start; i < end; i++) {
    result += str[i];
  }

  return result;
}

//Then you can use it like this:

function myIndexOf(source, searchValue, startIdx = 0) {
  for (let i = startIdx; i <= source.length - searchValue.length; i++) {
    if (mySlice(source, i, i + searchValue.length) === searchValue) {
      return i;
    }
  }

  return -1;
}

/* Define a function, mostVowels, that accepts one argument, a string of words.

mostVowels should return the word that has the most vowels.

mostVowels('I am a keeper with some real rhythms'); // => keeper
If none of the words have any vowels, return an empty string. */

function mostVowels(str) {
  let words = str.split(" ");
  let maxVowels = 0;
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i].replace(/[^a-zA-Z]/g, "");
    let vowelCount = 0;

    // Count vowels in the current word
    for (let j = 0; j < word.length; j++) {
      let char = word[j].toLowerCase();

      if ("aeiou".includes(char)) {
        vowelCount++;
      }
    }

    // Update if this word has MORE vowels than the current maximum
    if (vowelCount > maxVowels) {
      maxVowels = vowelCount;
      result = word;
    }
  }

  return result;
}

describe("mostVowels", () => {
  it("is a function", () => {
    expect(typeof mostVowels).toEqual("function");
  });

  it("returns a string", () => {
    let returnedValue = mostVowels(
      "Wit beyond measure is man's greatest treasure.",
    );
    expect(typeof returnedValue).toEqual("string");
  });

  it("returns the word with the most vowels", () => {
    let returnedValue = mostVowels(
      "Wit beyond measure is man's greatest treasure.",
    );
    expect(returnedValue).toEqual("measure");
  });

  it("returns the word with the most vowels even if it's the last string in the sentence", () => {
    let returnedValue = mostVowels("Give her hell from us, Peeves.");
    expect(returnedValue).toEqual("Peeves");
  });

  it("returns an empty string if none of the inputted words have vowels", () => {
    let returnedValue = mostVowels("why dry my sly lynx?");
    expect(returnedValue).toEqual("");
  });
});

// Other approach to solve this problem without using regex:

function mostVowels(str) {
  let words = str.split(" ");
  let maxVowels = 0;
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let originalWord = words[i];
    let cleanWord = "";
    let vowelCount = 0;

    // Remove punctuation manually (keep only letters)
    for (let j = 0; j < originalWord.length; j++) {
      let char = originalWord[j];

      if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        cleanWord += char;
      }
    }

    // Count vowels in the cleaned word
    for (let j = 0; j < cleanWord.length; j++) {
      let char = cleanWord[j].toLowerCase();

      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        vowelCount++;
      }
    }

    // Update result if this word has more vowels
    if (vowelCount > maxVowels) {
      maxVowels = vowelCount;
      result = cleanWord;
    }
  }

  return result;
}

console.log(mostVowels("I am a keeper with some real rhythms")); // keeper
console.log(mostVowels("Harry met Peeves.")); // Peeves
console.log(mostVowels("sky why fly")); // ""

// Another approach to solve this problem

// "aeiou".includes(a)

// checks whether the value stored in a exists anywhere inside the string "aeiou".

// What includes() Does

// includes() is a built-in JavaScript method that answers:

// “Does this string or array contain this value?”

// It always returns:

// true → value is found
// false → value is not found
function mostVowels(str) {
  let words = str.split(" ");
  let maxVowels = 0;
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let vowelCount = 0;

    // Count vowels in the current word
    for (let j = 0; j < word.length; j++) {
      let char = word[j].toLowerCase();

      if ("aeiou".includes(char)) {
        vowelCount++;
      }
    }

    // Update if this word has MORE vowels than the current maximum
    if (vowelCount > maxVowels) {
      maxVowels = vowelCount;
      result = word.replace(/[^a-zA-Z]/g, ""); // Remove punctuation from the result
    }
  }

  return result;
}

console.log(mostVowels("I am a keeper with some real rhythms"));
