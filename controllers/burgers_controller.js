const express = require("express");
const burger = require("../models/burger");


const router = express.Router();

// Routes
// =====================================
router.get("/", function (req, res) {
  burger.selectAll(function(data) {
    let hbsObject = {
      burger: data
    }
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  // calls the create function in burgers.js
  burger.insertOne([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result){
    res.render("index", {burger_data:burgerData});
    });
})


// router.deleteOne("/", function (req, res) {
//   res.render();
// })

module.exports = router;