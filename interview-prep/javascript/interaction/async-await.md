## call back hell , promises,async and await

## Synchronous JavaScript

- code runs in a particular sequence of instructions given in a program,
- each line/ instruction waits for the previous one to complete before executing the next one(executes in a single thread).
- can lead to blocking if a task takes a long time (e.g., network request)

FOR EXAMPLE:

```javascript
console.log("Start");
// Simulating a long-running task
for (let i = 0; i < 1e9; i++) {}
console.log("End");
```

In this example, the loop blocks the execution of the "End" log until it completes, which can lead to a poor user experience if the task takes a long time.

- Due to synchronous programming, sometimes we need to wait for a task to complete before moving on to the next one, which can lead to blocking,delay and unresponsive applications.

## Asynchronous JavaScript

- allowing other tasks to continue executing without waiting for the asynchronous task to complete.
- allows tasks to run in the background without blocking the main thread, enabling a more responsive user experience.
- Asynchronous operations can be handled using callbacks, promises, or async/await syntax.
- For example, when making a network request to fetch data from an API, the request is asynchronous, allowing the application to remain responsive while waiting for the response.
-
- FOR EXAMPLE:

```javascript
console.log("Start");
setTimeout(() => {
  console.log("End");
}, 2000);
```

In this example, the "End" log will be printed after a delay of 2 seconds, allowing the "Start" log to be printed immediately without blocking the execution of the program.

## Synchronous vs Asynchronous JavaScript

| Aspect | Synchronous JavaScript | Asynchronous JavaScript |

## SetTimeOut

- A built-in JavaScript function that allows you to execute a function after a specified delay (in milliseconds).
- It takes two arguments: the function to be executed and the delay time in milliseconds.
  -For example:

```javascript
console.log("Start");
setTimeout(() => {
  console.log("This will be printed after 2 seconds");
}, 2000);
console.log("End");
```

Why can't we use setTimeout for network requests?

- setTimeout is not designed for handling network requests, as it only delays the execution of a function and does not provide any mechanism for handling the response or errors that may occur during a network request.
- For network requests, we typically use the Fetch API or XMLHttpRequest, which are specifically designed for making asynchronous HTTP requests and handling responses.

Why can't we pass a function with parentheses in callbacks?

- it immediately call the function instead of passing the function reference to be called later. This means that the function will execute right away, rather than waiting for the event or condition that triggers the callback.
- When you pass a function with parentheses in a callback, you are invoking the function immediately instead of passing the function reference to be called later. This means that the function will execute right away, rather than waiting for the event or condition that triggers the callback. For example:

```javascript
// Incorrect: This will execute the function immediately
setTimeout(myFunction(), 2000);
// Correct: This will pass the function reference to be called after 2 seconds
setTimeout(myFunction, 2000);
```

In the incorrect example, `myFunction()` is called immediately, and its return value (if any) is passed to `setTimeout`, which is not the intended behavior. In the correct example, `myFunction` is passed as a reference, allowing it to be called after the specified delay.

so instead of using parenthesis we can use an anonymous function or arrow function to call the desired function with parentheses when needed. For example:

```javascript
function getData(data, getNextData) {
  //2s
  setTimeout(() => {
    console.log(data);
    getNextData();
  }, 2000);
}
getData(1, () => {
  getData(2);
});
```

### Callback Hell

- A situation where multiple nested callbacks are used, leading to code that is difficult to read and maintain.

## pyramid of doom

- Nested callbacks stacked on top of each other, creating a pyramid-like structure that can be difficult to read and maintain.
- for example:

```javascript
doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log("Final result: " + finalResult);
    });
  });
});
```

```js
getData(1, () => {
  console.log("getting data 1");
  getData(2, () => {
    console.log("getting data 1");
    getData(3, () => {
      console.log("All data fetched");
      getData(4);
    });
  });
});
```

-
-

## Promises

