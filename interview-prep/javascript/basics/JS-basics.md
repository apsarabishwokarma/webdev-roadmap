## Interview preparation - JavaScript Interview Questions and Answers

### 1. What is JavaScript?

- Programming Language
- used to give instructions to the computer to perform some specific tasks.
- used to create interactive and dynamic web pages.
- It is a versatile language that can be used for both front-end and back-end development. With the rise of frameworks and libraries like React, Angular, and Node.js.

###### comment in JavaScript

- it is part of the code that is not executed and is used to provide explanations, notes, or annotations within the code.
- Comments are ignored by the JavaScript engine and do not affect the functionality of the program.
- They are typically used to improve code readability and maintainability by providing context and explanations for other developers who may be reading or working on the code in the future.

### Types of Comments in JavaScript

1. Single-line comments: These comments start with // and continue until the end of the line. They are used for brief explanations or notes.

```javascript
// This is a single-line comment
let x = 5; // This is another single-line comment
```

2. Multi-line comments: These comments start with /_ and end with _/. They can span multiple lines and are used for longer explanations or to comment out blocks of code.

```javascript
/* This is a multi-line comment
   It can span multiple lines
   and is useful for longer explanations */
let y = 10; /* This is a multi-line comment that can also be used for inline comments */
```

### Coercion and Type Conversion in JavaScript

- Coercion is JavaScript automatically converting one type into another in order to perform the operation.

Coercion = Automatic Type Conversion

- Coercion is the automatic or implicit conversion of values from one data type to another. JavaScript will attempt to convert the value to the expected type in order to perform the operation. For example, when you use the + operator with a string and a number, JavaScript will coerce the number to a string and concatenate them together.

Example
console.log("5" + 2); // "52"
console.log("5" - 2); // 3

- Note:
- Why Results Differ
  for the + Operator

- If one operand is a string, JavaScript performs string concatenation."5" + 2 // "52"

- Other Operators (-, \*, /)
  Convert operands to numbers."5" - 2 // 3

- In the first example, JavaScript converts 2 to "2" and joins the strings. In the second example, JavaScript converts "5" to a number and performs subtraction.

- JavaScript converts 2 to "2" and joins the strings.
  "6" / 2 // 3
  true + 1 // 2
  false + 1 // 1
  null + 1 // 1
  undefined + 1 // NaN

#### Truthiness in JavaScript

- Every value in JavaScript is treated as either truthy or falsy in a boolean context.
- Truthiness refers to the concept of how values are evaluated in a boolean context.
- In JavaScript, certain values are considered "truthy" (evaluating to true) and others are considered "falsy" (evaluating to false) when used in conditional statements or logical operations .

- For example:
- if (value) {
  // truthy
  } else {
  // falsy
  }

- Falsy values include: false, 0, -0, 0n (BigInt zero), "", null, undefined, and NaN.
- All other values are considered truthy, including non-empty strings, non-zero numbers, objects, and arrays.

### 2. What is Value in JavaScript?What are the different Value Types in JavaScript?

- Value is the piece of data that can be stored , retrieved and manipulated in a program.
- Type refers what kind of value it is so that Value can be used and decide what operations can be performed on it.
- It can be a number, a string, a boolean, an object, or any other type of data.
- console.log(typeof "Ram") // "string"
- console.log(typeof 42) // "number"

// OR and AND operators in JavaScript

```javascript
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
  } else {
    return c;
  }
}

myOr(true, true, false);
```

You are wondering:

> "Since `c` is `false`, why doesn't the function return `false`?"

Because the function returns **as soon as it finds the first truthy value**.

---

## Your `myOr` Function

```javascript
function myOr(a, b, c) {
  if (a) {
    return a;
  } else if (b) {
    return b;
  } else {
    return c;
  }
}
```

---

## Call

```javascript
myOr(true, true, false);
```

So:

- `a = true`
- `b = true`
- `c = false`

---

## Step-by-Step Execution

### Step 1

```javascript
if (a)
```

becomes:

```javascript
if (true)
```

This is true.

---

### Step 2

```javascript
return a;
```

Returns:

```javascript
true;
```

---

### Step 3

Function stops immediately.

The rest of the code is never executed.

So:

- `b` is never checked.
- `c` is never reached.

---

## Why `return` Stops the Function

When JavaScript executes a `return`, the function ends right away.

Example:

```javascript
function test() {
  return 5;
  console.log("This never runs");
}
```

---

## Real OR Operator

```javascript
true || true || false;
```

JavaScript evaluates left to right.

- First value is `true` (truthy)
- Return it immediately

Result:

```javascript
true;
```

---

## Another Example

```javascript
myOr(0, "hello", false);
```

### Step 1

`a = 0` → falsy.

### Step 2

`b = "hello"` → truthy.

### Step 3

Return `"hello"`.

`c` is never checked.

---

## When `c` Is Returned

`c` is returned only when both `a` and `b` are falsy.

Example:

```javascript
myOr(0, "", false);
```

- `0` → falsy
- `""` → falsy
- return `false`

---

## Summary

For `a || b || c`:

1. If `a` is truthy, return `a`.
2. Otherwise, if `b` is truthy, return `b`.
3. Otherwise, return `c`.

---

## Your Example

```javascript
myOr(true, true, false);
```

Since `a` is truthy, the function returns `a` immediately.

Final result:

````javascript
true
``` */


/*
In an **AND** expression, JavaScript checks values from left to right and returns:

1. The **first falsy value** it finds.
2. If all values are truthy, it returns the **last value**.

---

## JavaScript `&&`

```javascript
a && b && c
````

Equivalent logic:

```javascript
function myAnd(a, b, c) {
  if (!a) {
    return a; // first falsy value
  } else if (!b) {
    return b; // first falsy value
  } else if (!c) {
    return c; // first falsy value
  } else {
    return c; // all truthy → return last value
  }
}
```

---

# Example 1

```javascript
myAnd(true, true, false);
```

### Step 1

```javascript
if (!a)
```

`!true` → `false`

### Step 2

```javascript
else if (!b)
```

`!true` → `false`

### Step 3

```javascript
else if (!c)
```

`!false` → `true`

So:

```javascript
return c;
```

Returns:

```javascript
false;
```

---

# Example 2

```javascript
true && true && false;
```

Evaluation:

1. `true` → truthy, continue.
2. `true` → truthy, continue.
3. `false` → first falsy value, return it.

