/**
 * Created by ThinkPad on 12/2/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	let obj=beriOject();
	console.log("panggil iyayController");
    res.render('iyay', obj);
});

router.get('/testAsync', function(req, res, next) {
	
    res.json(test());
});


router.post('/save', function(req, res, next) {

	let user={
		id:req.body.id,
		name:req.body.name,
		alamat:req.body.alamat
	}
 res.render('iyay', user);
});
//function beriobjek adalah cara untuk create
function beriOject (){
	let user={id:1, name:'iyay1', alamat:'bangbayang'};
	console.log("panggil beriOject");
	return user;
}

function test (){
	
	console.log("test")
	return beriOject();
}

module.exports = router;
