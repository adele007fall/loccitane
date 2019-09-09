$(document).ready(function(){
	
	
	var wScroll = $(this).scrollTop();
	
	if(wScroll < $('.inner').offset().top-($(window).height()) / 1.3){
		$('.inner div').each(function(i){
			setTimeout(function(){
				$('.inner div').eq(i).addClass('showing')
			},450*(i+1));
		});
	}
	
	
	
	
	
	
	
	
	
	
	
	var i = 1;
	var imgs = ['img/main1.jpg','img/main2.jpg','img/main3.jpg'];
	var img = $('.bgSlider');
	
	setInterval(function(){
		img.fadeOut(400,function(){
			img.css('background','url('+imgs[i++]+')').fadeIn(400);
		});
		if(i == imgs.length){
			i = 0;
		}
	},2000);
	
    
	$('.modal').magnificPopup({
		type: 'image',
		gallery:{enabled:true}
	});
	
});