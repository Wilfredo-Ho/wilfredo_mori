$(function(){
	// var timer,page=3,count=3;
	// var step =Math.ceil(count/page);
	var len = $('.post ul li').length;
	var wid = $('.post ul li').width();
	var j =0;
	console.log(wid);
	timer = setInterval(function(){
		for(var i =0;i<len;i++){
				$('.post ul').animate({left:-i*wid},500,function(){
					$('.postStatus span').removeClass('active').eq(j).addClass('active');
					j++;
					if(j==3) j=0;
				}).delay(2000);
				if(i==2){
					$('.poastStatus span').eq(0).addClass('active');
					$('.post ul').animate({left:"0px"},0);

				}							
		}
	},3000);
});