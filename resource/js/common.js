

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

    uiJSCommon();

})

var $win = $(window);
var $doc = $(document);

// datepicker
function datepicker($root) {
    if (!$root) {
        $root = $doc;
    }
    $root.find('.js-datepicker-range').each(function () {
        var $this = $(this);
        var $min = $this.find('.js-datepicker-range__min');
        var $max = $this.find('.js-datepicker-range__max');
        $min.datetimepicker({
            locale: 'ko',
            format: 'YYYY-MM-DD',
            dayViewHeaderFormat: 'YYYY년 MMMM',
        });
        $max.datetimepicker({
            locale: 'ko',
            format: 'YYYY-MM-DD',
            dayViewHeaderFormat: 'YYYY년 MMMM',
            useCurrent: false,
        });
        $min.off('dp.change.uiJSDatepickerRange').on('dp.change.uiJSDatepickerRange', function (e) {
            $max.data('DateTimePicker').minDate(e.date);
        });
        $max.off('dp.change.uiJSDatepickerRange').on('dp.change.uiJSDatepickerRange', function (e) {
            $min.data('DateTimePicker').maxDate(e.date);
        });
    });
    $root.find('.js-datepicker').datetimepicker({
        locale: 'ko',
        format: 'YYYY-MM-DD',
        dayViewHeaderFormat: 'YYYY년 MMMM'
    });
    $root.find('.js-monthpicker').datetimepicker({
        locale: 'ko',
        viewMode: 'years',
        format: 'YYYY년 M월'
    });
}
function setTimeSelectRange($min, $max, min, max) {
    $min
        .find('option')
        .prop('selected', false)
        .removeAttr('selected')
        .filter('[data-option="' + min + '"]')
        .prop('selected', true)
        .attr('selected', '');
    $max
        .find('option')
        .prop('selected', false)
        .removeAttr('selected')
        .filter('[data-option="' + max + '"]')
        .prop('selected', true)
        .attr('selected', '');
}
$doc.on('click.uiDatepicker', '[data-datepicker-range]', function () {
    var $this = $(this);
    var $wrap = $this.closest('.js-datepicker-range');
    var $min = $wrap.find('.js-datepicker-range__min');
    var $max = $wrap.find('.js-datepicker-range__max');
    var $hourMin = $wrap.find('.js-datepicker-range__hour-select-min');
    var $hourMax = $wrap.find('.js-datepicker-range__hour-select-max');
    var $minuteMin = $wrap.find('.js-datepicker-range__minute-select-min');
    var $minuteMax = $wrap.find('.js-datepicker-range__minute-select-max');
    var range = $this.attr('data-datepicker-range');
    var val = Number(range.replace(/(-*[0-9]+) *((year|month|day)(s*))/g, '$1'));
    var unit = range.replace(/(-*[0-9]+) *((year|month|day)(s*))/g, '$2');
    var minDateTimePicker = $min.length ? $min.data('DateTimePicker') : null;
    var maxDateTimePicker = $max.length ? $max.data('DateTimePicker') : null;
    var now = moment();
    var to = moment().add(val, unit);
    var nowHour = now.hour();
    var nowMinute = now.minute();
    var isHour = $hourMin.length && $hourMax.length;

    if (minDateTimePicker && maxDateTimePicker) {
        if (val < 0) {
            if (!isHour) {
                to.add(1, 'day');
            }
            minDateTimePicker.date(to.format());
            maxDateTimePicker.date(now.format());
        } else if (0 < val) {
            if (!isHour) {
                to.add(-1, 'day');
            }
            minDateTimePicker.date(now.format());
            maxDateTimePicker.date(to.format());
        }
    }
    if (isHour) {
        setTimeSelectRange($hourMin, $hourMax, nowHour, nowHour);
    }
    if ($minuteMin.length && $minuteMax.length) {
        setTimeSelectRange($minuteMin, $minuteMax, nowMinute, nowMinute);
    }
});

function uiJSCommon($root){
    if (!$root) {
        $root = $doc;
    }

    datepicker($root);
}
window.uiJSCommon = uiJSCommon;