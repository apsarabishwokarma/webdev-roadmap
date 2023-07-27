## How Signup Works

When you create a new account on a website or app:

### Step-by-step

1. **User enters details**
   - Name
   - Email/phone
   - Password

2. **Data is sent to the server**
   Usually through HTTPS for security.

3. **Server validates the data**
   Checks:
   - Is email valid?
   - Is password strong?
   - Does account already exist?

4. **Password is hashed**
   The server does **not** store the real password directly.

   Example:

   ```text
   password123 → hashed value like:
   482c811da5d5b4bc6d497ffa98491e38
   ```

5. **User data is stored in database**
   Example table:

   | id  | email                                 | password_hash   |
   | --- | ------------------------------------- | --------------- |
   | 1   | [user@mail.com](mailto:user@mail.com) | hashed_password |

6. **Verification may happen**
   - Email OTP
   - Verification link
   - Phone OTP

7. **Account created successfully**

---

# How Login Works

When you log into the same website:

### Step-by-step

1. **User enters email + password**

2. **Server finds the user in database**

3. **Server hashes entered password again**

4. **Hashes are compared**

   ```text
   Entered password hash == Stored hash ?
   ```

5. **If matched → login successful**

6. **Server creates a session or token**

---

# Two Common Login Systems

## 1. Session-Based Authentication

Server creates a session ID.

Example:

```text
session_id = abc123xyz
```

Browser stores it in cookies.

Each request:

```text
Browser → sends session_id
Server → checks session
```

Used in:

- Traditional websites
- PHP apps
- Django apps

---

## 2. Token-Based Authentication (JWT)

Server creates a token like:

```text
eyJhbGciOiJIUzI1Ni...
```

Browser stores token:

- localStorage
- cookies

Each request:

```text
Authorization: Bearer TOKEN
```

Used in:

- APIs
- Mobile apps
- React apps

---

# Why Password Hashing Matters

If database gets hacked:

- Plain password storage = dangerous
- Hashed passwords = safer

Common hashing algorithms:

- bcrypt
- Argon2
- scrypt

---

# Full Flow Diagram

```text
SIGNUP
User → Server → Validate → Hash Password → Store DB

LOGIN
User → Server → Hash Entered Password
      → Compare with DB hash
      → Create Session/Token
      → Access Granted
```

---

# Technologies Commonly Used

| Purpose  | Examples                     |
| -------- | ---------------------------- |
| Frontend | HTML, CSS, JavaScript, React |
| Backend  | Node.js, Django, Laravel     |
| Database | MySQL, PostgreSQL, MongoDB   |
| Security | bcrypt, JWT, OAuth           |

---
