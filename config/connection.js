const mysql = require("mysql");

const connection;
// Establish connection with mysql
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    PORT: 3306,
    user: "",
    password: "",
    database: "burgers_db"
  });
};

connection.connect(function(err){
  if (err) {
    console.error("error connecting: " + err.stack);
  };
  console.log("connected as id " + connection.threadId)
});

module.exports = connection;