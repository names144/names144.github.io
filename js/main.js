/// <reference path='jquery.d.ts' />

var $nav = $('nav');
var $window = $(window);
var navLinks = [];

// Bootstrap scrollspy for updating nav active
$('body').scrollspy({
    target: '#navbar',
    offset: 80
});

var onScroll = function (event) {
    if ($window.scrollTop() === 0) {
        $nav.addClass('nav-top');
        $nav.removeClass('nav-fixed');
    } else {
        if ($nav.hasClass('nav-top')) {
            $nav.removeClass('nav-top');
        }
        if (!$nav.hasClass('nav-fixed')) {
            $nav.addClass('nav-fixed');
        }
    }

    // Check which nav link to set active

};

$window.scroll(onScroll);

// Setup the scrollTo nav
$('.navbar a').each(function() {
    var section = this;
    // Set the click handler for scrollTo
    $(section).click(function(event) {
        event.preventDefault();
        var $div = $(section.getAttribute('href'));
        var $navbar = $('nav');
        var scrollTop = $div.offset().top - $navbar.height();
        if (scrollTop < 0) {
            scrollTop = 0;
        }
        $('html, body').animate({
            scrollTop: scrollTop
        }, 500);
    });
});
