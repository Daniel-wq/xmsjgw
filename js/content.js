$(function() {
//		遍历所有content
	$('.content').each(function() {
//		把jquery对象转成原生js对象	
		var jsThis = $(this)[0];
//		获得jquery的对象
		var jqThis = $(this);
//		设置大总管变量 然后把num存入每一个content里
		jsThis.num = 0;

//		点击li标签事件
		$(this).find('ul li').click(function() {
			jsThis.num = $(this).index();
//			var a = $(this).index();
//			抓取所有con标签让num号元素移动
			$(this).parents('.content').find('.con').animate({ 'left': -295 * jsThis.num + 'px' }, 300);
//			抓取所有li标签让num号元素增加class样式,其他的兄弟去除class样式
			$(this).addClass('active').siblings('li').removeClass('active');
		})

//			点击左箭头
		$(this).find('.left').click(function() {
			jsThis.num--;
			if(jsThis.num <= 0) {
				jsThis.num = 0;
			}
//				alert(jsThis.num);
//				抓取所有con标签让num号元素移动
			$(this).parents('.content').find('.con').animate({ 'left': -295 * jsThis.num + 'px' }, 300);
//				抓取所有li标签让num号元素增加class样式,其他的兄弟去除class样式
			$(this).parents('.content').find('li').eq(jsThis.num).addClass('active').siblings('li').removeClass('active');
		})
//			点击右箭头
		$(this).find('.right').click(function() {
			jsThis.num++;
			var length = $(this).parents('.content').find('li').length
			if(jsThis.num >= 3) {
				jsThis.num = length - 1;
			}
//				alert(jsThis.num);
//				抓取所有con标签让num号元素移动
			$(this).parents('.content').find('.con').animate({ 'left': -295 * jsThis.num + 'px' }, 300);
//				抓取所有li标签让num号元素增加class样式,其他的兄弟去除class样式
//				$(this).eq(jsThis.num).css({'background':'orange'}).siblings('li').css({'background':'gray'});
			$(this).parents('.content').find('li').eq(jsThis.num).addClass('active').siblings('li').removeClass('active');
		})
		
	})
//			给content添加hover事件
	$('.content').hover(function() {
//		var jsThis = $(this)[0];
//		$('.content>a').show();
		$(this).find('.left,.right').show();
	}, function() {
//		$('.content>a').hide();
		$(this).find('.left,.right').hide();
	})
})