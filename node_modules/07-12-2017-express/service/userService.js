

let users = [{nik:0123, nama:'jumilar', pengajar:'sastra', alamat:'bangbayang'},
	{nik:0124, nama:'argan', pengajar:'informatika', alamat:'cijambe'},
	{nik:0125, nama:'regi', pengajar:'hardwear', alamat:'cibeunying'},
	{nik:0126, nama:'irlan', pengajar:'matematika', alamat:'bojong kacor'}];

//module.exports = function() {
var oke = {};
oke.findByNik = function(nik){
				for(let i = 0; i < users.length; i++){
					let user = users[i];
							if(user.nik == nik){
								return user;
							};
				};
},

oke.findAll = function(){
		return users;
}


module.exports = oke; 