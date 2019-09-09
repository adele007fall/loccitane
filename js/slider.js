$(document).ready(function(){
	
	// slideshow
	$('.slideShow').each(function(){
		
		var container = $(this);
		
		
		/*
		$(this).find('img').eq(0).fadeOut().appendTo(container);
		$(this).find('img').eq(1).fadeIn();
		
		*/
		function slideShow(){
			
			var img = container.find('img');
			var first = img.eq(0);
			var second = img.eq(1);
		
			first.fadeOut().appendTo(container);
			second.fadeIn();
		}
		
		setInterval(slideShow, 2000);
		
	});
	
	$('.clickSlide').each(function(){
		
		var timer;
		var container = $(this);
		
		function clickSlide(){
			
			var anchors = container.find('a');
			var first = anchors.eq(0);
			var second = anchors.eq(1);
			
			first.fadeOut().appendTo(container);
			second.fadeIn();
			
		}
		
		function startTimer(){
			timer = setInterval(clickSlide, 1500);
		}
		function stopTimer(){
			clearInterval(timer);
		}
		
		container.find('a').hover(stopTimer,startTimer);
		startTimer();
		
	});
	
	//background slider
	
	var i = 0;
	var imgs = ['img/main1.jpg','img/main2.jpg','img/main3.jpg'];
	var img = $('.bgSlider');
	
	setInterval(function(){
		
		img.fadeOut(400,function(){
			img.css('background-image','url('+imgs[++i]+')').fadeIn(400);
		});
		if(i == imgs.length){
			i = 0;
		}
		
		
	},1500);
	
	$('.bxSlider').bxSlider({
		  auto: true,
		  autoControls: true,
		  stopAutoOnClick: true,
		  pager: true,
		  slideWidth: 1200
});
	
	//slick Slider
	
	 $('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.autoplay2'
});
$('.autoplay2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.autoplay',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
			

	
	
});