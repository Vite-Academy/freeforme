$(document).ready(function() {
    'use strict';
    /*-----------------------------------------------------------------------------------*/
    /*	STICKY HEADER
    /*-----------------------------------------------------------------------------------*/
    var options = {
        offset: 350,
        offsetSide: 'top',
        classes: {
            clone: 'banner--clone fixed',
            stick: 'banner--stick',
            unstick: 'banner--unstick'
        },
        onStick: function() {
            $($.SmartMenus.Bootstrap.init);
        }
    };
    var banner = new Headhesive('.navbar', options);
    $('.offset').css('padding-top', $('.navbar').height() + 'px');
    $(window).resize(function() {
        $('.offset').css('padding-top', $('.navbar').height() + 'px');
    });
    $('.onepage .navbar .nav li a').on('click', function() {
        $('.navbar .navbar-collapse.in').collapse('hide');
        $('.nav-bars').removeClass('is-active');
    });
    
    /*-----------------------------------------------------------------------------------*/
    /*	HAMBURGER MENU ICON
    /*-----------------------------------------------------------------------------------*/
    $(".nav-bars").on( "click", function() {
        $(".nav-bars").toggleClass("is-active");
    });
    /*-----------------------------------------------------------------------------------*/
    /*	IMAGE ICON HOVER
    /*-----------------------------------------------------------------------------------*/
    $('.overlay a:not(.btn)').prepend('<span class="over"><span></span></span>');
    /*-----------------------------------------------------------------------------------*/
    /*	PARALLAX MOBILE
    /*-----------------------------------------------------------------------------------*/
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)) {
        $('.parallax').addClass('mobile');
    }
    /*-----------------------------------------------------------------------------------*/
    /*	CUBE PORTFOLIO
    /*-----------------------------------------------------------------------------------*/
    $('#js-video-grid').cubeportfolio({
        filters: '#js-video-grid-filter',
        loadMore: '#js-video-grid-more',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        mediaQueries: [{
            width: 768,
            cols: 4
        }, {
            width: 670,
            cols: 3
        }, {
            width: 320,
            cols: 2
        }],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 6,
        gapVertical: 6,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'top',
        singlePageInlineDeeplinking: true,
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;

            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 30000
                })
                .done(function(result) {

                    t.updateSinglePageInline(result);

                })
                .fail(function() {
                    t.updateSinglePageInline('AJAX Error! Please refresh the page!');
                });
        },
    });
    $('#js-grid-slider-testimonials').cubeportfolio({
        layoutMode: 'slider',
        drag: true,
        auto: false,
        autoTimeout: 5000,
        autoPauseOnHover: true,
        showNavigation: false,
        showPagination: true,
        rewindNav: true,
        scrollByPage: false,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1,
            cols: 1
        }],
        gapHorizontal: 0,
        gapVertical: 0,
        caption: '',
        displayType: 'default',
    });
    $('#clients').cubeportfolio({
        layoutMode: 'slider',
        drag: true,
        auto: false,
        autoTimeout: 5000,
        autoPauseOnHover: true,
        showNavigation: false,
        showPagination: false,
        rewindNav: false,
        scrollByPage: false,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 800,
            cols: 6
        }, {
            width: 480,
            cols: 4
        }, {
            width: 320,
            cols: 2
        }],
        gapHorizontal: 0,
        gapVertical: 50,
        caption: 'overlayBottom',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

    });
    /*-----------------------------------------------------------------------------------*/
    /*	LIGHTGALLERY
	/*-----------------------------------------------------------------------------------*/
    $('.light-gallery').lightGallery({
        thumbnail: false,
        selector: '.lgitem',
        animateThumb: true,
        showThumbByDefault: false,
        download: false,
        autoplayControls: false,
        zoom: false,
	    fullScreen: false,
        thumbWidth: 100,
        thumbContHeight: 80,
        hash: false,
        videoMaxWidth: '1000px'
    });
    /*-----------------------------------------------------------------------------------*/
    /*	SWIPER
    /*-----------------------------------------------------------------------------------*/
    $('.swiper-container.image-carousel').each(function() {
        $(this).swiper({
            pagination: '.image-carousel-wrapper .swiper-pagination',
            nextButton: '.image-carousel-wrapper .swiper-button-next',
            prevButton: '.image-carousel-wrapper .swiper-button-prev',
            slidesPerView: 3,
            breakpoints: {
                668: {
                    slidesPerView: 1
                },
                1024: {
                    slidesPerView: 2 
                }
            },
        paginationClickable: false,
        spaceBetween: 10,
        freeMode: true,
        grabCursor: true,
        mousewheelControl: true

        });
        var $swipers = $(this);
    });
    $('.swiper-container.single-carousel').each(function() {
        $(this).swiper({
            pagination: '.single-carousel-wrapper .swiper-pagination',
            nextButton: '.single-carousel-wrapper .swiper-button-next',
            prevButton: '.single-carousel-wrapper .swiper-button-prev',
            direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 10,
        grabCursor: true,
        mousewheelControl: true,
        autoplay: 5000

        });
        var $swipers = $(this);
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TAB COLLAPSE
    /*-----------------------------------------------------------------------------------*/
    $('#tab1').tabCollapse({
        tabsClass: 'hidden-sm hidden-xs',
        accordionClass: 'visible-sm visible-xs'
    });
    $('#tab1').on('shown-accordion.bs.tabcollapse', function() {
        $('.panel-group').find('.panel-default:has(".in")').addClass('panel-active');
        $('.panel-group').on('shown.bs.collapse', function(e) {
            $(e.target).closest('.panel-default').addClass(' panel-active');
        }).on('hidden.bs.collapse', function(e) {
            $(e.target).closest('.panel-default').removeClass(' panel-active');
        });
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TOGGLE
    /*-----------------------------------------------------------------------------------*/
    $('.panel-group').find('.panel-default:has(".in")').addClass('panel-active');
    $('.panel-group').on('shown.bs.collapse', function(e) {
        $(e.target).closest('.panel-default').addClass(' panel-active');
    }).on('hidden.bs.collapse', function(e) {
        $(e.target).closest('.panel-default').removeClass(' panel-active');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PROGRESS BAR
    /*-----------------------------------------------------------------------------------*/
    $('.progress-list .progress .bar').progressBar({
        shadow: false,
        percentage: false,
        animation: true,
        height: 12
    });
    /*-----------------------------------------------------------------------------------*/
    /*	DATA REL
    /*-----------------------------------------------------------------------------------*/
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TOOLTIP
    /*-----------------------------------------------------------------------------------*/
    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }
    /*-----------------------------------------------------------------------------------*/
    /*	PRETTIFY
    /*-----------------------------------------------------------------------------------*/
    window.prettyPrint && prettyPrint();
    /*-----------------------------------------------------------------------------------*/
    /*	LOADER
    /*-----------------------------------------------------------------------------------*/
    $(".pageloader").lsPreloader({

        backgroundColor: "#FFF",
        logoImage: "style/images/logo.png",
        minimumTime: .5,
        progressHeight: "0",
        progressColor: "#404040",
        percentFontSize: "18px"

    });
    /*-----------------------------------------------------------------------------------*/
    /*	VANILLA
    /*-----------------------------------------------------------------------------------*/
    var myForm;
    myForm = new VanillaForm($("form.vanilla-form"));   
    /*-----------------------------------------------------------------------------------*/
    /*	COUNTER UP
    /*-----------------------------------------------------------------------------------*/
    $('.fcounter').counterUp({
        delay: 50,
        time: 1000
    });
    /*-----------------------------------------------------------------------------------*/
    /*	COLLAGEPLUS
    /*-----------------------------------------------------------------------------------*/
    collage();
    function collage() {
        $('.collage').removeWhitespace().collagePlus({
            'fadeSpeed': 5000,
            'targetHeight': 300,
            'effect': 'effect-2',
            'direction': 'vertical',
            'allowPartialLastRow': true
        });
    };
    // This is just for the case that the browser window is resized
    var resizeTimer = null;
    $(window).on('resize', function() {
        // hide all the images until we resize them
        $('.collage .collage-image-wrapper').css("opacity", 0);
        // set a timer to re-apply the plugin
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(collage, 200);
    });
});