$(document).ready(function(){
	
	/* visual */
    
    $('body').scrollTop(function(){
        $('.visual > .move1').addClass('down');
        $('.visual > .move2').addClass('up')
    });
    
    
    
    
    var i = 0;
    var visualImgs = ['img/bg_main_falls.jpg','img/bg_main_rose.jpg','img/bg_main_coconut.jpg','img/bg_main.jpg'];
    var visualImg = $('.visual');
    
    
    
    setInterval(function(){
        visualImg.fadeOut(400,function(){
            visualImg.css('background-image','url('+visualImgs[i++]+')').fadeIn(400);
        });
        if(i == visualImgs.length){
            i = 0;
        }
        
    },3000);
    
   
    
    
	/* menu fade InOut */
    
    
    
        var stone = 0;
    
    $(window).scroll(function(){
        
        stone = $(this).scrollTop();
        
        
        
        if(stone < $('.products').offset().top){
           
           $('.products > div > div >div').addClass('active');
           }
        
        else if(stone < $('.spa').offset().top-400){
           
            $('.story > div:nth-of-type(2) > div').addClass('active1');
                    }
        else{

            $('.spa > div > div').addClass('active2');
                    }
        
		
       var scrollTop = $(this).scrollTop();
		
        
        
        $('.content').css('top',-(scrollTop * 0.03) + 'px');
        
        $('.products > div:first-of-type').css('top',-(scrollTop * 0.09) + 'px');
        $('.products > div > div >div.active').css('top',-(scrollTop * 0.05) + 'px');
        
        
        
        
        $('.story > div:nth-of-type(2)').css('top',-(scrollTop * 0.03) + 'px');
        $('.story > div:nth-of-type(2) > div.active').css('top',-(scrollTop * 0.05) + 'px');
        
        $('.spa > div').css('top',-(scrollTop * 0.06) + 'px');
        $('.spa > div > div.active').css('top',-(scrollTop * 0.03) + 'px');
       
        
    });
    $('.icon_burger').click(function(){
		$('.navWrap').toggleClass('click');
		

        $('.menuOn').fadeToggle();
//        $('.menuOnHide').fadeOut();
		
		
       
    });
	
	
         
    
});



$(document).ready(function(){
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
        })
        if(i == imgs.length){
            i = 0;
        }
        
    },2300);
    
    
    
    
    
    });



/* accordion */
	
    
        