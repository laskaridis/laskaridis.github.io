new WOW().init();

$(document).ready(function() {

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

  // Hero section size
  $('#hero').height($(window).height()+50);

  $(window).resize(function(){
    $('#hero').height($(window).height()+50);
  });

  $('.btn-send').popover();

  // Google analytics events
  $('#email-link').click(function(e) {
    ga('send', 'event', {
      'eventCategory': 'EmailLink',
      'eventAction': 'clicked'
    });
  });
  $('#skype-link').click(function(e) {
    ga('send', 'event', {
      'eventCategory': 'SkypeLink',
      'eventAction': 'clicked'
    });
  });
  $('#phone-link').click(function(e) {
    ga('send', 'event', {
      'eventCategory': 'SkypeLink',
      'eventAction': 'clicked'
    });
  });
  $('#twitter-link').click(function(e) {
    ga('send', 'event', {
      'eventCategory': 'TwitterLink',
      'eventAction': 'clicked'
    });
  });
  $('#github-link').click(function(e) {
    ga('send', 'event', {
      'eventCategory': 'GithubLink',
      'eventAction': 'clicked'
    });
  });
  $('#google-link').click(function(e) {
    ga('send', 'event', {
      'eventCategory': 'GoogleLink',
      'eventAction': 'clicked'
    });
  });
});

$(function(){
  $(document).on( 'scroll', function() {

    // show scroller
    if ($(window).scrollTop() > 100) {
      $('.scroll-top-wrapper').addClass('show');
    } else {
      $('.scroll-top-wrapper').removeClass('show');
    }
  });

  $('.scroll-top-wrapper').on('click', scrollToTop);
});

function scrollToTop() {
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $('body');
  offset = element.offset();
  offsetTop = offset.top;
  $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}
