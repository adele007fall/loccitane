
	var mysvg1 = new Vivus("mysvg1");
	var mysvg2 = new Vivus("mysvg2", {duration:1000});
	var mysvg3 = new Vivus("mysvg3");
	var mysvg5 = new Vivus("mysvg5");
	var mysvg6 = new Vivus("mysvg6");
	var mysvg7 = new Vivus("mysvg7");

	//new Vivus("mysvg2");
	//new Vivus("mysvg3", {duration: 200},function(){alert('hellon');});
	
	/* 
		누구에게 $(window)
		무슨일이 생기면 scroll()
		만약에
			그놈의 스크롤탑이 타겟의 탑위치에 오면
				누구를 mysvg1
				어떻게 할까? play
		아니면
			누구를 mysvg1
			어떻게 할까? reset
			
			
	
	*/



$(window).scroll(function(){
	var wst = $(this);
	startAni(wst, "#mysvg1", mysvg1);
	startAni(wst, "#mysvg2", mysvg2);
	startAni(wst, "#mysvg3", mysvg3);
	startAni(wst, "#mysvg5", mysvg5);
	startAni(wst, "#mysvg6", mysvg6);
	startAni(wst, "#mysvg7", mysvg7);
	
	// 곡선5, 6, 7, 하트1 vivus 적용
});


function startAni(th,ms,vv){
	if(th.scrollTop() > $(ms).offset().top - th.height()){
			vv.play();}
		else{
			vv.reset();
		}
}


anime({
  targets: '.mymorph',
  d: [
     { value: 'M50,60l255,81l254-68l-19,241l-268,14c0,0-187-29-184-31s76-145,76-145L50,60Z'},
		{ value: 'M146,47h98l-11,51l6,82l-61,20c0,0-95,26-92,24S75,57,75,57L146,47z'},
    { value: 'M70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369Z' },
    { value: 'M70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369Z' },
    { value: 'M70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369Z' },
		{ value: 'M300,168l69-8l176,114l34,103h-99c0,0-230-107-227-109s-45-99-45-99L300,168z' },
		{ value: 'M219,103l94,2l137,9l98,164l-267-26c0,0-110-42-107-44s-2-92-2-92L219,103z'}
  ],
  easing: 'easeOutQuad',
  duration: 2000,
  loop: true
});



























