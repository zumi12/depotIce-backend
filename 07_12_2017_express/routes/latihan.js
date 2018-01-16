var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	let obj = beriObjek();
	console.log("panggil latihan");
	res.render('latihan',obj);

});

router.get('/testAsync', function(req, res, next){
	res.json(test());
});

router.post('/',function(req, res, next){
	let farm = {
		id:req.body.id,
		owner:req.body.owner,
		ras:req.body.ras,
		alamat:req.body.alamat
	}
	res.render('latihan',farm);
});

router.post('/',function(req, res, next){
	farm.create(req.body,function(err,post){
		if (err) return next(err);
		res.json(post);
	});
});

function beriObjek(){
	let farm = {id:12, owner:'opik farm', ras:'thailand', alamat:'bangbayang no.17' }
	console.log('panggil beriObjek');
	return farm;
}

function test(){
	console.log('test');
	return beriObjek('latihan');
}


module.exports = router;
