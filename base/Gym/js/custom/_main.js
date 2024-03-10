jQuery(window).load(function() {
    "use strict";
    preloader();
})

jQuery(document).ready(function() {
    "use strict";
	glogals_init();
	main_slider_init();
	reviews_stars();
});

var tribe_js_config = {"permalink_settings":"\/%postname%\/","events_post_type":"tribe_events","events_base":"#"};

function glogals_init(){
	THEMEREX_GLOBALS["strings"] = {
		bookmark_add: 		"Add the bookmark",
		bookmark_added:		"Current page has been successfully added to the bookmarks. You can see it in the right panel on the tab \'Bookmarks\'",
		bookmark_del: 		"Delete this bookmark",
		bookmark_title:		"Enter bookmark title",
		bookmark_exists:		"Current page already exists in the bookmarks list",
		search_error:		"Error occurs in AJAX search! Please, type your query and press search icon for the traditional search way.",
		email_confirm:		"On the e-mail address <b>%s</b> we sent a confirmation email.<br>Please, open it and click on the link.",
		reviews_vote:		"Thanks for your vote! New average rating is:",
		reviews_error:		"Error saving your vote! Please, try again later.",
		error_like:			"Error saving your like! Please, try again later.",
		error_global:		"Global error text",
		name_empty:			"The name can\'t be empty",
		name_long:			"Too long name",
		email_empty:			"Too short (or empty) email address",
		email_long:			"Too long email address",
		email_not_valid:		"Invalid email address",
		subject_empty:		"The subject can\'t be empty",
		subject_long:		"Too long subject",
		text_empty:			"The message text can\'t be empty",
		text_long:			"Too long message text",
		send_complete:		"Send message complete!",
		send_error:			"Transmit failed!",
		login_empty:			"The Login field can\'t be empty",
		login_long:			"Too long login field",
		login_success:		"Login success! The page will be reloaded in 3 sec.",
		login_failed:		"Login failed!",
		password_empty:		"The password can\'t be empty and shorter then 4 characters",
		password_long:		"Too long password",
		password_not_equal:	"The passwords in both fields are not equal",
		registration_success:"Registration success! Please log in!",
		registration_failed:	"Registration failed!",
		geocode_error:		"Geocode was not successful for the following reason:",
		googlemap_not_avail:	"Google map API not available!",
		editor_save_success:	"Post content saved!",
		editor_save_error:	"Error saving post data!",
		editor_delete_post:	"You really want to delete the current post?",
		editor_delete_post_header:"Delete post",
		editor_delete_success:	"Post deleted!",
		editor_delete_error:		"Error deleting post!",
		editor_caption_cancel:	"Cancel",
		editor_caption_close:	"Close"
	};

	THEMEREX_GLOBALS['ajax_url']			= '#';
	THEMEREX_GLOBALS['ajax_nonce']		= '2251c4275d';
	THEMEREX_GLOBALS['ajax_nonce_editor'] = '568ece21df';
	THEMEREX_GLOBALS['site_url']			= '#';
	THEMEREX_GLOBALS['vc_edit_mode']		= false;
	THEMEREX_GLOBALS['theme_font']		= '';
	THEMEREX_GLOBALS['theme_skin']		= 'default';
	THEMEREX_GLOBALS['theme_skin_bg']	= '';
	THEMEREX_GLOBALS['slider_height']	= 630;
	THEMEREX_GLOBALS['system_message']	= {message: '',status: '',header: ''};
	THEMEREX_GLOBALS['user_logged_in']	= false;
	THEMEREX_GLOBALS['toc_menu']		= 'fixed';
	THEMEREX_GLOBALS['toc_menu_home']	= false;
	THEMEREX_GLOBALS['toc_menu_top']	= false;
	THEMEREX_GLOBALS['menu_fixed']		= true;
	THEMEREX_GLOBALS['menu_relayout']	= 0;
	THEMEREX_GLOBALS['menu_responsive']	= 800;
	THEMEREX_GLOBALS['menu_slider']     = true;
	THEMEREX_GLOBALS['demo_time']		= 0;
	THEMEREX_GLOBALS['media_elements_enabled'] = true;
	THEMEREX_GLOBALS['ajax_search_enabled'] 	= true;
	THEMEREX_GLOBALS['ajax_search_min_length']	= 3;
	THEMEREX_GLOBALS['ajax_search_delay']		= 200;
	THEMEREX_GLOBALS['css_animation']      = true;
	THEMEREX_GLOBALS['menu_animation_in']  = 'none';
	THEMEREX_GLOBALS['menu_animation_out'] = 'none';
	THEMEREX_GLOBALS['popup_engine']	= 'pretty';
	THEMEREX_GLOBALS['popup_gallery']	= true;
	THEMEREX_GLOBALS['email_mask']		= '^([a-zA-Z0-9_\-]+\.)*[a-zA-Z0-9_\-]+@[a-z0-9_\-]+(\.[a-z0-9_\-]+)*\.[a-z]{2,6}$';
	THEMEREX_GLOBALS['contacts_maxlength']	= 1000;
	THEMEREX_GLOBALS['comments_maxlength']	= 1000;
	THEMEREX_GLOBALS['remember_visitors_settings']	= false;
	THEMEREX_GLOBALS['admin_mode']			= false;
	THEMEREX_GLOBALS['isotope_resize_delta']	= 0.3;
	THEMEREX_GLOBALS['error_message_box']	= null;
	THEMEREX_GLOBALS['viewmore_busy']		= false;
	THEMEREX_GLOBALS['video_resize_inited']	= false;
	THEMEREX_GLOBALS['top_panel_height']		= 0;
	if (THEMEREX_GLOBALS['theme_font']=='') THEMEREX_GLOBALS['theme_font'] = 'Ubuntu';
	THEMEREX_GLOBALS['link_color'] = '#f15a23';
	THEMEREX_GLOBALS['menu_color'] = '#26c9c3';
	THEMEREX_GLOBALS['user_color'] = '#fcc930';
	THEMEREX_GLOBALS["reviews_allow_user_marks"] = true;
	THEMEREX_GLOBALS["reviews_max_level"] = 100;
	THEMEREX_GLOBALS["reviews_levels"] = "bad,poor,normal,good,great";
	THEMEREX_GLOBALS["reviews_vote"] = "";
	THEMEREX_GLOBALS["reviews_marks"] = "63,72,56,53".split(",");
	THEMEREX_GLOBALS["reviews_users"] = 34;
	THEMEREX_GLOBALS["post_id"] = 636;

}

