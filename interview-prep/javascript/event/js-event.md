## Events in JavaScript

- JavaScript events are actions or occurrences that happen in the browser, such as user interactions (clicks, key presses) or changes in the state of the document (loading, resizing).
- Events allow developers to create interactive web applications by responding to user actions or changes in the environment.
- Common events include:
  - `click`: Triggered when an element is clicked.
  - `mouseover`: Triggered when the mouse pointer moves over an element.
  - `keydown`: Triggered when a key is pressed down.
  - `load`: Triggered when the page has finished loading.
  - `resize`: Triggered when the browser window is resized.
- Event listeners can be added to elements using the `addEventListener` method, which takes the event type and a callback function as arguments.
- Example of adding a click event listener:

```javascript
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Button was clicked!");
});
```

- Event delegation is a technique where a single event listener is added to a parent element to handle events for its child elements, improving performance and simplifying code.
- Example of event delegation:

```javascript
const list = document.getElementById("myList");
list.addEventListener("click", function (event) {
  if (event.target && event.target.nodeName === "LI") {
    alert("List item clicked: " + event.target.textContent);
  }
});
```

### Event in js

- action or occurrence that happens in the browser.
- user interactions like : clicks , key presses, mouse movements.
- changes in the state of the document like : loading, resizing.

JavaScript events allow web pages to respond to user actions and browser activities

### Methods of Adding Events in JavaScript

There are three main ways to add events in JavaScript:

- Inline Event Handlers
- DOM Event Handlers
- addEventListener() Method

## inline event handler

- Events are written directly inside HTML tags.
- HTML element with an event attribute that directly calls a JavaScript function when the event occurs.

- Example:

```html
<button onclick="showMessage()">Click Me</button>

<script>
  function showMessage() {
    alert("Button clicked");
  }
</script>
```

```html
<button onclick="alert('Button clicked!')">Click Me</button>
```

## DOM Event Handler

- Events are assigned to DOM elements using JavaScript.
- Example:

```html
<button id="btn">Click</button>
```

```javascript
const btn = document.getElementById("btn");

btn.onclick = function () {
  alert("Clicked using DOM handler");
};
```

- Only one handler can exist for a single event.

btn.onclick = () => {
console.log("First");
};

btn.onclick = () => {
console.log("Second");
};

Output:
Second

- The second handler replaces the first one.

### addEventListener() Method

- addEventListener() method is used to attach an event handler to an element in the DOM (Document Object Model).
- Allows us to add multiple event listeners to the same element without overwriting existing ones.
- element.addEventListener(event, function, options);

```html
<button id="btn">Click</button>
```

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  alert("Button clicked");
});
```

### Event object

e is event object ,contains information about the event that occurred.

Example:

btn.addEventListener("click", (e) => {
console.log(e);
});
Event Object Meaning

When an event happens, the browser automatically creates an object with details like:

Which element triggered event
Mouse position
Pressed key
Event type

That object is passed into the function.
e.target -> Element that triggered event
e.type -> Event type
e.key-> Pressed keyboard key
e.clientX ->Mouse X position
e.clientY-> Mouse Y position

## Multiple event listeners can be added to the same element for the same event type.

```javascript
btn.addEventListener("click", () => {
  console.log("First");
});

btn.addEventListener("click", () => {
  console.log("Second");
});

Output: First;
Second;
```

### Removing Event Listeners

- To remove an event listener, you can use the `removeEventListener` method.
- It requires the same event type, function reference, and options used when adding the event listener to successfully remove it.

```javascript
function greet() {
  console.log("Hello");
}

btn.addEventListener("click", greet);

