# Express Middleware

> Send multiple functions as response -

```js
const express = require("express");

// to use express
const app = express();
app.get(
  "/",
  (req, res, next) => {
    console.log("Response sent!");
    next();
  },
  (req, res) => {
    res.status(200);
    res.json(req.query);
  }
);
```

> Express middleware are functions that execute during the lifecycle of a request to the express server.

- -> GET calls get cached
- -> POST class doesn’t get cached (used to send passwords)

```js
const express = require("express");

// to use express
const app = express();
const body_parser = require("body-parser");

const checkAdmin = (req, res, next) => {
  if (req.query.auth === "123456789") {
    next();
  } else {
    res.status(400).send("Should be an Admin");
  }
};

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

const sendRes = (req, res) => {
  res.status(200);
  res.json(req.query);
};

app.get("/", sendRes);

app.post("/", (req, res) => {
  console.log("req.body ->", req.body);
  res.json(req.body);
});

app.get("/products", (req, res) => {
  res.send(req.query.q);
});

app.listen(5000);
```
