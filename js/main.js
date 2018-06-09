(function() {
  var $nav = $('nav');
  var $window = $(window);
  var $scrollTopIcon = $('#scrollTop');

  // Bootstrap scrollspy for updating nav active
  $('body').scrollspy({
      target: '#navbar',
      offset: 80
  });

  // If not starting at top, set bg color
  if ($window.scrollTop() !== 0) {
      $nav.removeClass('nav-top');
      $nav.addClass('nav-fixed');
      $scrollTopIcon.removeClass('hide-top-icon');
  }

  var onScroll = function (event) {
      if ($window.scrollTop() === 0) {
          $nav.addClass('nav-top');
          $nav.removeClass('nav-fixed');
          $scrollTopIcon.addClass('hide-top-icon');
      } else {
          $scrollTopIcon.removeClass('hide-top-icon');
          $nav.removeClass('nav-top');
          $nav.addClass('nav-fixed');
      }
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

  // Click event for the top icon
  $scrollTopIcon.click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: '0px'});
  });

  function updateActiveTab(tabId) {
    $('.tabs a').each(function(idx, tab) {
      var $tab = $(tab);
      var $tabContainer = $('#' + tabId);
      if ($tab.attr('data-tab') === tabId) {
        $tab.addClass('active');
        $tabContainer.removeClass('d-none');
      } else {
        $tab.removeClass('active');
        $('#' + $tab.attr('data-tab')).addClass('d-none');
      }
    });
  }

  // Setup skills tabs
  $('.tabs a').each(function(idx, tab) {
    $(tab).click(function(event) {
      updateActiveTab($(tab).attr('data-tab'));
    });
  });
})();