btn.removeEventListener("click", greet);
```

## Mouse Events

- `click`: Triggered when an element is clicked.
- `dblclick`: Triggered when an element is double-clicked.
- `mouseover`: Triggered when the mouse pointer moves over an element.
- `mouseout`: Triggered when the mouse pointer moves out of an element.
- `mousemove`: Triggered when the mouse pointer moves within an element.
- `mousedown`: Triggered when a mouse button is pressed down on an element.
- `mouseup`: Triggered when a mouse button is released over an element.
- `contextmenu`: Triggered when the right mouse button is clicked (opens context menu).
- `wheel`: Triggered when the mouse wheel is scrolled.
- `mouseenter`: Triggered when the mouse pointer enters an element (does not bubble).
- `mouseleave`: Triggered when the mouse pointer leaves an element (does not bubble).
- `mouseover` and `mouseout` events bubble, while `mouseenter` and `mouseleave` do not.
- Mouse events can be used to create interactive features such as dropdown menus, image sliders, and drag-and-drop functionality on web pages.
- Example of a click event listener:

```javascript
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Button was clicked!");
});
```

## Keyboard Events

- `keydown`: Triggered when a key is pressed down.
- `keyup`: Triggered when a key is released.
- `keypress`: Triggered when a key is pressed down and produces a character value (deprecated in favor of `keydown`).
- Keyboard events can be used to create features such as form validation

# Types of Events Handled in JavaScript

JavaScript handles many types of events to make web pages interactive.

---

# 1. Mouse Events

Triggered by mouse actions.

| Event         | Description           |
| ------------- | --------------------- |
| `click`       | Single mouse click    |
| `dblclick`    | Double click          |
| `mousedown`   | Mouse button pressed  |
| `mouseup`     | Mouse button released |
| `mousemove`   | Mouse moves           |
| `mouseover`   | Mouse enters element  |
| `mouseout`    | Mouse leaves element  |
| `mouseenter`  | Cursor enters element |
| `mouseleave`  | Cursor leaves element |
| `contextmenu` | Right click           |

Example:

```javascript
button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

---

# 2. Keyboard Events

Triggered when keyboard keys are used.

| Event      | Description      |
| ---------- | ---------------- |
| `keydown`  | Key pressed down |
| `keyup`    | Key released     |
| `keypress` | Deprecated       |

Example:

```javascript
document.addEventListener("keydown", (e) => {
  console.log(e.key);
});
```

---

# 3. Form Events

Used with forms and input fields.

| Event    | Description         |
| -------- | ------------------- |
| `submit` | Form submitted      |
| `change` | Input value changed |
| `input`  | User typing         |
| `focus`  | Input focused       |
| `blur`   | Input loses focus   |
| `reset`  | Form reset          |
| `select` | Text selected       |

Example:

```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submitted");
});
```

---

# 4. Window Events

Related to browser window actions.

| Event          | Description         |
| -------------- | ------------------- |
| `load`         | Page fully loaded   |
| `resize`       | Window resized      |
| `scroll`       | User scrolls        |
| `unload`       | Page unloaded       |
| `beforeunload` | Before leaving page |

Example:

```javascript
window.addEventListener("resize", () => {
  console.log("Window resized");
});
```

---

# 5. Clipboard Events

Triggered during copy/paste operations.

| Event   | Description    |
| ------- | -------------- |
| `copy`  | Content copied |
| `cut`   | Content cut    |
| `paste` | Content pasted |

Example:

```javascript
document.addEventListener("paste", () => {
  console.log("Pasted");
});
```

---

# 6. Drag and Drop Events

Used for drag-and-drop functionality.

| Event       | Description     |
| ----------- | --------------- |
| `dragstart` | Dragging starts |
| `drag`      | Element dragged |
| `dragend`   | Dragging ends   |
| `dragenter` | Enter drop area |
| `dragover`  | Over drop area  |
| `drop`      | Element dropped |

Example:

```javascript
box.addEventListener("drop", () => {
  console.log("Dropped");
});
```

---

# 7. Media Events

Used with audio/video elements.

| Event          | Description               |
| -------------- | ------------------------- |
| `play`         | Media starts              |
| `pause`        | Media paused              |
| `ended`        | Media finished            |
| `volumechange` | Volume changed            |
| `timeupdate`   | Playback position changed |

