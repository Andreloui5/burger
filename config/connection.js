const mysql = require("mysql");

// Establish connection with mysql
const connection = mysql.createConnection({
  host: "localhost",
  PORT: 3306,
  user: "root",
  password: "rootroot",
  database: "burgers_db"
});

connection.connect(function(err){
  if (err) {
    console.error("error connecting: " + err.stack);
  };
  console.log("connected as id " + connection.threadId)
});

module.exports = connection;