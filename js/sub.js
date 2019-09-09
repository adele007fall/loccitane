$(document).ready(function(){
	
	
	/* menu fade InOut */
    $('.icon_burger').click(function(){
		$('.navWrap').toggleClass('click');
		

        $('.menuOn').fadeToggle();
//        $('.menuOnHide').fadeOut();
		
		
       
    });
    
    
	
	
	
	/* accordion */
	function closeAll(){
		$('.panel').addClass('close');
	}
	
	function open(a){
		a.removeClass('close');
	}
	
	var ac = $('.accordion').find('a');
	
	closeAll();
	
	$('.accordion').click(function(){
		var ac = $(this);
		var menu = ac.next();
		//열리기 전에 모든 메뉴를 다고
		closeAll();
		//클릭된 그것의 하위메뉴를 열어라!
		open(menu);
	});
    
    
    var i = 0;
    var imgs = ['img/gallery_spa.jpg','img/gallery_tour.jpg','img/gallery_botique.jpg'];
    var img = $('.gallery_span');
    
    setInterval(function(){
        img.fadeOut(400,function(){
            img.css('background-image','url('+imgs[i++]+')').fadeIn(400);
        });
        if(i == imgs.length){
            i = 0;
        }
        
    },2300);
    
    
    
    
        var stone = 0;
    
    $(window).scroll(function(){
        
        stone = $(this).scrollTop();
        
        if(stone < $('.factory').offset().top){
           
           $('.factory .left div:first-of-type').addClass('activate');
           }
        
        else if(stone < $('.recycle').offset().top-400){
           
            $('.recycle .left b').addClass('activate2');
            
            $('.recycle .left p').addClass('activate2');
                    }
        else{

            $('.reward > div:nth-of-type(2)').addClass('activate3');
                    }
        
		
		
		
       var scrollTop = $(this).scrollTop();
		
        $('.factory .left div:nth-of-type(3)').css('top',+(scrollTop * 0.03) + 'rem');
        
        
    });
    
    
         
    
});