const conn = require('../common/conn.js');

module.exports = function (req,res) {
	const getUsername = req.body.username;
	const getPassword = req.body.password;
	conn.query("SELECT * FROM products", function (err, result, fields) {
	    if (err) throw err;
	    res.send(result);
	});
};