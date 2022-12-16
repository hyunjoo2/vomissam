

$(function(){
    // 
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var quickBarHeight = $('.quick-menu').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 100);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > quickBarHeight){
            // Scroll Down
            $('.quick-menu').removeClass('is-fix').addClass('is-show').css("bottom","-32.6rem");

            if(st == $(document).height() - $(window).height()){
                $('.quick-menu').addClass('is-fix').css("bottom","0");
                
            } else {
                //아닐때 이벤트
            }
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.quick-menu').removeClass('is-show').css("bottom","0rem");
                
            }
        }
        
        lastScrollTop = st;
    }

    // footer에서 퀵메뉴 보이게
    setInterval(function() {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= $(
              'footer').offset().top + $('footer').
                outerHeight() - window.innerHeight) {
                
                    $('.quick-menu').addClass('is-fix').css("bottom","0");
            }
        });
    }, 110);
    

    

    // $(window).scroll(function(){
    //     var scrT = $(window).scrollTop();
    //     //console.log(scrT); //스크롤 값 확인용
    //     if(scrT == $(document).height() - $(window).height()){
    //         $('.quick-menu').addClass('is-show');
    //     } else {
    //         //아닐때 이벤트
    //     }
    //   })


    $(".quick-menu__button").click(function(){
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
    });


    // 모달 중복 
    $(document).on({
        'show.bs.modal': function() {
            var zIndex = 1040 + (10 * $('.modal:visible').length);
            $(this).css('z-index', zIndex);
            setTimeout(function() {
            $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
            }, 0);
        },
        'hidden.bs.modal': function() {
            if ($('.modal:visible').length > 0) {
            // restore the modal-open class to the body element, so that scrolling works
            // properly after de-stacking a modal.
            setTimeout(function() {
                $(document.body).addClass('modal-open');
            }, 0);
            }
        }
    }, '.modal');
    

})