- It is solution to callback hell (pyramid of doom).
- A promise is an object in javascript that represents the "eventual" completion of task. That means it results in success or failure of an operation .
- A promise carry prototype,promise state and promise result.
- A promise can be in one of three states: pending, fulfilled/resolved, or rejected.
- pending: initial state, the result is undefined neither fulfilled nor rejected.
- fulfilled/resolved: the operation completed successfully, and the promise has a value. resolve(result)
- rejected: the operation failed, and the promise has a reason for the failure (error).reject(error)

Syntax:

```js
let promise = new Promise((resolve,reject)=>
{...})
```

- This function takes two arguments: resolve and rejects, these are callbacks provided by js.
- `resolve` is a function that is called when the promise is fulfilled successfully.
- `reject` is a function that is called when the promise is rejected due to an error or failure.

```javascript
let promise = new Promise((resolve, reject) => {
  console.log("Promise is pending...");
  resolve("Promise is fulfilled!");
  // reject("Promise is rejected!");
});
```

- For Example:

```javascript
function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data);
      resolve("success");
    }, 5000);
  });
}

Start Async Task
       ↓
     Promise
       ↓
 ┌─────────────┐
 │  Pending    │
 └─────────────┘
       ↓
  ┌───────────┴───────────┐
  ↓                       ↓
Resolved              Rejected

```

### How to use Promises:

- .then and .catch methods are used to handle the resolved and rejected states of a promise, respectively.

- promise.then((res)=>{...}) is used to handle the resolved state of a promise. It takes a callback function as an argument, which will be executed when the promise is fulfilled successfully. The resolved value of the promise will be passed as an argument to the callback function.
- promise.catch((err)=>{...}) is used to handle the rejected state of a promise. It takes a callback function as an argument, which will be executed when the promise is rejected due to an error or failure. The reason for the rejection (error) will be passed as an argument to the callback function.

```javascript
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulating success or failure
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000);
  });
}

getData()
  .then((res) => {
    console.log(res); // This will log "Data fetched successfully!" if the promise is resolved
  })
  .catch((err) => {
    console.error(err); // This will log "Failed to fetch data." if the promise is rejected
  });
```

### Promise chaining

- Promise chaining is a technique that allows you to chain multiple promises together.
-

```js
function asyncFunction1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 1 completed");
      resolve("Result from function 1");
    }, 4000);
  });
}

function asyncFunction2(resultFromFunction1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 2 completed ");
      resolve("Result from function 2");
    }, 4000);
  });
}

console.log("fetching data 1...");
let p1 = asyncFunction1();
p1.then((res) => {
  console.log(res);
});

console.log("fetching data 2...");
let p2 = asyncFunction2();
p2.then((res) => {
  console.log(res);
});
```

- both run simultaneously and print their results after 4 seconds .

- If we want to run them sequentially, Meaning we can fetch data 2 only after fetching data 1, for that we use another then block inside the first then block. This is called promise chaining.
- For example:

```js
- we can chain the promises like this:

console.log("fetching data 1...");
let p1 = asyncFunction1();
p1.then((res) => {
  console.log(res);
  console.log("fetching data 2...");
  let p2 = asyncFunction2();
  p2.then((res) => {
    console.log(res);
});


// Without using variables for promises, we can directly chain them like this:
asyncFunction1().then((res) => {
  console.log(res);
  console.log("fetching data 2...");
asyncFunction2().then((res) => {
    console.log(res);
})
});
```

```js
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    console.log(res);
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });
```

- In this example, we are fetching data sequentially. We first fetch data 1, and once it is resolved, we fetch data 2, and once data 2 is resolved, we fetch data 3. This way, we ensure that each piece of data is fetched only after the previous one has been successfully retrieved.

### Async/Await

-
- The `async` keyword is used to declare a function as asynchronous, which means it will return a promise.
- The `await` keyword is used to pause the execution of an async function until the promise is resolved or rejected, allowing you to write asynchronous code that looks and behaves more like synchronous code.

- `async` makes a function return a Promise
- `await` makes a function wait for a Promise

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

- await can only be used inside an async function. It cannot be used in regular functions or the global scope.

- For Example:

