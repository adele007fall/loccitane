$(document).ready(function(){
	
	var cs = $('.cs');
	var sh = $('.sh');
	var wh = $('.wh');
	
	cs.find('.btn1').click(function(){
	$(this).siblings('.div1').css('font-size','1.5em');
	});
	cs.find('.btn2').click(function(){
	$(this).siblings('.div2').css('border-style','dashed');
	});
	cs.find('.btn3').click(function(){
	$(this).siblings('.div3').css('opacity','0.5');
	});
	
	sh.find('.btn1').click(function(){
		$(this).siblings('.div1').show(1000);
	});
	
	sh.find('.btn2').click(function(){
		$(this).siblings('.div2').hide(1000);
	});
	
	sh.find('.btn3').click(function(){
		$(this).siblings('.div3').stop().toggle(1000);
	});
	
	wh.find('.btn1').click(function(){
		$(this).siblings('.div1').width(200);
	});
	
	wh.find('.btn2').click(function(){
		$(this).siblings('.div2').height(200);
	});
	
	wh.find('.btn3').click(function(){
		var div3w = $(this).siblings('.div3').width();
		alert(div3w);
	});

});