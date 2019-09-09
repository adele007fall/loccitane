$(document).ready(function(){
    
    $('.fav').each(function(){
        
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
	
	$('.autoplay').slick({
      autoplay: true,
  autoplaySpeed: 2000,
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
        centerPadding: '60px',
        focusOnSelect: true,
        responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
    });
	
});