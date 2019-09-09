$(document).ready(function(){
	
	//guidetext
	var gt = $('.gt');
	var memberLink = gt.children('ul').find('a');
	
	memberLink.click(function(){
		memberLink.removeClass('active');
		$(this).addClass('active');
	});
	
	gt.each(function(){
		memberLink.click(function(){
			if($(this).hasClass('non_member')){
				gt.find('input[type=text]').attr('placeholder','주문번호');
			}else{
				gt.find('input[type=text]').attr('placeholder','ID');
			}
		});
		
		//if문
		
		$('.age').find('button').click(function(){
			
			var age = $('.age').find('input[type=text]').val();
			
			/*
			if(age >= 19){
				alert('회원가입이 가능합니다.');
			}else{
				alert('부모님의 동의가 필요합니다.');
			}
			*/
			
			/*
			if(age >= 19){
				alert('회원가입이 가능합니다.');
			}else if(age < 19){
				alert('부모님의 동의가 필요합니다.');
			}else{
				alert('숫자로 입력해주세요.');
			}
			 */
			
			if(age === ''){
			   alert('나이를 입력해주세요.');
			   }else if(age >= 19){
				alert('회원가입이 가능합니다.');
			}else if(age < 19){
					 alert('부모님의 동의가 필요합니다.');
					 }else{
					 alert('숫자로 입력해주세요.');
					 }
			//required 와 같이 사용~
			
			
		});
		
		//value1 속성
		
		
		$('.val').find('textarea').each(function(){
			
			$(this).on({
			'focus':function(){
				if($(this).val() === this.defaultValue){$(this).val('');}
			},
			'blur':function(){
				if($(this).val() === ''){$(this).val(this.defaultValue);}
			}
			});
			
		});
		
		$('.val2').find('textarea').each(function(){
			
			var guideText = this.defaultValue;
			
			if($(this).val() === guideText){
				$(this).addClass('guide');
			}
			$(this).focus(function(){
				if($(this).val() === guideText){
					$(this).val('').remove('guide');
				}
			});
			
			$(this).blur(function(){
				if($(this).val() === ''){
					$(this).val(guideText).addClass('guide');
				}
			});
			
		});
		
		
		
		
		
		//value3 속성
		
		
		$('.search').find('input').each(function(){
			
			var _advertise = '복숭아향 바디크림'
			
			$('input[type=search]').val(_advertise);
			
			$(this).focus(function(){
				$(this).val('');
			});
			
			$(this).blur(function(){
				if($(this).val() === ''){
					$(this).val(_advertise);
				}
			});
			
		});
		
		
		
		
	
		
		
		
		
		
		
		
			/*
			$(this).focus(function(){
				if($(this).val() === this.defaultValue){
					$(this).val('');
				}
			});
			
			$(this).blur(function(){
				if(($(this).val === '')){
					$(this).val(this.defaultValue);
				}
			});
			
		});
		*/
		
		
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	var a = 10;
	var b = 20;
	alert(a+b);
	
	var id = prompt('아이디를 입력해주세요.');
	var password = prompt('비밀번호를 입력해주세요.');
	
	if((id=='moon' || id=='good' || id=='stone') && password==='1234'){
		alert('인증되었습니다.'+ id + '님 반갑습니다.');
	}else{
		alert('인증되지 않았습니다.')
	}
	*/
	
});