There are a few common approaches for handling `try...catch` in Express applications.

# Approach 1: Put `try...catch` in Every Controller

This is the simplest and most beginner-friendly approach.

```js
const userRegistration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return res.status(400).json({
        message: "Account already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      message: "Account created successfully",
      user,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
```

### Pros

- Easy to understand
- Good for learning

### Cons

- Repetitive
- Every controller needs its own catch block

---

# Approach 2: Async Handler (Industry Standard)

Instead of writing `try...catch` everywhere, create a wrapper.

## asyncHandler.js

```js
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

module.exports = asyncHandler;
```

---

## auth.controller.js

```js
const asyncHandler = require("../utils/asyncHandler");

const userRegistration = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existing = await prisma.user.findUnique({
    where: { email },
  });

  if (existing) {
    return res.status(400).json({
      message: "Account already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return res.status(201).json({
    message: "Success",
  });
});
```

No `try...catch` needed.

---

# Global Error Middleware

Create:

## error.middleware.js

```js
const errorHandler = (err, req, res, next) => {
  console.error(err);

  return res.status(500).json({
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
```

---

## index.js

```js
app.use(errorHandler);
```

Always place it **after all routes**.

```js
app.use("/api/auth", authRoutes);

app.use(errorHandler);
```

---

# Why Use This?

Suppose Prisma fails:

```js
await prisma.user.create(...)
```

Maybe:

- Database is down
- Database connection fails
- Invalid query
- Prisma throws an error

Without handling:

```text
Application crashes
```

With async handler:

```text
Error
  ↓
catch(next)
  ↓
Global Error Middleware
  ↓
JSON Response
```

---

# Fix Your Login Controller

Currently:

```js
const UserLogin = async (email, password) => {
```

This is not an Express controller.

Controllers should receive:

```js
(req, res);
```

Use:

```js
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  // login logic
};
```

---

# Recommended Structure

```text
src/
├── controllers/
│   └── auth.controller.js
│
├── middleware/
│   └── error.middleware.js
│
├── utils/
│   └── asyncHandler.js
│
├── routes/
│   └── auth.routes.js
│
├── services/
│   └── token.service.js
│
└── config/
    └── prisma.js
```

# Recommendation

As you're learning Express + Prisma:

1. Start with `try...catch` inside controllers so you understand error flow.
2. Once comfortable, move to:
   - `asyncHandler`
   - Global error middleware

That's the pattern used in many production Express applications because it keeps controllers much cleaner.
`try...catch` must be placed **inside a function**, around the code that can throw an error.

## Correct Placement

```js
const userRegistration = async (req, res) => {
  try {
    // code that may throw errors

    const user = await prisma.user.create({
      data: {
        name: "John",
      },
    });

    return res.json(user);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
```

Flow:

```text
Function Starts
      ↓
try {
   risky code
}
      ↓
Error?
   Yes → catch
   No  → continue
```

---

## Wrong Placement #1

You cannot put `catch` without `try`.

```js
const userRegistration = async (req, res) => {
  const user = await prisma.user.create(...);

  catch(error) {
  }
};
```

Syntax error

---

## Wrong Placement #2

You cannot wrap the whole function declaration like this:

```js
try {
  const userRegistration = async (req, res) => {
    ...
  };
}
catch(error){
}
```

This only catches errors that happen while defining the function, **not** when the function is called later by Express.

Not useful for controller error handling.

---

# Most Common Controller Pattern

```js
const userRegistration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      message: "Success",
      user,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
```

---

# What Goes Inside `try`?

Anything that can fail:

```js
await prisma.user.create(...)
await prisma.user.findUnique(...)
await bcrypt.hash(...)
await bcrypt.compare(...)
jwt.sign(...)
jwt.verify(...)
fs.readFile(...)
axios.get(...)
```

Example:

```js
try {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
}
catch(error) {
  ...
}
```

---

# What Usually Stays Outside `try`?

Imports:

```js
const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
```

Function declaration:

```js
const userRegistration = async (req, res) => {
```

Exports:

```js
module.exports = {
  userRegistration,
};
```

---

# Visual Structure

```text
Imports
   ↓

Controller Function
   ↓

try {
   Database Calls
   Prisma
   bcrypt
   JWT
}
catch(error) {
   Handle Error
}

   ↓

Exports
```

So for your current Express + Prisma controllers, the usual pattern is:

```js
const controller = async (req, res) => {
  try {
    // all business logic here
  } catch (error) {
    // handle errors here
  }
};
```

That's the pattern you should practice first before moving to an `asyncHandler` + global error middleware setup.
