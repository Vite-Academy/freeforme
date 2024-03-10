jQuery(function ($) {

	'use strict';


    // -------------------------------------------------------------
    //      Sticky Menu
    // -------------------------------------------------------------
        
        (function () {
            var nav = $('.navbar');
            var scrolled = false;

            $(window).scroll(function () {

                if (110 < $(window).scrollTop() && !scrolled) {
                    nav.addClass('sticky animated fadeInDown').animate({ 'margin-top': '0px' });

                    scrolled = true;
                }

                if (110 > $(window).scrollTop() && scrolled) {
                    nav.removeClass('sticky animated fadeInDown').css('margin-top', '0px');

                    scrolled = false;
                }
            });

        }());



    // -------------------------------------------------------------
    //  	Offcanvas Menu
    // -------------------------------------------------------------

        (function () {
            var menutoggle = $(".menu-toggle");
            var offcanvasmenu = $("#offcanvas-menu");
            var closemenu = $(".close-menu");

            menutoggle.on("click" ,function(){
                offcanvasmenu.addClass("toggled");
                return false;
            });

            closemenu.on("click" ,function() {
                offcanvasmenu.removeClass("toggled");
                return false;
            });
        }());



    // -------------------------------------------------------------
    //      Single-Page-Menu-Scrolling  Easy Plugin
    // -------------------------------------------------------------

        $(function() {
            $('a.page-scroll').on('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });



    // -------------------------------------------------------------
    // Sub-menu
    // -------------------------------------------------------------
        if ( $('.dropmenu').length) {
            $('.dropmenu').on("click" ,function(){
                $(this).parent().find('ul').slideToggle();
                return false;
            });
        }



    // -------------------------------------------------------------
    //      Chat-Box 
    // -------------------------------------------------------------

        (function () {
            var openbox = $("#open-box,#open-box-two");
            var mailbox = $(".mail-box");
            var closebox = $(".close-box");

            openbox.on("click" ,function(){
                mailbox.addClass("active");
                return false;
            });

            closebox.on("click" ,function() {
                mailbox.removeClass("active");
                return false;
            });
        }());



    // -------------------------------------------------------------
    //      Login-Box 
    // -------------------------------------------------------------

        (function () {
            var openbox = $("#login");
            var loginbox = $("#search-modeal");
            var closebox = $(".logout-box");

            openbox.on("click" ,function(){
                loginbox.addClass("active");
                return false;
            });

            closebox.on("click" ,function() {
                loginbox.removeClass("active");
                return false;
            });
        }());

    

    // -------------------------------------------------------------
    //      LightBox-Js
    // -------------------------------------------------------------

        if ($('#lightBox').length) {
            $('#lightBox').poptrox({
                usePopupCaption: true,
                usePopupNav: true,
                popupPadding: 0
            });
        }



    // ------------------------------------------------------------------
    //      Revulation Slider
    // ------------------------------------------------------------------

        if ($('.tp-banner').length) {
            $('.tp-banner').revolution({
                delay:9000,
                startwidth:1170,
                startheight:700,
                hideThumbs:10,
                fullWidth:"on",
                forceFullWidth:"on",
                onHoverStop:"off",
                navigationType:"none",
                navigationStyle:"preview2",
                spinner:"off",
                hideTimerBar:"on"
            });
        }
       




    // -------------------------------------------------------------
    //  	Hosting-Slider
    // -------------------------------------------------------------

        if ($('.hosting-carousel').length) {
            $('.hosting-carousel').owlCarousel({
                loop:true,
                autoplay:true,
                autoplayTimeout: 3000,
                margin:30,
                nav:false,
                responsive:{
                    0:{
                        items:1,
                        nav:false,
                    },
                    600:{
                        items:2,
                        nav:false,
                    },
                    1000:{
                        items:4
                    }
                }
            });
        }




    // -------------------------------------------------------------
    //      Client-Slider
    // -------------------------------------------------------------

        if ($('.client-carousel').length) {
            $('.client-carousel').owlCarousel({
                loop:true,
                autoplay:true,
                autoplayTimeout: 3000,
                margin:10,
                nav:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false,
                    },
                    600:{
                        items:3,
                        nav:false,
                    },
                    1000:{
                        items:5
                    }
                }
            });
        }




    // -------------------------------------------------------------
    //      Data-Slider
    // -------------------------------------------------------------

        if ($('.data-center-carousel').length) {
            $('.data-center-carousel').owlCarousel({
                loop:true,
                autoplay:true,
                autoplayTimeout: 3000,
                margin:30,
                nav:false,
                responsive:{
                    0:{
                        items:1,
                        nav:false,
                    },
                    600:{
                        items:2,
                        nav:false,
                    },
                    1000:{
                        items:3
                    }
                }
            });
        }



    // -------------------------------------------------------------
    //      Information-Section-Slider
    // -------------------------------------------------------------

        if ($('.information-carousel').length) {
            $('.information-carousel').owlCarousel({
                loop:true,
                autoplay:true,
                autoplayTimeout: 3000,
                margin:30,
                nav:false,
                dots:true,
                scrollPerPage:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false,
                    },
                    600:{
                        items:2,
                        nav:false,
                    },
                    1000:{
                        items:3
                    }
                }
            });
        }



    // -------------------------------------------------------------
    //      Offer-Section-Slider
    // -------------------------------------------------------------
    

        if ($('.offer-carousel').length) {
            $('.offer-carousel').owlCarousel({
                loop:true,
                autoplay:true,
                autoplayTimeout: 3000,
                margin:10,
                nav:false,
                responsive:{
                    0:{
                        items:1,
                        nav:false,
                    },
                    600:{
                        items:2,
                        nav:false,
                    },
                    1000:{
                        items:5
                    }
                }
            });
        }




    // -------------------------------------------------------------
    //      Review-Slider
    // -------------------------------------------------------------

        if ($('.review-carousel').length) {
            $('.review-carousel').owlCarousel({
                loop:true,
                autoplay:false,
                margin:30,
                nav:false,
                responsive:{
                    0:{
                        items:1,
                        nav:false,
                    },
                    600:{
                        items:1,
                        nav:false,
                    },
                    1000:{
                        items:2,
                    }
                }
            });
        }



    //-------------------------------------------------------
    //  	counter Section
    //-------------------------------------------------------
       
        function funFactCounting() {
            if ($('.counting-section').length) {
                $('.counting-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
                    if (visible) {
                        $(this).find('.timer').each(function () {
                            var $this = $(this);
                            $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                                duration: 2000,
                                easing: 'linear',
                                step: function () {
                                    $this.text(Math.ceil(this.Counter));
                                }
                            });
                        });

                        $(this).off('inview');
                    }
                });
            }
        }



    // -------------------------------------------------------------
    //      Google Map
    // -------------------------------------------------------------

        if ($('#googleMap').length) {
            google.maps.event.addDomListener(window, 'load', init);
            
            function init() {
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 6,
                    scrollwheel: false,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(27.664827, -81.515754), // New York

                    // This is where you would paste any style found on Snazzy Maps.
                    styles:[{"featureType": "administrative","elementType": "labels.text.fill","stylers": [{"color": "#444444"}]},
                            {"featureType": "landscape","elementType": "all","stylers": [{"color": "#f2f2f2"}]},
                            {"featureType": "landscape","elementType": "geometry.fill","stylers": [{"color": "#c7c9cb"}]},
                            {"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},
                            {"featureType": "poi.business","elementType": "all","stylers": [{"visibility": "off"}]},
                            {"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"visibility": "on"},{"saturation": "37"},{"gamma": "0.60"},{"color": "#3065b2"}]},
                            {"featureType": "poi.park","elementType": "labels","stylers": [{"visibility": "on"}]},
                            {"featureType": "poi.park","elementType": "labels.text","stylers": [{"visibility": "on"}]},
                            {"featureType": "road","elementType": "all","stylers": [{"saturation": -100},{"lightness": 45}]},
                            {"featureType": "road","elementType": "geometry.fill","stylers": [{"color": "#747578"}]},
                            {"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},
                            {"featureType": "road.highway.controlled_access","elementType": "all","stylers": [{"visibility": "on"},{"gamma": "1.07"},{"lightness": "0"}]},
                            {"featureType": "road.arterial","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
                            {"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"}]},
                            {"featureType": "transit.line","elementType": "all","stylers": [{"visibility": "on"}]},
                            {"featureType": "transit.station","elementType": "all","stylers": [{"visibility": "on"}]},
                            {"featureType": "transit.station.airport","elementType": "all","stylers": [{"visibility": "on"}]},
                            {"featureType": "transit.station.bus","elementType": "all","stylers": [{"visibility": "on"}]},
                            {"featureType": "transit.station.bus","elementType": "geometry.fill","stylers": [{"color": "#3065b2"}]},
                            {"featureType": "transit.station.rail","elementType": "all","stylers": [{"visibility": "on"}]},
                            {"featureType": "transit.station.rail","elementType": "geometry.fill","stylers": [{"color": "#3065b2"}]},
                            {"featureType": "water","elementType": "all","stylers": [{"color": "#46bcec"},{"visibility": "on"}]},
                            {"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#3065b2"}]},
                            {"featureType": "water","elementType": "geometry.stroke","stylers": [{"color": "#3065b2"}]}]};

                            // Get the HTML DOM element that will contain your map 
                            var mapElement = document.getElementById('googleMap');

                            // Create the Google Map using our element and options defined above
                            var map = new google.maps.Map(mapElement, mapOptions);

                            // Let's also add a marker while we're at it
                            var marker = new google.maps.Marker({
                                position: new google.maps.LatLng(29.760427, -95.369803),
                                map: map,
                                title: 'Snazzy!'
                            });
            }
        }


        if ($('#googleMap-Two').length) {
            google.maps.event.addDomListener(window, 'load', init);
            
            function init() {
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 2,
                    scrollwheel: false,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(34.048928, -111.093731), // New York

                    // This is where you would paste any style found on Snazzy Maps.
                    styles:[{"featureType": "administrative","elementType": "labels.text.fill","stylers": [{"color": "#444444"}]},
                            {"featureType": "landscape","elementType": "all","stylers": [{"color": "#f2f2f2"}]},
                            {"featureType": "landscape","elementType": "geometry.fill","stylers": [{"color": "#c7c9cb"}]},
                            {"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},
                            {"featureType": "poi.business","elementType": "all","stylers": [{"visibility": "off"}]},
                            {"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"visibility": "on"},{"saturation": "37"},{"gamma": "0.60"},{"color": "#3065b2"}]},
                            {"featureType": "poi.park","elementType": "labels","stylers": [{"visibility": "on"}]},
                            {"featureType": "poi.park","elementType": "labels.text","stylers": [{"visibility": "on"}]},
                            {"featureType": "road","elementType": "all","stylers": [{"saturation": -100},{"lightness": 45}]},
                            {"featureType": "road","elementType": "geometry.fill","stylers": [{"color": "#747578"}]},
                            {"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},
                            {"featureType": "road.highway.controlled_access","elementType": "all","stylers": [{"visibility": "on"},{"gamma": "1.07"},{"lightness": "0"}]},
                            {"featureType": "road.arterial","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
                            {"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"}]},
                            {"featureType": "transit.line","elementType": "all","stylers": [{"visibility": "on"}]},
                            {"featureType": "transit.station","elementType": "all","stylers": [{"visibility": "on"}]},
                            {"featureType": "transit.station.airport","elementType": "all","stylers": [{"visibility": "on"}]},
                            {"featureType": "transit.station.bus","elementType": "all","stylers": [{"visibility": "on"}]},
                            {"featureType": "transit.station.bus","elementType": "geometry.fill","stylers": [{"color": "#3065b2"}]},
                            {"featureType": "transit.station.rail","elementType": "all","stylers": [{"visibility": "on"}]},
                            {"featureType": "transit.station.rail","elementType": "geometry.fill","stylers": [{"color": "#3065b2"}]},
                            {"featureType": "water","elementType": "all","stylers": [{"color": "#46bcec"},{"visibility": "on"}]},
                            {"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#3065b2"}]},
                            {"featureType": "water","elementType": "geometry.stroke","stylers": [{"color": "#3065b2"}]}]};

                            // Get the HTML DOM element that will contain your map 
                            var mapElement = document.getElementById('googleMap-Two');

                            // Create the Google Map using our element and options defined above
                            var map = new google.maps.Map(mapElement, mapOptions);

                            // Let's also add a marker while we're at it
                            var marker = new google.maps.Marker({
                                position: new google.maps.LatLng(46.862496, 103.846656),
                                map: map,
                                title: 'Snazzy!'
                            });

                            var marker = new google.maps.Marker({
                                position: new google.maps.LatLng(61.524010, 105.318756),
                                map: map,
                                title: 'Snazzy!'
                            });

                            var marker = new google.maps.Marker({
                                position: new google.maps.LatLng(29.760427, -95.369803),
                                map: map,
                                title: 'Snazzy!'
                            });

                            var marker = new google.maps.Marker({
                                position: new google.maps.LatLng(48.019573, 66.923684),
                                map: map,
                                title: 'Snazzy!'
                            });

                            var marker = new google.maps.Marker({
                                position: new google.maps.LatLng(56.130366, -106.346771),
                                map: map,
                                title: 'Snazzy!'
                            });

                            var marker = new google.maps.Marker({
                                position: new google.maps.LatLng(17.607789, 8.081666),
                                map: map,
                                title: 'Snazzy!'
                            });
            }
        }




	// -------------------------------------------------------------
    // 		Preloader
    // -------------------------------------------------------------

        function preloader() {
            if ($('#preloader').length) {
                $('#preloader').delay(100).fadeOut('slow' , function () {
                    new WOW().init();
                });
            }
        }



    // -------------------------------------------------------------
    //      WHEN WINDOW LOAD
    // -------------------------------------------------------------

        $(window).on("load", function() {

            preloader();

            new WOW().init();

            funFactCounting();

        })



    // -------------------------------------------------------------
    //      WHEN WINDOW SCROLL
    // -------------------------------------------------------------
        $(window).on("scroll", function() {


        });

});   // Jquery-End