var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "192.168.17.129",
  user: "root",
  password: "",
  database: "shopping_cart"
});

conn.connect(function(err) {
    if (err) throw err

});

module.exports = conn;