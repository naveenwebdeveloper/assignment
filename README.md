# Assignment

## Features

- User registration with form validation.
- MongoDB database connection for storing user data.
- Secure password hashing using **bcrypt**.
- Easily configurable via a `.env` file for environment-specific variables.

---

## Prerequisites

Before setting up and running the application, make sure you have the following installed:

- **Node.js (v20.x)**: This project is designed to run on Node.js version 20. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: You will need a running instance of MongoDB for the database. This can be a local instance or you can use a cloud-based service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **npm**: Node Package Manager is used to manage dependencies. It comes bundled with Node.js.

---

## Getting Started

### 1. Install Dependencies

```
    npm install
```

### 2. Set Up Environment Variables (optional)
in .env file
```
    MONGO_URI=mongodb://localhost:27017
    PORT=3000
```

### 3. Run the Application

Now you're ready to run the application!

#### Option 1: Using `npm start`
```
    npm start
```

#### Option 2: Using `node server.js`
```
    node server.js
```

## Accessing the Application
Once the application is running, you can access it through your web browser at the following URL:
```
http://localhost:<port>
```
Make sure to replace <PORT> with the actual port number you set in your .env file (default is 3000).

