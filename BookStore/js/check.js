function checkUserName(){  
var fname = document.myform.txtUser.value;
if(fname.length != 0){
	for(i=0;i<fname.length;i++){
	var ftext = fname.substring(i,i+1);
		if(ftext < 9 || ftext > 0){
			alert("名字中包含数字 \n"+"请删除名字中的数字和特殊字符");
			return false
		}
	}
   }
else{
    alert("未输入用户名 \n" + "请输入用户名");
	return false
     }
	 return true;
}

function passCheck(){
var userpass = document.myform.txtPassword.value;
	if(userpass == ""){
		alert("未输入密码 \n" + "请输入密码");
	return false;
	}
	// Check if password length is less than 6 charactor.
	if(userpass.length < 6){
		alert("密码必须多于或等于 6 个字符。\n");
	return false;
	}
	return true;
}
 function validateform(){
	if(checkUserName()&&passCheck()) 
	   return true;
	 else
	   return false;
     }