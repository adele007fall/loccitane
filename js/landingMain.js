$(document).ready(function(){
	
	$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	
	if(wScroll > $('.products').offset().top-600){
		$('.products div').each(function(i){
			setTimeout(function(){
				$('.products div').eq(i).addClass('showing');
			},450*(i+1));
			
	});
	}
	
	});
	
});