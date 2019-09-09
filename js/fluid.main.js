$(documnet).ready(function(){
     $('button').click(function(){
        $(this).next().stop().slideToggle();
    });
});