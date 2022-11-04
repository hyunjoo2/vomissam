$(document).ready(function () {
  introSlide();
  videoArea();
  lookServiceSwiper();


});

function introSlide() {
  var introSlide = new Swiper(".intro-slide.swiper-container", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

function videoArea() {
  var mainswiper = new Swiper(".video-area__inner.swiper-container", {});
}

function lookServiceSwiper() {
  var mainswiper = new Swiper(".look-service__inner.swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });
}