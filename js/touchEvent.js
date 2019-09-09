$(document).ready(function(){
	
	
	
	var div1 = $('.div1');
	var div2 = $('.div2');
	var div3 = $('.div3');
	var div4 = $('.div4');
	var div5 = $('.div5');
	
	div1.on('touchstart',function(){
		div1.text('터치되었습니다.').css('background','green');
	});
	
	div2.on('touchmove',function(){
		div2.text('터치가 움직입니다.').css('background','darkred');
	});
	
	div3.on('touchend',function(){
		div3.text('터치가 끝났습니다.').css('background','skyblue');
	});
	
	/*div4.on('touchstart',function(){
		div4.text('터치되었습니다.').css('background','green');
	});
	div4.on('touchmove',function(){
		div4.text('터치가 움직입니다.').css('background','darkred');
	});
	div4.on('touchend',function(){
		div4.text('터치가 끝났습니다.').css('background','skyblue');
	});*/
	
	div4.on({'touchstart':function(){
		div4.text('터치되었습니다.').css('background','green');},
		'touchmove':function(){
		div4.text('터치가 움직입니다.').css('background','darkred');},
		'touchend':function(){
		div4.text('터치가 끝났습니다.').css('background','skyblue');}
	});
	
	div5.on('touchstart',function(){
		div5.find('div').hide();
	});
	div5.click(function(){
		div5.find('div').hide();
	});
	
	
});