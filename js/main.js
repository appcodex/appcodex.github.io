jQuery(document).ready(function($){
	$('.mob-menu').on('click', function(){
		$(this).toggleClass('active');
		$('.header').toggleClass('open');

		return false;
	});
	});
