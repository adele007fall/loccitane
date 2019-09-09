$(document).ready(function(){
    
    /* 버튼을 클릭했을때 만약에 nav가 .on을 가지고 있다면 nav가 들어가고, .on을 제거해라 nav가 .on을 가지고 있지 않다면 nav가 나오고 .on을 붙여라*/
    
    $('button').click(function(){
        
        var nav = $('nav');
        
        if(nav.hasClass('on')){
            nav.stop().animate({right:'-50%'}).removeClass('on');
        }else{
            nav.stop().animate({right:0}).addClass('on');
        }
        
    });
    
    
    
    
    
    
    
    
    
    
    
    

    
});