````javascript
async function getAllData(){
console.log("fetching data 1...");
await getData(1);
console.log("fetching data 2...");
await getData(2);
console.log("fetching data 3...");
await getData(3);
}```
````

- In this example, we are fetching data sequentially using async/await. The `await` keyword allows us to wait for each promise to resolve before moving on to the next one, making the code easier to read and maintain compared to traditional promise chaining.

## IIFE (Immediately Invoked Function Expression)

Normally, we cannot use `await` at the top level in regular JavaScript files, so we define an `async` function and place `await` inside it. However, creating a separate function just to call it once can feel unnecessary. To solve this, we can use an IIFE (Immediately Invoked Function Expression)

- An IIFE is a function that runs/executes immediately after it is defined.No need to call it separately.
- It is a common pattern used to create a new scope and avoid polluting the global namespace. When using async/await, you can wrap your code in an IIFE to allow the use of await at the top level without needing to define a separate async function.
-
- There are 3 ways to define an IIFE:
  1. Using a regular function expression (function() { ... }) that is immediately invoked.
  2. Using an arrow function expression (() => { ... }) that is immediately invoked.
  3. Using the async keyword with either of the above function expressions to allow the use of await inside the IIFE.

- There are three main parts of an IIFE:
  1. The function definition: This is the actual function that you want to execute immediately. It can be a regular function or an arrow function.
  2. The parentheses around the function definition: This is what makes it an expression and allows it to be executed immediately.
  3. The parentheses at the end: This is what actually invokes the function.
- For example:

Example:

```js

1.( function () {
  console.log("This is an IIFE");
})();

2.(() => {
  console.log("This is an IIFE using arrow function");
})();


## IIFE with async/await:

 (async function () {
  const data = await fetchData();
  console.log(data);
})();

Or using an arrow function:

(async () => {
  const data = await fetchData();
  console.log(data);
})();
```

```javascript
(async function () {
  console.log("fetching data 1...");
  await getData(1);
  console.log("fetching data 2...");
  await getData(2);
  console.log("fetching data 3...");
  await getData(3);
})();
```

- In this example, we are using an IIFE to allow the use of `await` at the top level. The async function is defined and immediately invoked, allowing us to fetch data sequentially without needing to define a separate async function just for this purpose. This makes the code cleaner and more concise.

A **Promise** in JavaScript represents a value that may be available **now, later, or never**.

Think of it as:

```text
Start Async Task
       ↓
     Promise
       ↓
 ┌─────────────┐
 │  Pending    │
 └─────────────┘
       ↓
  ┌───────────┴───────────┐
  ↓                       ↓
Resolved              Rejected
```

---

# Promise States

## 1. Pending Promise

The operation is still running.

```js
const promise = new Promise((resolve, reject) => {
  // Still working...
});
```

Example:

```js
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Done");
  }, 5000);
});
```

For the first 5 seconds:

```text
Promise { <pending> }
```

---

## 2. Fulfilled (Resolved) Promise

The operation completed successfully.

```js
const promise = Promise.resolve("Success");
```

Result:

```text
Promise { 'Success' }
```

Example:

```js
fetchUser().then((user) => {
  console.log(user);
});
```

The promise resolved with:

```js
{
  id: 1,
  name: "John"
}
```

---

## 3. Rejected Promise

The operation failed.

```js
const promise = Promise.reject("Something went wrong");
```

Example:

```js
fetchUser().catch((err) => {
  console.log(err);
});
```

Result:

```text
User not found
```

---

# Creating a Promise

```js
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
```

---

# Consuming a Promise

Using `.then()` and `.catch()`:

```js
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

---

# Async/Await

Instead of:

```js
promise.then((data) => {
  console.log(data);
});
```

Use:

```js
const data = await promise;
console.log(data);
```

---

# Promise Utility Methods

JavaScript provides several built-in methods for handling multiple promises.

---

# 1. Promise.all()

Runs multiple promises in parallel.

Returns when **all promises succeed**.

If even one fails, everything fails.

```js
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

const result = await Promise.all([p1, p2, p3]);

console.log(result);
```

Output:

```js
["A", "B", "C"];
```

---

### One Failure

```js
const p1 = Promise.resolve("A");
const p2 = Promise.reject("Error");
const p3 = Promise.resolve("C");

await Promise.all([p1, p2, p3]);
```

