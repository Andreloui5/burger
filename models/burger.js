const orm = require("../config/orm");

var burger = {

  selectAll: function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res);
    })
  },
  createOne: function(cols, vals, cb) {
    orm.createOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(newValue, condition, cb) {
    orm.updateOne("burgers", newValue, condition, function(res){
      cb(res)
    });
  },
  deleteOne: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
}
module.exports = burger;