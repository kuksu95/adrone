// JavaScript Document

$(document).ready(function() {
	slide();
});


// 슬라이드 
function slide() {
	var wid = 0;
	var now_num = 0;
	var slide_length = 0;
	var auto = null;
	var $dotli = $('.dot>li');
	var $panel = $('.panel');
	var $panelLi = $panel.children('li');

	// 변수 초기화
	function init() {
		wid = $('.slide').width();
		now_num = $('.dot>li.on').index();
		slide_length = $dotli.length;
	}

	// 이벤트 묶음
	function slideEvent() {

		// 슬라이드 하단 dot버튼 클릭했을때
		$dotli.click(function() {
  		now_num = $(this).index();
  		slideMove();
		});
		
		// 이후 버튼 클릭했을때
		$('.next').click(function( ) {
			nextChkPlay( );
		});
		
		// 이전 버튼 클릭했을
		$('.prev').click(function( ) {
			prevChkPlay( );
		});

		// 오토플레이
		autoPlay();

		// 오토플레이 멈춤
		// autoPlayStop();

		// 오토플레이 재시작
		// autoPlayRestart();

		// 화면크기 재설정 되었을때
		resize();
	  
  		sloganGo( );
	}

	// 자동실행 함수
	function autoPlay() {
		auto = setInterval(function() {
  		nextChkPlay();
		}, 6000);
	}
	
//	function autoPlayStop() {
//		$panelLi.mouseenter(function() {
//		clearInterval(auto);
//		});
//	}

	// 자동실행 멈췄다가 재실행
//	function autoPlayRestart() {
//		$panelLi.mouseleave(function() {
//  		auto = setInterval(function() {
//			nextChkPlay();
//  		}, 5000);
//		});
//	}

	// 이전 버튼 클릭시 조건 검사후 슬라이드 무브
	function prevChkPlay() {
		if (now_num == 0) {
  			now_num = slide_length - 1;
		} else {
  			now_num--;
		}
		slideMove();
	}

	// 이후 버튼 클릭시 조건 검사후 슬라이드 무브
	function nextChkPlay() {
		if (now_num == slide_length - 1) {
	  		now_num = 0;
		} else {
	  		now_num++;
		}
		slideMove();
	}

	// 슬라이드 무브
	function slideMove() {
		$panel.stop().animate({
	  		'margin-left': -wid * now_num
		});
		$dotli.removeClass('on');
		$dotli.eq(now_num).addClass('on');
	}

	// 화면크기 조정시 화면 재설정
	function resize() {
		$(window).resize(function() {
			init();
			$panel.css({
				'margin-left': -wid * now_num
			});
		});
	}
	init();
	slideEvent();
	}

	
	// 슬라이드 애니메이션
	function sloganGo( ) {
		
		$('.panel01').mouseover(function( ){
			setTimeout(function( ) {
				$('.slogan-box .sloganH01').css({
					'opacity': '1',
					'letter-spacing': 'normal'
				});
			}, 200);

			setTimeout(function( ) {
				$('.slogan-box .sloganP01').css({
					'opacity': '1'
				});
			}, 1100);

			setTimeout(function( ) {
				$('.slogan-box .sloganB01, .slogan-box div .sloganA01').css({
					'width': '205px',
					'opacity': '1'
				});
			}, 1900);
		});
		
		
		$('.panel02').mouseover(function( ){
			
			setTimeout(function( ) {
				$('.slogan-box .sloganH02').css({
					'opacity': '1',
					'letter-spacing': 'normal'
				});
			}, 200);

			setTimeout(function( ) {
				$('.slogan-box .sloganP02').css({
					'opacity': '1'
				});
			}, 1100);

			setTimeout(function( ) {
				$('.slogan-box .sloganB02, .slogan-box div .sloganA02').css({
					'width': '205px',
					'opacity': '1'
				});
			}, 1900);
		});
		
		
		$('.panel03').mouseover(function( ){
			
			setTimeout(function( ) {
				$('.slogan-box .sloganH03').css({
					'opacity': '1',
					'letter-spacing': 'normal'
				});
			}, 200);

			setTimeout(function( ) {
				$('.slogan-box .sloganP03').css({
					'opacity': '1'
				});
			}, 1100);

			setTimeout(function( ) {
				$('.slogan-box .sloganB03, .slogan-box div .sloganA03').css({
					'width': '205px',
					'opacity': '1'
				});
			}, 1900);
		});		
		
		
		
		
		
		
		
		$('.dot01').click(function( ){
			setTimeout(function( ) {
				$('.slogan-box .sloganH01').css({
					'opacity': '1',
					'letter-spacing': 'normal'
				});
			}, 300);

			setTimeout(function( ) {
				$('.slogan-box .sloganP01').css({
					'opacity': '1'
				});
			}, 1200);

			setTimeout(function( ) {
				$('.slogan-box .sloganB01, .slogan-box div .sloganA01').css({
					'width': '205px',
					'opacity': '1'
				});
			}, 2000);
		});
		
		
		$('.dot02').click(function( ){
			
			setTimeout(function( ) {
				$('.slogan-box .sloganH02').css({
					'opacity': '1',
					'letter-spacing': 'normal'
				});
			}, 300);

			setTimeout(function( ) {
				$('.slogan-box .sloganP02').css({
					'opacity': '1'
				});
			}, 1200);

			setTimeout(function( ) {
				$('.slogan-box .sloganB02, .slogan-box div .sloganA02').css({
					'width': '205px',
					'opacity': '1'
				});
			}, 2000);
		});
		
		
		$('.dot03').click(function( ){
			
			setTimeout(function( ) {
				$('.slogan-box .sloganH03').css({
					'opacity': '1',
					'letter-spacing': 'normal'
				});
			}, 300);

			setTimeout(function( ) {
				$('.slogan-box .sloganP03').css({
					'opacity': '1'
				});
			}, 1200);

			setTimeout(function( ) {
				$('.slogan-box .sloganB03, .slogan-box div .sloganA03').css({
					'width': '205px',
					'opacity': '1'
				});
			}, 2000);
		});		
		
		
	}