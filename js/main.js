/// <reference path="jquery.d.ts" />

var $nav = $('nav');
var $window = $(window);

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
};

$window.scroll(onScroll);
console.log('hi')