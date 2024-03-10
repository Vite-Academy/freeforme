var ATBS = ATBS || {};

(function($){

	// USE STRICT
	"use strict";

	var $window = $(window);
	var $document = $(document);
	var $goToTopEl = $('.js-go-top-el');
	var $overlayBg = $('.js-overlay-bg');

	ATBS.header = {

		init: function(){
			ATBS.header.ajaxSearch();
			ATBS.header.loginForm();
			ATBS.header.offCanvasMenu();
			ATBS.header.priorityNavInit();
			ATBS.header.searchToggle();
			ATBS.header.smartAffix.init({
	            fixedHeader: '.js-sticky-header',
	            headerPlaceHolder: '.js-sticky-header-holder',
	        });
		},

		/* ============================================================================
	     * Fix sticky navbar padding when open modal
	     * ==========================================================================*/
		stickyNavbarPadding: function() {
            var oldSSB = $.fn.modal.Constructor.prototype.setScrollbar;
            var $stickyHeader = $('.sticky-header .navigation-bar');

            $.fn.modal.Constructor.prototype.setScrollbar = function () 
            {
                oldSSB.apply(this);
                if(this.bodyIsOverflowing && this.scrollbarWidth) 
                {
                    $stickyHeader.css('padding-right', this.scrollbarWidth);
                }       
            }

            var oldRSB = $.fn.modal.Constructor.prototype.resetScrollbar;
            $.fn.modal.Constructor.prototype.resetScrollbar = function () 
            {
                oldRSB.apply(this);
                $stickyHeader.css('padding-right', '');
            }
		},

		/* ============================================================================
	     * Header dropdown search
	     * ==========================================================================*/
		searchToggle: function() {
			var $headerSearchDropdown = $('#header-search-dropdown');
			var $searchDropdownToggle = $('.js-search-dropdown-toggle');
			var $mobileHeader = $('#atbs-mobile-header');
			var $stickyHeaderNav = $('#atbs-sticky-header').find('.navigation-bar__inner');
			var $staticHeaderNav = $('.site-header').find('.navigation-bar__inner');
			var $headerSearchDropdownInput = $headerSearchDropdown.find('.search-form__input');

			$headerSearchDropdown.on('click', function(e) {
				e.stopPropagation();
			});

			$searchDropdownToggle.on('click', function(e) {
				e.stopPropagation();
				var $toggleBtn = $(this);
				var position = '';
				

				if ($toggleBtn.hasClass('mobile-header-btn')) {
					position = 'mobile';
				} else if ($toggleBtn.parents('.sticky-header').length) {
					position = 'sticky';
				} else {
					position = 'navbar';
				}

				if ($headerSearchDropdown.hasClass('is-in-' + position) || !$headerSearchDropdown.hasClass('is-active')) {
					$headerSearchDropdown.toggleClass('is-active');
				}

				switch(position) {
					case 'mobile':
						if (!$headerSearchDropdown.hasClass('is-in-mobile')) {
							$headerSearchDropdown.addClass('is-in-mobile');
							$headerSearchDropdown.removeClass('is-in-sticky');
							$headerSearchDropdown.removeClass('is-in-navbar');
							$headerSearchDropdown.appendTo($mobileHeader);
						}
						break;

					case 'sticky':
						if (!$headerSearchDropdown.hasClass('is-in-sticky')) {
							$headerSearchDropdown.addClass('is-in-sticky');
							$headerSearchDropdown.removeClass('is-in-mobile');
							$headerSearchDropdown.removeClass('is-in-navbar');
							$headerSearchDropdown.insertAfter($stickyHeaderNav);
						}
						break;

					default:
						if (!$headerSearchDropdown.hasClass('is-in-navbar')) {
							$headerSearchDropdown.addClass('is-in-navbar');
							$headerSearchDropdown.removeClass('is-in-sticky');
							$headerSearchDropdown.removeClass('is-in-mobile');
							$headerSearchDropdown.insertAfter($staticHeaderNav);
						}
				}
				
				if ($headerSearchDropdown.hasClass('is-active')) {
					setTimeout(function () {
					    $headerSearchDropdownInput.focus();
					}, 200);
				}
			});

			$document.on('click', function() {
                $headerSearchDropdown.removeClass('is-active');
            });

            $window.on('stickyHeaderHidden', function(){
            	if ($headerSearchDropdown.hasClass('is-in-sticky')) {
            		$headerSearchDropdown.removeClass('is-active');
            	}
            });
		},

		/* ============================================================================
	     * AJAX search
	     * ==========================================================================*/
		ajaxSearch: function() {
			var $results = null;
			var $ajaxSearch = $('.js-ajax-search');
			var ajaxStatus = '';
			var noResultText = '<span class="noresult-text">There is no result.</span>';
			var errorText = '<span class="error-text">There was some error.</span>';

			$ajaxSearch.each(function() {
				var $this = $(this);
				var $searchForm = $this.find('.search-form__input');
				var $resultsContainer = $this.find('.search-results');
				var $resultsInner = $this.find('.search-results__inner');
				var searchTerm = '';
				var lastSearchTerm = '';

				$searchForm.on('input', $.debounce(800, function() {
					searchTerm = $searchForm.val();

					if (searchTerm.length > 0) {
						$resultsContainer.addClass('is-active');

						if ((searchTerm != lastSearchTerm) || (ajaxStatus === 'failed' )) {
							$resultsContainer.removeClass('is-error').addClass('is-loading');
							lastSearchTerm = searchTerm;
							ajaxLoad(searchTerm, $resultsContainer, $resultsInner);
						}
					} else {
						$resultsContainer.removeClass('is-active');
					}
				}));
			});

			function ajaxLoad(searchTerm, $resultsContainer, $resultsInner) {
				var	ajaxCall = $.ajax({
	                    url: "inc/ajax-search.html",
	                    type: 'post',
	                    dataType: 'html',
	                    data: {
	                        searchTerm: searchTerm,
	                    },
                	});

                ajaxCall.done(function(respond) {
                    $results = $(respond);
                    ajaxStatus = 'success';
                    if (!$results.length) {
                    	$results = noResultText;
                    }
					$resultsInner.html($results).css('opacity', 0).animate({opacity: 1}, 500);	
                });

                ajaxCall.fail(function() {
                    ajaxStatus = 'failed';
                    $resultsContainer.addClass('is-error');
                    $results = errorText;
                    $resultsInner.html($results).css('opacity', 0).animate({opacity: 1}, 500);	
                });

                ajaxCall.always(function() {
                    $resultsContainer.removeClass('is-loading');
                });
			}
		},

		/* ============================================================================
	     * Login Form tabs
	     * ==========================================================================*/
		loginForm: function() {
			var $loginFormTabsLinks = $('.js-login-form-tabs').find('a');

			$loginFormTabsLinks.on('click', function (e) {
				e.preventDefault()
				$(this).tab('show');
			});
		},

		/* ============================================================================
	     * Offcanvas Menu
	     * ==========================================================================*/
		offCanvasMenu: function() {
			var $backdrop = $('<div class="atbs-offcanvas-backdrop"></div>');
			var $offCanvas = $('.js-atbs-offcanvas');
			var $offCanvasToggle = $('.js-atbs-offcanvas-toggle');
			var $offCanvasClose = $('.js-atbs-offcanvas-close');
			var $offCanvasMenuHasChildren = $('.navigation--offcanvas').find('li.menu-item-has-children > a');
			var menuExpander = ('<div class="submenu-toggle"><i class="mdicon mdicon-expand_more"></i></div>');

			$backdrop.on('click', function(){
				$offCanvas.removeClass('is-active');
				$(this).fadeOut(200, function(){
					$(this).detach();
				});
			});

			$offCanvasToggle.on('click', function(e){
				e.preventDefault();
				var targetID = $(this).attr('href');
				var $target = $(targetID);
				$target.toggleClass('is-active');
				$backdrop.hide().appendTo(document.body).fadeIn(200);
			});

			$offCanvasClose.on('click', function(e){
				e.preventDefault();
				var targetID = $(this).attr('href');
				var $target = $(targetID);
				$target.removeClass('is-active');
				$backdrop.fadeOut(200, function(){
					$(this).detach();
				});
			});

            $offCanvasMenuHasChildren.append(function() {
            	return $(menuExpander).on('click', function(e){
            		e.preventDefault();
            		var $subMenu = $(this).parent().siblings('.sub-menu');

					$subMenu.slideToggle(200);
				});
            }); 
		},

		/* ============================================================================
	     * Prority+ menu init
	     * ==========================================================================*/
		priorityNavInit: function() {
			var $menus = $('.js-priority-nav');
			$menus.each(function() {
				ATBS.priorityNav($(this));
			})
		},

		/* ============================================================================
	     * Smart sticky header
	     * ==========================================================================*/
	    smartAffix: {
	        //settings
	        $headerPlaceHolder: null, //the affix menu (this element will get the mdAffixed)
	        $fixedHeader: null, //the menu wrapper / placeholder
	        isDestroyed: false,
	        isDisabled: false,
	        isFixed: false, //the current state of the menu, true if the menu is affix
	        isShown: false,
	        windowScrollTop: 0, 
	        lastWindowScrollTop: 0, //last scrollTop position, used to calculate the scroll direction
	        offCheckpoint: 0, // distance from top where fixed header will be hidden
	        onCheckpoint: 0, // distance from top where fixed header can show up
	        breakpoint: 992, // media breakpoint in px that it will be disabled

	        init : function init (options) {

	            //read the settings
	            this.$fixedHeader = $(options.fixedHeader);
	            this.$headerPlaceHolder = $(options.headerPlaceHolder);

	            // Check if selectors exist.
	            if ( !this.$fixedHeader.length || !this.$headerPlaceHolder.length ) {
	                this.isDestroyed = true;
	            } else if ( !this.$fixedHeader.length || !this.$headerPlaceHolder.length || ( ATBS.documentOnResize.windowWidth <= ATBS.header.smartAffix.breakpoint ) ) { // Check if device width is smaller than breakpoint.
	                this.isDisabled = true;
	            }

	        },// end init

	        compute: function compute(){
	        	if (ATBS.header.smartAffix.isDestroyed || ATBS.header.smartAffix.isDisabled) {
	        		return;
	        	}

	            // Set where from top fixed header starts showing up
	            if( !this.$headerPlaceHolder.length ) {
	                this.offCheckpoint = 400;
	            } else {
	            	this.offCheckpoint = $(this.$headerPlaceHolder).offset().top + 400;
	            }
	            
	            this.onCheckpoint = this.offCheckpoint + 500;

	            // Set menu top offset
	            this.windowScrollTop = ATBS.documentOnScroll.windowScrollTop;
	            if (this.offCheckpoint < this.windowScrollTop) {
	                this.isFixed = true;
	            }
	        },

	        updateState: function updateState(){
	            //update affixed state
	            if (this.isFixed) {
	                this.$fixedHeader.addClass('is-fixed');
	            } else {
	                this.$fixedHeader.removeClass('is-fixed');
	                $window.trigger('stickyHeaderHidden');
	            }

	            if (this.isShown) {
	                this.$fixedHeader.addClass('is-shown');
	            } else {
	                this.$fixedHeader.removeClass('is-shown');
	            }
	        },

	        /**
	         * called by events on scroll
	         */
	        eventScroll: function eventScroll(scrollTop) {

	            var scrollDirection = '';
	            var scrollDelta = 0;

	            // check the direction
	            if (scrollTop != this.lastWindowScrollTop) { //compute direction only if we have different last scroll top

	                // compute the direction of the scroll
	                if (scrollTop > this.lastWindowScrollTop) {
	                    scrollDirection = 'down';
	                } else {
	                    scrollDirection = 'up';
	                }

	                //calculate the scroll delta
	                scrollDelta = Math.abs(scrollTop - this.lastWindowScrollTop);
	                this.lastWindowScrollTop = scrollTop;

	                // update affix state
	                if (this.offCheckpoint < scrollTop) {
	                    this.isFixed = true;
	                } else {
	                    this.isFixed = false;
	                }
	                
	                // check affix state
	                if (this.isFixed) {
	                    // We're in affixed state, let's do some check
	                    if ((scrollDirection === 'down') && (scrollDelta > 14)) {
	                        if (this.isShown) {
	                            this.isShown = false; // hide menu
	                        }
	                    } else {
	                        if ((!this.isShown) && (scrollDelta > 14) && (this.onCheckpoint < scrollTop)) {
	                            this.isShown = true; // show menu
	                        }
	                    }
	                } else {
	                    this.isShown = false;
	                }

	                this.updateState(); // update state
	            }
	        }, // end eventScroll function

			/**
			* called by events on resize
			*/
	        eventResize: function eventResize(windowWidth) {
	        	// Check if device width is smaller than breakpoint.
	            if ( ATBS.documentOnResize.windowWidth < ATBS.header.smartAffix.breakpoint ) {
	                this.isDisabled = true;
	            } else {
	            	this.isDisabled = false;
	            	ATBS.header.smartAffix.compute();
	            }
	        }
	    },
	};

	ATBS.documentOnScroll = {
		ticking: false,
		windowScrollTop: 0, //used to store the scrollTop

        init: function() {
			window.addEventListener('scroll', function(e) {
				if (!ATBS.documentOnScroll.ticking) {
					window.requestAnimationFrame(function() {
						ATBS.documentOnScroll.windowScrollTop = $window.scrollTop();

						// Functions to call here
						if (!ATBS.header.smartAffix.isDisabled && !ATBS.header.smartAffix.isDestroyed) {
							ATBS.header.smartAffix.eventScroll(ATBS.documentOnScroll.windowScrollTop);
						}

						ATBS.documentOnScroll.goToTopScroll(ATBS.documentOnScroll.windowScrollTop);

						ATBS.documentOnScroll.ticking = false;
					});
				}
				ATBS.documentOnScroll.ticking = true;
			});
        },

        /* ============================================================================
	     * Go to top scroll event
	     * ==========================================================================*/
        goToTopScroll: function(windowScrollTop){
			if ($goToTopEl.length) {
				if(windowScrollTop > 800) {
					if (!$goToTopEl.hasClass('is-active')) $goToTopEl.addClass('is-active');
				} else {
					$goToTopEl.removeClass('is-active');
				}
			}
		},
    };

	ATBS.documentOnResize = {
		ticking: false,
		windowWidth: $window.width(),

		init: function() {
			window.addEventListener('resize', function(e) {
				if (!ATBS.documentOnResize.ticking) {
					window.requestAnimationFrame(function() {
						ATBS.documentOnResize.windowWidth = $window.width();

						// Functions to call here
						if (!ATBS.header.smartAffix.isDestroyed) {
							ATBS.header.smartAffix.eventResize(ATBS.documentOnResize.windowWidth);
						}

						ATBS.clippedBackground();

						ATBS.documentOnResize.ticking = false;
					});
				}
				ATBS.documentOnResize.ticking = true;
			});
        },
	};

	ATBS.documentOnReady = {

		init: function(){
			ATBS.header.init();
			ATBS.header.smartAffix.compute();
			ATBS.documentOnScroll.init();
			ATBS.documentOnReady.ajaxLoadPost();
			ATBS.documentOnReady.carousel_1i();
            ATBS.documentOnReady.carousel_1i_slideOutUp();
			ATBS.documentOnReady.carousel_1i30m();
            ATBS.documentOnReady.carousel_textnav_1i0m();
            ATBS.documentOnReady.carousel_numberdots_1i0m();
			ATBS.documentOnReady.carousel_2i4m();
			ATBS.documentOnReady.carousel_3i4m();
			ATBS.documentOnReady.carousel_3i4m_small();
			ATBS.documentOnReady.carousel_3i20m();
			ATBS.documentOnReady.carousel_headingAside_3i();
			ATBS.documentOnReady.carousel_4i();
			ATBS.documentOnReady.carousel_4i20m();
			ATBS.documentOnReady.carousel_4i20m_center();
			ATBS.documentOnReady.carousel_4i_auto_w();
			ATBS.documentOnReady.carousel_overlap();
			ATBS.documentOnReady.customCarouselNav();
			ATBS.documentOnReady.countdown();
			ATBS.documentOnReady.goToTop();
			ATBS.documentOnReady.newsTicker();
			ATBS.documentOnReady.lightBox();
			ATBS.documentOnReady.perfectScrollbarInit();
			ATBS.documentOnReady.tooltipInit();
			ATBS.documentOnReady.imgPopup();
		},

		/* ============================================================================
	     * AJAX load more posts
	     * ==========================================================================*/
		ajaxLoadPost: function() {
			var $loadedPosts = null;
			var $ajaxLoadPost = $('.js-ajax-load-post');

			function ajaxLoad(parameters, $postContainer) {
				var	ajaxStatus = '',
					ajaxCall = $.ajax({
	                    url: "inc/ajax-load-post.html",
	                    type: 'post',
	                    dataType: 'html',
	                    data: {
	                        // action: 'ajax_load_post',
	                        offset: parameters.offset,
	                        postsToLoad: parameters.postsToLoad,
	                        // other parameters
	                    },
                	});

                ajaxCall.done(function(respond) {
                    $loadedPosts = $(respond);
                    ajaxStatus = 'success';
                    if ($loadedPosts) {
						$loadedPosts.appendTo($postContainer).css('opacity', 0).animate({opacity: 1}, 500);	
					}
					$('html, body').animate({ scrollTop: $window.scrollTop() + 1 }, 0).animate({ scrollTop: $window.scrollTop() - 1 }, 0); // for recalculating of sticky sidebar
					// do stuff like changing parameters
                });

                ajaxCall.fail(function() {
                    ajaxStatus = 'failed';
                });

                ajaxCall.always(function() {
                    // do other stuff
                });
			}

			$ajaxLoadPost.each(function() {
				var $this = $(this);
				var $postContainer = $this.find('.posts-list');
				var $triggerBtn = $this.find('.js-ajax-load-post-trigger');
				var parameters = {
					offset: $this.data("offset"),
					postsToLoad: $this.data("posts-to-load"),
					layout: $this.data("layout"),
				};
				
				$triggerBtn.on('click', function() {
					ajaxLoad(parameters, $postContainer);
				});
			});
		},

		/* ============================================================================
	     * Carousel funtions
	     * ==========================================================================*/
         
         carousel_1i_slideOutUp: function() {
			var $carousels = $('.js-atbs-carousel-1i-slideoutup');
			$carousels.each( function() {
				$(this).owlCarousel({
					items: 1,
					margin: 0,
					nav: false,
					loop: true,
					dots: true,
					lazyLoad: true,
					autoHeight: true,
                  
                    dotsData: true,                    
                    autoplayHoverPause: true,
                     animateOut: 'fadeOut',  
					smartSpeed: 500,
					responsive: {
						0 : {
					        items: 1,
					    },

					    768 : {
					        items: 1,
					    },
					},
				});
			})
           
           
         
        
        
            
            
		},
        
		carousel_1i: function() {
			var $carousels = $('.js-atbs-carousel-1i');
			$carousels.each( function() {
				$(this).owlCarousel({
					items: 1,
					margin: 0,
					nav: false,
					loop: true,
					dots: true,
					 lazyLoad: true,
					autoHeight: true,
                    onInitialized  : counter, 
                    onTranslated : counter,
                                        
					navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" fill="#fff" viewBox="0 0 32 17"><path id="slider-prev" data-name="Slider Prev" class="slider_arrow_path" d="M8.158,0.007L8.835,0.685,1.5,8.019H32V8.979H1.5l7.338,7.334-0.677.679L0,8.839V8.16Z"></path></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="17"  fill="#fff" viewBox="0 0 32 17"><path id="slider-next" data-name="Slider Next" class="slider_arrow_path" d="M23.842,0.007l-0.677.678L30.5,8.019H0V8.979H30.5l-7.338,7.334,0.677,0.679L32,8.839V8.16Z"></path></svg>'],
					smartSpeed: 500,
					responsive: {
						0 : {
					        items: 1,
					    },

					    768 : {
					        items: 1,
					    },
					},
				});
			})
             var owl = $('.js-atbs-carousel-1i');
             var htmlatbs = $('#slider-3300').find('.owl-dot:first-child');
             
             var htmlatbs2 = $('#slider-3300').find('.owl-dot:last-child');
             
            var prev = $('.sliderControl').find('.BtnPrev').html();
             $('prev').insertBefore('htmlatbs');
            
          
                
                
            owl.owlCarousel({
                 navigation : true,
                    singleItem : true,
                    transitionStyle : "backSlide"
            }
            );
            $('.BtnNext').click(function(){
                owl.trigger('next.owl.carousel');
            })
            $('.BtnPrev').click(function(){
                owl.trigger('prev.owl.carousel');
            });
             function counter(event) {
                var totalItems = $('.owl-item:not(.cloned)' ).length;
                var totalActive = $('div.active' ).index.length;
               
                var currentIndex = $('div.active').index() - 1;
                
                if(currentIndex > totalItems) {
                    currentIndex = currentIndex - totalItems
                  }

                $('#numberSlide').html(+ currentIndex +" / " + totalItems);
            }
            
            
		},

		carousel_1i30m: function() {
			var $carousels = $('.js-carousel-1i30m');
			$carousels.each( function() {
				$(this).owlCarousel({
					items: 1,
					margin: 30,
					loop: true,
					nav: true,
					dots: true,
                   
					autoHeight: true,
					navText: ['<i class="mdicon mdicon-arrow-left"></i>', '<i class="mdicon mdicon-arrow-right"></i>'],
					smartSpeed: 500,
                   
				});
                 
			})
		},
        
        carousel_textnav_1i0m: function() {
			var $carousels = $('.js-carousel-textnav-1i0m');
			$carousels.each( function() {
				$(this).owlCarousel({
					items: 1,
					margin: 0,
					loop: true,
					nav: true,
					dots: true,
                    dotsData: true,
					autoHeight: true,
					navText: ['<i class="mdicon mdicon-navigate_before"></i>', ''],
					smartSpeed: 500,
                    onInitialized: OwlInitialized,
				});      
			});
            function OwlInitialized() {
                var current = $('.slider-featured').find('.owl-item.active').index();
                                              
                var textnext = $('.slider-featured').find(".owl-item").eq(current).next().find(".post__title").html();
                                                
                var htmlOutput = '<div class="slider-control"><div class="nextBtn">'+textnext+'</div></div>';
                
                htmlOutput += '<i class="mdicon mdicon-navigate_next"></i>';
                
                var container = $('#atbs-post-featured_2020').find('.owl-next');
                
                container.html(htmlOutput);
                            
            }            
             var owl = $('.slider-featured');

            owl.owlCarousel();
            $('.nextBtn').click(function(){
                owl.trigger('next.owl.carousel');
                });
       
           owl.on('changed.owl.carousel', function(property) {
                var current = property.item.index;
                var textnext = $('.slider-featured').find(".owl-item").eq(current).next().find(".post__title").html();
                
                var htmlOutput = '<div class="slider-control"><div class="nextBtn">'+textnext+'</div></div>';
                
                htmlOutput += '<i class="mdicon mdicon-navigate_next"></i>';
                
                var container = $('#atbs-post-featured_2020').find('.owl-next');
                
                container.html(htmlOutput);
           });   
           
        },
        
         carousel_numberdots_1i0m: function() {
			var $carousels = $('.js-carousel-numberdots-1i0m');
			$carousels.each( function() {
				$(this).owlCarousel({
					items: 1,
					margin: 0,
					loop: true,
					nav: false,
					dots: true,
					autoHeight: true,
					smartSpeed: 500,
                  
                     onInitialized  : counter, 
                    onTranslated : counter,
				});      
			});
            var owl = $('.featured-silder');
            
            function counter(event) {
               var element   = event.target;         // DOM element, in this example .owl-carousel
                var items     = event.item.count;     // Number of items
                var item      = event.item.index - 1;     // Position of the current item
              
              // it loop is true then reset counter from 1
             
                 if(item > items) {
                    item = item - items
                  }
                  
                var container = $('#atbs-post-featured_2020').find('.owl-dots>.owl-dot:eq(0)');
                var container2 = $('#atbs-post-featured_2020').find('.owl-dots>.owl-dot:last-child');
                
              
                
                 $("<div class=\"itemnumber-dot\">0"+item+"</div>").insertBefore(container);   
                if(items>9){
                    $("<div class=\"itemnumber-dot\">"+items+"</div>").insertAfter( container2);
                }
                    $("<div class=\"itemnumber-dot\">0"+items+"</div>").insertAfter( container2);
                  
                }
                     
                owl.on('changed.owl.carousel', function(property) {
                    var htmlslider = $('#atbs-post-featured_2020').find('.itemnumber-dot');
                    htmlslider.html("aaaa");
                });     
               
                 
        
           
               
            
           
        },
		carousel_overlap: function() {
			var $carousels = $('.js-atbs-carousel-overlap');
			$carousels.each( function() {
				var $carousel = $(this);
				$carousel.flickity({
					wrapAround: true,
				});

				$carousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
					if ( (typeof cellIndex === 'number') && ($carousel.data('flickity').selectedIndex != cellIndex) ) {
						$carousel.flickity( 'selectCell', cellIndex );
					}
				});
			})
		},

		carousel_2i4m: function() {
			var $carousels = $('.js-carousel-2i4m');
			$carousels.each( function() {
				$(this).owlCarousel({
					items: 2,
					margin: 4,
					loop: false,
					nav: true,
					dots: true,
					navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
					responsive: {
						0 : {
					        items: 1,
					    },

					    768 : {
					        items: 2,
					    },
                        992 : {
					        items: 3,
					    },
					},
				});
			})
		},

		carousel_3i: function() {
			var $carousels = $('.js-carousel-3i');
			$carousels.each( function() {
				$(this).owlCarousel({
					loop: true,
					nav: true,
					dots: false,
					navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
					responsive: {
						0 : {
					        items: 1,
					    },

					    768 : {
					        items: 2,
					    },

					    992 : {
					        items: 3,
					    },
					},
				});
			})
		},

		carousel_3i4m: function() {
			var $carousels = $('.js-carousel-3i4m');
			$carousels.each( function() {
				$(this).owlCarousel({
					margin: 4,
					loop: true,
					nav: true,
					dots: true,
					navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
					responsive: {
						0 : {
					        items: 1,
					    },

					    768 : {
					        items: 2,
					    },

					    992 : {
					        items: 3,
					    },
					},
				});
			})
		},

		carousel_3i4m_small: function() {
			var $carousels = $('.js-carousel-3i4m-small');
			$carousels.each( function() {
				$(this).owlCarousel({
					margin: 4,
					loop: false,
					nav: true,
					dots: true,
					navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
					autoHeight: true,
					responsive: {
						0 : {
					        items: 3,
					    },

					    768 : {
					        items: 3,
					    },

					    1200 : {
					        items: 3,
					    },
					},
				});
			})
		},

		carousel_3i20m: function() {
			var $carousels = $('.js-carousel-3i20m');
			$carousels.each( function() {
				$(this).owlCarousel({
					margin: 20,
					loop: true,
					nav: false,
					dots: true,
                    onInitialized  : counter, 
                    onTranslated : counter,
					navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
					responsive: {
						0 : {
					        items: 1,
					    },
                        480 : {
					        items: 2,
					    },
					     576  : {
					        items: 2,
					    },

					    768 : {
					        items: 3,
					    },

					    992 : {
					        items: 3,
					    },
					},
				});
			})
            var owl = $('#slider-post');
            owl.owlCarousel();
            $('.BtnNext').click(function(){
                owl.trigger('next.owl.carousel');
            })
            $('.BtnPrev').click(function(){
                owl.trigger('prev.owl.carousel');
            });
            
             function counter(event) {
                var totalItems = $('.owl-item:not(.cloned)' ).length;
                var totalActive = $('div.active' ).index.length + 1;
                var currentIndex = $('div.active').index() - totalActive;
                if(currentIndex > totalItems) {
                    currentIndex = currentIndex - totalItems
                  }

                $('#numberSlide').html(+ currentIndex +" / " + totalItems);
            }
           
                
               
              
                
		},

		carousel_headingAside_3i: function() {
			var $carousels = $('.js-atbs-carousel-heading-aside-3i');
			$carousels.each( function() {
				$(this).owlCarousel({
					margin: 20,
					nav: false,
					dots: false,
					loop: true,
					navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
					responsive: {
						0 : {
					        items: 1,
					        margin: 10,
					        stagePadding: 40,
					        loop: false,
					    },

					    768 : {
					        items: 2,
					    },

					    992 : {
					        items: 3,
					    },
					},
				});
			})
		},

		customCarouselNav: function() {
			if ( $.isFunction($.fn.owlCarousel) ) {
				var $carouselNexts = $('.js-carousel-next');
				$carouselNexts.each( function() {
					var carouselNext = $(this);
					var carouselID = carouselNext.parent('.atbs-carousel-nav-custom-holder').attr('data-carouselID');
					var $carousel = $('#' + carouselID);

					carouselNext.on('click', function() {
					    $carousel.trigger('next.owl.carousel');
					});
				});

				var $carouselPrevs = $('.js-carousel-prev');
				$carouselPrevs.each( function() {
					var carouselPrev = $(this);
					var carouselID = carouselPrev.parent('.atbs-carousel-nav-custom-holder').attr('data-carouselID');
					var $carousel = $('#' + carouselID);

					carouselPrev.on('click', function() {
					    $carousel.trigger('prev.owl.carousel');
					});
				});
			}
		},

		carousel_4i: function() {
			var $carousels = $('.js-carousel-4i');

			$carousels.each( function() {
				$(this).owlCarousel({
					loop: true,
					nav: true,
					dots: false,
					navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
					responsive: {
						0 : {
					        items: 1,
					    },

					    768 : {
					        items: 2,
					    },

					    992 : {
					        items: 4,
					    },
					},
				});
			})
		},

		carousel_4i20m: function() {
			var $carousels = $('.js-carousel-4i20m');

			$carousels.each( function() {
				$(this).owlCarousel({
					items: 4,
					margin: 30,
					loop: true,
					nav: true,
					dots: true,
					navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
					responsive: {
						0 : {
					        items: 1,
					    },
                         480 : {
					        items: 2,
					    },

					    768 : {
					        items: 3,
					    },

					    992 : {
					        items: 3,
					    },

					    1199 : {
					        items: 4,
					    },
					},
				});
			})
		},
		carousel_4i_auto_w: function() {
			var $carousels = $('.js-carousel-4i--auto-w');

			$carousels.each( function() {
				$(this).owlCarousel({
					margin:1,
				    loop:true,
				    autoWidth:true,
				    items:3,
					nav: true,
					dots: true,
					navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
					responsive: {
						
						0 : {
					        items: 1,
					    },

					    768 : {
					        items: 2,
					    },

					    992 : {
					        items: 3,
					    },

					    1197 : {
					        items: 3,
					    },

					    1199 : {
					        items: 3,
					    },
					},
				});
			})
		},
		carousel_4i20m_center: function() {
			var $carousels = $('.js-carousel-4i20m--center');

			$carousels.each( function() {
				$(this).owlCarousel({
					items: 3,
					center: true,
					// left: true,
					margin: 30,
					loop: true,
					nav: true,
					dots: true,
					navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
					responsive: {
						
						0 : {
					        items: 1,
					    },

					    768 : {
					        items: 2,
					    },

					    992 : {
					        items: 3,
					    },

					    1197 : {
					        items: 3,
					    },

					    1199 : {
					        items: 3,
					    },
					},
				});
			})
		},

		/* ============================================================================
	     * Countdown timer
	     * ==========================================================================*/
		countdown: function() {
			if ( $.isFunction($.fn.countdown) ) {
				var $countdown = $('.js-countdown');

				$countdown.each(function() {
					var $this = $(this);
					var finalDate = $this.data('countdown');

					$this.countdown(finalDate, function(event) {
						$(this).html(event.strftime(''
						+ '<div class="countdown__section"><span class="countdown__digit">%-D</span><span class="countdown__text meta-font">day%!D</span></div>'
						+ '<div class="countdown__section"><span class="countdown__digit">%H</span><span class="countdown__text meta-font">hr</span></div>'
						+ '<div class="countdown__section"><span class="countdown__digit">%M</span><span class="countdown__text meta-font">min</span></div>'
						+ '<div class="countdown__section"><span class="countdown__digit">%S</span><span class="countdown__text meta-font">sec</span></div>'));
					});
				});
			};
		},

		/* ============================================================================
	     * Scroll top
	     * ==========================================================================*/
		goToTop: function() {
			if ($goToTopEl.length) {
				$goToTopEl.on('click', function() {
					$('html,body').stop(true).animate({scrollTop:0},400);
					return false;
				});
			}
		},

		/* ============================================================================
	     * News ticker
	     * ==========================================================================*/
		newsTicker: function() {
			var $tickers = $('.js-atbs-news-ticker');
			$tickers.each( function() {
				var $ticker = $(this);
				var $next = $ticker.siblings('.atbs-news-ticker__control').find('.atbs-news-ticker__next');
				var $prev = $ticker.siblings('.atbs-news-ticker__control').find('.atbs-news-ticker__prev');

				$ticker.addClass('initialized').vTicker('init', {
					speed: 300,
					pause: 3000,
				    showItems: 1,
				});

				$next.on('click', function() {
					$ticker.vTicker('next', {animate:true});
				});

				$prev.on('click', function() {
					$ticker.vTicker('prev', {animate:true});
				});
			})
		},

		/* ============================================================================
	     * Lightbox
	     * ==========================================================================*/
	  	lightBox: function() {
	  		if ( $.isFunction($.fn.magnificPopup) ) {
	  			var $imageLightbox = $('.js-atbs-lightbox-image');
	  			var $galleryLightbox = $('.js-atbs-lightbox-gallery');

	  			$imageLightbox.magnificPopup({
					type: 'image',
					mainClass: 'mfp-zoom-in',
					removalDelay: 80,
				});

	  			$galleryLightbox.each(function() {
	  				$(this).magnificPopup({
						delegate: '.gallery-icon > a',
						type: 'image',
						gallery:{
							enabled: true,
						},
						mainClass: 'mfp-zoom-in',
						removalDelay: 80,
					});
	  			});
	  		}
	  	},

		/* ============================================================================
	     * Custom scrollbar
	     * ==========================================================================*/
		perfectScrollbarInit: function() {
			if ( $.isFunction($.fn.perfectScrollbar) ) {
				var $area = $('.js-perfect-scrollbar');

				$area.perfectScrollbar({
					wheelPropagation: true,
				});
			}
		},

		/* ============================================================================
	     * Sticky sidebar
	     * ==========================================================================*/
		stickySidebar: function() {
			setTimeout(function() {
				var $stickySidebar = $('.js-sticky-sidebar');
				var $stickyHeader = $('.js-sticky-header');

				var marginTop = ($stickyHeader.length) ? ($stickyHeader.outerHeight() + 20) : 0; // check if there's sticky header
				if ( $.isFunction($.fn.theiaStickySidebar) ) {
					$stickySidebar.theiaStickySidebar({
						additionalMarginTop: marginTop,
						additionalMarginBottom: 20,
					});
				}
			}, 250); // wait a bit for precise height;
		},

		/* ============================================================================
	     * Bootstrap tooltip
	     * ==========================================================================*/
		tooltipInit: function() {
			var $element = $('[data-toggle="tooltip"]');

			$element.tooltip();
		},

		imgPopup: function () {
			$('.img-link-popup').magnificPopup({type:'image'});
		}
	};

	ATBS.documentOnLoad = {

		init: function() {
			ATBS.clippedBackground();
            ATBS.header.smartAffix.compute(); //recompute when all the page + logos are loaded
            ATBS.header.smartAffix.updateState(); // update state
            ATBS.header.stickyNavbarPadding(); // fix bootstrap modal backdrop causes sticky navbar to shift
			ATBS.documentOnReady.stickySidebar();
		}

	};

	/* ============================================================================
     * Blur background mask
     * ==========================================================================*/
	ATBS.clippedBackground = function() {
		if ($overlayBg.length) {
			$overlayBg.each(function() {
				var $mainArea = $(this).find('.js-overlay-bg-main-area');
				if (!$mainArea.length) {
					$mainArea = $(this);
				}

				var $subArea = $(this).find('.js-overlay-bg-sub-area');
				var $subBg = $(this).find('.js-overlay-bg-sub');

				var leftOffset = $mainArea.offset().left - $subArea.offset().left;
				var topOffset = $mainArea.offset().top - $subArea.offset().top;
				
				$subBg.css('display', 'block');
				$subBg.css('position', 'absolute');
				$subBg.css('width', $mainArea.outerWidth() + 'px');
				$subBg.css('height', $mainArea.outerHeight() + 'px');
				$subBg.css('left', leftOffset + 'px');
				$subBg.css('top', topOffset + 'px');
			});
		};
	}

	/* ============================================================================
     * Priority+ menu
     * ==========================================================================*/
    ATBS.priorityNav = function($menu) {
    	var $btn = $menu.find('button');
    	var $menuWrap = $menu.find('.navigation');
    	var $menuItem = $menuWrap.children('li');
		var hasMore = false;

		if(!$menuWrap.length) {
			return;
		}

		function calcWidth() {
			if ($menuWrap[0].getBoundingClientRect().width === 0)
				return;

			var navWidth = 0;

			$menuItem = $menuWrap.children('li');
			$menuItem.each(function() {
				navWidth += $(this)[0].getBoundingClientRect().width;
			});

			if (hasMore) {
				var $more = $menu.find('.priority-nav__more');
				var moreWidth = $more[0].getBoundingClientRect().width;
				var availableSpace = $menu[0].getBoundingClientRect().width;

				//Remove the padding width (assumming padding are px values)
				availableSpace -= (parseInt($menu.css("padding-left"), 10) + parseInt($menu.css("padding-right"), 10));
				//Remove the border width
				availableSpace -= ($menu.outerWidth(false) - $menu.innerWidth());

				if (navWidth > availableSpace) {
					var $menuItems = $menuWrap.children('li:not(.priority-nav__more)');
					var itemsToHideCount = 1;

					$($menuItems.get().reverse()).each(function(index){
						navWidth -= $(this)[0].getBoundingClientRect().width;
						if (navWidth > availableSpace) {
							itemsToHideCount++;
						} else {
							return false;
						}
					});

					var $itemsToHide = $menuWrap.children('li:not(.priority-nav__more)').slice(-itemsToHideCount);

					$itemsToHide.each(function(index){
						$(this).attr('data-width', $(this)[0].getBoundingClientRect().width);
					});

					$itemsToHide.prependTo($more.children('ul'));
				} else {
					var $moreItems = $more.children('ul').children('li');
					var itemsToShowCount = 0;

					if ($moreItems.length === 1) { // if there's only 1 item in "More" dropdown
						if (availableSpace >= (navWidth - moreWidth + $moreItems.first().data('width'))) {
							itemsToShowCount = 1;
						}
					} else {
						$moreItems.each(function(index){
							navWidth += $(this).data('width');
							if (navWidth <= availableSpace) {
								itemsToShowCount++;
							} else {
								return false;
							}
						});
					}

					if (itemsToShowCount > 0) {
						var $itemsToShow = $moreItems.slice(0, itemsToShowCount);

						$itemsToShow.insertBefore($menuWrap.children('.priority-nav__more'));
						$moreItems = $more.children('ul').children('li');

						if ($moreItems.length <= 0) {
							$more.remove();
							hasMore = false;
						}
					}
				}
			} else {
				var $more = $('<li class="priority-nav__more"><a href="#"><span>More</span><i class="mdicon mdicon-more_vert"></i></a><ul class="sub-menu"></ul></li>');
				var availableSpace = $menu[0].getBoundingClientRect().width;

				//Remove the padding width (assumming padding are px values)
				availableSpace -= (parseInt($menu.css("padding-left"), 10) + parseInt($menu.css("padding-right"), 10));
				//Remove the border width
				availableSpace -= ($menu.outerWidth(false) - $menu.innerWidth());

				if (navWidth > availableSpace) {
					var $menuItems = $menuWrap.children('li');
					var itemsToHideCount = 1;

					$($menuItems.get().reverse()).each(function(index){
						navWidth -= $(this)[0].getBoundingClientRect().width;
						if (navWidth > availableSpace) {
							itemsToHideCount++;
						} else {
							return false;
						}
					});

					var $itemsToHide = $menuWrap.children('li:not(.priority-nav__more)').slice(-itemsToHideCount);

					$itemsToHide.each(function(index){
						$(this).attr('data-width', $(this)[0].getBoundingClientRect().width);
					});

					$itemsToHide.prependTo($more.children('ul'));
					$more.appendTo($menuWrap);
					hasMore = true;
				}
			}
		}

		$window.on('load webfontLoaded', calcWidth );
		$window.on('resize', $.throttle( 50, calcWidth ));
    }

	$document.ready( ATBS.documentOnReady.init );
	$window.on('load', ATBS.documentOnLoad.init );
	$window.on( 'resize', ATBS.documentOnResize.init );

})(jQuery);