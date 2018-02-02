
var userService = {
	login : function(callback,username,password,cid){
		var params = {
			username:username,
			password:password,
			cid:cid,
		}
		callInfo.sendData('login?',params,'POST',function(msg){
			callback(msg)
		})
	}
};