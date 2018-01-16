var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	let users = [{id:1, name: 'argan', alamat: 'cijambe'},
	{id:2, name: 'aegi' alamat: 'cibenying'},
	{id:3, name: 'iyay' alamat: 'bangbayang'},
	{id:4, name: 'ilan' alamat: 'bojong kacor'}]
  res.render('coba', { title: 'coba', users });
});

router.get('/id', function('/',req, res, next){
	users.findbycoba(req.params, id, function (err.post){
		if ( err ) return next(err.post);
		res.json(coba);
	});
});

module.exports = router;
