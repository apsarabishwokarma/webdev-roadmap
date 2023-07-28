## DOM- Document Object Model

- Object model for HTML. DOM → Bridge between HTML & JavaScript
- Browser can only understand JavaScript, not HTML.
- Since browser doesn't understand HTML, it converts the html page into a tree-like structure of objects. This structure is called the Document Object Model (DOM).
- The DOM represents the document as a tree of nodes, where each node is an object representing a part of the document (e.g., an element, attribute, or text). This allows JavaScript to interact with webpage and dynamically modify its content, structure, and style.
- DOM as a Tree:
  HTML becomes a tree structure:
  document
  └── html
  ├── head-title-text("Document Object Model")
  └── body
  ├── h1-text("Hello")
  └── button-text("Click")

![alt text](image.png)

## What is a Browser?

- A browser is software used to open and display websites.

Examples:

Google Chrome
Mozilla Firefox
Microsoft Edge
Safari

A browser does 3 main things:

Reads HTML → creates webpage structure
Reads CSS → styles the webpage
Runs JavaScript → makes webpage interactive

## Why browsers understand JavaScript

Browsers are built with a JavaScript engine inside them.

Examples:

Chrome uses V8
Firefox uses SpiderMonkey
Safari uses JavaScriptCore

- These engines can read and execute JavaScript code.
- Languages like:Python,Java,C++are not directly understood by browsers.They usually need:conversion/transpiling,backend servers,special tools to run in a browser environment.

## What is DOM?

DOM is a structure that allows JavaScript to understand and modify an HTML document. When a browser loads HTML, it converts the page into a tree-like structure of objects.

It allows JavaScript to:

- Read HTML
- Change text
- Change styles
- Respond to user actions like clicks and typing(Handle button clicks,Validate forms, form submissions, etc.)
- Add/remove html elements
- Create interactive websites

Without DOM, JavaScript would just be calculations and logic.

Example HTML:

<body>
  <h1>Hello</h1>
  <button>Click</button>
</body>

Browser creates something like:

Document
└── body
├── h1-Hello
└── button-Click

- JavaScript can access and modify these elements.

### Selecting Elements (How to Select HTML Elements?)

- To tell JavaScript which HTML element it should work with, we first need to select that element.
- Before JavaScript can work with an HTML element, it first needs to select that element.
- JavaScript can select elements in several ways:

---

# 1. getElementById()

- Selects an element using its **ID**
- IDs should be unique on a webpage
- Most commonly used method
- Returns:
  - Single element
  - or `null` if not found

## Syntax

```js
document.getElementById("id");
```

## Example

```html
<button id="myBtn">Click Me</button>
```

```js
const button = document.getElementById("myBtn");

console.log(button);
```

---

# 2. getElementsByClassName()

- Selects elements using a **class name**
- Multiple elements can share the same class
- Returns an `HTMLCollection`
- `HTMLCollection` is **live**
  - updates automatically when DOM changes

## Syntax

```js
document.getElementsByClassName("class");
```

## Example

```html
<div class="box"></div>
<div class="box"></div>
```

```js
const boxes = document.getElementsByClassName("box");

console.log(boxes[0]);
```

## Important

You must access elements using an index:

```js
boxes[0];
boxes[1];
```

---

# 3. querySelector()

- Uses CSS selectors
- Returns the **first matching element**
- Can select:
  - ID
  - Class
  - Tag
  - Attribute
  - Complex selectors

## Syntax

```js
document.querySelector("selector");
```

## Example (Class)

```js
document.querySelector(".container");
```

## Example (ID)

```js
document.querySelector("#title");
```

## Example (Tag)

```js
document.querySelector("p");
```

---

# 4. querySelectorAll()

- Selects **all matching elements**
- Uses CSS selectors
- Returns a `NodeList`
- `NodeList` is usually **static**
  - does not automatically update

## Syntax

```js
document.querySelectorAll("selector");
```

## Example

```html
<p>First</p>
<p>Second</p>
<p>Third</p>
```

````js
const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);


```js

## Access Elements

```js
paragraphs[0];
paragraphs[1];
````

## Loop Through Elements

```js
paragraphs.forEach(function (p) {
  console.log(p);
});
```

