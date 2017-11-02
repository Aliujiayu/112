var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'demo'
})
router.post('/list',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	con.query('SELECT * FROM demo',function(err,rows){
		res.send(rows);
	})
})
router.post('/list1',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	var yi=req.body.yi;
	var er=req.body.er;
	var san=req.body.san;
	var si=req.body.si;
	console.log(yi,er,san,si);
	con.query('INSERT INTO demo(yi,er,san,si) VALUES("'+yi+'","'+er+'","'+san+'","'+si+'")',function(err,rows){
		res.send(rows);
	})
})
module.exports = router;