/* preloader */
function preloader(){
    "use strict";
    //preloader
    jQuery(".preloaderimg").fadeOut();
    jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function(){
        jQuery(this).remove();
    });
}

/*Main slider*/
function main_slider_init() {
    "use strict";
    if (jQuery("#mainslider_1").length > 0) {
		var setREVStartSize = function() {
			var	tpopt = new Object();
				tpopt.startwidth = 1920;
				tpopt.startheight = 980;
				tpopt.container = jQuery('#rev_slider_1');
				tpopt.fullScreen = "off";
				tpopt.forceFullWidth="off";

			tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
		};

		/* CALL PLACEHOLDER */
		setREVStartSize();


		var tpj=jQuery;
		tpj.noConflict();
		var revapi4;

		tpj(document).ready(function() {

		if(tpj('#rev_slider_1').revolution == undefined){
			revslider_showDoubleJqueryError('#rev_slider_1');
		}else{
		   	revapi4 = tpj('#rev_slider_1').show().revolution(
				{	
					dottedOverlay:"none",
					delay:9000,
					startwidth:1920,
					startheight:980,
					hideThumbs:200,
					thumbWidth:100,
					thumbHeight:50,
					thumbAmount:2,
					simplifyAll:"off",
					navigationType:"bullet",
					navigationArrows:"solo",
					navigationStyle:"round",
					touchenabled:"on",
					onHoverStop:"off",
					nextSlideOnWindowFocus:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					drag_block_vertical: false,
					keyboardNavigation:"off",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,
					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,
					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,
					shadow:0,
					fullWidth:"on",
					fullScreen:"off",
					spinner:"spinner0",
					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					shuffle:"off",
					autoHeight:"off",
					forceFullWidth:"off",
					hideThumbsOnMobile:"off",
					hideNavDelayOnMobile:1500,
					hideBulletsOnMobile:"off",
					hideArrowsOnMobile:"off",
					hideThumbsUnderResolution:0,
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					startWithSlide:0					
				});
			}
		});
	}
}

/*reviews stars*/
function reviews_stars() {
    "use strict";
    if (jQuery(".reviews_stars").length > 0) {
        jQuery(".reviews_stars").each(function() {
            var percent = jQuery(this).attr("data-mark");
            jQuery(this).find('.reviews_stars_hover').css({'width': percent + '%'});
        });
    }
}

if($.browser.mozilla) {
  jQuery(this).find('.slides .swiper-slide').css('position', 'relative');
}
