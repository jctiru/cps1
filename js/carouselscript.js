$(document).ready(function () {
//Initialize swiper when document ready
var galleryTop = new Swiper('.gallery-top', {
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
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 'auto',
  touchRatio: 0.2,
  slideToClickedSlide: true,
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;

// Stop autoplay on mousehover
$(".gallery-top").mouseenter(function() {
  galleryTop.autoplay.stop();
  console.log('slider stopped');
});
// Resume autoplay when not on mousehover
$(".gallery-top").mouseleave(function() {
  galleryTop.autoplay.start();
  console.log('slider started again');
});
});