$(function(){
	'use-strict';

	// side nav left
	$(".side-nav-left").sideNav({

		edge: 'left',
		closeOnClick: false

	});

	// side nav right
	$(".side-nav-right").sideNav({
		
		edge: 'right',
		closeOnClick: false

	});


	// Scroll to top
	$(".scroll-to-top").scrollToTop();


	// slider
	$(".slider").slider({full_width: true});



	// side nav collapsible
	$(".collapsible").collapsible({
		accordion : false
	});




});