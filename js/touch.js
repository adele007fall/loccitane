$(document).ready(function(){
	
	// 터치된 장소에서 오른쪽으로 80px 이상 손가락을 밀면 '오른쪽 스와이프' 가 발생한다.
	// 터치된 장소에서 왼쪽으로 80px 이상 손가락을 밀면 '왼쪽 스와이프' 가 발생한다.
	
	
	var threshold = 80;
	
	var hitArea = $('#hitArea');
	var result = $('#result');
	var doc = $(document);
	
	var startX;
	var currentX;
	
	var sleeping = false;
	var touching = false;
	
	// 메세지 알림함수
	function notify(message){
		var div = $('<div></div>').html(message);
		
		result.prepend(div);
		div.fadeOut(900,function(){
			div.remove();
		});
		
	};
	
	// 스와이프 체크 함수
	
	function evalSwipe(){
		
		if((startX + threshold) < currentX){
			sleeping = true;
			notify('right~');
		}
		   
		if((startX - threshold) > currentX){
			sleeping = true;
			notify('left~');
		}
	};
	
	// touchstart 이벤트 처리
	
	hitArea.on('touchstart',function(e){
		e.preventDefault();
		
		var touches = e.originalEvent.touches;
		
		if(touches.length > 1){
			return;
		};
		
		var touch = touches[0];
		startX = touch.pageX;
		touching = true;
		
	});
	
	// touchmove 이벤트 처리
	
	doc.on('touchmove',function(e){
		
		if(!touching){
			return;
		};
		if(sleeping){
			return;
		};
		var touch = e.originalEvent.touches[0];
		currentX = touch.pageX;
		evalSwipe();
		
		
	});
	
	
	// touchend, touchcancel
	
	doc.on('touchend touchcancel',function(){
		
		if(!touching){
			return;
		};
		touching = false;
		sleeping = false;
		
	});
	
	
	
	
	
	
	
	
	
	
});