Result:

```javascript
false;
```

---

# Example 3

```javascript
myAnd("hello", 5, true);
```

All values are truthy.

So the final `else` runs:

```javascript
return c;
```

Returns:

```javascript
true;
```

---

# Example 4

```javascript
myAnd("hello", 0, true);
```

- `"hello"` → truthy
- `0` → falsy

Return:

```javascript
0;
```

---

## Visual Rule

### OR (`||`)

> Return the first truthy value.

### AND (`&&`)

> Return the first falsy value.

If no falsy value exists, return the last value.

---

## Comparison Table

| Expression              | Result  | Reason                  |
| ----------------------- | ------- | ----------------------- |
| `true && true && false` | `false` | First falsy value       |
| `true && 5 && "hi"`     | `"hi"`  | All truthy → last value |
| `0 && "hello"`          | `0`     | First falsy value       |
| `false && 100`          | `false` | First falsy value       |

---

## Your Question

```javascript
myAnd(true, true, false);
```

Returns `false` because `c` is the first falsy value encountered.

\*/

### 3.What is variables, Why variables are important in JavaScript? and What are the different ways to declare a variable in JavaScript?

- A variable is a named container that holds a value.
- In JavaScript, you can declare a variable using the var, let, or const keywords. For example:

- Variables are important in JavaScript because they allow us to store and manipulate data in our programs. They provide a way to give names to values, making our code more readable and maintainable. Variables also enable us to perform operations on data, such as calculations, comparisons, and transformations. Without variables, we would have to hardcode values directly into our code, which would make it less flexible and harder to work with. Variables are fundamental building blocks of any programming language.

- V-FRU, L-BNRU, C-BNRNU

- var : It is function-scoped and can be redeclared and updated. However, it is generally recommended to avoid using var in modern JavaScript due to its quirks and potential for bugs.
  The scope of a var variable is functional or global scope.
- let : It is block-scoped and can be updated but not redeclared within the same scope.The scope of a let variable is block scope.
- It is commonly used for variables that may change their value over time.
- const : It is block-scoped and cannot be updated or redeclared.The scope of a const variable is block scope.
- It is used for variables that should remain constant throughout the program, such as configuration values or references to objects that should not be reassigned.
- Example:
  var name = "Apsara";
  let age = 30;
  const PI = 3.14;

#### different between var, let and const in JavaScript?

- var is function-scoped, while let and const are block-scoped.
- var can be redeclared and updated in same scope, while let can be updated but not redeclared in same scope, and const cannot be updated or redeclared in any scope.
- var can be declared without initialization. let can be declared without initialization. const cannot be declared without initialization.
  It can be accessed without initialization as its default value is "undefined". It cannot be accessed without initialization otherwise it will give 'referenceError'. It cannot be accessed without initialization, as it cannot be declared without initialization.
  These variables are hoisted. These variables are hoisted but stay in the temporal dead zone untill the initialization. These variables are hoisted but stays in the temporal dead zone until the initialization.
- var variables are hoisted to the top of their scope and initialized with undefined, while let and const variables are also hoisted but not initialized, resulting in a temporal dead zone until they are assigned a value.

### 4 . Why Var is not recommended to declare a variable in JavaScript?

- Var is function-scoped, which means that it is accessible throughout the entire function in which it is declared.
- Var can be redeclared and updated, which can lead to confusion and bugs in larger codebases.
  For example, if you accidentally redeclare a variable with var, it can overwrite the previous value without any error, making it difficult to debug.
- Var does not have block scope, which means that it can be accessed outside of the block in which it is declared. This can lead to unintended side effects and make it harder to reason about the code.
- Due to these reasons, it is generally recommended to use let and const for variable declarations in modern JavaScript, as they provide better scoping and help prevent common pitfalls associated with var.
- Example of var issues:
  function example() {
  console.log(x); // undefined (due to hoisting)
  var x = 10;
  console.log(x); // 10
  }
  example();

  function example2() {
  var y = 5;
  if (true) {
  var y = 10; // This redeclares and overwrites the previous y variable
  console.log(y); // 10
  }
  console.log(y); // 10 (unexpectedly changed)
  }
  example2();

### 5. What are the different data types in JavaScript?

- JavaScript data types are divided into two main categories.
  -Primitive = direct value,
  -Non-Primitive = reference to a value.

1. Primitive data types

- Stores a single value.
- These are the basic data types that represent a single value. They include:

- Number: Represents numeric values, such as 42 or 3.14.(Integer and decimal) , let num = 42;
- String: Represents sequences of characters, such as "Hello, World!" or 'JavaScript'(text), let str = "Hello, World!";
- Boolean: Represents logical values, either true or false.(true or false) ,let isJavaScriptFun = true;
- Null: Represents the absence of any value.(intentional absence of value), let emptyValue = null;
- Undefined: Represents a variable that has been declared but has not been assigned a value.(uninitialized variable),
  let city;
  console.log(city);
- Symbol: Represents a unique identifier that can be used as a property key in objects.(unique and immutable value),
  let id = Symbol("id");
- BigInt: Represents integers that are too large to be represented by the Number type.(arbitrary-precision integers) ,
  let big = 123456789012345678901234567890n;

2. Non-primitive data types

- Stores collections of data.
- These are more complex data types that can hold multiple values or properties.They include:

i. Object: Objects are used to store and organize data in a structured way.

- Represents a collection of key-value pairs, where the keys are strings and the values can be of any type.
- For example:
  let person = {
  name: "Apsara",
  age: 30,
  isStudent: false
  };
  ii. Array: Arrays are used to store multiple values in a single variable. For example:
- Represents an ordered list of values, which can be of any type.
  let numbers = [1, 2, 3, 4, 5];
  let fruits = ["apple", "banana", "orange"];

iii. Function: Represents a reusable block of code that performs a specific task.
Functions can be defined and called to execute the code they contain. For example:
function greet(name) {
return "Hello, " + name + "!";
}
console.log(greet("Apsara")); // Output: "Hello, Alice!"

### 6. What is TTD in JavaScript?

