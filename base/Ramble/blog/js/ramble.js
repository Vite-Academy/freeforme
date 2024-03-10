(function ($) {
    "use strict"; // use strict to start

    var rambleApp = {
        /* ---------------------------------------------
         Preloader
         --------------------------------------------- */
        preloader: function () {
            $(window).on('load', function () {
                $("body").imagesLoaded(function () {
                    $('.preloader').delay(500).slideUp('slow', function () {
                        $(this).remove();
                    });
                });
            });
        },
        /* ---------------------------------------------
         Value To Placeholder
         --------------------------------------------- */
        placeholder: function () {
            var $ph = $('input[type="search"], input[type="text"], input[type="email"], textarea');
            $ph.each(function () {
                var value = $(this).val();
                $(this).focus(function () {
                    if ($(this).val() === value) {
                        $(this).val('');
                    }
                });
                $(this).blur(function () {
                    if ($(this).val() === '') {
                        $(this).val(value);
                    }
                });
            });
        },
        /* ---------------------------------------------
         Menu
         --------------------------------------------- */
        menu: function () {
            var combinedmenu = $('#main-nav ul.menu-list').clone();
            combinedmenu.appendTo('#mobile-menu #menu-wrap');

            var items = $('.menucontent.overlaybg, .slideLeft'),
                menucontent = $('.menucontent'),
                submenu = $('.menu-list li').has('.menu-submenu'),
                submegamenu = $('.menu-list li').has('.megamenu'),
                menuopen = function () {
                    $(items).removeClass('menuclose').addClass('menuopen');
                },
                menuclose = function () {
                    $(items).removeClass('menuopen').addClass('menuclose');
                };
            $('#navToggle').on('click', function () {
                if (menucontent.hasClass('menuopen')) {
                    $(menuclose);
                } else {
                    $(menuopen);
                }
            });
            menucontent.on('click', function () {
                if (menucontent.hasClass('menuopen')) {
                    $(menuclose);
                }
            });
            $('#navToggle,.menucontent.overlaybg').on('click', function () {
                $('.menucontainer').toggleClass("mrginleft");
            });
            if (submenu) {
                $('.menu-submenu').prev().append('<span class="fa fa-angle-down"></span>');
            }
            if (submegamenu) {
                $('.megamenu').prev().append('<span class="fa fa-angle-down"></span>');
            }
            submenu.prepend('<span class="menu-click"><i class="menu-arrow fa fa-plus"></i></span>');
            $('.menu-mobile').on('click', function () {
                $('.menu-list').slideToggle('slow');
            });
            $('.menu-click').on('click', function () {
                $(this).siblings('.menu-submenu').slideToggle('slow');
                $(this).siblings('.megamenu').slideToggle('slow');
                $(this).children('.menu-arrow').toggleClass('menu-extend');
            });

            // Mobile Search container
            //-------------------------------
            var searchContainer = $('.mobile-search-wrap, .search-mobile .overlaybg'),
                searchopen = function () {
                    $(searchContainer).removeClass('searchclose').addClass('searchopen');
                },
                searchclose = function () {
                    $(searchContainer).removeClass('searchopen').addClass('searchclose');
                };
            $('#submit-btn-mobile, .search-mobile .overlaybg').on('click', function () {
                if (searchContainer.hasClass('searchopen')) {
                    $(searchclose);
                } else {
                    $(searchopen);
                }
            });
            $('#submit-btn-mobile').on('click', function () {
                $('.mobile-search-wrap').toggleClass("mrginleft");
            });

            // Sticky Menu
            //-------------------------------
            if ($('#sticky-header').length) {
                var stickyMenu = $('#main-nav ul.menu-list').clone();
                stickyMenu.appendTo('#sticky-header .sticky-left .menu-content');
                $('#header-top .search.default').clone().appendTo('#sticky-header .sticky-right .sticky-search');
                $('#header-top .header-social').clone().appendTo('#sticky-header .sticky-right .sticky-social');
                $('#header-top #submit-btn').clone().prependTo('#sticky-header .sticky-right .sticky-search');
                $('#sticky-header .sticky-search > #submit-btn').on('click', function () {
                    $('#sticky-header .sticky-search .search.default').slideToggle();
                });
                $(window).scroll(function () {
                    var w = $(window).width();
                    if (w > 992) {
                        if ($(this).scrollTop() > 450) {
                            $('#sticky-header').css({
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: w,
                                zIndex: 99999
                            });
                            $('#sticky-header').slideDown();
                        } else {
                            $('#sticky-header').slideUp(function () {
                                $('#sticky-header').css({
                                    position: "relative",
                                    top: 0,
                                    left: 0,
                                    width: w,
                                    zIndex: 99999
                                });
                            });
                        }
                    }
                });
            }

            //For mega menu(category Menu)
            //-------------------------------
            function megacat() {
                if ($(window).width() > 992) {
                    $('.cat_horizontal.megacat ul.menu-submenu li').on('mouseenter', function () {
                        var id = $(this).attr('id');
                        id = id.split('-');
                        $(this).parent().find('li').removeClass('active');
                        $(this).addClass('active');
                        $(this).parent().next('.megamenu-content').find('.cat-wrap').hide();
                        $(this).parent().next('.megamenu-content').find('#cat-latest-' + id[2]).show();
                    });
                } else return;
            }
            $(window).resize(megacat).trigger('resize');
        },
        /* ---------------------------------------------
         Mobile Header Area
         --------------------------------------------- */
        headerarea_mobile: function () {
            var social = $('#header-top .header-social').clone();
            var headerSearch = $('#header-top .search.default').clone();
            var header_mobile_widget = $('#header-middle .widget.about_info').clone();
            var header_three_menu = $('.header-three #shop-nav .menu-wrapper').clone();
            var layout_eight_head_widget = $('.header-widget .widget.about_info').clone();
            var layout_eight_left_widget = $('.left-widget-area .widget').clone();
            var layout_eight_right_widget = $('.layout-eight #secondary.widget-area').clone();
            social.appendTo('#site-logo');
            headerSearch.appendTo('#mobile-search .mobile-search-wrap');
            header_mobile_widget.appendTo('#mobile-search .mobile-search-wrap');
            header_three_menu.appendTo('#mobile-menu .top-menu');
            layout_eight_head_widget.prependTo('#mobile-menu .top-menu');
            layout_eight_left_widget.appendTo('#mobile-menu .top-menu');
            layout_eight_right_widget.appendTo('#mobile-search .mobile-search-wrap');
        },
        /* ---------------------------------------------
         smooth scroll
         --------------------------------------------- */
        smoothscroll: function () {
            if (typeof smoothScroll == 'object') {
                smoothScroll.init();
            }
        },
        /* ---------------------------------------------
         For Video Fit Function
         --------------------------------------------- */
        video: function () {
            $(".feature-area").fitVids();
            $(".content-area").fitVids();
        },
        /* ---------------------------------------------
         Background Fit Image
         --------------------------------------------- */
        background_fit_image: function () {
            $.fn.bgImage = function () {
                $(this).each(function () {
                    var $image = $(this).find('img');
                    var imageSource = $image.attr('src');
                    $image.css('visibility', 'hidden');
                    $(this).css('backgroundImage', 'url(' + imageSource + ')');
                    if (!$image.length) {
                        $(this).css('backgroundImage', 'none');
                    }
                });
            };
            //Active image as a background Image
            //-----------------------------------------
            $('#featured-three .featured-post-other > .col-md-6 > .post-thumb').bgImage();
            $('#featured-three .featured-post-single .post-thumb').bgImage();
            $('#featured-four .post-thumb').bgImage();
            $('#featured-five .post-thumb').bgImage();
            $('.layout-three .post .post-thumb').bgImage();
            $('.layout-seven .post .post-thumb').bgImage();
            $('.layout-eight .post .post-thumb').bgImage();
            $('#featured-slider .post-thumb').bgImage();
            $('#featured-justified .post-thumb').bgImage();
            $('#featured-two .post-thumb').bgImage();
            $('.cat-wrap .post-thumb').bgImage();
            $('.related-post-item .post-media').bgImage();
            $('.product-datails-tab .lg-thumb').bgImage();
            $('.widget_editors_pick .post-thumb').bgImage();
            $('.layout-six .post .col-md-5 .post-thumb').bgImage();
            $('.layout-eight #main > .row .col-md-5 .carousel .post-thumb').bgImage();
        },
        /* ---------------------------------------------
         Carousel
         --------------------------------------------- */
        all_carousel: function () {
            // Featured One Slider
            //-------------------------------
            $('#featured-slider').owlCarousel({
                center: false,
                items: 5,
                autoplay: false,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                singleItem: false,
                loop: true,
                margin: 2,
                nav: false,
                dots: false,
                responsive: {
                    280: {
                        items: 1
                    },
                    500: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    700: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    },
                    1200: {
                        items: 4
                    },
                    1580: {
                        items: 5
                    }
                }
            });

            // Trending Post Slider
            //-------------------------------
            var carousel_trending = $('#trending-slider');
            carousel_trending.owlCarousel({
                center: false,
                items: 5,
                autoplay: false,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                singleItem: false,
                loop: true,
                margin: 30,
                nav: false,
                dots: false,
                responsive: {
                    280: {
                        items: 1
                    },
                    500: {
                        items: 2
                    },
                    600: {
                        items: 2
                    },
                    700: {
                        items: 3
                    },
                    768: {
                        items: 3
                    },
                    800: {
                        items: 4
                    },
                    1000: {
                        items: 5
                    },
                    1200: {
                        items: 5
                    },
                    1580: {
                        items: 5
                    }
                }
            });
            $('.control-trending-carousel .next').on('click', function () {
                carousel_trending.trigger('next.owl.carousel');
            });
            $('.control-trending-carousel .previous').on('click', function () {
                // With optional speed parameter
                // Parameters has to be in square bracket '[]'
                carousel_trending.trigger('prev.owl.carousel', [300]);
            });

            // Featured Three
            //-------------------------------
            $('#featured-three').owlCarousel({
                items: 1,
                singleItem: true,
            });

            // Editor Pick Widget Carousel
            //-----------------------------------
            $(window).on('load', function () {
                $('.editors-area').owlCarousel({
                    items: 1,
                    singleItem: true,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true
                });
            });

            // Hot News widget Carousel
            //-------------------------------        
            $('.hot-news-slider').owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });

            // Weather Widget Carousel 
            //-------------------------------
            $('.weather-carousel').owlCarousel({
                items: 1,
                loop: false,
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });

            // Category View Carousel
            //-------------------------------  
            var carousel_category = $('.category-view');
            carousel_category.owlCarousel({
                items: 2,
                singleItem: false,
                margin: 30,
                responsive: {
                    280: {
                        items: 1
                    },
                    500: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    700: {
                        items: 2
                    },
                    768: {
                        items: 2
                    }
                }
            });
            $('.control-video-carousel .next').on('click', function () {
                carousel_category.trigger('next.owl.carousel');
            });
            $('.control-video-carousel .previous').on('click', function () {
                // With optional speed parameter
                // Parameters has to be in square bracket '[]'
                carousel_category.trigger('prev.owl.carousel', [300]);
            });

            // Featured Five carousel
            //------------------------------- 
            $('#featured-five').owlCarousel({
                items: 1,
                singleItem: true,
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });
        },
        /* ---------------------------------------------
         Gallery Style One Carousel
         --------------------------------------------- */
        gallary_one: function () {
            $('.gallery-one').owlCarousel({
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                singleItem: true,
                loop: true,
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                owl2row: 'true',
                owl2rowTarget: 'item',
                responsive: {
                    1170: {
                        items: 1
                    }
                }
            });
            $('.gallery-one .item, .product-details .large-image .tab-pane a').on('click', function (e) {
                e.preventDefault();
                $('.gallery-one,.product-details .large-image .tab-pane').magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    closeOnContentClick: false,
                    closeBtnInside: false,
                    mainClass: 'mfp-with-zoom mfp-img-mobile',
                    image: {
                        verticalFit: true,
                    },
                    gallery: {
                        enabled: true
                    },
                    zoom: {
                        enabled: true,
                        duration: 300,
                        opener: function (element) {
                            return element.find('img');
                        }
                    },
                });
            });
        },
        /* ---------------------------------------------
         Carousel with thumbnail control
         --------------------------------------------- */
        carousel_with_thumb: function () {
            $.fn.galleryThumbnail = function (options) {
                var $sync1 = $(this),
                    sync_control = $sync1.attr('class').split(" ")[0] || $sync1.attr('id').split(" "),
                    $sync2 = $('.' + sync_control + '-contol'),
                    duration = 300;
                var settings = $.extend({
                    fullitems: 1,
                    fullmargin: 10,
                    fullnav: true,
                    fullnavText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    fullowl2row: 'true',
                    fullowl2rowTarget: 'item',
                    animateOut: '',
                    animateIn: '',
                    listitems: 5,
                    listmargin: 10,
                    listnav: false,
                    listnavText: ["", ""],
                    list280: 2,
                    list500: 2,
                    list600: 3,
                    list800: 4,
                    listcenter: false
                }, options);
                $sync1
                    .owlCarousel({
                        items: settings.fullitems,
                        margin: settings.fullmargin,
                        nav: settings.fullnav,
                        navText: settings.fullnavText,
                        owl2row: settings.fullowl2row,
                        owl2rowTarget: settings.fullowl2rowTarget,
                        animateOut: settings.animateOut,
                        animateIn: settings.animateIn
                    })
                    .on('changed.owl.carousel', function (e) {
                        var syncedPosition = syncPosition(e.item.index);
                        if (syncedPosition != "stayStill") {
                            $sync2.trigger('to.owl.carousel', [syncedPosition, duration, true]);
                        }
                    });
                $sync2
                    .owlCarousel({
                        items: settings.listitems,
                        margin: settings.listmargin,
                        nav: settings.listnav,
                        navText: settings.listnavText,
                        center: settings.listcenter,
                        responsive: {
                            280: {
                                items: settings.list280
                            },
                            500: {
                                items: settings.list500
                            },
                            600: {
                                items: settings.list600
                            },
                            800: {
                                items: settings.list800
                            },
                            1000: {
                                items: settings.listitems
                            },
                            1200: {
                                items: settings.listitems
                            },
                            1400: {
                                items: settings.listitems
                            },
                        }
                    })
                    .on('initialized.owl.carousel', function () {
                        addClassCurrent(0);
                    })
                    .on('click', '.owl-item', function () {
                        $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
                    });

                function addClassCurrent(index) {
                    $sync2
                        .find(".owl-item.active")
                        .removeClass("current")
                        .eq(index)
                        .addClass("current");
                }
                addClassCurrent(0);

                function syncPosition(index) {
                    addClassCurrent(index);
                    var itemsNo = $sync2.find(".owl-item").length;
                    var visibleItemsNo = $sync2.find(".owl-item.active").length;

                    if (itemsNo === visibleItemsNo) {
                        return "stayStill";
                    }
                    var visibleCurrentIndex = $sync2.find(".owl-item.active").index($sync2.find(".owl-item.current"));
                    if (visibleCurrentIndex === 0 && index !== 0) {
                        return index - 1;
                    }
                    if (visibleCurrentIndex == (visibleItemsNo - 1) && index != (itemsNo - 1)) {
                        return index - visibleItemsNo + 2;
                    }
                    return "stayStill";
                }
            };

            // Active Carousel with thumbnail
            //------------------------------------
            if ($('.full-view').length) {
                $('.full-view').galleryThumbnail();
            }

            // Featured four plug-in activation
            //--------------------------------------
            if ($('#featured-four').length) {
                $('.featured-four').galleryThumbnail({
                    animateIn: 'fadeIn',
                    listitems: 4,
                    listmargin: 2,
                    listnav: true,
                    listnavText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    list280: 2,
                    list500: 3,
                    list600: 4,
                    list800: 4
                });
            }
        },
        /* ---------------------------------------------
         Recent added Item
         --------------------------------------------- */
        recent_add_item: function () {
            if ($('#footer-top #new-products').length) {
                $('#footer-top #new-products').parent().parent().css('padding', '0');
                $('#footer-top #new-products').parent().parent().parent().parent().css('padding', '0');
            }
            // New products Carousel 
            //-------------------------------
            $('#footer-top #new-products').owlCarousel({
                items: 4,
                loop: false,
                margin: 0,
                nav: false,
                dots: false,
                responsive: {
                    280: {
                        items: 1
                    },
                    500: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    700: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    800: {
                        items: 2
                    },
                    1000: {
                        items: 4
                    },
                    1200: {
                        items: 4
                    },
                    1580: {
                        items: 4
                    }
                }
            });
            $('.control-latest-carousel .next').on('click', function () {
                $('#footer-top #new-products').trigger('next.owl.carousel');
            });
            $('.control-latest-carousel .previous').on('click', function () {
                // With optional speed parameter
                // Parameters has to be in square bracket '[]'
                $('#footer-top #new-products').trigger('prev.owl.carousel', [300]);
            });
        },
        /* ---------------------------------------------
         Justified Gallery
         --------------------------------------------- */
        gallery_justified: function () {
            if ($('.ramble-tiled-gallery').length) {
                var tiledItemSpacing = 4;
                $('.ramble-tiled-gallery').wrap('<div class="ramble-tiled-gallery-row"></div>');
                $('.ramble-tiled-gallery').parent().css('margin', -tiledItemSpacing);
                $('.ramble-tiled-gallery').justifiedGallery({
                    rowHeight: 210,
                    lastRow: 'justify',
                    maxRowHeight: '200%',
                    margins: tiledItemSpacing,
                    waitThumbnailsLoad: false
                });
            }
            $('.ramble-tiled-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'pp-gallery mfp-with-zoom mfp-img-mobile',
                image: {
                    verticalFit: true,
                },
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    opener: function (element) {
                        return element.find('img');
                    }
                },
            });
        },
        /* ---------------------------------------------
         Grid Masonry
         --------------------------------------------- */
        grid_masonry: function () {
            if ($('#masonry').length > 0) {
                var container = $('#masonry');
                container.imagesLoaded(function () {
                    container.masonry({
                        itemSelector: '.grid'
                    });
                });
            }
            // Layout Five 
            //-------------------------------       
            if ($('.layout-five').length > 0) {
                var container_two = $('.layout-five .grid-post > .row');
                container_two.imagesLoaded(function () {
                    container_two.masonry({
                        itemSelector: '.col-md-6.col-sm-6, .col-md-4.col-sm-6'
                    });
                });
            }
            // Grid Four
            //-------------------------------
            $(window).on('resize', function () {
                var windowsize = $(window).width();
                if ($('#grid-four').length > 0 && (windowsize < 992)) {
                    var container_three = $('#grid-four > .row');
                    container_three.imagesLoaded(function () {
                        container_three.masonry({
                            itemSelector: '.col-md-3.col-sm-6'
                        });
                    });
                }
            });
            // For Shop product
            //-------------------------------
            if ($('.shop-layout').length > 0) {
                if ($('.products-container .products > .row')) {
                    var container_four = $('.products-container .products > .row');
                    container_four.imagesLoaded(function () {
                        container_four.masonry({
                            itemSelector: '.col-md-4.col-sm-6'
                        });
                    });
                }
            }
            // For portfolio 
            //-------------------------------          
            if ($('.portfolio').length > 0) {
                if ($('.portfolio.grid-post.row')) {
                    var container_five = $('.portfolio.grid-post.row');
                    container_five.imagesLoaded(function () {
                        container_five.masonry({
                            itemSelector: '.col-md-4.col-sm-6'
                        });
                    });
                }
            }
            // For portfolio filter
            //-------------------------------
            $(window).on('load', function () {
                var $container_portfolio = $('.portfolio');
                $container_portfolio.isotope({
                    filter: '*',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                $('.portfolio-filter li a').on('click', function () {
                    $('.portfolio-filter .current').removeClass('current');
                    $(this).addClass('current');

                    var selector = $(this).attr('data-filter');
                    $container_portfolio.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                    return false;
                });
            });
        },
        /* ---------------------------------------------
         Checkout Page Effect
         --------------------------------------------- */
        checkout_page: function () {
            $('.showlogin').on('click', function (e) {
                e.preventDefault();
                $('.login').slideToggle("slow");
            });
            $('.showcoupon').on('click', function (e) {
                e.preventDefault();
                $('.checkout_coupon').slideToggle("slow");
            });
            $('#ship-to-different-address-checkbox').change(function () {
                if (this.checked) {
                    $('.shipping-fields').slideToggle('slow');
                } else {
                    $('.shipping-fields').slideToggle('slow');
                }
            });
            $('#createaccount').change(function () {
                if (this.checked) {
                    $('.create-account').slideToggle('slow');
                } else {
                    $('.create-account').slideToggle('slow');
                }
            });
            $('#payment_method_cheque').change(function () {
                if (this.checked) {
                    $('.payment_box.payment_method_cheque').slideToggle('slow');
                } else {
                    $('.payment_box.payment_method_cheque').slideToggle('slow');
                }
            });
            $('#payment_method_paypal').change(function () {
                if (this.checked) {
                    $('.payment_box.payment_method_paypal').slideToggle('slow');
                } else {
                    $('.payment_box.payment_method_paypal').slideToggle('slow');
                }
            });
        },
        /* ---------------------------------------------
         Hot post slider control 
         --------------------------------------------- */
        hot_post_carousel: function () {
            $('#category-carousel-two').on('slid.bs.carousel', function () {
                var idx = $('#category-carousel-two .item.active').index('#category-carousel-two .item');
                $('#category-hot-post ol.carousel-indicators li').removeClass('active');
                $('#category-hot-post ol.carousel-indicators li[data-slide-to="' + idx + '"]').addClass('active');
            });

            $('#category-hot-post ol.carousel-indicators  li').on("click", function () {
                $('#category-hot-post ol.carousel-indicators li.active').removeClass("active");
                $(this).addClass("active");
            });
        },
        /* ---------------------------------------------
         Chat More Button fix
         --------------------------------------------- */
        chat_more_button: function () {
            if ($('.chat-text p .more-link').length) {
                $('.chat-text p .more-link').detach().appendTo('#readmore-add');
            }
        },
        /* ---------------------------------------------
         Widget Mobile fix
         --------------------------------------------- */
        widget_mobile: function () {
            // For Sidebar widget
            //-------------------------------
            $('#secondary.widget-area, #secondary-two.widget-area').clone().appendTo('#mobile-widget-area');
            $("#mobile-widget-area #secondary.widget-area > .widget, #mobile-widget-area #secondary-two.widget-area > .widget").wrap("<div class='col-sm-6'></div>");
            var widget_container = $('#mobile-widget-area #secondary.widget-area .col-sm-6, #mobile-widget-area #secondary-two.widget-area .col-sm-6');
            var i = 0;
            for (var i = 0; i < widget_container.length; i += 2) {
                widget_container.slice(i, i + 2).wrapAll("<div class='row'></div>");
            }

            //For footer widget
            //-------------------------------
            var $window = $(window),
                $footer_widget = $('#footer-middle > .container > .row'),
                $footer_widget_all = $('#footer-middle > .container > .row [class*="col-"]');
            for (var j = 0; j < $footer_widget_all.length; j += 2) {
                $footer_widget_all.slice(j, j + 2).wrapAll("<div class='widget-wrap'></div>");
            }
            var $footer_row_main = $footer_widget.addClass('footer_widget_container'),
                $footer_widget_row = $('#footer-middle > .container > .row .widget-wrap');

            function resize() {
                if ($window.width() < 991) {
                    return $footer_row_main.removeClass('row') && $footer_widget_row.addClass('row');
                }
                $footer_widget.addClass('row');
                $footer_widget_row.removeClass('row');
            }
            $window.resize(resize).trigger('resize');
        },
        /* ---------------------------------------------
         Author Skill
         --------------------------------------------- */
        author_skill: function () {
            if ($('#author-skill').length) {
                $('#author-skill .skill').circliful();
            }
        },
        /* ---------------------------------------------
         Instagram Image
         --------------------------------------------- */
        instafeed: function () {
            if ($('#instafeed').length > 0) {
                var userFeed = new Instafeed({
                    limit: 8,
                    get: 'user', // Get your Instagram Photo. Use - 'user' or 'tagged'
                    //tagName: 'awesome', // Use your tag, unmarked this if get photo with tag
                    userId: 1979778883, //Your user ID
                    accessToken: '1979778883.ab103e5.ee38824b7c094d4384d46818148301a0', //Your Access token on Instagram
                    resolution: 'standard_resolution',
                    template: '<div class="list"><a target="_blank" href="{{link}}"><img src="{{image}}" /></a></div>'
                });
                userFeed.run();
            }
        },
        /* ---------------------------------------------
         Flickr Feed
         --------------------------------------------- */
        flickr_widget: function () {
            $('.widget_flicker .widget-content').jflickrfeed({
                limit: 9,
                qstrings: {
                    id: "116349186@N05" // Your FLickr ID
                },
                itemTemplate: '<li><a href="{{link}}"><img src="{{image_t}}" alt="{{title}}" /></a></li>'
            });
        },
        /* ---------------------------------------------
         Twitter Widget
         --------------------------------------------- */
        twitter_feed: function () {
            var tp_url = "https://twitter.com/softhopperbd"; // Twitter Profile URL
            var tp_count = 2;                                // Number Of post
            var twitter_widget_id = "657832195231342592";   // Twitter Widget ID

            var twitter_section = '<a class="twitter-timeline" href="' + tp_url + '" data-widget-id="' + twitter_widget_id + '" data-link-color="#0062CC" data-chrome="nofooter noscrollbar transparent" data-tweet-limit="' + tp_count + '">Tweets</a>';
            twitter_section += '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>';

            $('.widget_twitter .widget-content').append(twitter_section);
        },
        /* ---------------------------------------------
         Mail Chip
         --------------------------------------------- */
        mailchip: function () {
            if ($("#newsletter-form").length) {
                $("#newsletter-form").formchimp();
            }
        },
        /* ---------------------------------------------
        Google Maps
         --------------------------------------------- */
        maps: function () {
            if ($('#gmaps').length) {
                var map;

                map = new GMaps({
                    el: '#gmaps',
                    lat: 43.04446, //Google Maps Latitude
                    lng: -76.130791, //Google Maps longitude
                    scrollwheel: false,
                    zoom: 10,
                    zoomControl: true,
                    panControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    clickable: false
                });

                var image = 'images/map-icon.png'; //Configure Maps Marker Icon
                map.addMarker({
                    lat: 43.04446, //Google Maps Latitude
                    lng: -76.130791, //Google Maps longitude
                    icon: image,
                    animation: google.maps.Animation.DROP,
                    verticalAlign: 'bottom',
                    horizontalAlign: 'center'
                });

                var styles = [{
                    "featureType": "road",
                    "stylers": [{
                        "color": "#b4b4b4"
                    }]
                }, {
                    "featureType": "water",
                    "stylers": [{
                        "color": "#d8d8d8"
                    }]
                }, {
                    "featureType": "landscape",
                    "stylers": [{
                        "color": "#f1f1f1"
                    }]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#000000"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "color": "#d9d9d9"
                    }]
                }, {
                    "elementType": "labels.text",
                    "stylers": [{
                        "saturation": 1
                    }, {
                        "weight": 0.1
                    }, {
                        "color": "#000000"
                    }]
                }];
            }
        },
        /* ---------------------------------------------
         If WP Admin bar Come
         --------------------------------------------- */
        wp_adminbar: function () {
            // This function gets called with the user has scrolled the window.
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 0) {
                    // Add the scrolled class to those elements that you want changed
                    $(".overlay-slidedown.open").addClass("scroll");
                } else {
                    $(".overlay-slidedown.open").removeClass("scroll");
                }
            });
        },
        /* ---------------------------------------------
         Scroll top
         --------------------------------------------- */
        scroll_top: function () {
            $("body").append("<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='glyphicon glyphicon-menu-up'></span></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop
                        .addClass('btn-show')
                        .removeClass('btn-hide');
                } else {
                    $scrolltop
                        .addClass('btn-hide')
                        .removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "normal");
                return false;
            });
        },
        /* ---------------------------------------------
         Contact Form
         --------------------------------------------- */
        contact_form: function () {
            if ($('#contact-form-wrap').length) {
                var form = $('#contact_form');
                form.submit(function (event) {
                    event.preventDefault();
                    var data = form.serialize();
                    var form_status = $('<div class="form_status"></div>');
                    $.ajax({
                        type: "POST",
                        dataType: "json",
                        data: data,
                        url: $(this).attr('action'),
                        beforeSend: function () {
                            form.before(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
                        }
                    }).done(function (data) {
                        form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
                    });
                });
            }
        },
        /* ---------------------------------------------
         Initialize All Function
         --------------------------------------------- */
        initializ: function () {
            rambleApp.preloader();
            rambleApp.placeholder();
            rambleApp.menu();
            rambleApp.headerarea_mobile();
            rambleApp.smoothscroll();
            rambleApp.video();
            rambleApp.background_fit_image();
            rambleApp.all_carousel();
            rambleApp.gallary_one();
            rambleApp.recent_add_item();
            rambleApp.carousel_with_thumb();
            rambleApp.gallery_justified();
            rambleApp.grid_masonry();
            rambleApp.checkout_page();
            rambleApp.hot_post_carousel();
            rambleApp.chat_more_button();
            rambleApp.widget_mobile();
            rambleApp.author_skill();
            rambleApp.instafeed();
            rambleApp.flickr_widget();
            rambleApp.twitter_feed();
            rambleApp.mailchip();
            rambleApp.maps();
            rambleApp.wp_adminbar();
            rambleApp.scroll_top();
        }
    };
    /* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
    $(function () {
        rambleApp.initializ();
    });
    /* ---------------------------------------------
     Without Document ready function
     --------------------------------------------- */
    rambleApp.contact_form();
})(jQuery);