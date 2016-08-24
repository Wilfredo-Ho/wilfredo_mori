function dataSubmit(){
	var submits = document.getElementById("send");
	//var xhr="";如果放在这里，则声明和方法放在最前面的编制规则，会导致调用的时候xhr为undefined;

	submits.onclick = function(){
		var xhr=""; //函数内部变量
		try{
			 xhr = new XMLHttpRequest();
		}catch(e){
			 xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhr.open("get","1.txt",true);

		xhr.send();

		xhr.onreadystatechange = function(){
			if(xhr.readyState ==4 && xhr.status ==200){
				alert(xhr.responseText);
			}
		}
	}

}

addLoadEvent(dataSubmit);