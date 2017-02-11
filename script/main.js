$('.intro').css('display','none');
	$('.right--data').css('display','none');
	$(document).ready(function(){
		$('.left').css('min-height', $(window).innerHeight());
		$(window).resize(function(){
			$('.left').css('min-height', $(window).innerHeight());
		});
		$('.intro').slideDown(800);
		$('.right--data').delay(800).fadeIn(400);
		
	})
