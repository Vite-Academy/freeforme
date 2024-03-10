/* global jQuery:false */
/* global STEVENWATKINS_STORAGE:false */
/* global TRX_ADDONS_STORAGE:false */

jQuery(document).on('action.add_googlemap_styles', stevenwatkins_trx_addons_add_googlemap_styles);
jQuery(document).on('action.init_shortcodes', stevenwatkins_trx_addons_init);
jQuery(document).on('action.init_hidden_elements', stevenwatkins_trx_addons_init);

// Add theme specific styles to the Google map
function stevenwatkins_trx_addons_add_googlemap_styles(e) {
	TRX_ADDONS_STORAGE['googlemap_styles']['dark'] = 
	[
	    {
	        "featureType": "all",
	        "elementType": "all",
	        "stylers": [
	            {
	                "invert_lightness": true
	            },
	            {
	                "saturation": 10
	            },
	            {
	                "lightness": 30
	            },
	            {
	                "gamma": 0.5
	            },
	            {
	                "hue": "#435158"
	            }
	        ]
	    }
	]
}


function stevenwatkins_trx_addons_init(e, container) {
	"use strict";
	if (arguments.length < 2) var container = jQuery('body');
	if (container===undefined || container.length === undefined || container.length == 0) return;

	container.find('.sc_countdown_item canvas:not(.inited)').addClass('inited').attr('data-color', STEVENWATKINS_STORAGE['alter_link_color']);
}