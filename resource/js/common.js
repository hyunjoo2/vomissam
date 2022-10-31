$(document).ready(function () {
    nav();
    mnav();
    searchModal();
    toggleSite();
    footerSwiper();
});


function nav() {
    $('.nav .navWrap ul li').mouseover(function () {
        $(this).addClass("active");
        $('.navWrap').addClass("active");
        $('.nav .navWrap ul li .depth2').addClass('active');
    });
    $('.nav .navWrap ul li').mouseleave(function () {
        $(this).removeClass("active");
        $('.navWrap').removeClass("active");
        $('.nav .navWrap ul li .depth2').removeClass('active');
    });
}

function mnav() {
    $('header .nav .topRight .mMenu').click(function(){
        $('header .nav .navWrap').toggleClass('mopen');
        $('body').toggleClass('fixed');
    });

    $('.m_tab .mtab-btn').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.m_tab .mtab-btn').removeClass('on');
		$('.mcont_bottom .tab-content').removeClass('on');

		$(this).addClass('on');
		$("#"+tab_id).addClass('on');
	})

    $(".m_nav .depth_1").click(function(e){
        e.preventDefault();

        if ($('.tab-content').hasClass('on')) {
            $('.tab-content').removeClass('off');
            footerswiper.autoplay.start();
        } 
        else {
            $('.tab-content').addClass('off');
        }
    });
    
}

function searchModal() {
    $("header .nav .topRight .search a").click(function(){
        $(".modal.search").fadeIn();
        $('body').addClass('fixed');
      });
      
      $(".modal.search .modal-content .modal-body .modal-close").click(function(){
        $(".modal.search").fadeOut();
        $('body').removeClass('fixed');
      });
      
}

function toggleSite() {
    var cont_w = $('.inner').width();
	
	$('header .gotoSite .d-flex .site').click(function(){
		if(cont_w > 1200){
		}else{
            $('header .gotoSite .d-flex ul' ).slideToggle('slow');
            $('header .gotoSite').toggleClass('on');
		}
    });

}


function footerSwiper() {
    var footerswiper = new Swiper(".banner_zone .mySwiper", {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 10,
        autoplay: {
            delay: 1000,
        },
        navigation: {
            nextEl: ".footerbtn .swiper-button-next",
            prevEl: ".footerbtn .swiper-button-prev",
        },
        breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        },
    }); 
    $('.footerbtn .swiper-button-pause').click(function () {
        if ($(this).hasClass('off')) {
          $(this).removeClass('off');
          footerswiper.autoplay.start();
        } else {
          $(this).addClass('off');
          footerswiper.autoplay.stop();
        }
    });
    
}