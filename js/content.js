$(document).ready(function(){
	
	var text = $('.text');
	
	var re = $('.re');
	
	var ap = $('.ap');
	
	var basket = $('.basket');
	
	var apple = $('.apple');
	
	var banana = $('.banana');
	
	var orange = $('.orange');
	
	var at = $('.at');
	
	var atImg = at.find('img');
	
	var cl = $('.cl');
	
	var clDiv = cl.find('div');
	
	
	//text
	
	$('<div>대홍단감자</div>').appendTo('body');
	
	$('<div>동글동글</div>').prependTo('body');
	
	$('input').val('제이쿼리 에서 다시 작성');
	
	$('textarea').val('텍스트를 작성해주세요~');
	
	$('.city').val('광주');
	
	$('.area').val(['서초','동작','광진']);
	text.find('.btn1').click(function(){
		$(this).siblings('.div1').text('text 메소드로 내용 교체');
	});
	
	text.find('.btn2').click(function(){
		$(this).siblings('.div2').html('html 메소드로 내용 교체');
	});
	
	text.find('.btn3').click(function(){
		$(this).siblings('.div3').text('<strong>text</strong> 메소드로 내용 교체');
	});
	
	text.find('.btn4').click(function(){
		$(this).siblings('.div4').html('<strong>html</strong> 메소드로 내용 교체');
	});

	// remove / empty
	
	re.find('.btn1').click(function(){
		$(this).siblings('.div1').remove();
	});
	
	re.find('.btn2').click(function(){
		$(this).siblings('.div2').empty();
	});
	
	/* append / prepend */
	
	ap.find('.btn1').click(function(){
		basket.append(apple);
		apple.css('font-size','1em');
	});
	
	ap.find('.btn2').click(function(){
		basket.append(banana);
		banana.css('font-size','1em');
	});
	
	ap.find('.btn3').click(function(){
		basket.append(orange);
		orange.css('font-size','1em');
	});
	
	
	ap.find('.btn4').click(function(){
		basket.prepend(apple);
		apple.css('font-size','1em');
	});
	
	ap.find('.btn5').click(function(){
		basket.prepend(banana);
		banana.css('font-size','1em');
	});
	
	ap.find('.btn6').click(function(){
		basket.prepend(orange);
		orange.css('font-size','1em');
	});
	
	//배열ㄱ, 괄호내에 순서대로임~
	ap.find('.btn7').click(function(){
		basket.append(orange,apple,banana);
	});
	
	ap.find('.btn8').click(function(){
		basket.prepend(banana,orange,apple);
	});
	
	/* attr() */
	
	/*
	at.find('.btn1').click(function(){
		atImg.attr('src','img/img1.jpg');
	});
	
	at.find('.btn2').click(function(){
		atImg.attr('src','img/img2.jpg');
	});
	*/
	
	at.find('.btn1').click(function(){
		atImg.attr({
			'src':'img/img1.jpg',
			'alt':'phone1'
		});
	});
	
	at.find('.btn2').click(function(){
		atImg.attr({
			'src':'img/img2.jpg',
			'alt':'phone2'
		});
	});
	
	at.find('.btn3').click(function(){
		atImg.attr({
			'src':'img/img3.jpg',
			'alt':'phone3'
		});
	});
	
	at.find('.btn4').click(function(){
		atImg.attr({
			'src':'img/img4.jpg',
			'alt':'phone4'
		});
	});
	
	cl.find('.btn1').click(function(){
		clDiv.addClass('dashed');
	});
	
	cl.find('.btn2').click(function(){
		clDiv.removeClass('dashed');
	});
	
	cl.find('.btn3').click(function(){
		clDiv.addClass('notice');
	});
	
	cl.find('.btn4').click(function(){
		clDiv.removeClass('notice');
	});
	
	cl.find('.btn5').click(function(){
		clDiv.toggleClass('dashed');
	});
	
	cl.find('.btn6').click(function(){
		clDiv.toggleClass('notice');
	});
	
	
	//$('.swap').find('img').attr('src','img/img2.jpg');
	
	$('.swap').find('img').delay(500).fadeOut(500,function(){
		$(this).attr('src','img/img2.jpg').fadeIn(500);
	});
	
	$('.ot').find('img').delay(5000).fadeOut(500,function(){
		$(this).attr('src','img/ottogi-logo.png').attr('alt','오뚜기2').css('width','500px').fadeIn(500)
	});
	
});