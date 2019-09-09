$(Document).ready(function(){
	
    var tabs = $('.tabs').find('a');
	
	var panels = $('.panel');
	
	var lastTab = tabs.filter('.on');
	
	var lastPanel = $(lastTab.attr('href'));
	
    var aul = panels.find('ul');
    
	panels.hide();
	lastPanel.show();
    
    
	//탭을 클릭하면, 모든 탭에서 클래스 on을 빼고, 클릭한 그것의 탭에 on을 붙여라
	tabs.click(function(e){
			e.preventDefault();
			var thisTab = $(this);
			var thisPanel = $(thisTab.attr('href'));
            
			
		lastTab.removeClass('on');
		thisTab.addClass('on');
		lastPanel.hide();
		thisPanel.show();
        aul.stop().slideToggle();
        
        
		
		// = 얘는 같은이 아닌 is와 같음
			lastTab = thisTab;
			lastPanel = thisPanel;
		
	});
    
   

});