// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.slick-top').slick({
		prevArrow: ".le-prev",
		nextArrow: ".le-next",
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		adaptiveHeight: true
    });
})(jQuery); // End of use strict
