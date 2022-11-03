$(document).ready(function () {
    lookServiceSwiper();
    

});
function lookServiceSwiper() {
    var mainswiper = new Swiper(".look-service__inner.swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    }); 
}
