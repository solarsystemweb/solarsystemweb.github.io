$(function () {
    var mixer = mixitup('.directions__list')

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows: false,
        // dots:  true
        slidesToShow: 4,
        draggable: false,
        waitForAnimate: false,
        // appendArrows: $('.team__slider-arrows'),
    })

    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })

    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.testimonials__dots'),
        waitForAnimate: false,
    })

    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })

    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
    })

    // $('.program__acc-link').on('click', function (e) {
    //     e.preventDefault()
    //     $(this).toggleClass('program__acc-link--active')
    //     $(this).children('.program__acc-text').slideToggle()
    // })

    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--ac')
            $(this).children('.program__acc-text').slideUp()

            // $(this).removeClass('program__acc-link--active')
            // $(this).children('.program__acc-text').slideUp()
        } else {
            $('.program__acc-link').removeClass('program__acc-link--active')
            $('.program__acc-text').slideUp()
            $(this).addClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    })

    $(".header__nav-list a, .header__top-btn, .footer__go-top").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 800)
    })

})