- Test-Driven Development (TDD) is a software development approach where tests are written before the actual code is implemented.
- It include writing small, focused tests that define the desired behavior of the code.
- The TDD process typically follows these steps:
- 1. Write a test: Start by writing a test that describes the expected behavior of a specific feature or functionality. The test should fail initially since the code has not been implemented yet.
- 2. Write the code: Next, write the minimum amount of code necessary to make the test pass. This code should be simple and focused on fulfilling the requirements of the test.
- 3. Run the tests: Execute the tests to verify that they pass successfully. If any test fails, go back to the code and make the necessary adjustments until all tests pass.
- 4. Refactor: Once all tests are passing, you can refactor the code to improve its structure, readability, and maintainability without changing its behavior. This step helps to ensure that the code remains clean and efficient.
- 5. Repeat: Repeat the cycle by writing new tests for additional features or functionality, and continue the process of writing code, running tests, and refactoring until the desired functionality is fully implemented.

- TDD promotes better code quality, encourages modular design, and helps catch bugs early in the development process. It also provides a safety net for making changes to the codebase, as the tests can quickly identify any regressions or issues that may arise from modifications. Overall, TDD is a valuable practice for ensuring that your code is robust, maintainable, and meets the specified requirements.

### 7. What is Expression in JavaScript?

- An expression is a combination of values, variables, operators, and function calls that can be evaluated to produce a result. It is a piece of code that can be executed and returns a value. For example:
  let x = 5 + 3; // This is an expression that evaluates to 8
  let y = x \* 2; // This is another expression that evaluates to 16
  console.log(y); // This is an expression that evaluates to 16 and prints it to the console

### 8. What is operator in JavaScript? what is type of operator in JavaScript?

- perform some operation on data and return a result.
- An operator is a symbol or function that performs a specific operation on one or more operands (values) and produces a result.
- JavaScript has several types of operators, including:

- Arithmetic Operators: Used for performing mathematical operations, such as addition (+), subtraction (-), multiplication (\*), division (/), and modulus (%).

- Assignment Operators: Used for assigning values to variables,
- such as the equals sign (=) for simple assignment,
- compound assignment operators like +=, -=, \*=, and /= for performing an operation and assignment in one step.

- Comparison Operators: Used for comparing values and returning a boolean result, such as equal to (==), strict equal to (===), not equal to (!=), strict not equal to (!==), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=).
-

#### different between == and === in JavaScript?

- The == operator performs type coercion, meaning it converts the operands to a common type before making the comparison. For example, 5 == "5" would return true because the string "5" is coerced to the number 5 before the comparison.
- The === operator, on the other hand, does not perform type coercion and checks for both value and type equality. For example, 5 === "5" would return false because the number 5 and the string "5" are of different types.

- Logical Operators: Logical operators are used to combine or invert boolean values (true or false). such as logical AND (&&), logical OR (||), and logical NOT (!).
- Bitwise Operators: Used for performing bitwise operations on binary representations of numbers, such as bitwise AND (&), bitwise OR (|), bitwise XOR (^), bitwise NOT (~), left shift (<<), right shift (>>), and unsigned right shift (>>>).
- Ternary Operator: A shorthand for an if-else statement, represented by the question mark (?) and colon (:), used for conditional expressions. For example:
  let age = 18;
  let canVote = (age >= 18) ? "Yes" : "No";
- Typeof Operator: Used to determine the type of a value or variable, returning a string that indicates the type. For example:
  console.log(typeof "Hello"); // Output: "string"
  console.log(typeof 42); // Output: "number"
  console.log(typeof true); // Output: "boolean"
  console.log(typeof undefined); // Output: "undefined"
  console.log(typeof null); // Output: "object" (this is a known quirk in JavaScript)
  console.log(typeof {}); // Output: "object"
  console.log(typeof []); // Output: "object" (arrays are also considered objects in JavaScript)
  console.log(typeof function(){}); // Output: "function" (functions are a special type of object in JavaScript)
  console.log(typeof typeof 5) // "string" - because typeof always returns a string, so the type of the result of typeof 5 is "string".

### 9.scope of variable in JavaScript

- Scope determines where a variable can be accessed or The area where a variable is accessible.
- Scope refers to the accessibility of variables and functions in different parts of a program.
- In JavaScript, there are three types of scope: global scope, function scope, and block scope.

1. Global Scope :

- Variables declared outside of any function or block .
- can be accessed from anywhere in the code.
- let userName = "Apsara";

function show() {
console.log(siteName);
}

show();

2. Function Scope :

- Variables decl
- ared within a function
- can only be accessed within that function and are not accessible outside of it.
- function show() {
  let siteName = "Apsara";
  console.log(siteName);
  }
  console.log(siteName); // Error: siteName is not defined

3. Block Scope :

- Variables declared with let or const inside {}.
- Variables declared within a block (enclosed by curly braces {})
- only accessible within that block.
- if (true) {
  let blockVariable = "I am inside a block";
  console.log(blockVariable); // Output: "I am inside a block"
  }
  console.log(blockVariable); // Error: blockVariable is not defined

### 10. What is the scope chain?

- the process JavaScript uses to find a variable.
- Inner scopes can access outer scopes.
- Outer scopes cannot access inner variables.
- The mechanism JavaScript uses to search from inner scope to outer scope.
- The scope chain is the hierarchy of scopes that JavaScript uses to resolve variable references.
- When you use a variable, JavaScript searches:

Current Scope
↓
Outer Scope
↓
Global Scope
↓
Not Found → ReferenceError

- When a variable is accessed, JavaScript looks for it in the current scope. If it is not found, it looks in the outer scope, and continues this process until it reaches the global scope. This chain of scopes is known as the scope chain.
- It allows variables to be accessed from inner scopes while still maintaining access to variables in outer scopes.

### Example of scope chain:

let country = "Nepal";

function outer() {
let city = "Kathmandu";

function inner() {
let area = "Baneshwor";

    console.log(area);    // Found in inner
    console.log(city);    // Found in outer
    console.log(country); // Found in global

}

inner();
}

outer();

#### How JavaScript Searches

When inner() runs:

console.log(area)
Look in inner()
Found
console.log(city)
Look in inner()
Not found
Look in outer()
Found
console.log(country)
Look in inner()
Not found
Look in outer()
Not found
Look in global scope
Found
Diagram
Global Scope
country = "Nepal"
↑
outer()
city = "Kathmandu"
↑
inner()
area = "Baneshwor"

JavaScript searches upward, never downward.

#### Scope chain Flows

