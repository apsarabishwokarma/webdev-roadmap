// 1. JavaScript vs TypeScript
// TypeScript is a superset of JavaScript that adds types and other features to JavaScript.
// TypeScript code is transpiled to JavaScript code that can run in any JavaScript environment (browser, Node.js, etc.).
// TypeScript provides static type checking, which helps catch errors at compile time rather than runtime.
// TypeScript will not run in the browser directly, What runs is the final generated JavaScript code.
// When converting to JavaScript, TypeScript removes all type annotations and interfaces, leaving only the JavaScript code that can be executed in any JavaScript environment.

// 2. Make Typescript project & how it works
// i. Init npm project: npm init -y
// ii. Install TypeScript: npm i -D typescript
// iii. Create tsconfig.json: npx tsc --init
// iv. Compile TypeScript: npx tsc
// v. Run JavaScript: node dist/index.js (assuming output directory is dist and entry file is index.ts)

// 3. Basic Types: string, number, boolean, null, undefined, void, any, never
let firstName: string;
let age: number;
let isStudent: boolean;
let middleName: null;
let lastName: undefined;
let greet: void;
let anything: any;
let error: never;

firstName = "John";
age = 30;
isStudent = true;

middleName = null;
lastName = undefined;

greet = undefined; // void can only be assigned undefined or null

anything = "Hello";
anything = 42; // any can be assigned any type

// Commenting out the never example to avoid runtime error
// error = (() => {
//   throw new Error("Something went wrong");
// })(); // never is used for functions that never return

// 4. Inference vs Annotation
let city = "New York"; // TypeScript infers the type as string
let country: string = "USA"; // Type annotation explicitly specifies the type

city = "Los Angeles"; // Valid
// city = 123; // Error: Type 'number' is not assignable to type 'string'

country = "Canada"; // Valid
// country = true; // Error: Type 'boolean' is not assignable to type 'string'

console.log(`City: ${city}, Country: ${country}`);

// 5. Union Types: string | number, etc.
let id: string | number;
id = "abc123"; // Valid
id = 456; // Valid
// id = true; // Error: Type 'boolean' is not assignable to type 'string | number'

// Literal Types: 'hello', 42, true, etc. or "success" | "failure", etc.
let resStatus: "success" | "failure";
resStatus = "success"; // Valid
resStatus = "failure"; // Valid
// resStatus = "pending"; // Error: Type '"pending"' is not assignable to type '"success" | "failure"'

let direction: "up" | "down" | "left" | "right";
direction = "up"; // Valid
direction = "down"; // Valid
direction = "left"; // Valid
direction = "right"; // Valid
// direction = "forward"; // Error: Type '"forward"' is not assignable to type '"up" | "down" | "left" | "right"'

let cupSize: "small";
cupSize = "small"; // Valid
// cupSize = "medium"; // Error: Type '"medium"' is not assignable to type '"small"'

let isActive: true | false | 1 | 0;
isActive = true; // Valid
isActive = false; // Valid
isActive = 1; // Valid
isActive = 0; // Valid
// isActive = "yes"; // Error: Type '"yes"' is not assignable to type 'true | false | 1 | 0'

// 6. Type Aliases (type) + Intersection Types (&)
// Type can be used to define a reusable type for primitive types, union types, literal types, object types, etc.
type Status = "active" | "inactive" | "pending";
let accountStatus: Status;
accountStatus = "active"; // Valid
accountStatus = "inactive"; // Valid
accountStatus = "pending"; // Valid
// accountStatus = "closed"; // Error: Type '"closed"' is not assignable to type 'Status'

type User = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  department: string;
};

const user1: User = {
  name: "John",
  age: 30,
};

type Manager = User & Employee; // Intersection type combines User and Employee

const manager1: Manager = {
  name: "Alice",
  age: 35,
  id: 101,
  department: "HR",
};

// 7. Interfaces (interface) + Extending Interfaces (extends) + Implementing Interfaces (implements)
// Interface is similar to type but can only be used to define object types and can be extended by other interfaces or implemented by classes.
// They follow OOP like syntax and are more suitable for defining the shape of objects, especially when working with classes and inheritance.
interface Person {
  name: string;
  age: number;
}

interface EmployeeInterface extends Person {
  // same as type intersection
  id: number;
  department: string;
}

// implements infers the type of the class properties from the interface, so we don't need to explicitly annotate them in the class.
class ManagerClass implements EmployeeInterface {
  name = "Alice";
  age = 35;
  id = 101;
  department = "HR";
}

// 8. Optional Properties (?)
interface Product {
  name: string;
  price: number;
  description?: string; // Optional property
  // equivalent to: description: string | undefined;
}

// 9. Type vs Interface
// Type can define primitive types, union types, literal types, object types, etc. while Interface can only define object types.
// Type can use intersection types (&) to combine multiple types while Interface can use extends to extend multiple interfaces.
// Type cannot be implemented by classes while Interface can be implemented by classes.
// Type is more flexible and can be used for a wider range of scenarios while Interface is more suitable for defining the shape of objects, especially when working with classes and inheritance.

// 10. Functions
function add(a: number, b: number): number {
  return a + b;
} // Function with parameters a and b of type number and return type number

const subtract = (a: number, b: number) => {
  return a - b;
}; // Arrow function with parameters a and b of type number and return type number (inferred)

function greetUser(name: string): void {
  console.log(`Hello, ${name}!`);
} // Function with parameter name of type string and return type void

type Operation = (a: number, b: number) => number; // Type alias for a function type

const multiply: Operation = (a, b) => a * b; // Function that matches the Operation type

// 11. Enums
// Enums are both a type and a value.
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

const move = (dir: Direction) => {
  console.log(`Moving ${dir}`);
};

move(Direction.Up); // Valid
move(Direction.Down); // Valid
// move("UP"); // Error: Argument of type '"UP"' is not assignable to parameter of type 'Direction'

// 12. Other topics: Generics, Type Assertions, Type Guards, Mapped Types, Conditional Types, Utility Types, etc.
