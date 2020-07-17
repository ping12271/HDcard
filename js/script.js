$(function () {
    hyundaicard.init();
})
var hyundaicard = {
    init: function () {
        hyundaicard.slideShow();
        hyundaicard.fadeSlideshow();
        hyundaicard.navSlideshow();
        hyundaicard.getScroll();
        hyundaicard.toggleClass();
        hyundaicard.handleInfo();
        hyundaicard.backTop();
        hyundaicard.tabMenu();
    },

    slideShow: function () {
        $('.card-slideshow').slick({
            autoplay: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: true,
        });
    },

    fadeSlideshow: function () {
        $('.nav-slideshow,.visual-slideshow, .bank-slideshow,.culture-slideshow,.digital-slideshow,.event-slideshow').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
        });
        $('.notice-slideshow').slick({
            autoplay: true,
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            fade: true,
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
        });
        var slickCustomEvent = {
            init : function(){
                slickCustomEvent.initialize()
                slickCustomEvent.beforeChange()
                slickCustomEvent.afterChange()
            },
            initialize : function(){
                var dataIndex = $('[data-slick-index="0"');
                dataIndex.find('h2,p,.btn').addClass('fadeInUp');
            },
            beforeChange : function(){
                $('.visual-slideshow').on('beforeChange', function(event, slick, currentSlide){
                    $('h2,p,.btn').removeClass('fadeInUp');
                })
            },
            afterChange : function(){
                $('.visual-slideshow').on('afterChange', function(event, slick, currentSlide){
                    var dataIndex = $('[data-slick-index="' + currentSlide + '"');
                    dataIndex.find('h2,p,.btn').addClass('fadeInUp');
                });
            }
        }
        slickCustomEvent.init()
    },

    navSlideshow: function () {
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
        })

    },

    handleInfo: function () {
        $(window).on('scroll', function () {
            const scrollTop = $(window).scrollTop();
            const offset = $('.title-trigger').offset();
            const point = offset.top();
            if (scrollTop > point) {
                $('.page-title').addClass('on');
            } else {
                $('.page-title').removeClass('on');
            }
        });
    },

    backTop: function () {
        $('.back-top').on('click', function () {
            $('html, body').animate({
                scrollTop:0
            },400)
        })
    },

    toggleClass: function () {
        $('.que').on('click', function () {
            $(this).siblings('.answer').slideToggle();
            $(this).find('.icon').toggleClass('show');
        });

        $('.more-btn').on('click', function () {
            $(this).addClass('active');
            $('.more').addClass('active');
        });

        $('.site .name').on('click', function () {
            $(this).find('i').toggleClass('active');
            $(this).next('.dropdown').toggleClass('active');
        });
    },

    tabMenu: function () {
        $('.faq-menu li').on('click', function () {
            $(this).children('a').addClass('is_active');
            $(this).siblings().children('a').removeClass('is_active');
            const index = $(this).index();
            $('.board').eq(index).show().siblings().hide();
        }).eq(0).trigger('click');
    }

};