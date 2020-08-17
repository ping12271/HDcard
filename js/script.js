$(function () {
    hyundaicard.init();
})
var hyundaicard = {
    init: function () {
        hyundaicard.slider();
        hyundaicard.getScroll();
        hyundaicard.toggle();
        hyundaicard.handleInfo();
        hyundaicard.backTop();
        hyundaicard.tabMenu();
        hyundaicard.moveToNextSection();
    },

    slider: function () {
        $('.card-slide').slick({
            autoplay: true,
            arrows: false,
            speed: 0,
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            cssEase: 'linear'
        });

        $('.slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            speed: 1000,
            fade: true,
        });

        $('.btn-pause').on('click', function () {
            $(this).closest('.card-slide-container,.slick-container').find('.card-slide,.slider').slick('slickPause');
            $(this).closest('.card-slide-container,.slick-container').find('.ctrl').addClass('pause');
        });
        $('.btn-play').on('click', function () {
            $(this).closest('.card-slide-container,.slick-container').find('.card-slide,.slider').slick('slickPlay');
            $(this).closest('.card-slide-container,.slick-container').find('.ctrl').removeClass('pause');
        });

        const slickCustomEvent = {
            init : function(){
                slickCustomEvent.initialize()
                slickCustomEvent.beforeChange()
                slickCustomEvent.afterChange()
            },
            initialize : function(){
                var dataIndex = $('[data-slick-index="0"]');
                dataIndex.find('h2,p,.btn').addClass('fadeInUp');
            },
            beforeChange : function(){
                $('.fadeInUp').on('beforeChange', function(event, slick, currentSlide){
                    $('h2,p,.btn').removeClass('fadeInUp');
                })
            },
            afterChange : function(){
                $('.fadeInUp').on('afterChange', function(event, slick, currentSlide){
                    var dataIndex = $('[data-slick-index="' + currentSlide + '"');
                    dataIndex.find('h2,p,.btn').addClass('fadeInUp');
                });
            }
        }
        slickCustomEvent.init();

        $('.notice-slide').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            fade: true,
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
        });

        $('.gallery-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.gallery-nav'
        });

        $('.gallery-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.gallery-for',
            centerMode: true,
            focusOnSelect: true
        });
    },

    getScroll: function () {
        $(window).on('scroll', function () {
            const scrollTop = $(window).scrollTop();
            if(scrollTop > 5) {
                $('html').addClass('get-scroll')
            } else {
                $('html').removeClass('get-scroll');
            }

            if(scrollTop > 50) {
                $('html').addClass('show-backtop')
            } else {
                $('html').removeClass('show-backtop');
            }
        });
    },

    handleInfo: function () {
        $(window).on('scroll', function () {
            const scrollTop = $(window).scrollTop();
            const offset = $('.title-trigger').offset();
            const point = offset.top;
            if (scrollTop > point) {
                $('.page-title').addClass('on');
            } else {
                $('.page-title').removeClass('on');
            }
        });
    },

    backTop: function () {
        $('.back-top').on('click', function () {
            $('html, body').animate({scrollTop: 0},400)
        });
    },

    toggle: function () {
        $('.que').on('click', function () {
            $(this).next('.answer').slideToggle(500);
            $(this).find('p, .icon').toggleClass('is-active');
        });

        $('.more-btn').on('click', function () {
            $(this).addClass('active');
            $('.more-que').addClass('active');
        });

        $('.site .name').on('click', function () {
            $(this).find('i').toggleClass('active');
            $(this).next('.dropdown').toggleClass('active');
        });
    },

    tabMenu: function () {
        $('.tab-menu li').on('click', function () {
            $(this).addClass('is-active');
            $(this).siblings().removeClass('is-active');

            const index = $(this).index();
            $('.board').eq(index).show().siblings().hide();
        }).eq(0).trigger('click');
    },

    moveToNextSection: function () {
        $('.visual-slide').on('mousewheel', function (event) {
            console.log(event.deltaY);
            if(event.deltaY < 0) {
                console.log("@@ 휠을 아래로")
                const nextSection = $(this).closest('section').next('section');
                const nextOft = nextSection.offset().top;
                $('html, body').stop().animate({scrollTop: nextOft});
            }
        });
    }

};