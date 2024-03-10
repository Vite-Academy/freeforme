/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Fodlige = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.scrollTop();
				this.MobileStickyMenu();
				this.MianSlider();
				this.DatePluseCount();
				this.PackageSlider();
				this.TestimonialSlider();
				this.TestimonialSlider2();
				this.FvFoodSlider();
				this.ContactForm();
				
			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
			},
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});

				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			MobileStickyMenu: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.main-header').addClass('sticky-on')
					} else {
						jQuery('.main-header').removeClass('sticky-on')
					}
				})
				$('.vertical-menu-toggle').on("click", function() {
					$('.header-vertical-area').toggleClass("menu-show-on");
				});
				$('.open_mobile_menu').on("click", function() {
					$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.mobile_menu li.dropdown ul').length){
					$('.mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				if($('.header-vertical-area li.dropdown ul').length){
					$('.header-vertical-area li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.header-vertical-area li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
			},
			MianSlider: function (){
				jQuery('#slider-wrapper').owlCarousel({
					items: 1,
					loop: true,
					nav: true,
					dots: false,
					autoplay: false,
					navSpeed: 1000,
					smartSpeed: 2000,
					animateOut: 'fadeOut',
					animateIn: 'fadeIn',
					navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
				});
			},
			DatePluseCount: function (){
				$('.datepicker').datepicker({
					weekStart: 1,
					daysOfWeekHighlighted: "6,0",
					autoclose: true,
					todayHighlight: true,
				});
				$('.datepicker').datepicker("setDate", new Date());
				var dishPlusMinus = $('.dish-plus-minus');
				dishPlusMinus.prepend('<div class="dec qtybutton">-</div>');
				dishPlusMinus.append('<div class="inc qtybutton">+</div>');
				$(".qtybutton").on("click", function() {
					var $button = $(this);
					var oldValue = $button.parent().find("input").val();
					if ($button.text() === "+") {
						var newVal = parseFloat(oldValue) + 1;
					} else {
						if (oldValue > 1) {
							var newVal = parseFloat(oldValue) - 1;
						} else {
							newVal = 1;
						}
					}
					$button.parent().find("input").val(newVal);
				});;
				$('.datepicker1').datepicker({
					clearBtn: true,
				});
			},
			PackageSlider: function (){
				jQuery('#package-slide-id').owlCarousel({
					items: 1,
					loop: true,
					nav: true,
					dots: false,
					autoplay: false,
					navSpeed: 800,
					navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
					smartSpeed: 1000,
				});
			},
			TestimonialSlider: function (){
				jQuery('#testimonial-id').owlCarousel({
					items: 1,
					loop: true,
					nav: true,
					dots: false,
					autoplay: false,
					navSpeed: 800,
					navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
					smartSpeed: 1000,
				});
			},
			TestimonialSlider2: function (){
				jQuery('#testimonial-id-2').owlCarousel({
					items: 1,
					loop: true,
					nav: false,
					dots: true,
					navSpeed: 800,
					autoplay: false,
					smartSpeed: 1000,
				});
			},
			FvFoodSlider: function (){
				$('#fv-food-slider').owlCarousel({
					items: 1,
					loop: true,
					nav: true,
					dots: false,
					autoplay: false,
					navSpeed: 800,
					navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
					smartSpeed: 1000,
				});

			},
			ContactForm: function (){
				if($('#contact_form').length){
					$('#contact_form').validate({
						rules: {
							name: {
								required: true
							},
							email: {
								required: true,
							},
							phone: {
								required: true
							},
							subject: {
								required: true
							},
							message: {
								required: true
							}
						}
					});
				}
			},
		}
	}
	jQuery(document).ready(function (){
		Fodlige.init();
	});

})();