Example:

```javascript
video.addEventListener("play", () => {
  console.log("Video playing");
});
```

---

### Event Propagation Mechanism in JavaScript

Event propagation is the process that defines how an event travels through the DOM (Document Object Model) when an event occurs.

Example:

Clicking a button
Pressing a key
Submitting a form
Simple Definition

When an event happens on an element, JavaScript decides:

- Which element receives the event first
- How the event moves between parent and child elements

This movement is called: Event Propagation

Example DOM Structure

<div id="parent">
  <button id="child">
    Click Me
  </button>
</div>

DOM Tree:

Parent
↓
Child Button

Event Propagation Has 3 Phases

1. Capturing Phase
2. Target Phase
3. Bubbling Phase

Document
↓
HTML
↓
BODY
↓
Parent
↓
Button

TARGET
Button Clicked

BUBBLING
Button
↑
Parent
↑
BODY
↑
HTML
↑
Document

### Event Capturing

- Event capturing is a phase in the event propagation process where the event is captured from the root down to the target element.
- Event capturing means:Event travels from top → down to the target element.

Flow:
Parent → Child

- By default, event listeners are set to the bubbling phase, but you can specify the capturing phase by passing `true` as the third argument to `addEventListener`.
-
- Example of adding an event listener in the capturing phase:
  btn.addEventListener(
  "click",
  () => {
  console.log("Capture mode");
  },
  true
  );

```

```

## Target Phase

- The target phase is the phase in the event propagation process where the event reaches the target element that triggered the event.
- During the target phase, the event is processed on the element that directly received the event, and any event listeners attached to that element will be executed.
- Example: If you click on a button, the target phase is when the event is processed on that button element.

### Event Bubbling

- Event bubbling is a phase in the event propagation process where the event bubbles up from the target element to its parent elements.
- Event bubbling means:Event travels from the target element → up to the root element.
- Flow:
  Child → Parent
- By default, event listeners are set to the bubbling phase, so if you add an event listener without specifying the third argument, it will listen during the bubbling phase.
- Example of adding an event listener in the bubbling phase:
  btn.addEventListener("click", () => {
  console.log("Bubble mode");
  });

stopPropagation()

Stops event propagation.

child.addEventListener("click", (e) => {
e.stopPropagation();

console.log("Child only");
});

---

## Event Delegation

Event delegation is a technique in JavaScript where a single event listener is added to a parent element to handle events for its child elements. This approach takes advantage of event bubbling, allowing you to manage events more efficiently, especially when dealing with dynamically added elements.

- Attach one listener to parent instead of many children.

Efficient for dynamic elements.

Example:

<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
---

debouncing and throttling are techniques used to optimize the performance of event handling in JavaScript by controlling the rate at which a function is executed in response to events.

differences between debouncing and throttling:  
| Aspect | Debouncing | Throttling |
|----------------------|------------------------------------------------|-------------------------------------------------|
| Purpose | Ensures a function is only called after a certain period of inactivity. | Ensures a function is called at most once in a specified time interval. |
| Use Cases | Useful for events that may fire rapidly, such as window resizing or key presses. | | Useful for events that should not be called more than once in a given time frame, such as scroll events or button clicks. |
| Implementation | Delays the execution of the function until a specified time has passed since the last event. | Executes the function immediately and then ignores subsequent calls until the specified time interval has passed. |
| Example | A search input field that triggers a search function only after the user has stopped typing for a certain period. | A scroll event listener that updates the position of a "back to top" button, ensuring it only updates once every 100 milliseconds. |
| Function Execution | The function is executed only once after the user has stopped triggering the event for a specified time. | The function is executed immediately and then at most once every specified time interval, regardless of how many times the event is triggered. |

- Debouncing and throttling can help improve the performance of web applications by reducing the number of times a function is called in response to events, which can be especially beneficial for events that fire rapidly or frequently.
