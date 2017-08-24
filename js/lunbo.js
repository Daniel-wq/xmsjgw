$(function() {
	function run() {
		if(num == 4) {
			num = -1;
		}
		num++;
//					抓取所有img标签让num号元素淡入,其他的兄弟元素淡出
		$('#menu-right img').eq(num).fadeIn(500).siblings('#menu-right img').fadeOut(500);
//					抓取所有li标签让num号元素背景变红,其他的兄弟元素背景白
		$('#menu-right li').eq(num).css({ 'background': '#fff' }).siblings('#menu-right li').css({ 'background': '#666' })
	}
//				定义一个大总管变量
	var num = 0;
//				定义定时器
	var timer = setInterval(run, 1500);
//				给menu-right添加hover(就是鼠标移入移出的事件合集)
	$('#menu-right').hover(function() {
//					移入时清理定时器
		clearInterval(timer);

//					让两个a标签显示
		$('#menu-right .left,#menu-right .right').css({'opacity':'1'});

	}, function() {
//					移出时恢复定时器
		timer = setInterval(run, 1500)
//					让两个a标签隐藏
		$('#menu-right .left,#menu-right .right').css({'opacity':'0.1'});
	})

	$('#menu-right li').mouseover(function() {
//					var Lnum = $(this).index();
//						alert(Lnum)
//						获得元素的序号
		num = $(this).index();

//					抓取所有img标签让num号元素淡入,其他的兄弟元素淡出
		$('#menu-right img').eq(num).stop().fadeIn(500).siblings('#menu-right img').stop().fadeOut(500);
//					抓取所有li标签让num号元素背景变白,其他的兄弟元素背景灰
		$('#menu-right li').eq(num).css({ 'background': '#fff' }).siblings('#menu-right li').css({ 'background': '#666' });
	})

	$('#menu-right .left').click(function() {
		if(num == -1) {
			num = 4;
		}
		num--;
//					抓取所有img标签让num号元素淡入,其他的兄弟元素淡出
		$('#menu-right img').eq(num).stop().fadeIn(500).siblings('#menu-right img').stop().fadeOut(500);
//					抓取所有li标签让num号元素背景变白,其他的兄弟元素背景灰
		$('#menu-right li').eq(num).css({ 'background': '#fff' }).siblings('#menu-right li').css({ 'background': '#666' });

	})
	$('#menu-right .right').click(function() {
		if(num == 4) {
			num = -1;
		}
		num++;
//					抓取所有img标签让num号元素淡入,其他的兄弟元素淡出
		$('#menu-right img').eq(num).stop().fadeIn(500).siblings('#menu-right img').stop().fadeOut(500);
//					抓取所有li标签让num号元素背景变白,其他的兄弟元素背景灰
		$('#menu-right li').eq(num).css({ 'background': '#fff' }).siblings('#menu-right li').css({ 'background': '#666' });

	})

})