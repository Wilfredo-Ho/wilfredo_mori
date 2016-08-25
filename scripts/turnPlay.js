$(function(){
		var page = 1;	//设置当前页面
		var number = 4; 	//设置每个页面的数目
		var current,next;
		var time = 1000;
		var interval;
		var page_width = $('.slidePic .showPic').width();
		// console.log("page_width:"+page_width);
		var page_count = Math.ceil($('.slidePic li').length/number);	//计算总共有多少个页面
		
		// 初始化隐藏左右按键
		$('.slidePic .btn').hide();
		
		$('.slidePic ul,.btn').hover(function(){
			stopPlay();			//停止自动放映
			$('.slidePic .btn').show();
		},function(){
			startPlay();		//自动轮播
			$('.slidePic .btn').hide();
		});

		// 通过导航菜单切换
		$('.slidePic .page_ind span').hover(function(){
			// stopPlay();
			current = $('.slidePic .page_ind').find('.item_select').index();
			// console.log(current);
			next = $(this).index();
			play(current,next);
		},function(){

		});
		// 按动左键，实现手动切换
		$('.slidePic .slideLeft').click(function(){
			current=$('.slidePic .page_ind').find('.item_select').index();
			next = current-1;
			if(next<0){next = next+page_count;}
			play(current,next);
		});
		// 按动右键，实现手动切换
		$('.slidePic .slideRight').click(function(){
			nextt();
		});
		function nextt(){
			current=$('.slidePic .page_ind').find('.item_select').index();
			next = current+1;
			if(next>=page_count){next = next-page_count;}
			play(current,next);
		}
		// 播放函数
		function play(current,next){
			if(!$(".slidePic ul").is(':animated')){
				var dis = (next - current)*page_width;
			 console.log(dis);
				$(".page_ind span").removeClass('item_select')
								   .eq(next).addClass('item_select');
				$(".slidePic ul").animate({left:'-='+dis},500);
			}
			
		}

		function startPlay(){
			interval = setInterval(nextt,time);
		}
		function stopPlay(){
			clearInterval(interval);
		}
		// 自动轮播
		startPlay();
});