var express = require('express');
var router = express.Router(); 
var userService = require('../service/userService');//data yang akan di import

let usersList = [{nik:12, nama:'jumilar', jurusan:'sastra', alamat:'bangbayang'},
	{nik:13, nama:'argan', jurusan:'IT', alamat:'cijambe'},
	{nik:14, nama:'regi', jurusan:'hardware', alamat:'cibeunying'},
	{nik:15, nama:'irlan', jurusan:'matematik', alamat:'bojongKacor'}]

router.get ('/', function(req, res, next){
	console.info(">>>> "+userService);
	let data =  {title:'kepegawaian', users: cobaPanggil() };
	 res.render('kepegawaian', data );

});
	
router.get('/users2', function(req, res, next) {
	let data =  {title:'kepegawaian', users: usersList };
	res.render('kepegawaian', data);

});

router.get('/nik', function(req, res, next) {
	console.info(req.query) //req.query ambil data get dari url
	let no = req.query.no;
		let nama = req.query.nama;
		var userData =  cobaPanggilNik(no);
		let data = {titleDetail: 'User Detail',user: userData}
	res.render('kepegawaianDetail', data);

});


function cobaPanggil(){ // panggil dalam klass versi 1
	return userService.findAll();
}

var cobaPanggilNik = function(nik){ // panggil dalam klass versi 2
	return userService.findByNik(nik);
}

// router.get('/guru', function(req, res, next){
// 	guru.findbynik(req.params, kepegawaian, function (guru,err){
// 		if ( err ) return next(err.guru);
// 		res.json(kepegawaian);
// 		res.render('kepegawaian',guru);
// 	});
module.exports = router; 