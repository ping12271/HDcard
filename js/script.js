$(function () {
    hyundaicard.init();
})
var hyundaicard = {
    init: function () {
        hyundaicard.threeSlideshow();
        hyundaicard.singleSlideshow();
        hyundaicard.fadeSlideshow();
        hyundaicard.navSlideshow();
        hyundaicard.getScroll();
        hyundaicard.toggleSlidemenu();
        hyundaicard.toggleClass();
        hyundaicard.handleInfo();
        hyundaicard.backTop();
    },

    threeSlideshow: function () {
        $('.card-slideshow').slick({
            autoplay: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: true,
        })
    },

    singleSlideshow: function () {
        $('.bank-slideshow, .culture-slideshow, .digital-slideshow, .event-slideshow, .notice-slideshow').slick({
            autoplay: true,
            arrows: false,
            dots: true,
        });
    },

    fadeSlideshow: function () {
        $('.nav-slideshow, .visual-slideshow').slick({
            autoplay: true,
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
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
            $('html, body').animate({
                scrollTop:0
            },400)
        })
    },

    toggleSlidemenu: function () {
        $('.faq-board li').on('click', function () {
            $(this).find('.answer').slideToggle();
            $(this).find('.icon').toggleClass('show');
        });
    },

    toggleClass: function () {
        $('.more-btn').on('click', function () {
            $(this).toggleClass('active');
            $('.more').toggleClass('active');
        })
    }

};