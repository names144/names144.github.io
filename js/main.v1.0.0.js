(function() {
  var $nav = $('nav');
  var $window = $(window);
  var $scrollTopIcon = $('#scrollTop');

  // Bootstrap scrollspy for updating nav active
  $('body').scrollspy({
    target: '#navbar',
    offset: 80
  });

  // If at top, set bg color
  if ($window.scrollTop() === 0) {
    $nav.removeClass('nav-fixed');
    $nav.addClass('nav-top');
    $scrollTopIcon.addClass('hide-top-icon');
  } else {
    $nav.addClass('nav-fixed');
    $nav.removeClass('nav-top');
    $scrollTopIcon.removeClass('hide-top-icon');
  }

  var onScroll = function () {
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

  // Click event for expanding the projects
  $('.projectIconContainer').each(function() {
    var $container = $(this);
    // Set the child info container to display none
    var $cardBody = $($container.parent().parent().children('.card-body')[0]);
    var height = $cardBody.height();
    $cardBody.height(0);

    // Add the open/closed svg icon
    var icons = '<svg class="closeCard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">';
    icons += '<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>';
    icons += '<path d="M0 0h24v24H0z" fill="none"/></svg>';
    // Open icon
    icons += '<svg class="openCard d-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">';
    icons += '<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>';
    icons += '<path d="M0 0h24v24H0z" fill="none"/></svg>';
    $container.html(icons);

    // Add a click handler to show the card when closed
    var children = $container.children();
    $(children[0]).click(function() {
      // open the card
      $cardBody.height(height);
      $(this).addClass('d-none');
      $(children[1]).removeClass('d-none');
    });
    // Add a click handler to hide the card when open
    $(children[1]).click(function() {
      // close the card
      $cardBody.height(0);
      $(this).addClass('d-none');
      $(children[0]).removeClass('d-none');
    });
  });
})();
