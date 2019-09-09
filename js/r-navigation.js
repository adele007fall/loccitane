$(document).ready(function(){
    
    $('button').click(function(){
        $(this).next().stop().slideToggle();
        
        
    });
    
    $(window).resize(function(){
        if($(window).width()>1023){
            $('nav').show();
        }else{
            $('nav').hide();
        }
    });

});