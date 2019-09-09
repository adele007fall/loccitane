$(document).ready(function(){
	
	var st = $('.st');
	
	var fd = $('.fd');
	
	var sd = $('.sd');
	
	var stDiv = st.find('div');
	
	$('.ani').find('p').animate({
		left:500,
		top:500,
		borderRadius:50
	},2000,function(){
		alert('애니메이션 완료');
	});
	//alert('애니메이션 완료');
	
	
	
	st.find('.btn1').click(function(){
		stDiv.scrollTop(0);
	});
	
	st.find('.btn2').click(function(){
		stDiv.scrollTop(500);
	});
	
	st.find('.btn3').click(function(){
		var wTop = $(window).scrollTop();
		alert(wTop);
	});
	
	st.find('.btn4').click(function(){
		var wLeft = $(window).scrollLeft();
		alert(wLeft);
	});
	
	fd.find('.btn1').click(function(){
		fd.find('.p1').fadeIn(1000,function(){
			alert('fadeIn완료')
		});
	});
	
	fd.find('.btn2').click(function(){
		fd.find('.p2').fadeOut(1000);
	});
	
	fd.find('.btn3').click(function(){
		fd.find('.p3').stop().fadeToggle(1000);
	});
	
	
	sd.find('.btn1').click(function(){
		sd.find('.p1').slideDown(1000);
	});
	
	sd.find('.btn2').click(function(){
		sd.find('.p2').slideUp(1000);
	});
	
	sd.find('.btn3').click(function(){
		sd.find('.p3').stop().slideToggle(1000);
	});
	
	sd.find('.btn4').click(function(){
		sd.find('.p4').slideUp(1000),sd.find('.p4').slideDown(1000);
	});
	
});
