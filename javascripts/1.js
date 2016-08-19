$(function(){
	$('.content img').hover(function(){
		
			$(this).animate({width:'+=50',height:'+=50'});
			
	},function(){
		
		$(this).animate({width:'-=50',height:'-=50'});
		
	});
})