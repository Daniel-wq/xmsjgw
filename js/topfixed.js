$(function(){
//				给window加入滚动条事件
				$(window).scroll(function(){
//					滚动条top值
					var top = $(window).scrollTop();
//					document.title = top;
//					判断
					if (top >= 800&&top<=4800) {
//						alert(123)
						$('.search').slideDown();
					}else{
						$('.search').slideUp();
					}
					
				})
			})