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
    res.json({ id: result.insertId});
    });
})

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// router.deleteOne("/", function (req, res) {
//   res.render();
// })

module.exports = router;