- JavaScript starts searching from the current scope.
- If not found, it moves outward.
- Search continues until global scope.
- If still not found, ReferenceError.
- Search direction is upward only.

#### Control Flow of Scope Chain

- Control Flow is the order in which statements are executed in a program.

### Sequential Flow

- By default, JavaScript runs code from top to bottom and left to right.
- Control flow statements allow us to control the execution of our code based on certain conditions or to repeat certain blocks of code, making our programs more dynamic and responsive to user input or other events

Control flow statements include:

- while: Creates a loop that executes a block of code as long as a specified condition is true.
- do...while: Similar to while loop, but it guarantees that the block of code will be executed at least once, as the condition is evaluated after the block of code is executed.
- break: Terminates the current loop or switch statement and transfers control to the statement following the terminated statement.
- continue: Skips the current iteration of a loop and continues with the next iteration.
- return: Exits a function and optionally returns a value to the caller.
- throw: Used to throw an exception, which can be caught and handled by a try...catch statement.
- try...catch: Used to handle exceptions that may occur in a block of code. The try block contains code that may throw an exception, while the catch block contains code to handle the exception
-

#### i. Conditional Statements : Used to make decisions.

- if - Runs code only when the condition is true. Creates a loop that consists of three parts: initialization, condition, and increment/decrement. It executes a block of code repeatedly as long as the specified condition is true.
- if...else: Chooses between two paths. Executes a block of code if a specified condition is true, and optionally executes another block of code if the condition is false.
- if...else if...else: Checks multiple conditions in order. Executes different blocks of code based on multiple conditions.

let score = 85;

if (score >= 90) {
console.log("A");
} else if (score >= 80) {
console.log("B");
} else {
console.log("C");
}

- Switch statement : switch statement is used to compare one value against multiple possible cases.
- Ternary operator :
- works on three operands: a condition, a value if the condition is true, and a value if the condition is false.
- condition? "true output" : "false output";
- A shorthand for an if-else statement, represented by the question mark (?) and colon (:), used for conditional expressions. For example:

  let age = 18;
  let canVote = (age >= 18) ? "Yes" : "No";

#### ii. Looping Statements : Used to repeat a block of code until a condition becomes false.

##### for: Executes a block of code a specified number of times.

- for Loop Used when you know how many times to repeat.

Syntax
for (initialization; condition; update) {
// code
}
Example
for (let i = 1; i <= 5; i++) {
console.log(i);
}

##### while: Executes a block of code as long as a specified condition is true.

- while loop is used when the number of iterations is not known in advance.

Syntax
while (condition) { // condition is evaluated before each iteration - stopping condition
// code
}
Example
let i = 1;

while (i <= 5) {
console.log(i);
i++;
}

- do...while:
- Runs the code once before checking the condition.
- Similar to while loop, but guarantees that the block of code will be executed at least once, as the condition is evaluated after the block of code is executed.
- do {
  // code
  } while (condition);
- example
  let i = 1;
  do {
  console.log(i);
  i++;
  } while (i <= 5);

#### Different between while and do...while loop in JavaScript?

- The main difference between while and do...while loops is that a while loop checks the condition before executing the block of code, while a do...while loop checks the condition after executing the block of code. This means that a do...while loop will always execute at least once, even if the condition is false from the beginning, whereas a while loop may not execute at all if the condition is false.
- Example of while loop:
  let i = 1;
  while (i <= 5) {
  console.log(i);
  i++;
  }
- Example of do...while loop:
  let i = 1;
  do {
  console.log(i);  
  i++;
  } while (i <= 5);

##### for...of:

- Used to iterate over iterable values like arrays and strings, maps, sets, etc.
- for (variable of iterable) {
  // code
  }
  Example
  let numbers = [1, 2, 3, 4, 5];
  for (let num of numbers) {
  console.log(num);
  }

#### for...in:

- Used to iterate over object keys.
- for (variable in object) {
  // code
  }
  Example
  let person = {
  name: "Apsara",
  age: 30,
  city: "New York"
  };  
  for (let key in person) {
  console.log(key + ": " + person[key]);
  }

#### Different between for...of and for...in loop in JavaScript?

- The for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc., and it returns the values of the iterable. On the other hand, the for...in loop is used to iterate over the enumerable properties of an object and returns the keys (property names) of the object.
- for...of: values
  for...in: keys

##### Jump Statements :

- to alter the normal execution flow of a program. They allow us to control the flow of code in specific ways, such as breaking out of loops, skipping iterations, or exiting functions early.
- Jump statements change the normal flow of execution.

They are used to:

- Stop a loop
- Skip part of a loop
- Exit a function
- Throw an error

1. break:

- to stop the current loop or switch statement
- Terminates the current loop or switch statement and transfers control to the statement following the terminated statement.

for (let i = 1; i <= 5; i++) {
if (i === 3) {
break;
}
console.log(i);
}
output:
1
2

2. continue:

- to skip the current iteration of a loop and continue with the next iteration.
- Skips the current iteration and moves to the next one.
  for (let i = 1; i <= 5; i++) {
  if (i === 3) {
  continue;
  }
  console.log(i);
  }
  output:
  1
  2
  4
  5

3. return:

- to exit a function and optionally return a value to the caller.
- Example:
  function add(a, b) {
  return a + b;
  }

console.log(add(2, 3)); // 5

4. throw:

- creates and throws an error.
- to throw an exception, which can be caught and handled by a try...catch statement.

### Exceptions and Error Handling in JavaScript

- Exceptions are runtime errors that occur during the execution of a program.
- They can be caused by various factors, such as invalid input, network issues, or programming mistakes.
- When an exception occurs, it disrupts the normal flow of the program and can lead to unexpected behavior or crashes if not handled properly.

- Types of Exceptions in JavaScript:
- Syntax Errors: Occur when there is a mistake in the code syntax, such as missing parentheses or incorrect variable names.
- Reference Errors: Occur when a variable or function is referenced that has not been declared or is out of scope.
- Type Errors: Occur when an operation is performed on a value of an inappropriate type, such as trying to call a non-function or accessing a property of undefined.
- Range Errors: Occur when a value is outside the allowed range, such as trying to create an array with a negative length or exceeding the maximum call stack size.
- Eval Errors: Occur when the eval() function is used in an invalid way, such as trying to evaluate code that contains syntax errors or security risks.

Error handling is the process for managing and responding to exceptions in a controlled manner.

