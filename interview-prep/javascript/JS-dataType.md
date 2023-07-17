## Interview preparation - JavaScript Interview Questions and Answers

### 1. What is JavaScript?

- Programming Language
- used to give instructions to the computer to perform some specific tasks.
- used to create interactive and dynamic web pages.
- It is a versatile language that can be used for both front-end and back-end development. With the rise of frameworks and libraries like React, Angular, and Node.js.

### 2. What is Value in JavaScript?What are the different Value Types in JavaScript?

- Value is the piece of data that can be stored , retrieved and manipulated in a program.
- Type refers what kind of value it is so that Value can be used and decide what operations can be performed on it.
- It can be a number, a string, a boolean, an object, or any other type of data.
- console.log(typeof "Ram") // "string"
- console.log(typeof 42) // "number"

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
  var name = "Alice";
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
  name: "Alice",
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
console.log(greet("Alice")); // Output: "Hello, Alice!"

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

- Logical Operators: Used for combining or negating boolean values, such as logical AND (&&), logical OR (||), and logical NOT (!).
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
- By default, JavaScript runs code from top to bottom and left to right.
- Control flow statements let you change that order, based on conditions, loops or keywords.

Control flow statements include:

- if...else: Executes a block of code if a specified condition is true, and optionally executes another block of code if the condition is false.
- switch: Evaluates an expression and executes different blocks of code based on the value of the expression.
- for: Creates a loop that consists of three parts: initialization, condition, and increment/decrement. It executes a block of code repeatedly as long as the specified condition is true.
- while: Creates a loop that executes a block of code as long as a specified condition is true.
- do...while: Similar to while loop, but it guarantees that the block of code will be executed at least once, as the condition is evaluated after the block of code is executed.
- break: Terminates the current loop or switch statement and transfers control to the statement following the terminated statement.
- continue: Skips the current iteration of a loop and continues with the next iteration.
- return: Exits a function and optionally returns a value to the caller.
- throw: Used to throw an exception, which can be caught and handled by a try...catch statement.
- try...catch: Used to handle exceptions that may occur in a block of code. The try block contains code that may throw an exception, while the catch block contains code to handle the exception
-

Control flow statements allow you to control the execution of your code based on certain conditions or to repeat certain blocks of code, making your programs more dynamic and responsive to user input or other events

- Conditional Statements : Used to make decisions.

let score = 85;

if (score >= 90) {
console.log("A");
} else if (score >= 80) {
console.log("B");
} else {
console.log("C");
}

- Looping Statements : Used to repeat a block of code.
- Jump Statements : Used to alter the flow of execution.
  .

### What is Hoisting in JavaScript?

- Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. For example:
  console.log(x); // Output: undefined (due to hoisting)
  var x = 5;
  console.log(x); // Output: 5

Closure in JavaScript

- A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables and parameters, even after the outer function has returned. This allows the inner function to "remember" the environment in which it was created, enabling powerful programming patterns such as data encapsulation and function factories. Closures are created whenever a function is defined inside another function, and they can be used to create private variables and functions that are not accessible from outside the closure. For example:
  function outerFunction() {
  let outerVariable = "I am from the outer function";

  Arrow functions in JavaScript and how they differ from regular functions

- Arrow functions are a concise syntax for writing functions in JavaScript. They differ from regular functions in several ways:
- Arrow functions do not have their own this value. Instead, they inherit the this value from the surrounding context. This makes them particularly useful for handling events and working with callbacks.
- Arrow functions cannot be used as constructors and do not have a prototype property.
- Arrow functions do not have the arguments object, but they can access the rest parameters if needed.
- Arrow functions are always anonymous, meaning they do not have a name. However, they can be assigned to a variable or used as a callback function.
- Example of an arrow function:

csr fast or ssr?

- CSR (Client-Side Rendering) and SSR (Server-Side Rendering) are two different approaches to rendering web applications. The performance of each approach can vary depending on the specific use case and requirements of the application.
- CSR can be faster for certain types of applications, especially those that require a lot of interactivity and dynamic content. This is because CSR allows the client to handle the rendering and updates, reducing the load on the server and improving responsiveness. However, CSR can also lead to slower initial load times, as the client needs to download and execute JavaScript before rendering the content.
- SSR can provide faster initial load times, as the server generates the HTML and sends it to the client, allowing the content to be displayed more quickly. This can be beneficial for applications that rely heavily on SEO or need to provide a better user experience for users with slower internet connections. However, SSR can also lead to increased server load and slower performance for highly interactive applications, as the server needs to handle the rendering and updates for each request.
- Ultimately, the choice between CSR and SSR depends on the specific needs of the application, the target audience, and the desired user experience. It is important to carefully consider the trade-offs and choose the approach that best fits the requirements of the project.

Hydration in JavaScript

- ## Hydration is the process of taking a server-rendered HTML page and attaching event listeners and other dynamic behavior to it on the client side. This allows the page to become interactive and responsive without requiring a full page reload. Hydration is commonly used in frameworks like React and Vue.js to enable server-side rendering while still providing a seamless user experience on the client side. During hydration, the JavaScript code runs after the initial HTML is loaded, allowing it to "hydrate" the static content with interactivity and dynamic features.
