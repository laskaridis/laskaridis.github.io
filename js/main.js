new WOW().init();

$(document).ready(function() {
  $('.scrollable').click(function(e) {
    $this = $(this);
    target = $this.attr('href');
    $.scrollTo($(target).offset().top - 30, 600);
    e.preventDefault();

    if ($('.navbar-collapse').hasClass('in')){
      $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
  });

  $('#contact-form').parsley();

  $('#hero').height($(window).height()+50);

  $(window).load(function(){
    $('#page-loader').fadeOut(500);
  });

  $(window).resize(function(){
    $('#hero').height($(window).height()+50);
  });
});

$(function(){
  $(document).on( 'scroll', function(){
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