1. try

Put risky code inside try.

try {
console.log(user.name);
}

If an error occurs, JavaScript jumps to catch.

2. catch

Receives the error object.

try {
console.log(user.name);
} catch (error) {
console.log(error.message);
}

Example output:

user is not defined

3. finally
   To execute cleanup code that must always run.
   Runs whether an error occurs or not.

##### Common Uses of finally

- Close files
- Close database connections
- Hide loading spinners
- Release locks
- Clean temporary data

try {
console.log("Trying...");
} catch (error) {
console.log("Error");
} finally {
console.log("Always runs");
} 4. throw

- Creates your own error.
- throw creates custom errors.
- error.message gives the readable message.

- throw new Error("Something is wrong");

- Example:
  function divide(a, b) {
  if (b === 0) {
  throw new Error("Cannot divide by zero");
  }
  return a / b;
  }

- try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // This will throw an error
  } catch (error) {
  console.error(error.message); // Output: "Cannot divide by zero"
  }

### What is the difference between throw and return in JavaScript?

- The throw statement is used to create and throw an error, which can be caught and handled by a try...catch block. It is typically used to indicate that something has gone wrong in the program and to provide information about the error. When a throw statement is executed, it immediately stops the execution of the current function and propagates the error up the call stack until it is caught by a catch block or reaches the global scope.
- The return statement, on the other hand, is used to exit a function and optionally return a value to the caller. It is used to indicate that a function has completed its task and to provide a result back to the code that called the function. When a return statement is executed, it immediately stops the execution of the current function and returns the specified value (if any) to the caller.

#### Function in JavaScript

- A function is a reusable block of code that performs a specific task.
- It can take inputs (parameters) and can return a value.
- Functions are defined using the function keyword, followed by the function name, parentheses for parameters, and curly braces for the function body.
- Syntax:

  function functionName(parameters) {
  // code
  return value;
  }

- For example:

- function greet() {
  console.log("Hello");
  }

greet(); // Hello

- function greet(name) {
  return "Hello, " + name + "!";
  }
  console.log(greet("apsara")); // Output: "Hello, Alice!"

function add(a, b) {
return a + b;
}  
console.log(add(2, 3)); // Output: 5

### parameters and arguments in JavaScript

Parameter = A variable declared in the function definition., Parameters are placeholders.
Argument = The actual value passed to the function call., Arguments are real values.

- Parameters are the variables listed in the function definition, while arguments are the actual values passed to the function when it is called.
- Parameters are local variables of the function and have block scope, meaning they are only accessible within the function.

  For example:
  function greet(name) { // 'name' is a parameter
  return "Hello, " + name + "!";
  }
  console.log(greet("Apsara")); // 'Apsara' is an argument

```javascript
function add(a, b) {
  return a + b;
}

add(10, 20);
Item	Type
a, b 	Parameters
10, 20	Arguments

```

- Default Parameters
- function greet(name = "Guest") {
  console.log("Hello " + name);
  }

greet(); // Hello Guest

- If no argument is passed, the default value is used.

- Extra Arguments
  function add(a, b) {
  return a + b;
  }

add(1, 2, 3); // 3

- Extra arguments are ignored unless you explicitly handle them.

function sum (x,y){
s = x+y;
return s;
}
let result = sum(2,4);
console.log(result);

- Function Types in JavaScript:
- Arrow Functions:
- A compact way for writing a function .
  A concise syntax for writing functions using the => syntax. They do not have their own this value and are often used for callbacks and functional programming.
  syntax:

parameters => {
// code
return value;
} //This is called arrow function expression

Syntax:
const functionName = (parameters) => {
// code
return value;
}

(parameters) => {
// code
return value;

} //This is called arrow function expression

- It can be assigned to a variable or used as a callback function.
  like we are naming this function as functionName and we can call it using functionName().

- (a,b)=>{
  console.log(a+b);
  }

- const sum = (a,b)=>{
  return(a+b);
  }

- sum (2,3); // 5

#### Anonymous Function

A function without a name.

()=>{
console.log("Hello");
}

(name)=>{
console.log("Hello " + name);
}
// This is an anonymous function expression

const greet =()=>{
console.log("Hello");
} // This is a named function expression

Note :

1. A function can be assigned to a variable.

function greet() {
console.log("Hello");
}

const sayHello = greet;

sayHello(); // Hello
How It Works
greet ──┐
sayHello ──┘ → same function

Both variables point to the same function.

2. Passed as Arguments

A function can be sent to another function as an argument.

function greet() {
console.log("Hello");
}

function execute(fn) {
fn();
}

execute(greet); // Hello

### Callback Function in JavaScript

- A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
- It allows us to handle asynchronous operations and perform actions once a certain task is finished.
- The callback function can take three parameters: the current element, the index of the current element, and the array itself. explain

array.forEach(function (element, index, array) {
// code
});

For example:
let fruits = ["apple", "banana", "mango"];

fruits.forEach(function (fruit, index, arr) {
console.log("Value:", fruit);
console.log("Index:", index);
console.log("Array:", arr);
});

1st call:
element = "apple"
index = 0
array = fruits

2nd call:
element = "banana"
index = 1
array = fruits
and so on...

- We can skip parameters if we don't need them.

For example:

fruits.forEach(function (\_, index) {
console.log(index);
});

\_ is a common placeholder name for an unused parameter.

Why do we write _ in forEach((_, index) => ...)?

Because the first callback parameter receives the current element. \_ is a placeholder to ignore it so the second parameter can receive the index.

If we want only the array, we still need placeholders for the first two.

fruits.forEach(function (\_, \_\_, array) {
console.log(array);
});

Or:

fruits.forEach(function (unused1, unused2, array) {
console.log(array);
});

Memory Rule
To use the second or third callback parameter, you must keep placeholders for the earlier ones.

#### Important Note

execute(greet); // Pass the function
execute(greet()); // Call the function immediately 3. Returned from Another Function

3. A function can create and return another function.

function outer() {
return function () {
console.log("Inner function");
};
}

const inner = outer();
inner(); // Inner function

#### Pass by Value vs Object Reference

JavaScript is technically pass-by-value only.

However:

Primitive values behave like pass-by-value.
Objects behave like pass-by-sharing (often informally called pass-by-reference).

1. Pass by Value

