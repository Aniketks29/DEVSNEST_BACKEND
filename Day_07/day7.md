# Express

```zsh
% npm init (creates a new package.json fine in the folder)

% npm install —save express (installs and save to the folder)

% npm install —save-dev nodemon (To see the changes in current time in node.js file)
```

> Difference between —save and —save-dev : —save installs the dependencies in the production environment
> and —save-dev installs the dependencies in the development environment.

- Development environment - local machine
- Production environment - server

> Thus we install all the dependencies required while building the project in development dependencies,
> and when hosting the website on the server we use then production environment dependencies.

> Index.js file contains -

```js
const express = require("express");

// to use express
const app = express();

// CRUD -> POST, GET, PUT, DELETE

// read
// req - request res - response

app.get("/", (req, res) => {
  res.send(["a", "b", "c"]);
});
app.post("/", slash);
app.put("/", slash);
app.delete("/", slash);

app.listen(5000);
//  -------------------------------------- //

// Instead of being generic by using res.send(), we will use specifics like res.json()
// Example -

const express = require("express");

// to use express
const app = express();

app.get("/", (req, res) => {
  res.json({ name: "abc", place: "xyz" });
});

// --------------------------------------- //

app.listen(5000);

const express = require("express");

// to use express
const app = express();

app.get("/", (req, res) => {
  // db update
  res.status(500).send("db not connecting.");
});

app.get("/products", (req, res) => {
  res.send(req.query.q);
});

app.listen(5000);

// ----------------------------------------- //

app.get("/a(b)?cd", (req, res) => {
  res.send("a(b is optional)cd");
});

app.get("/ab(c)+de", (req, res) => {
  res.send("ab(c can be typed many times)de");
});

app.get("/xy*ab", (req, res) => {
  res.send("xy(anything in between)ab");
});

app.get("/xy*ab", (req, res) => {
  res.send("xy(anything in between)ab");
});

app.get(/k/, (req, res) => {
  res.send("use of regex starting with k");
});

// ---------Dynamic URL----------- //
app.get("/user/:userid/student/:studentid", (req, res) => {
  res.send(req.params); // http://localhost:5000/user/6/student/1
});

app.listen(5000);
```
