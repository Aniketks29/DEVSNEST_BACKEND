# Sending static files

- `__dirname` gives the absolute path of the current folder.

> For sending static files

```js
const express = require("express");
const path = require("path");
const app = express();
console.log(__dirname);

app.use("/", (req, res) => {
  // to send a static file
  res.sendFile(path.join(__dirname, "public/hello.txt"), "test.txt");
});

// Listen at port 5000
app.listen(5000);
```

> For downloading any kind of static file

```js
const express = require("express");
const path = require("path");
const app = express();
console.log(__dirname);

app.use("/", (req, res) => {
  // To download static file
  res.download(path.join(__dirname, "public/meme.jpg"), "download.jpg");
});

// Listen at port 5000
app.listen(5000);
```

## Jade

> To render html files with less code and providing variables through backend

```js
const express = require("express");
const path = require("path");
const app = express();
// console.log(__dirname)

// set path for the jade files
app.set("views", path.join(__dirname, "views"));

// setting jade for view engine
app.set("view engine", "jade");

app.use("/", (req, res) => {
  res.render("index", { title: "Express" });
});

// Listen at port 5000
app.listen(5000);
```

## Provide Cookie