- A copy of the value is passed to the function.
- Changing the copy does not affect the original.
- Primitive values are passed by value, meaning a copy of the value is passed to the function. Changes to the parameter do not affect the original variable.

Example with Primitive Values
let a = 10;
let b = a;

b = 20; // Change b to 20

console.log(a); // 10 , a remains unchanged
console.log(b); // 20
Diagram
a = 10
b = copy of 10

b changes to 20

a = 10
b = 20

2. Pass by Reference

- A reference/memory address to the original object is passed to the function.
- Changing the parameter affects the original object.
- Objects , array and functions are passed by reference, meaning a reference to the original object is passed to the function. Changes to the parameter will affect the original object.

Example with Objects
let user1 = { name: "Ram" };
let user2 = user1;

user2.name = "Hari";

console.log(user1.name); // Hari
console.log(user2.name); // Hari
Diagram
user1 ──┐
├──> { name: "Ram" }
user2 ──┘

user2.name = "Hari"

user1 ──┐
├──> { name: "Hari" }
user2 ──┘

- When you copy the variable, both variables point to the same object.

Primitive vs Object
Type Behavior
Number Pass by value
String Pass by value
Boolean Pass by value
Null Pass by value
Undefined Pass by value
Object Reference is copied
Array Reference is copied
Function Reference is copied

### Method in JavaScript

- Function = Independent block of code
- Method = Function attached to an object

- Methods are functions that are associated with an object and can be called using the object. They are defined as properties of an object and can perform actions on the object's data.

For example:
ForEach() , map(), filter(), reduce() are methods of the Array object in JavaScript. They allow us to perform operations on arrays, such as iterating over elements, transforming data, filtering values, and reducing an array to a single value.

#### String in javascript

- A string is a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `) in JavaScript. It is used to represent text and can contain letters, numbers, symbols, and whitespace.

#### Strings are immutable, meaning that once they are created, they cannot be changed.

Immutable means cannot be changed after creation.
Once a string is created, its characters cannot be modified in place.However, we can create new strings by concatenating existing strings or using string methods to manipulate them.

Example
let name = "Ram";

name[0] = "S";

console.log(name); // "Ram"

Even though you tried to change "R" to "S", the string remains unchanged.

Why?

JavaScript does not allow direct modification of individual characters in a string.

"Ram"
012

name[0] = "S" // Not allowed
Correct Way to "Change" a String

Create a new string and assign it back.

let name = "Ram";

name = "S" + name.slice(1);

console.log(name); // "Sam"
How It Works
Original string: "Ram"
slice(1): "am"
New string: "S" + "am" = "Sam"

The original string is not modified; a new string is created.

For example:
let greeting = "Hello, World!";
console.log(greeting); // Output: "Hello, World!"
let name = "Apsara";
let personalizedGreeting = greeting + " My name is " + name + ".";
console.log(personalizedGreeting); // Output: "Hello, World! My name is Alice."

String Methods in JavaScript

- JavaScript provides a variety of built-in string methods that allow you to manipulate and work with strings in different ways. Some commonly used string methods include:
- length: Returns the length of a string.
  let str = "Hello, World!";
  console.log(str.length); // Output: 13
- toUpperCase(): Converts a string to uppercase letters.
  let str = "Hello, World!";
  console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
- toLowerCase(): Converts a string to lowercase letters.
  let str = "Hello, World!";
  console.log(str.toLowerCase()); // Output: "hello, world!"
- indexOf(): Returns the index of the first occurrence of a specified value in a string.
  let str = "Hello, World!";
  console.log(str.indexOf("World")); // Output: 7
- trim(): Removes whitespace from both ends of a string.
  let str = " Hello, World! ";
  console.log(str.trim()); // Output: "Hello, World!"
- split(): Splits a string into an array of substrings based on a specified separator.
  let str = "Hello, World!";
  let words = str.split(", ");
  console.log(words); // Output: ["Hello", "World!"]
- substring(): Returns a portion of a string between two specified indices.
  let str = "Hello, World!";
  console.log(str.substring(0, 5)); // Output: "Hello"
- replace(): Replaces a specified value with another value in a string.
  let str = "Hello, World!";
  let newStr = str.replace("World", "JavaScript");
  console.log(newStr); // Output: "Hello, JavaScript!"
- slice(): Extracts a section of a string and returns it as a new string.
  let str = "Hello, World!";
  console.log(str.slice(0, 5)); // Output: "Hello"
- includes(): Determines whether a string contains a specified value.
  let str = "Hello, World!";
  console.log(str.includes("World")); // Output: true
- charAt(): Returns the character at a specified index in a string.
  let str = "Hello, World!";
  console.log(str.charAt(7)); // Output: "W"
- repeat(): Returns a new string that repeats the original string a specified number of times.
  let str = "Hello! ";
  console.log(str.repeat(3)); // Output: "Hello! Hello! Hello! "
- concat(): Combines two or more strings into one string.
  let str1 = "Hello, ";
  let str2 = "World!";
  console.log(str1.concat(str2)); // Output: "Hello, World!"

### Template Literals in JavaScript

- A way to have embedded expression in a string, use backticks (` `) instead of quotes.
- Template literals allow for easier string interpolation and multi-line strings.
-

#### String Interpolation in JavaScript

- String interpolation is the process of embedding expressions or variables within a string. In JavaScript, string interpolation can be achieved using template literals, which are enclosed by backticks (` `). Within a template literal, you can use the ${} syntax to embed expressions or variables directly into the string. For example:
  let name = "Apsara";
  let age = 30;
  let greeting = `My name is ${name} and I am ${age} years old.`;
  console.log(greeting); // Output: "My name is Alice and I am 30 years old."

#### Array in JavaScript

- Collection of items stored in a single variable.
- An array is a data structure that can hold multiple values in a single variable. It is an ordered collection of elements, where each element can be of any type (such as numbers, strings, objects, etc.).
- Arrays are defined using square brackets [] and the elements are separated by commas.
- For example:
  let numbers = [1, 2, 3, 4, 5];
  let fruits = ["apple", "banana", "orange"];
  let mixedArray = [1, "hello", true, { name: "Apsara" }, [1, 2, 3]];
- Array is mutable, meaning you can change its contents after it is created. You can add, remove, or modify elements in an array using various array methods and operations.
- For example:
  let numbers = [1, 2, 3];
  numbers.push(4); // Adds 4 to the end of the array
  console.log(numbers); // Output: [1, 2, 3, 4]
  numbers[0] = 0; // Modifies the first element of the array
  console.log(numbers); // Output: [0, 2, 3, 4]

- Array Methods in JavaScript
- Some commonly used array methods include:
- push(): Adds one or more elements to the end of an array and returns the new length
- pop(): Removes the last element from an array and returns that element.
- shift(): Removes the first element from an array and returns that element.
- unshift(): Adds one or more elements to the beginning of an array and returns the new length.
- indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
- slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
- splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in
- sort(): Sorts the elements of an array in place and returns the sorted array.
- forEach(): Executes a provided function once for each array element.
- map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
- filter(): Creates a new array with all elements that pass the test implemented by the provided function.
- reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
- find(): Returns the value of the first element in the array that satisfies the provided testing function.
- includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
- toString(): Returns a string representing the specified array and its elements.

```ts
const fName = "Apsarey";

