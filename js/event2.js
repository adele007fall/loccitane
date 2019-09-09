$(document).ready(function(){
	
	var input1 = $('.div1').find('input');
	
	
	input1.focus(function(){
		$(this).css('background','#ccc');
	});
	input1.blur(function(){
		$(this).css('background','#fff');
	});
	/*
	input1.focus(function(){
		input1.css('background','#ccc');
	});
	input1.blur(function(){
		input1.css('background','#fff');
	});
	*/
	
	var input2 = $('.div2').find('input');
	
	
	input2.focusin(function(){
		$(this).css('background','#ccc');
		
	});
	input2.focusout(function(){
		$(this).css('background','#fff');
		
	});
	
	/*
	input2.focusin(function(){
		input2.css('background','#ccc');
		
	});
	input2.focusout(function(){
		input2.css('background','#fff');
		
	});
	*/
	
	$('.div2').find('form').submit(function(){
		alert('전송 되었습니다.');
	});
	
	var div3 = $('.div3');
	$(window).resize(function(){
		div3.text('브라우저의 크기가 변경되었습니다.').css('background','pink');
	});
	
	var div4 = $('.div4');
	div4.scroll(function(){
		div4.css('background','gold');
	});
	
	var div5 = $('.div5');
	
	div5.find('div').click(function(){
		$(this).text('클릭이 되었습니다.').css('cursor','default');
	});
	
	var div6 = $('.div6');
	

	
	
	
	/*
	alert(div6.width());
	alert(div6.height());
	alert(div6.text());
	*/
		$('.animal').each(function(){
		var name = $(this).text();
		alert(name);
	});
	
	
});