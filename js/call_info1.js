var callInfo = {
	setData:function(params){
		
	},
	project : 'http://gygfzx.com:8089/app/',
	test : 'http://gygfzx.com:8089/app/',
	sendData:function(controller,params,metherd,call){
		var url = this.project +　controller;
		$.ajax({
			url: url,	
		 　 	data:params,
		 　 	type: metherd,
		 　 	dataType:'json',
		 　 	success:function(data){
		 		console.log(data);
		 		call(data);
		 	},
		 　 error:function(err){
		　　	console.log(err);
			}
		});
	},
};
