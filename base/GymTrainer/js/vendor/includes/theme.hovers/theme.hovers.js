// Called from the main 'ready' event
jQuery(document).on('action.ready', function(e) {

	// Slide effect for main menu
	if (STEVENWATKINS_STORAGE['menu_hover']=='slide_line' || STEVENWATKINS_STORAGE['menu_hover']=='slide_box') {
		setTimeout(function() {
			"use strict";
			jQuery('#menu_main').spasticNav({
				style: STEVENWATKINS_STORAGE['menu_hover']=='slide_line' ? 'line' : 'box',
				color: STEVENWATKINS_STORAGE['menu_hover_color'],
				colorOverride: false
			});
		}, 500);
	}
});

// Buttons decoration (add 'hover' class)
// Attention! Not use cont.find('selector')! Use jQuery('selector') instead!
jQuery(document).on('action.init_hidden_elements', function(e, cont) {
	if (STEVENWATKINS_STORAGE['button_hover'] && STEVENWATKINS_STORAGE['button_hover']!='default') {
		jQuery('button:not(.search_submit):not([class*="sc_button_hover_"]):not(.single_add_to_cart_button),\
				.theme_button:not([class*="sc_button_hover_"]),\
				.sc_item_button > a:not([class*="sc_button_hover_"]):not([class*="sc_button_simple"]),\
				.sc_form_field button:not([class*="sc_button_hover_"]),\
				.sc_action_item_link:not(.sc_action_item_link_over):not([class*="sc_button_hover_"]),\
				.more-link:not([class*="sc_button_hover_"]),\
				.trx_addons_hover_content .trx_addons_hover_links a:not([class*="sc_button_hover_"]),\
				.stevenwatkins_tabs .stevenwatkins_tabs_titles li a:not([class*="sc_button_hover_"]),\
				#buddypress a.button:not([class*="sc_button_hover_"])\
				').addClass('sc_button_hover_'+STEVENWATKINS_STORAGE['button_hover']);
		if (STEVENWATKINS_STORAGE['button_hover']!='arrow') {
			jQuery('.isotope_filters_button:not([class*="sc_button_hover_"]),\
					.sc_promo_modern .sc_promo_link2:not([class*="sc_button_hover_"])\
					').addClass('sc_button_hover_'+STEVENWATKINS_STORAGE['button_hover']);
		}
		// Add alter styles of buttons 
		jQuery('.sc_form_field button\
				').addClass('sc_button sc_button_accent_bg_2 sc_button_size_large sc_button_icon_right icon-move-right-theme');
		jQuery('.trx_addons_hover_content .trx_addons_hover_links a:not([class*="sc_button_hover_style_"])\
				').addClass('sc_button_hover_style_inverse');
		jQuery('.sidebar .trx_addons_tabs .trx_addons_tabs_titles li a:not([class*="sc_button_hover_style_"]),\
				.stevenwatkins_tabs .stevenwatkins_tabs_titles li a:not([class*="sc_button_hover_style_"])\
				').addClass('sc_button_hover_style_alterbd');
		jQuery('.sc_action_item_event .sc_action_item_link:not([class*="sc_button_hover_style_"]),\
				.trx_addons_tabs .trx_addons_tabs_titles li a:not([class*="sc_button_hover_style_"])\
				').addClass('sc_button_hover_style_dark');
		// Remove hover class
		jQuery('.mejs-controls button,\
				.mfp-close,\
				.widget_contacts .social_icons\
				').removeClass('sc_button_hover_'+STEVENWATKINS_STORAGE['button_hover']);

	}
	
});

