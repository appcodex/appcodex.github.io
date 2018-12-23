jQuery(document).ready(function($){
	$('.mob-menu').on('click', function(){
		$(this).toggleClass('active');
		$('.header').toggleClass('open');

		return false;
	});
	});

	(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.scroll-trigger').click(function() {
    $('.mob-menu').removeClass('active');
		$('.header').removeClass('open');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  // $('body').scrollspy({
  //   target: '#mainNav',
  //   offset: 54
  // });

})(jQuery);
