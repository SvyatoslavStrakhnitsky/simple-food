$(function() {

  $('.review__slider').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3500,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    appendDots: $('.arrows'),
  });


  var mixer = mixitup('.category__inner');

});