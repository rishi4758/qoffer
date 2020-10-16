const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "qoffer",
  port: "3306",
  multipleStatements: true,
});

connection.connect((err) => {
  if (!err) {
    console.log("sql connected");
  } else {
    console.log("there is error sql data base is not connected ");
  }
});
module.exports = connection;
