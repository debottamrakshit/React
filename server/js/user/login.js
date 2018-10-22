const conn = require('../common/conn.js');

module.exports = function (req,res) {
	const getUsername = req.body.username;
	const getPassword = req.body.password;
	conn.query("SELECT * FROM users WHERE username='"+getUsername+"' AND password='"+getPassword+"'", function (err, result, fields) {
	    if (err) throw err;
	    if(result.length==1){
	    	res.send("success");
		}else{
			res.send("fail");
		}
	});
};