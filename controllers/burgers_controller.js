const express = require("express");
const burger = require("../models/burger");


var app = express();

var PORT = process.env.PORT || 8080;


// middleware
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
// =====================================
app.get("/", function (req, res) {
  res.render();
})

app.push("/", function (req, res) {
  res.render();
})

app.put("/", function (req, res) {
  res.render();
})

app.delete("/", function (req, res) {
  res.render();
})