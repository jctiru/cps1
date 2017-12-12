$(document).ready(function () {
//initialize swiper when document ready
var galleryTop = new Swiper('.gallery-top', {
  lazy: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: 'fade', 
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  lazy: true,
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 'auto',
  touchRatio: 0.2,
  slideToClickedSlide: true,
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
});