var express = require("express");
var app = express();
var server = app.listen(3000);
app.use(express.static("public"));

console.log("running p5.js in browser");
