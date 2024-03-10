$(document).ready(function() {
    'use strict';
    /*-----------------------------------------------------------------------------------*/
    /*	SCROLL NAVIGATION HIGHLIGHT
    /*-----------------------------------------------------------------------------------*/
    var headerWrapper = parseInt($('.navbar').outerHeight(), 10);
    var header_height = $('.navbar').outerHeight();
    var shrinked_header_height = 20;
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
	            $( ".onepage .navbar:not(.banner--clone)" ).removeClass( "navfixed" );
	            $( ".onepage .navbar:not(.banner--clone)" ).addClass( "navhide" );
	            $(function() {
					// use the whole parent item as sub menu toggle button
					$('.navbar-nav').bind('click.smapi', function(e, item) {
						var obj = $(this).data('smartmenus');
						if (obj.isCollapsible()) {
							var $sub = $(item).dataSM('sub');
							if ($sub && $sub.is(':visible')) {
								obj.menuHide($sub);
								return false;
							}
						}
					});
				});
            },
            onInit:    function () {
	            $( ".onepage .navbar:not(.banner--clone)" ).addClass( "navfixed" );
	            $( ".onepage .navbar:not(.banner--clone)" ).removeClass( "navhide" );
            },
			  onUnstick: function () {
				  $( ".onepage .navbar:not(.banner--clone)" ).addClass( "navfixed" );
				  $( ".onepage .navbar:not(.banner--clone)" ).removeClass( "navhide" );
			  }
    };
    var banner = new Headhesive('.navbar', options);
    $('.onepage .navbar .nav li a:not(.has-submenu)').on('click', function() {
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
    /*	PARALLAX MOBILE
    /*-----------------------------------------------------------------------------------*/
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)) {
        $('.parallax').addClass('mobile');
    }
    /*-----------------------------------------------------------------------------------*/
    /*	IMAGE ICON HOVER
    /*-----------------------------------------------------------------------------------*/
    $('.overlay a').prepend('<span class="over"><span></span></span>');
    /*-----------------------------------------------------------------------------------*/
    /*	CUBE PORTFOLIO
    /*-----------------------------------------------------------------------------------*/
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
    /*	REVOLUTION
    /*-----------------------------------------------------------------------------------*/
    $("#slider1").css('visibility', 'visible').show().revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
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
    /*-----------------------------------------------------------------------------------*/
    /*	VANILLA
    /*-----------------------------------------------------------------------------------*/
    var myForm;
    myForm = new VanillaForm($("form.vanilla-form"));
});