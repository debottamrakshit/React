const conn = require('../common/conn.js');

module.exports = function (req,res) {
	const getOrder = req.body;
	const paymentType = getOrder[0].payment.type;
	const getAllProducts = getOrder[0].product;
	const shippingDetail = getOrder[0].address;
	conn.query("INSERT INTO orders(`user_id`,`payment_type`) VALUES('1','"+paymentType+"')", function (err, result, fields) {
	    if (err) throw err;
	    const lastInsertID = result.insertId;
	    conn.query("INSERT INTO shipping_details(`order_id`,`address1`,`address2`,`city`,`state`,`zip`,`country`) VALUES('"+lastInsertID+"','"+shippingDetail.line1+"','"+shippingDetail.line2+"','"+shippingDetail.city+"','"+shippingDetail.state+"','"+shippingDetail.zip+"','"+shippingDetail.country+"')", function (err, result, fields) {
			if (err) throw err;
		    for(var x=0;x<getAllProducts.length;x++){
		    	const productId = getAllProducts[x].id;
				conn.query("INSERT INTO order_details(`order_id`,`product_id`) VALUES('"+lastInsertID+"','"+productId+"')", function (err, result, fields) {
					if (err) throw err;				
				});	    
			}
			res.send('success');
		});
	});
};