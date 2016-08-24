// 创建一个div用来动态显示动画效果
$(function(){
			var $placeHolder = $("<div id='placeholder'></div>");
			$placeHolder.appendTo($('.blog1'));
			var $inputt = $('<div class="inputt">The target Time：<input type="text" id="timeSet" value="October 1,2016 00:00:00" size="40"/><input type="button" id="startTime" value="Start"/></div>');
			$inputt.appendTo($placeHolder);
			// 创建计时容器
			var $time = $("<span>Time-Count-Down：</span><p id='time'></p><br/>");
			var $timeA = $("<p id='c_time'>Current time:<a href='showCurrent.html'>Take a look now.</a></p>");
			$timeA.insertBefore($inputt);
			// var $time1 = $("<p>Current Time:</p>");
	$('.blog1 .bTitle a').click(function(){
			$('#placeholder').toggle(500);

			
			

		
		// 计时图片容器
		/*为保持界面美观，将其作为链接，打开新网页*/ 
			/*var $timePic =$("<ul></ul>");
			var $picCount = $('<li><img /></li><li><img /></li><li><img /></li><li><img /></li><li><img /></li><li><img /></li>');
			$picCount.appendTo($timePic);
			$timePic.appendTo($placeHolder);*/

			// 倒计时设计
			var time;
			
			// var timeSet = new Date($('#timeSet').val());
			// 点击按钮，计时开始
			$("#startTime").click(function(){
			// 获取输入的时间
			var timeSet = new Date($('#timeSet').val());

			clearInterval(time);
			
			time = setInterval(function(){
				var timeNow = new Date();
				// 计算时间差,以秒为单位
				var t = Math.floor((timeSet-timeNow)/1000);

				// 为了防止额外添加的li元素影响计算，此处动态删除
				// $('ul .tempor').remove();

				if(t >= 0){
					var days = Math.floor(t/86400);		//间隔天数
					var hours = Math.floor(t%86400/3600);	//小时
					var minutes = Math.floor(t%86400%3600/60);	//分钟
					var seconds = Math.floor(t%60);		//秒



					var str2 = days+"天 "+hours+"时 "+minutes+"分 "+seconds+"秒";
					// console.log(typeof str);		//string
					$('#time').text(str2);
					$time.insertAfter($inputt);

					// 显示现在时间：
				/*	var nHour = timeNow.getHours();
					var nMinute = timeNow.getMinutes();
					var nSecond = timeNow.getSeconds();
					var str1 = toTwo(nHour)+toTwo(nMinute)+toTwo(nSecond);
					// console.log(str1);
					// 倒计时图片设计
					for(var i=0; i<str1.length; i++){
						$("li img").eq(i).attr("src","images/img/"+str1.charAt(i)+".jpg");
					}


					// 动态添加显示时间间隔符':'的li元素
					$('<li class="tempor"><img src="images/img/colon.jpg"/></li>').insertAfter($('.blog1 ul li').eq(1));
					$('<li class="tempor"><img src="images/img/colon.jpg"/></li>').insertAfter($('.blog1 ul li').eq(4));
*/
				}else{
					clearInterval(time);
				}


			},1000);

		});

		function toTwo(n){
			return n<10?'0'+n:''+n;
		}
				
});

});