console.log(fName);
console.log(fName.slice(0, 4));
console.log(fName);

const fArray = fName.split("");
console.log(fArray);
console.log(fArray.slice(0, 4)); // 0<=x>4 return garchha
console.log(fArray);
console.log(fArray.splice(0, 4)); //delete garne ai delete vako nai return
console.log(fArray);
```

### Nested Array in JavaScript

- any array inside another array.
- A nested array just means an array contains at least one inner array.

let arr = [1, [2, 3], 4];

Here:

arr[0] → 1
arr[1] → [2, 3]
arr[2] → 4

This is a nested array because one element is another array.

- An array that contains other arrays as its elements is called a nested array. It allows us to create multi-dimensional data structures.
- For example:
  let nestedArray = [
  [1, 2, 3],
  ["a", "b", "c"],
  [true, false, true]
  ];
  console.log(nestedArray[0]); // Output: [1, 2, 3]
  console.log(nestedArray[1][1]); // Output: "b"
  console.log(nestedArray[2][0]); // Output: true

### Multidimensional Array

- array of arrays.
- A multidimensional array is an array that contains other arrays as its elements, allowing for the creation of more complex data structures. It can be thought of as an array of arrays. For example:

Multidimensional array: A nested array used to represent data with 2 or more dimensions (rows/columns, grids, matrices).

So:
Every multidimensional array is a nested array, but not every nested array is treated as a multidimensional array.

Nested Array
└── Multidimensional Array
If an array contains another array, it is nested.
If those nested arrays are treated as dimensions (rows/columns), it is called a multidimensional array.

// difference between callback and higher order function

- A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows us to handle asynchronous operations and perform actions once a certain task is finished.
- A higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result. It is a more general concept that encompasses callback functions. Higher-order functions can be used to create more abstract and reusable code by allowing functions to be passed around as first-class

### Matrix:

- a 2D array with equal row sizes.
- A matrix is a specific type of multidimensional array that has two dimensions (rows and columns) and is typically used to represent mathematical data. In a matrix, each row has the same number of columns, creating a rectangular grid of values. For example:
  let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
  ];

// a[i][j] means:
// first get a[i]
// then get [j] from that inner array.

1

### 11. What is the difference between slice and splice in JavaScript?

- The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). It does not modify the original array. For example:
  let arr = [1, 2, 3, 4, 5];
  let slicedArr = arr.slice(0, 3);
  console.log(slicedArr); // Output: [1, 2, 3]
  console.log(arr); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
- The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the deleted elements. For example:
  let arr = [1, 2, 3, 4, 5];
  let splicedArr = arr.splice(0, 3);
  console.log(splicedArr); // Output: [1, 2, 3]
  console.log(arr); // Output: [4, 5] (original array is modified)

1. slice()

slice(start, end) returns a portion of a string or array.

Includes start
Excludes end
Does not modify the original value
String Example
let str = "JavaScript";

let result = str.slice(0, 4);

console.log(result); // "Java"
console.log(str); // "JavaScript"
Array Example
let nums = [10, 20, 30, 40, 50];

let result = nums.slice(1, 4);

console.log(result); // [20, 30, 40]
console.log(nums); // [10, 20, 30, 40, 50] 2. splice()

splice(start, deleteCount, ...items) changes the original array.

Starts at start
Removes deleteCount elements
Optionally inserts new items
Remove Elements
let nums = [10, 20, 30, 40, 50];

let removed = nums.splice(1, 2);

console.log(removed); // [20, 30]
console.log(nums); // [10, 40, 50]
Replace Elements
let nums = [10, 20, 30, 40];

nums.splice(1, 2, 99, 100);

console.log(nums); // [10, 99, 100, 40]

### slice -> no change

### splice -> special change

Another Trick

Both words contain slice, but:

slice → just take a piece.
splice → slice + extra work (remove/insert).

The extra "p" can remind you of:

- Permanent change
- Put in / Pull out

### For Each Loop in JavaScript

- The forEach() method is a built-in array method in JavaScript
- Allows us to iterate over each element in an array and execute a provided function for each element.
- It takes a callback function as an argument, which is executed for each element in the array.
- The callback function can take three parameters: the current element, the index of the current element, and the array itself.

Note:

- forEach() is an array method that runs a callback for each element.
- The forEach() method does not return a new array and cannot be used to break out of the loop.
- For example:
  let numbers = [1, 2, 3, 4, 5];
  numbers.forEach(function(num) {
  console.log(num);
  });  
  Output:
  1
  2
  3
  4
  5

```javascript
let city = ["Kathmandu", "Pokhara", "Lalitpur"];

