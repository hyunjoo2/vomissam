$(document).ready(function () {
    videoArea();
    lookServiceSwiper();
    

});
function videoArea() {
  var mainswiper = new Swiper(".video-area__inner.swiper-container", {
  }); 
}
function lookServiceSwiper() {
    var mainswiper = new Swiper(".look-service__inner.swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    }); 
}