````
5. getElementsByTagName()
- Selects elements by their tag name (e.g., `p`, `div`, `h1`)
- Returns an `HTMLCollection`
## Syntax

const elements = document.getElementsByTagName("tag");
## Example

```html
<div> hello</div>
<div  > pa</div>
````

const divs = document.getElementsByTagName("div");
console.log(divs);

---

# Quick Notes

## ID (`#`)

- Unique
- Returns one element

```js
document.getElementById("header");
```

OR

```js
document.querySelector("#header");
```

---

## Class (`.`)

- Used for groups of elements

```js
document.getElementsByClassName("box");
```

OR

```js
document.querySelector(".box");
```

---

## Tag (`p`, `div`, `h1`)

- Selects elements by type

```js
document.querySelectorAll("p");
```

---

# Main Difference

## getElementById()

- Faster
- Only works with IDs

## querySelector()

- More flexible
- Uses CSS selectors

## querySelectorAll()

- Selects all matching elements

---

# HTMLCollection vs NodeList

- Both HTMLCollection and NodeList are array-like collections returned when selecting multiple DOM elements.

- They look similar to arrays, but they are not real JavaScript arrays.

## NodeList

- Returned by:
  - `querySelectorAll()`
- Static collection
- Usually does not update automatically

# 1. HTMLCollection

An `HTMLCollection` is a collection of HTML elements returned by methods like:

```js
document.getElementsByClassName();
document.getElementsByTagName();
```

- Live collection ,Updates automatically when the DOM changes.

## Example

```html
<div class="box"></div>
<div class="box"></div>
```

```js
const boxes = document.getElementsByClassName("box");

console.log(boxes);
```

## Returns

```js
HTMLCollection(2);
```

Meaning:

- A collection containing 2 HTML elements.

---

## Access Elements

```js
boxes[0];
boxes[1];
```

---

## Important Feature → LIVE Collection

`HTMLCollection` updates automatically when the DOM changes.

## Example

```js
const boxes = document.getElementsByClassName("box");

console.log(boxes.length); // 2

const newDiv = document.createElement("div");
newDiv.className = "box";

document.body.appendChild(newDiv);

console.log(boxes.length); // 3
```

The collection updated automatically.

---

# 2. NodeList

A `NodeList` is a collection returned by:

```js
document.querySelectorAll();
```

## Example

```js
const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);
```

## Returns

```js
NodeList(3);
```

Meaning:

- A list containing 3 nodes/elements.

---

## Access Elements

```js
paragraphs[0];
paragraphs[1];
```

---

## Important Feature → STATIC Collection

`NodeList` usually does NOT update automatically after DOM changes.

## Example

```js
const paragraphs = document.querySelectorAll("p");

console.log(paragraphs.length); // 3

const p = document.createElement("p");
document.body.appendChild(p);

console.log(paragraphs.length); // still 3
```

The NodeList stayed the same.

---

# Why Called "Array-Like"?

Because they:

- have indexes
- have `.length`

```js
boxes[0];
paragraphs.length;
```

But they are NOT real arrays.

---

# Real Array vs HTMLCollection / NodeList

## This may not work

```js
boxes.push();
```

Because `HTMLCollection` is not an array.

---

# Convert to Real Array

```js
const arr = Array.from(boxes);
```

Now array methods work:

```js
arr.push();
arr.map();
arr.filter();
```

---

# Main Difference

| Feature              | HTMLCollection             | NodeList             |
| -------------------- | -------------------------- | -------------------- |
| Returned By          | `getElementsByClassName()` | `querySelectorAll()` |
| Live?                | Yes                        | Usually No           |
| Supports `forEach()` | No (older browsers)        | Yes                  |
| Array?               | No                         | No                   |

---

# Easy Memory Trick

- **HTMLCollection**
  → "keeps watching the DOM"
  → updates automatically

- **NodeList**
  → "takes a snapshot"
  → stays fixed

# Most Commonly Used

```js
document.getElementById();
document.querySelector();
document.querySelectorAll();
```

Note:

- **id (`#`) → unique**
  - Always returns a **single element** because IDs are unique.

- **class (`.`) → group**
  - Returns a collection (`HTMLCollection`).
  - You must access an element from the collection using an index like `[0]`.

