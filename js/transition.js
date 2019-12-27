// JavaScript Document

$(document).ready(function(e) {

	
	/* icone */
	$(document).mousemove(function(e) {
		$('.droneIcon').css('left', e.pageX);
	});
	
	
	
	/* image */
	$(window).scroll(function( ) {
		
		if($(this).scrollTop( ) > $('.panel').height( )) {
			$('.top-image').css({
				'left': '0'
			});
			$('.bottom-image').css({
				'right': '0'
			});
		}else {
			
		}
	});
	
	/* sub-top */

});