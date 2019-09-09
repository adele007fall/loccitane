$(document).ready(function(){
    var mainNav = $('nav').children('ul').children('li');
    var subNav = mainNav.find('ul');
    
    $('button').click(function(){
        
        $(this).next().stop().slideToggle();
    });
    
    
    if($(window).width() < 768){
        mobileNav();
    }else{
        pcNav();
    };
    
    $(window).resize(function(){
        if($(window).width() < 768){
            $('nav').hide();
            mainNav.off();
            mobileNav();
        }else{
            subNav.hide();
            mainNav.children('a').off();
            pcNav();
        };
    });
    
    
    function mobileNav(){
        
    mainNav.each(function(){
            $(this).click(function(){
            subNav.hide();
            $(this).find('ul').show();
        });
    }); mainNav.children('a').click(function(e){
            e.preventDefault();
        });
    };
    
    function pcNav(){
            mainNav.on({
            'mouseenter focusin' :function(){
                 $(this).find('ul').stop().slideDown();
            },
            'mouseleave focusout' :function(){
                $(this).find('ul').stop().slideUp();
            }
        });
    };
    
    
    
    
    
});