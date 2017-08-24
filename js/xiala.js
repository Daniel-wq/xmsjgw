$(function(){
//	获取window的宽度并赋给header-erji菜单
	var w = $(window).width();
	$('.header-center .title1 .header-erji').css({'width':w+'px','marginLeft':-w/2+'px'});

//	给每个h-title1的title1标签加入鼠标移入事件
	$('.header-center .h-title .title1').mouseenter(function(){

//		让当前title1标签里的header-erji显示
		$(this).find('.header-erji').show();

//		让高度逐渐变成230px
		$(this).find('.header-erji').stop().animate({'height':'230px'},300);
//		给下拉菜单增加Class属性
		$(this).find('.header-erji').addClass('active');
//		让当前元素的其他兄弟元素里的header-erji全部隐藏
		$(this).siblings('.title1').find('.header-erji').stop().animate({'height':'230px'},300).hide();

//		检测window宽度的变化
		$(window).resize(function(){

//			获得当前屏幕宽度
			var w = $(window).width();

//			把屏幕宽度赋给header-erji,把header-erji的margin-left值设置为屏幕宽度的一半
			$('.header-center .title1 .header-erji').css({'width':w+'px','marginLeft':-w/2+'px'});
			
		})
	})

//	给title1加入移出事件
	$('.header-center .h-title .title1').mouseleave(function(){
		$('.header-center .title1 .header-erji').stop().animate({'height':'0px'},300);
//		给下拉菜单移除Class属性
		$(this).find('.header-erji').removeClass('active');
	})
	
})