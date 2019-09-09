$(document).ready(function(){
	
	var  scrollLink = $('.scroll');
	
    $('section').height($(window).height());
	$(window).resize(function(){
			$('section').height($(window).height());
	});
	
	
	//smooth scrolling 부드럽게 이동~
	scrollLink.click(function(e){
		e.preventDefault();
		$('body, html').animate({
			scrollTop : $(this.hash).offset().top
		},1000);
	});
	
    
	
	
	//Active Link 글씨 색 변화
	$(window).scroll(function(){
			
		var scrollLocation = $(this).scrollTop();
		
		scrollLink.each(function(){
		
			var sectionOffset = $(this.hash).offset().top-100;



			if(sectionOffset <= scrollLocation){
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		});
	
	});
    
    var i = 0;
	var imgs = ['img/Retriever_4.jpg','img/Retriever_3.jpg','img/Retriever.jpg'];
	var img = $('#home');
	
	setInterval(function(){
		
		img.fadeOut(400,function(){
			img.css('background-image','url('+imgs[i++]+')').fadeIn(400);
		});
       
		if(i == imgs.length){
			i = 0;
		}
		
	},2000);
    $('.modal').magnificPopup({
		type: 'image',
		gallery:{enabled:true},
        closeOnBgClick: 'true',
        closeOnContentClick: 'true',
        overflowY: 'true'
	});
    
});