const orm = require("../config/orm");

var burger = {

  selectAll: function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res);
    })
  },
  insertOne: function(itemName, cb) {
    orm.insertOne("burgers", itemName, function(res){
      cb(res);
    })
  },
  updateOne: function(newValue, condition, cb) {
    orm.updateOne("burgers", newValue, condition, function(res){
      cb(res)
    });
  }
}
module.exports = burger;