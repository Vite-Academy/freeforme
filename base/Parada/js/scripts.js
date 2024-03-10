// JavaScript for Themezinho items
(function($) {
$(document).ready(function() {
	"use strict";
	
	
	// Fancybox
		$(".fancybox").fancybox({
		helpers: {
		overlay: {
		  locked: false
			}
		  }
		});
		
	
	// Scroll down opacity
		var divs = $('.int-hero .inner');
		$(window).on('scroll', function() {
		var st = $(this).scrollTop();
		divs.css({ 'opacity' : (1 - st/300) });
		});
		
		
	// Hamburger Menu
		$('.menu-btn').on('click', function(e) {
		$(".menu-btn").toggleClass("active");
		$(".bars .bar").toggleClass("rotated");
		$(".header img").toggleClass("light");
		$(".navigation").toggleClass("active");
		$(".navigation ul li").toggleClass("active");
		$("body").toggleClass("overflow-hidden");
		});
		
		
	// Page transition
		$('.transition').on('click', function(e) {
      	$('.transition-overlay').toggleClass("show-me");
	    });
		
		
	// Transition delay
		$('.transition').on('click', function(e) {
    	e.preventDefault();                  
    	var goTo = this.getAttribute("href"); 
		setTimeout(function(){
         window.location = goTo;
    	},1000);       
		}); 
		
		
	
	// Parallax Effect
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 0,
			responsive:true
		});
		
	
	
	});
	
	// Wow animations
		wow = new WOW(
      	{
       		animateClass: 'animated',
        	offset:0
      	}
    	);
    	wow.init();
		
	
	// Isotope works filter
		$(window).load(function(){
			var $container = $('.works ul');
			$container.isotope({
			filter: '*',
			animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		   }
		});
		
		$('.filter li a').on('click', function(e) {	 
		$('.filter li a.current').removeClass('current');
		$(this).addClass('current');
	 
		var selector = $(this).attr('data-filter');
		$container.isotope({
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
		
		
		// COUNTER EFFECT
	var n = document.getElementById("counter");
		if (n == null) {
	} 
	else {
	
	var lastWasLower = false;
		$(document).scroll(function(){
		
		var p = $( "#counter" );
		var position = p.position();
		var position2 = position.top;
	
		if ($(document).scrollTop() > position2-300){
		if (!lastWasLower)
			$('#1').html('98');
			$('#2').html('54000');
			$('#3').html('248');
	
		lastWasLower = true;
			} else {
		lastWasLower = false;
		}
		});		
	};

})(jQuery);