- **tag (`p`, `h1`, `div`, etc.) → type**
  - Selects elements based on their HTML tag type.

### DOM Application Programming Interface

The DOM API (Application Programming Interface) is a set of Methods and Properties that allow JavaScript to change the content, structure, and style of any HTML elements.

- An API Method is an Action that you can do on an HTML element.
- An API Property is a Value that you can access on an HTML element.

## Changing HTML

- The HTML DOM allows JavaScript to change the content of HTML elements.
- To change the content of an HTML element, use this syntax:
- document.getElementById(id).innerHTML = new content

```html
<h1 id="title">Hello World</h1>
```

```js
let heading = document.getElementById("title");
heading.innerHTML = "Welcome!";
```

## Changing CSS

### 1. Using style property

- The HTML DOM allows JavaScript to change the style of HTML elements.
- To change the style of an HTML element, use this syntax:

document.getElementById(id).style.property= new style

```html
<h1 id="title">Hello World</h1>
```

```js
let heading = document.getElementById("title");

heading.style.color = "red";
heading.style.fontSize = "40px";
```

- CSS property names become camelCase in JavaScript.

CSS:
background-color
font-size

JavaScript:
backgroundColor
fontSize

## innerText Only text

## innerHTML Text + HTML tags

### innerText

innerText changes or gets only the text inside an element.

Example:

<h1 id="title">Hello</h1>
let heading = document.getElementById("title");

heading.innerText = "Welcome";

Result:

<h1>Welcome</h1>

It treats everything as normal text.

### innerHTML

innerHTML changes or gets the HTML content inside an element.

Example:

heading.innerHTML = "<span>Welcome</span>";

Result:

<h1><span>Welcome</span></h1>

It understands HTML tags.

Main Difference
innerText
heading.innerText = "<b>Hello</b>";

Output:

<b>Hello</b>

Shows tags as plain text.

innerHTML
heading.innerHTML = "<b>Hello</b>";

Output:

<b>Hello</b>

Text becomes bold because browser reads it as HTML.

### 2.Using Events

- The HTML DOM allows us to execute code when an event occurs.

#### Events are generated by the browser when "things happen" to HTML elements:

- An element is clicked on
- The page has loaded
- Input fields are changed

<button type="button"
onclick="document.getElementById('id1').style.color = 'red'">
Click Me!</button>

3 . Form validation

- The HTML DOM allows JavaScript to validate form input before it is sent to a server.
- This can improve user experience by providing immediate feedback and reducing server load.
- Example:

```html
<form id="myForm" onsubmit="return validateForm()">
  <input type="text" id="name" name="name" />
  <input type="submit" value="Submit" />
</form>
```

```js
function validateForm() {
  let name = document.getElementById("name").value;
  if (name === "") {
    alert("Name must be filled out");
    return false; // Prevent form submission
  }
  return true; // Allow form submission
}
```

4. Adding/Removing Elements
1. The HTML DOM allows JavaScript to create new HTML elements and add them to the page, or remove existing elements from the page.
1. This is useful for creating dynamic content, such as adding new items to a list or removing elements based on user interactions.
1. Example:

```js
// Create a new div element
let newDiv = document.createElement("div");
newDiv.innerHTML = "This is a new div";
// Add the new div to the body
document.body.appendChild(newDiv);
```

```js
// Remove an existing element
let oldDiv = document.getElementById("oldDiv");
oldDiv.parentNode.removeChild(oldDiv);
```

## Virtual DOM in React

- React uses a concept called the Virtual DOM to optimize updates to the actual DOM.
- The Virtual DOM is a lightweight copy of the real DOM that React uses to track changes.
- When a component's state changes, React updates the Virtual DOM first, then compares it to the real DOM to determine the most efficient way to update the UI.
- This process is called "reconciliation" and helps improve performance by minimizing direct manipulations of the real DOM, which can be slow.
- By using the Virtual DOM, React can efficiently update only the parts of the UI that have changed, rather than re-rendering the entire page.
- This makes React applications faster and more responsive, especially for complex user interfaces.
- In summary, the Virtual DOM is a key feature of React that allows for efficient updates to the user interface by minimizing direct interactions with the real DOM.
