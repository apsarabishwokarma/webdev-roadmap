### Fetch Apis

- API stands for Application Programming Interface, which is a set of rules and protocols for building and interacting with software applications.
- It provides an interface for fetching(sending/receiving) resources .
- It uses Requests and Responses objects to handle the data.
- It is based on Promises, making it easier to work with asynchronous operations.
- The fetch() method is used to fetch resources from the network.

Syntax:

````javascript
let promise = fetch(url,[options]);
```- `url`: The URL of the resource you want to fetch.
- `options`: An optional object containing any custom settings that you want to apply to the request. It can include:
  - `method`: The HTTP method to use (e.g., GET, POST, PUT, DELETE).
  - `headers`: An object containing any custom headers you want to include in the request.
  - `body`: The body of the request, typically used for POST or PUT requests.
  - `mode`: The mode of the request (e.g., cors, no-cors, same-origin). etc.

````

```js
const url = "https://cat-fact.herokuapp.com";

let promise = fetch(url);
console.log(promise);
```

```js
const getFacts = async () => {
  console.log("Fetching data...");
  let response = await fetch(url);
  console.log(promise);
};
```

- AJAX is Asynchronous js and xml.
- JSON is Javascript Object Notation.

json() method : returns a second promise that resolves with the result of parsing the response body text as JSON.(input is json ,output is js object)

- Response is in json and it should be converted to js object using json() method.
- fetch is asynchronous and returns first promise and json() method is also asynchronous and returns second promise.

```js
const getFacts = async () => {
  console.log("Fetching data...");
  let response = await fetch(url);
  console.log(response);// JSON Format
let data = await response.json():
console.log(data);// JS Object
};
```
