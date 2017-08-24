$(function(){
//				搭配
//				给所有的li标签添加鼠标移入事件
				$('#table-dapei ul li').mouseover(function(){
//					获取当前li标签的序号并赋值给num
					var num = $(this).index();
//					让num号元素显示
					$('#dapei .right').eq(num).show();
//					console.log(a.html())
//					让除了num号元素之外的其他兄弟元素隐藏
					$('#dapei .right').eq(num).siblings('#dapei .right').hide();
//					给当前序号增加样式
					$(this).addClass('cur').siblings('li').removeClass('cur');
				})
//				搭配结束

//				配件
//				给所有的li标签添加鼠标移入事件
				$('#table-pei ul li').mouseover(function(){
//					获取当前li标签的序号并赋值给num
					var num = $(this).index();
//					让num号元素显示
					$('#peijian .right').eq(num).show();
//					console.log(a.html())
//					让除了num号元素之外的其他兄弟元素隐藏
					$('#peijian .right').eq(num).siblings('#peijian .right').hide();
//					给当前序号增加样式
					$(this).addClass('cur').siblings('li').removeClass('cur');
				})				
//				配件结束

//				周边
//				给所有的li标签添加鼠标移入事件
				$('#table-zhou ul li').mouseover(function(){
//					获取当前li标签的序号并赋值给num
					var num = $(this).index();
//					让num号元素显示
					$('#zhoubian .right').eq(num).show();
//					console.log(a.html())
//					让除了num号元素之外的其他兄弟元素隐藏
					$('#zhoubian .right').eq(num).siblings('#zhoubian .right').hide();
//					给当前序号增加样式
					$(this).addClass('cur').siblings('li').removeClass('cur');
				})
//				周边结束
			})