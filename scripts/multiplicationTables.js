$(function(){
	$frame2 = $("<iframe width='820rem' id='myframe2' frameborder='0' height='310rem' src='./multiplicationTables1.html'></iframe>");
	$frame2.appendTo($('.blog2'));
	$('.blog2 .bTitle').click(function(){
		$frame2.toggle(1000);
	});
});