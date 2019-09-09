$(document).ready(function(){
	//ID selector
	$('#div1').css('background','pink');
	$('#div1').css('text-align','center');
	$('#div1').css('font-weight','900');
	$('#div1').css({
		'font-size':'3em',
		'color': 'yellow',
		'border-style': 'dotted'
	});
	//$('div').css('background','red');
	
	//class selector
	
	$('.woman').css('background-image', 'linear-gradient(red 10% ,yellow)');
	$('.man').css('background','conic-gradient(from 90deg, red, yellow, lime, aqua, blue, magenta, red)');
	$('.woman').css({
		'text-align':'center',
		'font-size':'3em',
		'color':'#bc91bc',
		'text-shadow':'5px 5px  rgba(255,255,255,0.5)'
		
	})
	$('.man').css({
		'text-align':'right',
		'font-size':'2em',
		'color':'#9292cc',
		'border-radius':'50px',
		'margin':'30px 0'
	})
	
	//기타 selector
	$('div p').css('font-style','italic');
	$('p > span').css('background','#3c9c11');
	$('li span').css('border','1px solid #1c1c1c');
	$('li:first-child').css('color','purple');
	$('section:nth-of-type(3) div').css('border-color','aqua');
	
	//그것에서 더 찾기
	
	var p2 = $('.box').find('p').eq(1);
	
	p2.css('color','orange');
	p2.parent().css('border-color','lime');
	//p2.parents().css('border-color','magenta');
	p2.parents('.wrap').css('border-color','magenta');
	
	p2.prev().find('a').css('color','red');
	p2.next().find('a').css('border-color','red');	

});