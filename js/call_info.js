window.console = window.console || (function(){ 
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){}; 
	return c; 
})(); 

var callInfo = {
	setData:function(params){
		
	},
	project : 'http://ws.520m.com.cn/api/',
	test : 'http://ws.520m.com.cn/api/',
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
