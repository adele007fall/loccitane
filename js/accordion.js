$(document).ready(function(){
	
	var allDt = $('dl').find('dt');
	var allDd = $('dl').find('dd');
	
	/*
// js 가 랜더링 되었을때 모든 메뉴가 닫혀라!
	allDt.addClass('close');
	allDd.addClass('close');
	
//dt 가 클릭이 되었을때 모든 메뉴를 닫고, 클릭이 된 메뉴의 하위 메뉴를 열어라
	
	allDt.each(function(){
		$(this).click(function(){
			//열리기 전에 모든 메뉴를 다고
			allDt.addClass('close');
			allDd.addClass('close');
			//클릭된 그것의 하위메뉴를 열어라!
			$(this).removeClass('close');
			$(this).next().removeClass('close');
		});
	});
	*/
	
	function closeAll(){
		allDt.addClass('close');
		allDd.addClass('close');
	}
	
	function open(a,b){
		a.removeClass('close');
		a.css('color','red');
		b.removeClass('close');
	}
	
	closeAll();
	allDt.click(function(){
		var dt = $(this);
		var dd = dt.next();
		//열리기 전에 모든 메뉴를 다고
		closeAll();
		//클릭된 그것의 하위메뉴를 열어라!
		open(dt,dd);
	});
	
	
	
	
	
	
	
	
	
});