$(document).ready(function() {
    'use strict';
    /*-----------------------------------------------------------------------------------*/
    /*	SCROLL NAVIGATION HIGHLIGHT
    /*-----------------------------------------------------------------------------------*/
    var headerWrapper = parseInt($('.navbar').outerHeight(), 10);
    var header_height = $('.navbar').outerHeight();
    var shrinked_header_height = 65;
    var firstStyle = {
        'padding-top': '' + shrinked_header_height + 'px',
        'margin-top': '-' + shrinked_header_height + 'px'
    };
    $('.onepage section').css(firstStyle);
    var secondStyle = {
        'padding-top': '' + header_height + 'px',
        'margin-top': '-' + header_height + 'px'
    };
    $('.onepage section:first-of-type').css(secondStyle);
    var offsetTolerance = -(header_height);
    //Detecting user's scroll
    $(window).scroll(function() {
        //Check scroll position
        var scrollPosition = parseInt($(this).scrollTop(), 10);
        //Move trough each menu and check its position with scroll position then add current class
        $('.onepage .navbar ul.navbar-nav a').not('.menu-logo a').each(function() {
            var thisHref = $(this).attr('href');
            var thisTruePosition = parseInt($(thisHref).offset().top, 10);
            var thisPosition = thisTruePosition - headerWrapper - offsetTolerance;
            if (scrollPosition >= thisPosition) {
                $('.onepage .current').removeClass('current');
                $('.onepage .navbar ul.navbar-nav a[href=' + thisHref + ']').parent('li').addClass('current');
            }
        });
        //If we're at the bottom of the page, move pointer to the last section
        var bottomPage = parseInt($(document).height(), 10) - parseInt($(window).height(), 10);
        if (scrollPosition == bottomPage || scrollPosition >= bottomPage) {
            $('.onepage .current').removeClass('current');
            $('.onepage .navbar ul.navbar-nav a:last').parent('li').addClass('current');
        }
    });
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
    /*	LOCALSCROLL
    /*-----------------------------------------------------------------------------------*/
    $('.navbar, .scroll').localScroll({
        hash: false
    });
    /*-----------------------------------------------------------------------------------*/
    /*	SWIPER
    /*-----------------------------------------------------------------------------------*/

    $('.swiper-container.blog-carousel').each(function() {
        $(this).swiper({
            pagination: '.blog-carousel-wrapper .swiper-pagination',
            nextButton: '.blog-carousel-wrapper .swiper-button-next',
            prevButton: '.blog-carousel-wrapper .swiper-button-prev',
            slidesPerView: 3,
            breakpoints: {
                668: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            },
            centeredSlides: false,
            paginationClickable: true,
            spaceBetween: 30,
            grabCursor: true
        });
        var $swipers = $(this);
    });
    $('.swiper-container.image-blog-wide').each(function() {
        $(this).swiper({
            pagination: '.image-blog-wide-wrapper .swiper-pagination',
            nextButton: '.image-blog-wide-wrapper .swiper-button-next',
            prevButton: '.image-blog-wide-wrapper .swiper-button-prev',
            slidesPerView: 4,
            breakpoints: {
                668: {
                    slidesPerView: 1
                },
                1441: {
                    slidesPerView: 2
                },
                1921: {
                    slidesPerView: 3
                }
            },
            centeredSlides: false,
            paginationClickable: true,
            spaceBetween: 6,
            grabCursor: true
        });
        var $swipers = $(this);
    });
    $('.swiper-container.image-blog').each(function() {
        $(this).swiper({
            pagination: '.image-blog-wrapper .swiper-pagination',
            nextButton: '.image-blog-wrapper .swiper-button-next',
            prevButton: '.image-blog-wrapper .swiper-button-prev',
            slidesPerView: 3,
            breakpoints: {
                668: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            },
            centeredSlides: false,
            paginationClickable: true,
            spaceBetween: 6,
            grabCursor: true
        });
        var $swipers = $(this);
    });
    $('.swiper-container.image-carousel').each(function() {
        $(this).swiper({
            pagination: '.image-carousel-wrapper .swiper-pagination',
            nextButton: '.image-carousel-wrapper .swiper-button-next',
            prevButton: '.image-carousel-wrapper .swiper-button-prev',
            slidesPerView: "auto",
            centeredSlides: false,
            pagination: false,
            spaceBetween: 6,
            grabCursor: true
        });
        var $swipers = $(this);
    });
    /*-----------------------------------------------------------------------------------*/
    /*	CUBE PORTFOLIO
    /*-----------------------------------------------------------------------------------*/
    $('#js-grid-inline').cubeportfolio({
        filters: '#js-inline-filter',
        loadMore: '#js-inline-more',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        mediaQueries: [{
            width: 1500,
            cols: 4
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 3
        }, {
            width: 670,
            cols: 2
        }, {
            width: 320,
            cols: 1
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
    $('#js-grid-inline2').cubeportfolio({
        filters: '#js-inline2-filter',
        loadMore: '#js-inline2-more',
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
    $('#js-grid-inline3').cubeportfolio({
        filters: '#js-inline3-filter',
        loadMore: '#js-inline3-more',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        mediaQueries: [{
            width: 1500,
            cols: 4
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 670,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'top',
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
    $('#js-grid-lightbox').cubeportfolio({
        filters: '#js-lightbox-filter',
        loadMore: '#js-lightbox-more',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        mediaQueries: [{
            width: 1500,
            cols: 4
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 3
        }, {
            width: 670,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 6,
        gapVertical: 6,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

    });
    $('#js-grid-lightbox').on('onAfterLoadMore.cbp', function(event, newItemsAddedToGrid) {
        // first destroy the gallery
        $('.light-gallery').data('lightGallery').destroy(true);

        // reinit the gallery
	    $('.light-gallery').lightGallery({
	        thumbnail: false,
	        selector: '.lgitem',
	        animateThumb: true,
	        showThumbByDefault: false,
	        download: false,
	        autoplayControls: false,
	        zoom: false,
	        videoAutoplay: false,
	        fullScreen: false,
	        thumbWidth: 100,
	        thumbContHeight: 80,
	        videoMaxWidth: '1000px'
	    });
	});
    $('#js-grid-blog-posts').cubeportfolio({
        gapHorizontal: 60,
        gapVertical: 30,
        gridAdjustment: 'responsive',
        layoutMode: 'grid',
        mediaQueries: [{
            width: 1100,
            cols: 3
        }, {
            width: 768,
            cols: 2
        }, {
            width: 480,
            cols: 1
        }],
        caption: 'revealBottom',
        displayType: 'fadeIn',
        displayTypeSpeed: 400,
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
    /*	FOTORAMA
    /*-----------------------------------------------------------------------------------*/
    $('.fotorama').fotorama({
        spinner: {
            color: 'rgba(0, 0, 0, 0)'
        }
    });
    $('.fotorama-item').append(' ');
    /*-----------------------------------------------------------------------------------*/
    /*	IMAGE ICON HOVER
    /*-----------------------------------------------------------------------------------*/
    $('.overlay a').prepend('<span class="over"><span></span></span>');
    /*-----------------------------------------------------------------------------------*/
    /*	REVOLUTION
    /*-----------------------------------------------------------------------------------*/
    $("#slider1").revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        fullScreenOffsetContainer: ".navbar:not(.fixed)",
        spinner: "spinner",
        delay: 9000,
        shadow: 0,
        gridwidth:[1240, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true
            },
            touch: {
                touchenabled: "on",
            },
            bullets: {
                enable: true,
                hide_onleave: true,
                h_align: "center",
                v_align: "bottom",
                space: 6,
                h_offset: 0,
                v_offset: 20,
                tmp: ''
            }
        }
    });

    $("#slider2").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        /*fullScreenOffsetContainer: ".navbar",*/
        spinner: "spinner",
        delay: 9000,
        shadow: 0,
        gridwidth:[1170, 1024, 778, 480],
		gridheight:[600, 525, 400, 250],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true
            },
            touch: {
                touchenabled: "on",
            },
            bullets: {
                enable: true,
                hide_onleave: true,
                h_align: "center",
                v_align: "bottom",
                space: 6,
                h_offset: 0,
                v_offset: 20,
                tmp: ''
            }
        }
    });
    $("#slider3").revolution({
        sliderType: "standard",
        sliderLayout: 'fullwidth',
        /*fullScreenOffsetContainer: ".navbar",*/
        spinner: "spinner",
        delay: 9000,
        shadow: 0,
        gridwidth:[1170, 1024, 778, 480],
		gridheight:[600, 525, 400, 250],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true
            },
            touch: {
                touchenabled: "on",
            },
            bullets: {
                enable: true,
                hide_onleave: true,
                h_align: "center",
                v_align: "bottom",
                space: 6,
                h_offset: 0,
                v_offset: 20,
                tmp: ''
            }
        }
    });
    $("#slider4").revolution({
        sliderType: "standard",
        jsFileLocation: "../../revolution/js/",
        sliderLayout: "auto",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                enable: true,
                hide_onleave: true
            },
            touch: {
                touchenabled: "on",
            },
            bullets: {
                enable: false,
                hide_onleave: false,
                h_align: "center",
                v_align: "bottom",
                space: 6,
                h_offset: 0,
                v_offset: 20
            },
            thumbnails: {
                style: "erinyen",
                enable: true,
                width: 120,
                height: 68,
                min_width: 90,
                wrapper_padding: 0,
                wrapper_color: "transparent",
                wrapper_opacity: "1",
                tmp: '<span class="tp-thumb-over"></span><span class="tp-thumb-image"></span>',
                visibleAmount: 10,
                hide_onmobile: false,
                hide_onleave: false,
                direction: "horizontal",
                span: true,
                position: "outer-bottom",
                space: 10,
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 0
            }
        },
        gridwidth: 1230,
        gridheight: 692,
        lazyType: "none",
        shadow: 0,
        spinner: "spinner",
        stopLoop: "on",
        stopAfterLoops: 0,
        stopAtSlide: 1,
        shuffle: "off",
        autoHeight: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }
    });
    $("#flow").revolution({
        sliderType: "carousel",
        sliderLayout: "auto",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            onHoverStop: "off",
            arrows: {
                enable: true,
                hide_onleave: true
            }
        },
        carousel: {
            maxRotation: 5,
            vary_rotation: "off",
            minScale: 15,
            vary_scale: "off",
            horizontal_align: "center",
            vertical_align: "center",
            fadeout: "on",
            vary_fade: "on",
            maxVisibleItems: 5,
            infinity: "on",
            space: -50,
            stretch: "off"
        },
        responsiveLevels: [1240, 1024, 778, 480],
        gridwidth: 750,
        gridheight: 600,
        lazyType: "none",
        shadow: 0,
        spinner: "spinner",
        stopLoop: "on",
        stopAfterLoops: 0,
        stopAtSlide: 1,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }

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
        videoMaxWidth: '1000px'
    });
    /*-----------------------------------------------------------------------------------*/
    /*	GO TO TOP
    /*-----------------------------------------------------------------------------------*/
    $.scrollUp({
        scrollName: 'scrollUp',
        // Element ID
        scrollDistance: 300,
        // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',
        // 'top' or 'bottom'
        scrollSpeed: 300,
        // Speed back to top (ms)
        easingType: 'linear',
        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',
        // Fade, slide, none
        animationInSpeed: 200,
        // Animation in speed (ms)
        animationOutSpeed: 200,
        // Animation out speed (ms)
        scrollText: '<span class="btn btn-square"><i class="ion-android-arrow-up"></i></span>',
        // Text for element, can contain HTML
        scrollTitle: false,
        // Set a custom <a> title if required. Defaults to scrollText
        scrollImg: false,
        // Set true to use image
        activeOverlay: false,
        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 1001 // Z-Index for the overlay
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
    /*	COUNTER UP
    /*-----------------------------------------------------------------------------------*/
    $('.fcounter').counterUp({
        delay: 50,
        time: 1000
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PARALLAX MOBILE
    /*-----------------------------------------------------------------------------------*/
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)) {
        $('.parallax').addClass('mobile');
    }
    /*-----------------------------------------------------------------------------------*/
    /*	BACKGROUND VIDEO PARALLAX
    /*-----------------------------------------------------------------------------------*/
    $('#video-fish').backgroundVideo({
        $outerWrap: $('.outer-wrap'),
        pauseVideoOnViewLoss: false,
        parallaxOptions: {
            effect: 1.9
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	LOADER
    /*-----------------------------------------------------------------------------------*/
    $(".pageloader").lsPreloader({

        backgroundColor: "#252525",
        logoImage: "style/images/logo-light.png",
        minimumTime: .5,
        progressHeight: "0",
        progressColor: "#fff",
        percentFontSize: "18px"

    });
    /*-----------------------------------------------------------------------------------*/
    /*	VANILLA
    /*-----------------------------------------------------------------------------------*/
    var myForm;
    myForm = new VanillaForm($("form.vanilla-form"));
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