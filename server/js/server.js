const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const checkLogin = require('./user/login.js');
const getAllProducts = require('./products/products.js');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.get('/getAllProducts', (req, res) => {
	try{
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		getAllProducts(req,res);
	}
	catch(error){
		res.send("Server Error")
	}
})

app.post('/login', (req, res) => {
	try{
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		checkLogin(req,res);
	}
	catch(error){
		res.send("Server Error")
	}
})


app.listen(port, () => console.log(`Server started on port ${port}!`))