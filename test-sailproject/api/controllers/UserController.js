

module.exports = {

//untuk mendapatkan data
getAll: function(req, res, next){

User.find().exec( function(err, users){
	res.json({data:users});
});
},

get: function(req, res, next){
	let obj = req.query;
	// console.info(req.body);
	// console.info(req.query);
	// console.info(req.params);
	let where = {id:obj.id}; //btw ieu req.obj timana?salah etamah karek ditulis bi ntdna rek nyieun params, mun erek ge langsung obj.id betul teu yay?td g jiga kitutp can asup wae
	let objfindOne = {name:obj.name, alamat: obj.alamat, umur:parseInt(obj.umur)};
User.findOne(where,objfindOne).exec( function(err, findOne){
	console.log('Found "%s"', users);
	if(err){
		return res.serverError(err);
	}else {
		return res.json({data:users}); // mun diluhur ges return di handap moal bisa kapake deui yay, terkecuali mun aya kondisi tertentu, contoh 
	}
  //siga kieu yay?mun nu biasa kmha? biasa naona?tnpa if else , nah mun ieu nya kumaha kondisi na yay, nu dilhur mun error return err, mun bener nya kaluar data na.
  //jadi sabenerna mah gunakan logika iyay, pas na kudu dikumaha ken
	
});

},


//untuk create data
create: function(req, res, next){

let obj = req.body;
console.info( parseInt(obj.umur, 10));
// // parseint merubah string ke number yay
parseInt(obj.umur, 10) //dirubah jadi integer
User.create({name:obj.name, alamat: obj.alamat, umur:parseInt(obj.umur)}).exec( function(err, users){
	console.error(err);
	res.json({data:users});
});

},

update: function(req, res, next){
	let obj = req.body; //ieu maksudna let.obj naon?jd ngambil obj nu di update, lain siga kieu yay let.obj, iyay apal car angieun variable?maksudana variable update,? 
	//saperti var, let, const eta jang ngieun variable. mun let.obj ieu naon? mun erek ge siga kieu yay let obj, paham teu kira2 yay??
// na.jd teu kudu pake let obj?
//sabener na mah bebas yay, ngan iyay salah aturana, mun let.obj ieu ngieun naon?nya , mun dujava seperti ieu kesalahana String.nama kudu na String nama; mun javascript let nama; let alamat; var obj = {}; let nama = {};
//kira2 paham teu yaya hehehe?nya paham ga , kade ulah poho deui nya yay :D hehe..tp eta kahandapna salah teu? salah parameterna yay kudu na kieu :
//update aya 2 parameter object {id: obj.id} untuk where na, &  {name:obj.name, alamat: obj.alamat, umur:parseInt(obj.umur)} anu rek di update,
//nu update ieu paham teu kira2 mksud na?jd eta obj nu rek dihapusna, dihapus atau di update yay?di update
// paham teu yaya ieu tutorial na?mun ningali tutor kadang sok beda siga ega kamari nyieun anu create, abi oge ieu nurutan nu siga di tutorial yay
//emang nu di tutor teu kieu ngan abi nyobaan sarua jeung anu create, nya kudu sering explore oge yay,, 
//nah nu dihandap ieu jang nga update, paham parameter nu kudu diasupken? mun di data base mah paham mun di javasrcipt masih bingung
// lieu weh yay

// mun kieu poaham teu yay?mun kitu mah lumayan aya 
let where = {id: obj.id};
let objUpdate = {name:obj.name, alamat: obj.alamat, umur:parseInt(obj.umur)};
	User.update(where, objUpdate).exec(function afterwards(err, updated){
		console.error(err);
		if(err){
		res.json({err:err});
		}
		res.json({data:updated});
});
},
//bieu nu id na 2 ka update nya yay?nya., bisa terusken deui ku iyay?cobaan ga iyay hayang paham bener mun teapal di wa deui.,
//oke sipp yay, otak atik heula weh nu ieu., nkne iyay niogeun deui model anyar deui nya.ok tp iayay hayang paham kabeh hela..
//soalna bieu oge otak atik can paham bener.. can paham dimana na yay?nya sugan teh di post na teu di rubah oge, ohh da biasana amun jang destroy bisa make delete atau post yay
// nya bieu mah abi nambahken oge pemahaman anyar ka iyay, ameh apal method http teh aya get, post, put, delete dan sebagainya, tp nu biasa dipake mah ngan 4 eta hungkul yay
//mun siga like jang naon?, like nu mana yay? 'like': '%beans' ieu mksudna>?nya eta ., eta mah jang nga query yay
// jang query https://sailsjs.com/documentation/concepts/models-and-orm/query-language
//paham yay?ok., oke lanjut yay, ssiing alancar :D heheaamiin
//wasalam ga eta nyieun lamaran tea bayar gening, gratis yayanu pdfonline bayar ga abi teu jadi wae nyieun cv na. https://cvmkr.com ges di coba nu eta?nya nu eta
//papayan weh ku iyay cv online free toi kgoogle..ok ngke di coba deui...,
// ulah poho cantumken pengalaman iyay di java, spring boot, jsp, nodejs expressjs, sails js na nya.,
//pengalaman anu tidak bersngkutan mah ulah di cantumkern nya.siga java asupk wae?asupken yay
// inti na anu bersngkutan dng programming cantumken yay.ok siap ga nya atuh iya cobaan ., ngoding hela ., oke yay

destroy:function(req,res,next){ // siga kitu oke yay?ok eta mun nu update kmha naha teu ngarubah og, mana sample tutorial na?
	let id = req.body.id;
	User.destroy({id: id}).exec(function (err, user){
		if (err){ 
			return;
		}
		res.json({data:user});

});

},
put:function(req,res,next){
	let obj = req.body;
	let obj1 = req.query;
	parseInt(obj.umur);
	let create = {name:obj.name, alamat: obj.alamat, umur:parseInt(obj.umur)};
	let where= {id: obj.id};
findorCreate.function(where ||create).exec(function(err, users){
	console.error(err);
	res.json({data,users});

});
}


// destroy: function(req, res, next){


}

//sampe dieu bisa diturutan yay? bisa ayna mah,
//jadi urutana :
//1. setting connection
//2. development na rubah
//3. ngieun model di awali dengan huruf besar
//4. ngieun controller & method
//5. daftarken diroute bisa get, post, put and delete
// waterline orm na https://sailsjs.com/documentation/reference/waterline-orm/models
// bisa diikuti yay?eta waterline fungsin akumaha ga
// waterline link eta jang referensi method create, update, delete/destro