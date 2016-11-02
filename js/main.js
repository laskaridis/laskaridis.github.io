
var laskaridis = {

  initialize: function() {
    new WOW().init();

    $('#skills').waypoint(function() {
      $('.skillbar-bar').each(function() {
        $this = $(this);
        percent = $this.parent().attr('data-percent');
        $this.animate({width: percent + '%'}, 'slow');
      });
    }, {offset: '80%'});


    $('.scrollable').click(function(e) {
      $this = $(this);
      target = $this.attr('href');
      $.scrollTo($(target).offset().top - 30, 600);
      e.preventDefault();

      if ($('.navbar-collapse').hasClass('in')){
        $('.navbar-collapse').removeClass('in').addClass('collapse');
      }
    });

    $(document).on('scroll', function() {
      laskaridis.toggleNavbarBackground();  
      laskaridis.toggleScroller();
    });

    $('.scroll-top-wrapper').on('click', function() {
      laskaridis.scrollToTop();
    });

    $('span.typed-text').typed({
      strings: ["challenging problems", "exciting ideas"],
      typeSpeed: 20,
      backDelay: 3e3,
      loop: !0,
    });
  },

  toggleNavbarBackground: function() {
    if($(document).scrollTop() > 260 ) {
      $('nav[role="navigation"]').removeClass('navbar-transparent');
    } else {
      $('nav[role="navigation"]').addClass('navbar-transparent');
    }
  },

  toggleScroller: function() {
    if ($(window).scrollTop() > 100) {
      $('.scroll-top-wrapper').addClass('show');
    } else {
      $('.scroll-top-wrapper').removeClass('show');
    }
  },

  scrollToTop: function() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
  }
};

$(document).ready(function() {
  laskaridis.initialize();
});
