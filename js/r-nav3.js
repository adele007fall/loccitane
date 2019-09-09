$(document).ready(function(){
    
    var nav = $('nav');
    var main = $('.main');
    
    $('button').click(function(){
       nav.toggleClass('open');
        if(nav.hasClass('open')){
            main.addClass('on')
        }else{
            main.removeClass('on');
        }
    });
    
});