$(function(){
	var num=0;
	function run(){
		if(num==1){
			num=-1;
		}
		num++;
		$('#danpin ul').animate({'left':-1226*num+'px'},1000);
	}
	var timer1 = setInterval(run,5000);
	$('.title #right .left').click(function() {
		$('#danpin ul').animate({'left':'-1226px'},200);
	})
	$('.title #right .right').click(function() {
		$('#danpin ul').animate({'left':'0'},200);
	})
	$('.title #right a').hover(function(){
		clearInterval(timer1);
	},function(){
	
		timer1 = setInterval(run,5000);
	})
})

	