var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var latihan = require('/latihan'/module/latihan1.js);

/* GET home page. */
router.get('/', function(req, res, next) {
	let obj=beriOject();
	console.log("latihan");
    res.render('peternakan', obj);
});

router.get('/testAsync', function(req, res, next) {
	
    res.json(test());
});


router.post('/save', function(req, res, next) {

	let user={
		id:req.body.id,
		namaPemilik:req.body.namaPemilik,
		hewan:req.body.hewan,
		ras:req.body.ras,
		alamat:req.body.alamat
	}
 res.render('iyay', users);
});
//function beriobjek adalah cara untuk create
function beriOject (){
	let user={id:1, namaPemilik:'opiks',hewan:'unggas', ras:'kampung' alamat:'bangbayang'};
	console.log("panggil beriOject");
	return user;
}

function test (){
	
	console.log("test")
	return beriOject();
}
function update (){
	let user={id:'', name:'', hewan:'', ras:'', alamat:''};
	
}


module.exports = router;
