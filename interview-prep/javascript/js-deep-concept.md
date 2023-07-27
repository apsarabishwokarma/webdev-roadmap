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

### Event Bouncing in JavaScript

- Event bouncing, also known as event bubbling, is a behavior in JavaScript where an event triggered on a child element propagates up through its parent elements in the DOM tree until it reaches the root element. This means that when an event occurs on a nested element, it will first trigger the event handlers on that element, then on its parent, and so on, until it reaches the top of the DOM tree. This allows for event delegation, where a single event handler can be attached to a parent element to handle events for all of its child elements.