city.forEach(function (element, index, city) {
  console.log("Value:", element);
  console.log("Index:", index);
  console.log("Array:", city);
});
```

let city = ["Kathmandu", "Pokhara", "Lalitpur"];
city.forEach(element, index ,city) => {

console.log(element.toUpperCase(), index, city);

});

### Map in JavaScript

- The map() method is a built-in array method in JavaScript that creates a new array by applying a provided function to each element of the original array.
- It takes a callback function as an argument, which is executed for each element in the array. The callback function can take three parameters: the current element, the index of the current element, and the array itself.
- Creates a new array by transforming each element.

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num \* 2);

console.log(doubled);
// [2, 4, 6, 8, 10]

### Filter in JavaScript

- The filter() method is a built-in array method in JavaScript that creates a new array with all elements that pass a test implemented by the provided function.
- It takes a callback function as an argument, which is executed for each element in the array. The callback function can take three parameters: the current element, the index of the current element, and the array itself.
- Creates a new array with elements that pass a test.
- For example:
  let numbers = [1, 2, 3, 4, 5];
  let evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log(evenNumbers);
  // [2, 4]

Comparison Table
Feature forEach() map() filter()
Loops through array -> Yes Yes Yes
Returns a new array -> No Yes Yes
Return value -> undefined Transformed array Filtered array
Keeps same length -> N/A Yes Not necessarily
Used for side effects -> Yes Sometimes Sometimes
Used for transformation -> No Yes No
Used for selection -> No No Yes

### reduce() in JavaScript

- The reduce() method is a built-in array method in JavaScript
- performs some operation and reduce array to a single value. it returns a single value .
-
- It takes a callback function as an argument, which is executed for each element in the array. The callback function can take four parameters: the accumulator (the accumulated value from the previous iterations), the current element, the index of the current element, and the array itself. Additionally, reduce() can take an optional initial value as a second argument, which is used as the initial value of the accumulator.
- Reduces an array to a single value by applying a function.

For example:
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);
// Output: 15
accumulator/result = 0 (initial value)
1st call: accumulator = 0 + 1 = 1
2nd call: accumulator = 1 + 2 = 3

array.reduce(res,curr)=>{

}

### 12. Higher-Order Functions (HOF) in JavaScript

- A higher-order function is a function that takes another function as an argument or returns a function as its result. Like map(), filter(), reduce() are higher-order functions because they take a function as an argument to perform operations on arrays.

- A higher-order function is a function that:
  Takes another function as an parameter, or
  Returns another function.

### Understanding Higher-Order Functions

- Higher-Order Function A function that TAKES another function or RETURNS a function
- Callback Function The function PASSED INTO another function

### Recursion in JavaScript

- Recursion is a programming technique where a function calls itself in order to solve a problem.

- Recursion is a technique where a function calls itself to solve a problem by breaking the problem into smaller, similar subproblems until a base condition is met.

- It typically involves a base case that stops the recursion and a recursive case that breaks the problem into smaller subproblems.
- A function that calls itself is called a recursive function.

base case: The condition under which the recursion will stop. It prevents infinite recursion.
recursive case: The part of the function that calls itself with modified arguments to approach the base case.

- A function invokes itself during execution.
- Works by dividing a problem into smaller subproblems.
- Requires a base case to stop infinite calls.
- Commonly used in problems like factorial, Fibonacci, and tree traversal.
  It can be used to solve problems that can be broken down into smaller, similar subproblems, such as calculating factorials, Fibonacci numbers, or traversing data structures like trees and graphs.
- Example of a recursive function to calculate the factorial of a number:

  function factorial(n) {
  if (n === 0) {
  return 1; // Base case: factorial of 0 is 1
  }
  return n _ factorial(n - 1); // Recursive case: n! = n _ (n - 1)!
  }

### 13. What is the difference between a recursive function and an iterative function in JavaScript?

- A recursive function is a function that calls itself in order to solve a problem by breaking it down into smaller, similar subproblems. It typically involves a base case that stops the recursion and a recursive case that breaks the problem into smaller subproblems. For example, a recursive function to calculate the factorial of a number would call itself with a smaller value until it reaches the base case of 0.
- An iterative function, on the other hand, uses loops (such as for or while loops) to repeat a block of code until a certain condition is met. It does not involve self-calling and typically uses variables to keep track of the state of the computation. For example, an iterative function to calculate the factorial of a number would use a loop to multiply the numbers from 1 to n without calling itself.

- Comparison Table
  Feature Recursive Function Iterative Function
  Definition A function that calls itself to solve a problem. A function that uses loops to repeat a block of code until a condition is met.
  Base Case Required to stop infinite recursion. Not applicable.
  State Management Implicitly managed through function calls. Explicitly managed through variables.
  Performance Can lead to stack overflow if the recursion depth is too large. Generally more memory efficient for large inputs, as it does not involve multiple function calls.
  Use Cases Suitable for problems that can be broken down into smaller, similar subproblems (e.g., tree traversal, Fibonacci). Suitable for problems that require repeated execution of a block of code (e.g., summing an array, factorial using a loop).

### Factorial of a Number in JavaScript

- The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. It is denoted by n!. For example, 5! = 5*4*3*2*1 120. The factorial of 0 is defined to be 1 (0! = 1).
  Why Is 0! = 1?
  By mathematical definition, the factorial of zero is 1.
  This makes recursive formulas work correctly.

- formula:
  n! = n (n - 1)! for n > 0
  0! = 1
- Example of a recursive function to calculate the factorial of a number:

function factorial(n){
if(!Number.isInteger(n)){

throw new Error("Input must be a non-negative integer");
}

if (n < 0) {
throw new Error("Input must be a non-negative integer");
}

//base case
if (n === 0 || n === 1 )
{

return 1;

}
//recursive case
return n \* factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factoral(-5)); // Throws an error
console.log(factoral(3.5)); // Throws an error

#### Iterative Solution (Using a Loop)

function factorial(n) {
let result = 1;

for (let i = 2; i <= n; i++) {
result \*= i;
}

return result;
}

console.log(factorial(5)); // 120

#### Fibonacci Sequence in JavaScript

- The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, and so on. The nth Fibonacci number can be calculated using the formula: F(n) = F(n-1) + F(n-2) with base cases F(0) = 0 and F(1) = 1.

- Recursive Solution
  function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
  throw new Error("Input must be a non-negative integer.");
  }

  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
  }

console.log(fibonacci(6)); // 8

- Efficient Iterative Solution (Recommended)

function fibonacci(n:number) {
if (!Number.isInteger(n) || n < 0) {
throw new Error("Input must be a non-negative integer.");
}

if (n === 0) return 0;
if (n === 1) return 1;

let prev = 0;2
let curr = 1;

for (let i = 2; i <= n; i++) {
let next = prev + curr;
prev = curr;
curr = next;
}

return curr;
}
const result = fibonacci(10);

console.log (result); // 55

### What Is a Palindrome?

A palindrome is a word or number that reads the same forward and backward.

"madam" → palindrome
"racecar" → palindrome
"121" → palindrome
"hello" → not palindrome

### Check if a String is a Palindrome in JavaScript
