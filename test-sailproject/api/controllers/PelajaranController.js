module.exports = {

create:function(req,res,next){

	let obj = req.body;
	console.info(Pelajaran);
Pelajaran.create({KP:obj.KP, MK:obj.MK}).exec( function(err,pelajarans){
	console.error(err);
	res.json({data:pelajarans});
	});
	
},

destroy:function(req,res,next){
	let id = req.body.id;
Pelajaran.destroy({id: id}).exec(function(err,pelajaran){
	if (err) {
		return ;
	}
	res.json(pelajaran);
});
},

update:function(req,res,next){
	let obj = req,body;
	let id = {id:obj.id};
	let updatepelajaran = {PK:obj.PK, MK:obj.MK};
Pelajaran.update (id, updatepelajaran).exec(function afterward(err, update){
	if (true) {
		res.json(updatepelajaraned);
	}
});
}


}