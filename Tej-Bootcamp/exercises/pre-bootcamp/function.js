// Define a function simpleSum that takes two numbers and returns the sum of those numbers.

function simpleSum(a, b) {
  return a + b;
}
simpleSum(10, 15);

describe("simpleSum", () => {
  it("is a function", () => {
    expect(typeof simpleSum).toEqual("function");
  });

  it("returns a number", () => {
    let returnedValue = simpleSum(1, 2);
    expect(typeof returnedValue).toEqual("number");
  });

  it("returns the sum of two positive numbers", () => {
    let returnedValue = simpleSum(1, 2);
    expect(returnedValue).toEqual(3);
  });

  it("returns the sum of two negative numbers", () => {
    let returnedValue = simpleSum(-10, -20);
    expect(returnedValue).toEqual(-30);
  });
});

//Define a function, defaultGreet, that takes a first and a last name. defaultGreet should return a string greeting for the given names. If the user does not define a last name, assume the last name is 'Doe'.

function defaultGreet(firstName, lastName = "Doe") {
  return "Hi " + firstName + " " + lastName + "!";
}
defaultGreet("Ram", "Khan");
defaultGreet("apsara");

describe("defaultGreet", () => {
  it("is a function", () => {
    expect(typeof defaultGreet).toEqual("function");
  });

  it("returns a string", () => {
    let returnedValue = defaultGreet("Natalie", "Cole");
    expect(typeof returnedValue).toEqual("string");
  });

  it("returns the correct greeting if the first and last name is defined", () => {
    let returnedValue = defaultGreet("Natalie", "Cole");
    expect(returnedValue).toEqual("Hi Natalie Cole!");
  });

  it("returns the correct greeting if the last name is undefined", () => {
    let returnedValue = defaultGreet("Jane");
    expect(returnedValue).toEqual("Hi Jane Doe!");
  });
});

//Define a function taxCalculator that accepts the price of an item and a state. taxCalculator should return the after-tax cost of the item, assuming NY's tax is 4% and NJ's sales tax is 6.625%.

function taxCalculator(price, state) {
  let ny = 0.04;
  let nj = 0.06625;
  if (state == "NY") {
    return (price = price + price * ny);
  } else if (state === "NJ") {
    return (price = price + price * nj);
  }
}
taxCalculator(200, "NY");
taxCalculator(300, "NJ");

describe("taxCalculator", () => {
  it("is a function", () => {
    expect(typeof taxCalculator).toEqual("function");
  });

  it("returns a number", () => {
    let returnedValue = taxCalculator(100, "NY");
    expect(typeof returnedValue).toEqual("number");
  });

  it("returns the correct price for NY", () => {
    let returnedValue = taxCalculator(50, "NY");
    expect(returnedValue).toEqual(52);
  });

  it("returns the correct price for NJ", () => {
    let returnedValue = taxCalculator(10, "NJ");
    expect(returnedValue).toEqual(10.6625);
  });
});

// Write a function myMnemonic that accepts up to four strings.
// myMnemonic should return a new string of the first characters for each string argument.
// Note that the user may not pass in all four strings!
function myMnemonic(s1, s2, s3, s4) {
  let result = "";
  if (s1) result += s1[0];
  if (s2) result += s2[0];
  if (s3) result += s3[0];
  if (s4) result += s4[0];
  return result;
}
myMnemonic("Must", "Accept", "Sugar", "Happiness");

describe("myMnemonic", () => {
  it("is a function", () => {
    expect(typeof myMnemonic).toEqual("function");
  });

  it("returns a string", () => {
    let returnedValue = myMnemonic("");
    expect(typeof returnedValue).toEqual("string");
  });

  it("returns a mnemonic if all four strings are defined", () => {
    let returnedValue = myMnemonic("Frankly", "Umbrellas", "Love", "Leather");
    expect(returnedValue).toEqual("FULL");
  });

  it("returns a mnemonic if only three string are defined", () => {
    let returnedValue = myMnemonic("Super", "Tacos", "Apples");
    expect(returnedValue).toEqual("STA");
  });

  it("returns a mnemonic if only two string are defined", () => {
    let returnedValue = myMnemonic("Candy", "Kringles");
    expect(returnedValue).toEqual("CK");
  });
});
