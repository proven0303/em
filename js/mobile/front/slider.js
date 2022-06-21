$(document).ready(function(){
	
	//main visual banner
	var mySlider = $(".banner .slide").bxSlider({
        mode:"horizontal",
        speed:500,
        moveSlides:1,
        //slideWidth:2000, 
        minSlides:1,
        maxSlides:1,
        slideMargin:0,
        auto:true,
        autoHover:true,
        controls:false,
    });

	//main  today list
	var today = $(".today_list").bxSlider({
        mode:"horizontal",
        speed:500,
        moveSlides:1,
        slideWidth:1200,
        minSlides:4,
        maxSlides:4,
        slideMargin:0,
        auto:false,
        autoHover:true,
        controls:true,
		pager: false,
    });

    //main office list
	var office = $(".office_list").bxSlider({
        mode:"horizontal",
        speed:500,
        moveSlides:1,
        slideWidth:1200,
        minSlides:3,
        maxSlides:3,
        slideMargin:0,
        auto:false,
        autoHover:true,
        controls:true,
		pager: false,
    });

    //main visual banner
   $(document).on('click','.banner .bx-next, .banner .bx-prev',function() {
        mySlider.stopAuto();
        mySlider.startAuto();
    });


	
/*
    //클릭시 멈춤 현상 해결
	$(document).on('click','.bx-next, .bx-prev',function() {
        mySlider.stopAuto();
        mySlider.startAuto();
    });

    $(document).on('click','mySlider',function() {
        mySlider.stopAuto();
        mySlider.startAuto();
    });
*/	

});


