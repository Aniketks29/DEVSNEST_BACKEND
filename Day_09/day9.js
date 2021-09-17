const express = require('express');
const path = require('path');
const app = express();
// console.log(__dirname)

// set path for the jade files
app.set("views", path.join(__dirname,  "views"));

// setting jade for view engine
app.set("view engine", "jade");

app.use('/', (req, res) => {
    res
    .status(201)
    .cookie("token", "test", {
        expire : new Date(Date.now() + (8 * 3600000))
    })
    .cookie("hello", "hello")
    .redirect(301, "/admin")
});

// Listen at port 5000
app.listen(5000);