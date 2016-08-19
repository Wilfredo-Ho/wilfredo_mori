
window.onload  = addLoadEvent; 
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload == "function"){
		window.onload = function(){
			oldonload();
			func();
		}		
	}else{
		window.onload = func;
	}
}

/*错误之处*/
/*函数要独立调用，window.onload只调用一次*/
/*window.onload = function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload == "function"){
		window.onload = function(){
			oldonload();
			func();
		}		
	}else{
		window.onload = func;
	}
}*/