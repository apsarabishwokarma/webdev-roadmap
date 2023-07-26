/* 1.Define a function, howEqual, that accepts two arguments of any type.

howEqual should return the string 'loosely' if the two values passed into the function are 
loosely equal. howEqual should return 'strictly' if the two values are strictly equal. howEqual should return the string 'not equal'
 if the two values are neither strictly nor loosely equal. */

/*2.
Write a function isTruthy that accepts a single argument of any type.

isTruthy should return true if that argument is 'truthy'.

If the value is 'falsey', return one of the messages below, corresponding to the type of the value tested.

'The boolean value false is falsey'
'The null value is falsey'
'undefined is falsey'
'The number 0 is falsey (the only falsey number)'
'The empty string is falsey (the only falsey string)' */

/* 3.
My Or, My And
Define a function, myOr, that accepts three arguments of any type.

myOr should return the same result as the buit-in || operator:

myOr(true, true, false) === (true || true || false); // => true
Then, define a function, myAnd, that accepts three arguments of any type.

myAnd should return the same result as the buit-in && operator:

myAnd(1, 'apples', true) === (1 && 'apples' && true); // => true
Hint: Refer to the two rules for and and or [from this lecture on truthiness and type coercion] */

/* 4.
Only One
Write a function onlyOne that accepts three arguments of any type.

onlyOne should return true only if exactly one of the three arguments are truthy. Otherwise, it should return false.

Do not use the equality operators (== and ===) in your solution.

onlyOne(false, false, true); // => true
onlyOne(0, 1, 2) // => false */

/* 4.Zero Dark Thirty
Write a function zeroDarkThirty that accepts a number as an argument.

zeroDarkThirty should return a number with all of the zeroes removed:

zeroDarkThirty(102302) // => 1232
zeroDarkThirty(606.203) // => 66.23
If the number 0 is passed in as the argument, return NaN. */
