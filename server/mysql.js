const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "example",
  database: "my_db",
});

module.exports = { connection };
