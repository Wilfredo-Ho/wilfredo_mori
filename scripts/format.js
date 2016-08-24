/*无输入情况下重复验证会导致错误提示信息叠加*/
// 解决方法：每次验证前清空验证信息
function checkMessage(){
	var uName = document.getElementById("uName");
	var pWord = document.getElementById("pWord");
	var uNameText = document.getElementById("uNameText");
	var pWordText = document.getElementById("pWordText");
	var land = document.getElementById("land");

	land.onclick = function(){
		if(uName.value == ""){
			//if no input username, get focus
			uName.focus(); 
			uNameText.firstChild.nodeValue = "*";
			uNameText.firstChild.nodeValue +=" Input username!";
			//if no input password, get focus
		} else if(pWord.value == ""){
			uNameText.firstChild.nodeValue = "*";
			pWord.focus();
			pWordText.firstChild.nodeValue = "*";
			pWordText.firstChild.nodeValue ="* Input password!";
		}else{
			pWordText.firstChild.nodeValue = "*";
		}
}

}

addLoadEvent(checkMessage);