const connection = require("../config/connection");

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

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
  updateOne: function(tableName, newValue, condition, cb) {
    let queryString = "UPDATE ?? SET ";
    queryString += objToSql(newValue);
    queryString += " WHERE id = ?;"
    // makes request, passing in variables, and then uses a callback function to avoid async issues
    connection.query(queryString, [tableName, newValue, condition], function (err,result){
      if (err) throw err;
      cb(result);
    });
  },

};

module.exports = orm;