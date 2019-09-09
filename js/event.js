$(document).ready(function(){

	var div2 = $('.div2');
	
	$('.div1').click(function(){
		$(this).text('클릭되었습니다.').css('cursor','default');
	});
    
    $('input').click(function(){
        $('img').hide();
    });
	
	div2.mouseenter(function(){
		$(this).text('마우스커서가 위에있습니다.');
	});
	
	div2.mouseleave(function(){
		$(this).text('마우스커서가 벗어났습니다.');
	});
	
	$('.div3').hover(function(){
		$(this).text('마우스커서가 hover로 위에있습니다.');
	},function(){
		$(this).text('마우스커서가 hover로 벗어났습니다.');
	});
	
	$('.div4').scroll(function(){
		$(this).css('background','skyblue');
	});
	
	$('a').on({
		'mouseenter focus':function(){$(this).text('focus');},
		'mouseleave blur':function(){$(this).text('blur');},		
	});
/*	a.focus(function(){
		a.text('focus');
	});
	a.blur(function(){
		a.text('blur');
	});*/
		  	
	$('.clickTest').click(function(){
		$(this).text('클릭되었습니다.');
	});
	
	$('.animal').each(function(){
		var animal = $(this).text();
		alert(animal);
	});
	
});