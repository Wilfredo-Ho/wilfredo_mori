$(function(){

		$frame3 = $("<iframe width='100%' id='myframe3' frameborder='0' height='108rem' src='./createTable.html'></iframe>");
		$frame3.appendTo($('.blog3'));

	$('.blog3 #b3').click(function(){
		$frame3.toggle(1000);
	});

});