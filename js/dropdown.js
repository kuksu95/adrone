// JavaScript Document
$(document).ready(function(e) {

	/* desktop-header-animate */
	$(window).scroll(function( ) {
		
		var $TopN = $('.top-nav');
		var $FixedN = $('.fixed-nav');
		
		if($(this).scrollTop( ) > 140) {
			$TopN.css({
				'margin-top':'-70px',
				'z-index':'1'
			});
			$FixedN.css({
				'margin-top':'-70px',
				'opacity':'1',
				'z-index':'2'
			}).show(0);
			
		}else {
			$TopN.css({
				'margin-top':'0px',
				'z-index':'2'
			});
			$FixedN.css({
				'margin-top':'0px',
				'opacity':'0',
				'z-index':'1'
			}).show(0);
		}
		
	});

	var $topMain = $('.top-main-menu>li');
	var $fixedMain = $('.fixed-main-menu>li');
	var $topSub = $('.top-sub-menu li');
	var $fixedSub = $('.fixed-sub-menu li');
	
$topMain.mouseover(function( ) {
		$(this).find('.top-sub-menu').stop( ).fadeIn(120);
	});
	
	$topMain.mouseleave(function( ) {
		$(this).find('.top-sub-menu').stop( ).fadeOut(120);
	});

	
	$fixedMain.mouseover(function( ) {
		$(this).find('.fixed-sub-menu').stop( ).fadeIn(120);
	});
	
	$fixedMain.mouseleave(function( ) {
		$(this).find('.fixed-sub-menu').stop( ).fadeOut(120);
	});	

	
	$topSub.mouseover(function( ) {
		$(this).find('.sub-right').stop( ).fadeIn(120);
	});
	
	$topSub.mouseleave(function( ) {
		$(this).find('.sub-right').stop( ).fadeOut(120);
	});
		
	
	$fixedSub.mouseover(function( ) {
		$(this).find('.sub-right').stop( ).fadeIn(120);
	});
	
	$fixedSub.mouseleave(function( ) {
		$(this).find('.sub-right').stop( ).fadeOut(120);
	});


	
	
	
	
	
	


	/* mobile-header-animate */
	$(window).scroll(function( ) { 
		if($(this).scrollTop( ) > 75) {
			$('.hd-mobile').css({
				'opacity':'0',
				'z-index':'1'
			});
			$('.hd-mobile-fixed').css({
				'opacity':'1',
				'z-index':'2'
			}).show(0);
			
		}else {
			$('.hd-mobile').css({				
				'opacity':'1',
				'z-index':'2'
			});
			$('.hd-mobile-fixed').css({
				'opacity':'0',
				'z-index':'1'
			}).show(0);
		}
	});

	
	
	
	
	
	
	
	

	var isActive = 0;
	
	$('.mobile-toggle').click(function( ) {

		$('.mobile-main-menu-box').fadeToggle(300);
		$('.mobile-main-menu').fadeToggle(100);

		if(isActive == 0){
			isActive = 1;
			$('.mobile-toggle .toggle').css('background', '#333');
			$('.mobile-toggle .toggle01').css({
				'width':'32px', 
				'margin-top':'8px',
				'margin-left':'-5px',
				'transform':'rotate(45deg)'
			});
			$('.mobile-toggle .toggle02').css({
				'width':'0',
				'margin-top':'0',
				'opacity':'0',
				'transform':'translateX(-60px)'
			});
			$('.mobile-toggle .toggle03').css({
				'width':'32px',
				'margin-top':'-2px',
				'margin-left':'-5px',
				'transform':'rotate(-45deg)'
			});
			
		}else if(isActive == 1){
			isActive = 0
			$('.hd-mobile .mobile-toggle .toggle').css('background', '#FFF');
			$('.hd-mobile-fixed .mobile-toggle .toggle').css('background', '#333');
			$('.mobile-toggle .toggle01').css({
				'width':'15px',
				'margin-top':'0',
				'margin-left':'0',
				'transform':'translateX(0px)'
			});
			$('.mobile-toggle .toggle02').css({
				'width':'25px',
				'margin-top':'6px',
				'opacity':'1',
				'transform':'translateX(0px)'
			});
			$('.mobile-toggle .toggle03').css({
				'width':'20px',
				'margin-top':'6px',
				'margin-left':'0',
				'transform':'translateX(0px)'
			});
		}
	});
	
	
	
	$('.mobile-main-menu>li').click(function( ) {
		
		if(isActive == 0) {
			isActive = 1;
			$(this).find('.arrow').css('transform', 'rotate(0deg)');
			
		}else if(isActive == 1) {
			isActive = 0;
			$(this).find('.arrow').css('transform', 'rotate(90deg)');
		}
		
		$(this).find('.mobile-sub-menu').stop( ).slideToggle(200);		
	});	
});	


/* sub-page */
$('.sub-page-menu>ul>li').click(function() {
	if(isActive == 0) {
		isActive = 1;
		$(this).find('.sub-page-menu>ul>li>ul>li').classList.add("sub-page-menu-click");

	}else if(isActive == 1) {
		isActive = 0;
		$(this).find('.sub-page-menu>ul>li>ul>li').classList.add("sub-page.menu-click");
	}
});

