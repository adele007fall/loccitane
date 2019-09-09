$(Document).ready(function(){
    $('button').click(function(){
        $(this).next().stop().slideToggle();
    });
    
    /* if를 사용하여 resizing */
});