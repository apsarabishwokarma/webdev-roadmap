/* Given a string value name, set the found variable to:

true if the name is equal to 'David'
true if the name is equal to 'Nimit'
false if the name is equal to 'Someone else' */

let name = "David";
// let name = 'Nimit';
// let name = 'Someone else';

let found;

if (name === "David" || name === "Nimit") {
  found = true;
} else {
  found = false;
}

describe("found", () => {
  it("is of type boolean", () => {
    expect(typeof found).toEqual("boolean");
  });

  it("is true only if name is David or Nimit", () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let foundValues = {
      David: true,
      Nimit: true,
      "Someone else": false,
    };

    expect(found).toEqual(foundValues[name]);
  });
});

/* 
Given a string value word, set the lastWord variable to:

the upper-cased string stored in word if the word starts with the letter p and has a length of 7
the unmodified string stored in word
For example, if the word is equal to 'apples', lastWord should be equal to 'apples'. If the word is equal to 'perfect', 
'lastWord' should be equal to 'PERFECT'. */

let word = "carrots";
// let word = 'pacific';
// let word = 'perfecto';
// let word = 'perfect';

let lastWord;

if (word.startsWith("p") && word.length === 7) {
  lastWord = word.toUpperCase();
} else {
  lastWord = word;
}

describe("lastWord", () => {
  it("should be of type string", () => {
    expect(typeof lastWord).toEqual("string");
  });

  it("should be uppercased if word starts with p and has length of 7", () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let lastWordValues = {
      carrots: "carrots",
      pacific: "PACIFIC",
      perfecto: "perfecto",
      perfect: "PERFECT",
    };

    expect(lastWord).toEqual(lastWordValues[word]);
  });
});

/* Given two boolean values boolean1 and boolean2, set the result variable to:

'both' if both boolean1 and boolean2 are true
'one' if only one of boolean1 and boolean2 are true
'none' if neither value is true */

let boolean1 = true,
  boolean2 = true;
// let boolean1 = true, boolean2 = false;
// let boolean1 = false, boolean2 = true;
// let boolean1 = false, boolean2 = false;

let result;

if (boolean1 == true && boolean2 == true) {
  result = "both";
} else if (boolean1 == true || boolean2 == true) {
  result = "one";
} else {
  result = "none";
}

describe("result", () => {
  it("should be of type string", () => {
    expect(typeof result).toEqual("string");
  });

  it("should be both, one, or none depending on the boolean1 and boolean2 values", () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let resultValues = {
      truetrue: "both",
      truefalse: "one",
      falsetrue: "one",
      falsefalse: "none",
    };

    expect(result).toEqual(resultValues[String(boolean1) + String(boolean2)]);
  });
});
