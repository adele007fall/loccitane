$(document).ready(function(){
	var div1 = $('.div1');
	
	div1.click(function(){
		//div1.text('클릭 되었습니다.');
		div1.text('클릭되었습니다.').css({
			'cursor':'default',
			'background':'cyan',
			'color':'yellow',
			'border':'3px dotted magenta'
		});
	});
	var div2 = $('.div2');
	div2.mouseenter(function(){
					div2.text('마우스가 위에 있습니다.');
					});
	var div3 = $('.div3');
	div3.mouseleave(function(){
					div3.text('마우스가 벗어났습니다.');
					});
	var div4 = $('.div4');
	div4.mouseenter(function(){
		div4.text('마우스가 위에 있습니다.');
	});
	div4.mouseleave(function(){
					div4.text('마우스가 벗어 났습니다.');
					});
	var div5 = $('.div5');
	div5.hover(function(){
		div5.text('마우스가 hover로 위에 있습니다.');
	},function(){
		div5.text('마우스가 hover로 벗어났습니다.')});
	var div6 = $('.div6');
	/*div6.mousemove(function(){
		div6.text('마우스가 움직입니다.');
	});*/
	div6.mousemove(function(e){
		div6.find('span').eq(0).text(e.clientX + ',' + e.clientY);
		div6.find('span').eq(1).text(e.offsetX + ',' + e.offsetY);
		div6.find('span').eq(2).text(e.pageX + ',' + e.pageY);
		div6.find('span').eq(3).text(e.screenX + ',' + e.screenY);
		
	
	});
	var div7 = $('.div7');
	
		div7.find('div').click(function(){
			div7.find('div').hide(); div7.text('이미지가 사라졌습니다.');
				
		});
	
	
});