// ----------------------------------------------------------
// stickyShrink jQuery plugin
// ----------------------------------------------------------
(function ($) {

  var lastScrollTop = 0;
  var direction = 'none';
  var didScroll = false;
  var thiz = this;

  $.fn.stickyShrink = function (options) {

    var settings = $.extend({
      'shrinkStart': 0,
      'parent': $(window)
    }, options);


    var scrollPage = function () {
      var scrollTop = settings.parent.scrollTop();

      if (scrollTop > lastScrollTop) {
        direction = 'down';
      } else if (scrollTop < lastScrollTop) {
        direction = 'up';
        // if browser bounces at the end of the window it shouldn't get an up direction
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
          direction = 'none';
        }
      }

      var active = false;

      if (scrollTop > settings.shrinkStart) {
        active = true;
      }

      lastScrollTop = scrollTop;
      stickyShrink(direction, active);

      didScroll = false;
    };

    // check position and make sticky if needed
    var stickyShrink = function (direction, active) {

      if (direction === 'up') {
        $('.stickyShrink').addClass('up').removeClass('down');
      } else if (direction === 'down') {
        $('.stickyShrink').addClass('down').removeClass('up');
      }

      if (active) {
        $('.stickyShrink').addClass('active').removeClass('inactive');
      } else {
        $('.stickyShrink').addClass('inactive').removeClass('active');
      }
    };

    // adding .stickyShrink to element
    $(this).addClass('stickyShrink');

    $(window).on('resize orientationChanged', function () {
      if (!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 40);
      }
    }); // check for changes

    settings.parent.on('scroll', function () {
      console.log('scroll');
      if (!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 40);
      }
    }); // check for changes

  };

})(jQuery);
// ----------------------------------------------------------
