const express = require("express");
const cors = require("cors");
const { connection } = require("./mysql");

const app = express();
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hi Clyde!");
});

const checkMySQLConnection = () => {
  connection.connect();

  connection.query("SELECT DATABASE() as name", function (error, results) {
    if (error) throw error;
    const nameColumn = results[0].name;
    console.log(`Connected to MySQL database: ${nameColumn}`);
  });

  connection.end();
};

app.listen(3000, checkMySQLConnection);
