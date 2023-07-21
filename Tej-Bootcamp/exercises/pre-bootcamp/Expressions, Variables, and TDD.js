// Create a variable called favoriteActivity. Assign the value 'coding' to favoriteActivity.

let favoriteActivity = "coding";
describe("favoriteActivity", function () {
  it("should be coding", function () {
    expect(favoriteActivity).toEqual("coding");
  });
});

/* Create a variable called myFirstName. Assign myFirstName a string value that represents your first name.

 Create another variable called myFavoriteNum. Assign myFavoriteNum a number value that represents your favorite number!

 Create a third variable, havingFun. Assign havingFun a boolean value that reflects whether or not you're having fun! */

let myFirstName = "apsara";
let myFavoriteNum = 7;
let havingFun = true;

describe("myFirstName", function () {
  it("should be a string value", function () {
    expect(typeof myFirstName).toEqual("string");
  });
});
describe("myFavoriteNum", function () {
  it("should be a number value", function () {
    expect(typeof myFavoriteNum).toEqual("number");
  });
});

describe("havingFun", function () {
  it("should be a boolean value", function () {
    expect(typeof havingFun).toEqual("boolean");
  });
});

//Given three numbers, assign the sum of all three numbers to a variable called myFirstSum.

let num1 = 854;
let num2 = 385;
let num3 = 779;

let myFirstSum = 0;
myFirstSum = num1 + num2 + num3;

describe("myFirstSum", function () {
  it("should be a number", function () {
    expect(typeof myFirstSum).toEqual("number");
  });

  it("should be equal to 2018", function () {
    expect(myFirstSum).toEqual(2018);
  });
});

/* Look at the expression below. Guess what the result of the expression will be, and store your guess in a variable called myGuess.

Expression: 20 * (50 / (5 * 2) + 15) */

let myGuess = 400;

describe("myGuess", function () {
  it("should be a number", function () {
    expect(typeof myGuess).toEqual("number");
  });

  it("should be the right value", function () {
    expect(myGuess).toEqual(400);
  });
});

/* Given a starting value assigned to the happyNum variable, use at least three of the following operators to reassign the value in happyNum until it is equal to 5:

+=
-=
*=
/=
++
 */

let happyNum = 1000;

happyNum = (5 * 10) / 2 - 20;

describe("happyNum", function () {
  it("should be equal to 5", function () {
    expect(happyNum).toEqual(5);
  });
});
