"use strict";

jQuery(document).ready(function() {
    
	hover_mobile();
});

jQuery(document).ready(function() { 
	//toTop
	if (jQuery().UItoTop) {
        jQuery().UItoTop({ easingType: 'easeOutQuart' });
    }

});


jQuery(window).load(function(){
    
	//preloader
	jQuery(".preloaderimg").fadeOut();
	jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function(){
		jQuery(this).remove();
	});

});

// Hover effects on mobile
function hover_mobile() {
    if (jQuery(".portfolio").length > 0) {
        $('.hover_wrap.taphover').on("touchstart", function(e) {
            var link = $(this); //preselect the link
            if (link.hasClass('hover')) {
                $('.hover_wrap.taphover').not(this).removeClass("hover");
                return true;
            } else {
                link.addClass("hover");
                $('.hover_wrap.taphover').not(this).removeClass("hover");
                e.preventDefault();
                return false; //extra, and to make sure the function has consistent return points
            }
        });
    }
    if (jQuery(".sc_services_content").length > 0) {
        $('.sc_services_bg.taphover').on("touchstart", function(e) {
            var link = $(this); //preselect the link
            if (link.hasClass('hover')) {
                $('.sc_services_bg.taphover').not(this).removeClass("hover");
                return true;
            } else {
                link.addClass("hover");
                $('.sc_services_bg.taphover').not(this).removeClass("hover");
                e.preventDefault();
                return false; //extra, and to make sure the function has consistent return points
            }
        });
    }
}