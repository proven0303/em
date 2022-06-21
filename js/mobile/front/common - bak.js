$(document).ready(function(){

	GnbFn(); // gnb
	CommonFn(); //공통Fn


});

var GnbFn = function(){
	//menu - mobile
	$('.btn-lMenu').click(function(e){
		 e.preventDefault();
		 $('#leftBox').animate({'left':'0'}, 150);
		 $('.menuMask').addClass('active');
		 $('.btn-lnb-close').animate({'left':'70%'}, 150);
	});

	$('.btn-rMenu').click(function(e){
		 e.preventDefault();
		 $('#rightBox').animate({'right':'0'}, 150);
		 $('.menuMask').addClass('active');
		 $('.btn-rnb-close').animate({'right':'70%'}, 150);
	});

	$('.topMenu > ul > li > a').click(function(){
	
		$('.subMenu li').removeClass('active');
	
		var hasActive = $(this).parent().hasClass('active');
		if( hasActive==false ){
			$('.topMenu > ul > li').removeClass('active');
			$(this).parent().addClass('active');
		} else {
			$(this).parent().removeClass('active');
		}
	});

    
	//mobile dim 처리
	$('.menuMask').click(function(){
		$('#leftBox').animate({'left':'-70%'}, 150);
		$('#rightBox').animate({'right':'-70%'}, 150);
		$('.btn-lnb-close').animate({'left':'-70%'}, 150);
		$('.btn-rnb-close').animate({'right':'-70%'}, 150);
		$('#leftBox li').removeClass('active');
		 $('.menuMask').removeClass('active');
	});

	//mobile 닫기 버튼
	$('.btn-lnb-close button').click(function(){
		//e.preventDefault();
		$('#leftBox').animate({'left':'-70%'}, 150);
		$('.btn-lnb-close').animate({'left':'-70%'}, 150);
		$('#leftBox li').removeClass('active');
		$('.menuMask').removeClass('active');
	});
	

	//mobile 닫기 버튼
	$('.btn-rnb-close button').click(function(){
		$('#rightBox').animate({'right':'-70%'}, 150);
		$('.btn-rnb-close').animate({'right':'-70%'}, 150);
		//$('#menuBox li').removeClass('active');
		$('.menuMask').removeClass('active');
	});



}

var CommonFn = function(){


	//top 버튼
	$("#btn-top").hide();
	$(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#btn-top').fadeIn();
            } else {
                $('#btn-top').fadeOut();
            }
        });
        
		$('#btn-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	});


	//최근본 상품 레이어
	$('#btn-latest button').click(function(){
		 $('.latest-contWp').animate({'bottom':'0'}, 150);
		 $('.latestMask').addClass('active');
	});


	//최근본 상품 dim 처리
	$('.latestMask').click(function(){
		$('.latest-contWp').animate({'bottom':'-250px'}, 150);
		 $('.latestMask').removeClass('active');
	});


	//최근본 상품 레이어 안의 슬라이드
  	 var latestList = new Swiper('.latestP ', {
      slidesPerView: 'auto',
      spaceBetween: 10,
    });





 	
 }


/*
       
$(window).scroll(function(){ 
	var height = $(document).scrollTop(); 
	if(height >= 124){ 
 		$('#header').addClass('fixed'); 
	}else if(height < 124){ 
  		$('#header').removeClass('fixed'); 
	} 
});
*/


   
