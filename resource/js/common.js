

$(function(){
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.quick-menu').removeClass('is-show');

            if(st == $(document).height() - $(window).height()){
                $('.quick-menu').addClass('is-fix');
                
            } else {
                //아닐때 이벤트
            }
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.quick-menu').removeClass('is-fix').addClass('is-show');
            }
        }
        
        lastScrollTop = st;
    }

    // $(window).scroll(function(){
    //     var scrT = $(window).scrollTop();
    //     //console.log(scrT); //스크롤 값 확인용
    //     if(scrT == $(document).height() - $(window).height()){
    //         $('.quick-menu').addClass('is-show');
    //     } else {
    //         //아닐때 이벤트
    //     }
    //   })

})