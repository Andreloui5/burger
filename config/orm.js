const connection = require("../config/connection");


const orm = {
  // creates function to select everything in a table
  selectAll: function(tableName, cb) {
    // contains the mysql query langauge
    let queryString = "SELECT * FROM ??;"
    // makes request, passing in variables, and then uses a callback function to avoid async issues
    connection.query(queryString, [tableName], function (err,result){
      if (err) throw err;
      cb(result);
    });
  },

  //creates function to insert a new burger into our database
  insertOne: function(tableName, itemName, cb) {
    let queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, false);"
    // makes request, passing in variables, and then uses a callback function to avoid async issues
    connection.query(queryString, [tableName, itemName], function (err,result){
      if (err) throw err;
      cb(result);
    });
  },

  // creates function to update a curent burger
  updateOne: function(tableName, valueName, newValue, uniqueId, cb) {
    let queryString = "UPDATE ?? SET ? = ? WHERE id = ?;"
    // makes request, passing in variables, and then uses a callback function to avoid async issues
    connection.query(queryString, [tableName, valueName, newValue, uniqueId], function (err,result){
      if (err) throw err;
      cb(result);
    });
  },

};

module.exports = orm;