Output:

```text
Error
```

Entire operation fails.

---

### Real Example

```js
const [user, posts, comments] = await Promise.all([
  getUser(),
  getPosts(),
  getComments(),
]);
```

All requests run simultaneously.

---

# 2. Promise.allSettled()

Waits for all promises.

Never fails.

Returns success and failure results.

```js
const result = await Promise.allSettled([
  Promise.resolve("A"),
  Promise.reject("Error"),
]);
```

Output:

```js
[
  {
    status: "fulfilled",
    value: "A",
  },
  {
    status: "rejected",
    reason: "Error",
  },
];
```

---

### Use Case

```text
Send 100 Emails
      ↓
Some succeed
Some fail
      ↓
Need report of all
```

Use:

```js
Promise.allSettled();
```

---

# 3. Promise.race()

Returns the first promise that settles.

Could be success or failure.

```js
const p1 = new Promise((resolve) => setTimeout(() => resolve("A"), 3000));

const p2 = new Promise((resolve) => setTimeout(() => resolve("B"), 1000));

const result = await Promise.race([p1, p2]);

console.log(result);
```

Output:

```text
B
```

Because it finished first.

---

### Timeout Example

```js
await Promise.race([fetch(url), timeoutPromise]);
```

Whichever finishes first wins.

---

# 4. Promise.any()

Returns the first successful promise.

Ignores failures.

```js
const result = await Promise.any([
  Promise.reject("Error"),
  Promise.resolve("Success"),
]);
```

Output:

```text
Success
```

---

### All Fail

```js
await Promise.any([Promise.reject("A"), Promise.reject("B")]);
```

Output:

```text
AggregateError
```

---

### Use Case

```text
Server A
Server B
Server C

Take first successful response
```

Use:

```js
Promise.any();
```

---

# 5. Promise.resolve()

Creates an already resolved promise.

```js
const promise = Promise.resolve("Hello");
```

Equivalent to:

```js
const promise = new Promise((resolve) => {
  resolve("Hello");
});
```

---

# 6. Promise.reject()

Creates an already rejected promise.

```js
const promise = Promise.reject("Error");
```

Equivalent to:

```js
const promise = new Promise((_, reject) => {
  reject("Error");
});
```

---

# Comparison Table

| Method                 | Success Condition        | Failure Condition                | Returns         |
| ---------------------- | ------------------------ | -------------------------------- | --------------- |
| `Promise.all()`        | All succeed              | Any one fails                    | Array of values |
| `Promise.allSettled()` | Always completes         | Never throws because of failures | Status objects  |
| `Promise.race()`       | First settled promise    | First settled promise fails      | First result    |
| `Promise.any()`        | First successful promise | All fail                         | First success   |
| `Promise.resolve()`    | Already resolved         | Never                            | Promise         |
| `Promise.reject()`     | Never                    | Already rejected                 | Promise         |

---

# Visual Summary

```text
Promise.all()

A ✓
B ✓
C ✓
↓
Success

A ✓
B ✗
C ✓
↓
Fail
```

```text
Promise.allSettled()

A ✓
B ✗
C ✓
↓
Returns all results
```

```text
Promise.race()

A (3 sec)
B (1 sec)
C (5 sec)

↓

B wins
```

```text
Promise.any()

A ✗
B ✗
C ✓

↓

C wins
```

---

# Most Common Backend Usage

### Multiple Database/API Calls

```js
const [user, orders, products] =
  await Promise.all([
    prisma.user.findUnique(...),
    prisma.order.findMany(...),
    prisma.product.findMany(...),
  ]);
```

### Email Processing

```js
await Promise.allSettled(users.map(sendEmail));
```

### API Timeout

```js
await Promise.race([fetchData(), timeout()]);
```

### Multi-Server Fallback

```js
await Promise.any([fetchServer1(), fetchServer2(), fetchServer3()]);
```

These four (`Promise.all`, `Promise.allSettled`, `Promise.race`, and `Promise.any`) are the ones you'll encounter most often in real-world Node.js, Express, and backend development.
