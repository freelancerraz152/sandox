// jquery
$(document).ready(function () {
	// sticky.js initialize
	$(document).ready(function () {
		$('.mainPrimary').sticky({ topSpacing: 0 });
	});

	// counter up 2 js initialize
	jQuery(function ($) {
		'use strict';
		var counterUp = window.counterUp['default']; // import counterUp from "counterup2"
		var $counters = $('.counter');
		/* Start counting, do this on DOM ready or with Waypoints. */
		$counters.each(function (ignore, counter) {
			var waypoint = new Waypoint({
				element: $(this),
				handler: function () {
					counterUp(counter, {
						duration: 5000,
						delay: 16,
					});
					this.destroy();
				},
				offset: 'bottom-in-view',
			});
		});
	});

	// when click a btn page scroll  and go to home
	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			$('#scroll-up-btn').fadeIn('100');
		} else {
			$('#scroll-up-btn').fadeOut('100');
		}
	});
	$('#scroll-up-btn').click(function () {
		$('html').animate({ scrollTop: 0 }, '8000');
	});

	// type.js initialize
	var typed = new Typed('.animated-text', {
		strings: ['Customer satisfaction.', 'Creative ides.', 'Business needs.'],
		typeSpeed: 60,
		backSpeed: 60,
		loop: true,
		loopCount: Infinity,
		startDelay: 500,
	});

	// owl carousel init for check-out section
	$('.owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: true,
		stagePadding: -5,
		responsiveBaseElement: 'body',
		responsive: {
			0: {
				items: 1,
			},
			700: {
				items: 2,
			},
			1220: {
				items: 3,
			},
		},
	});

	// mobile menu
	$('.mobile-icon').click(function () {
		$('.sidebar-menu').slideToggle(1000);
	});

	$('.times').click(function () {
		$('.sidebar-menu').toggle(1000);
	});
	// show submenu
	$('.sort-btn').click(function () {
		$(this).parent().next().toggleClass('show');
	});
});
