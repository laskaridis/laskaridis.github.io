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
});

$(function(){
  $(document).on( 'scroll', function() {

    // show navabar
    if($(window).scrollTop() > $(window).height()) {
      $('.navbar').fadeIn(300);
    }
    else {
      $('.navbar').fadeOut(300);
    }

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
