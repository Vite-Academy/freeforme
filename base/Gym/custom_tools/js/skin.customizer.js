// Interactive change skin custom styles
function themerex_skin_customizer(option, val) {

	var custom_style = '';

	if (option == 'bg_color') {

		//jQuery("#custom_options .co_switch_box a[data-value='boxed']").trigger('click');
		//jQuery('#custom_options #co_bg_pattern_list .co_pattern_wrapper, #custom_options #co_bg_images_list .co_image_wrapper').removeClass('active');
		//jQuery('body').removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3').css('backgroundColor', clr);

	} else if (option == 'bg_pattern') {

		//jQuery('body')
		//	.removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3')
		//	.css('backgroundColor', 'transparent')
		//	.addClass('bg_pattern_' + val);

	} else if (option == 'bg_image') {

		//jQuery('body')
		//	.removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3')
		//	.css('backgroundColor', 'transparent')
		//	.addClass('bg_image_' + val);

	} else if (option == 'link_color') {

		var clr = val;
		var rgb = themerex_hex2rgb(clr);
		// Link color styles
		custom_style += '\
        .sc_team.sc_team_style_4 .sc_team_item_info .sc_team_item_position,\
        .sc_team.sc_team_style_4 .sc_team_item_info .sc_team_item_title,\
        .sc_team.sc_team_style_4 .sc_team_item_info .sc_team_item_title a,\
        .sc_team.sc_team_style_3 .sc_team_item_info .sc_team_item_position,\
        .sc_team.sc_team_style_2 .sc_team_item_info .sc_team_item_position,\
        .sc_team.sc_team_style_1 .sc_team_item_info .sc_team_item_position,\
        .sc_skills.sc_skills_bar.sc_skills_horizontal .sc_skills_item.sc_skills_style_3 .sc_skills_count:before,\
        .sc_skills.sc_skills_bar.sc_skills_horizontal .sc_skills_item.sc_skills_style_2 .sc_skills_count:before,\
        .sc_skills.sc_skills_bar.sc_skills_horizontal .sc_skills_info .sc_skills_label .sc_skills_item,\
        .sc_price_block .sc_price_block_money .sc_price_period,\
        .sc_price .sc_price_penny,\
        .sc_price_block .sc_price_block_money .sc_price_money,\
        .sc_price_block .sc_price_block_money .sc_price_currency,\
        .sc_price_block .sc_price_block_money .sc_price,\
        a:hover .sc_icon_shape_round.sc_icon_bg_color3,\
        a:hover .sc_icon_shape_square.sc_icon_bg_color3,\
        .sc_icon.sc_icon_bg_color2:hover,\
        a:hover .sc_icon.sc_icon_bg_color2,\
        .sc_icon_bg_color3,\
        .sc_highlight_style_3,\
        .sc_dropcaps.sc_dropcaps_style_6 .sc_dropcaps_item,\
        .sc_dropcaps.sc_dropcaps_style_2 .sc_dropcaps_item,\
        .sc_countdown.sc_countdown_style_1 .sc_countdown_digits,\
        .sc_countdown.sc_countdown_style_1 .sc_countdown_separator,\
        .sc_button.sc_button_style_border.sc_button_bg_color2,\
        .sc_audio .sc_audio_title,\
        blockquote.sc_quote.custom_with_img .sc_quote_title a,\
        #tribe-events-content .tribe-events-tooltip h4,\
        .footer_style_dark.footer_wrap.widget_area ul li a:hover,\
        .footer_wrap.widget_area ul li a:hover,\
        .widget_area .widget_calendar thead .weekday,\
        .widget_area.bg_tint_dark .post_title a:hover,\
        .widget_area .widget_recent_posts .post_title a:hover,\
        .widget_area .widget_text a,\
        .widget_area .post_info a,\
        .widget_area .post_title a:hover,\
        .widget_area a:hover,\
        .widget_area ul li a,\
        .widget_area button:hover:before,\
        .comments_list_wrap .comment_info > span.comment_author,\
        .comments_list_wrap .comment_info > .comment_date > .comment_date_value,\
        .post_author .post_author_title a,\
        .pagination_wrap .pager_next:hover,\
        .pagination_wrap .pager_prev:hover,\
        .pagination_wrap .pager_last:hover,\
        .pagination_wrap .pager_first:hover,\
        .post_item_related .post_title a:hover,\
        .page_top_wrap .breadcrumbs a.breadcrumbs_item,\
        .bg_tint_light .menu_main_responsive_button:hover,\
        .sc_table table tr td:first-child,\
        .user_color,\
        .menu_dark,\
        a.menu_color:hover,\
        .bg_tint_light a:hover,\
        a:hover,\
        .sc_testimonials .sc_testimonials_grid .sc_testimonial_author a:hover,\
        .copyright_wrap a:hover,\
        .copyright_wrap .copyright_text > p a:hover,\
        .widget_area .widget_meta a:hover,\
        .widget_area .widget_archive a:hover,\
        .widget_area .widget_recent_comments a:hover,\
        .post_item_excerpt.post_format_chat .post_featured .post_thumb .sc_chat_title a,\
        .post_item_excerpt.post_format_link .post_featured .post_thumb p a:hover,\
        .post_item_excerpt.post_format_quote .post_featured .post_thumb blockquote p a,\
        .post_info .post_info_item+.post_info_item:before,\
        .post_info .post_info_item a\
        {color: '+clr+';}\
        \
        .sc_button.sc_button_style_filled.sc_button_bg_color2:hover button,\
        .sc_button.sc_button_style_filled.sc_button_bg_color2:hover,\
        a.tribe-events-read-more,\
        .tribe-events-button,\
        .tribe-events-nav-previous a,\
        .tribe-events-nav-next a,\
        .tribe-events-widget-link a,\
        .tribe-events-viewmore a,\
        .woocommerce a.remove,\
        .woocommerce a.remove:hoverm\
        {color: '+clr+' !important;}\
        \
        .bg_tint_dark .sc_contact_form.sc_contact_form_standard .sc_contact_form_button button,\
        .sc_team.sc_team_style_3 .sc_team_item_avatar .sc_team_item_hover,\
        .sc_slider_swiper .sc_slider_pagination_wrap span:hover,\
        .sc_slider_swiper .sc_slider_pagination_wrap .swiper-active-switch,\
        .marked.sc_price_block:hover .sc_price_block_link .sc_button,\
        .sc_icon_shape_round.sc_icon_bg_color3,\
        .sc_icon_shape_square.sc_icon_bg_color3,\
        .sc_dropcaps.sc_dropcaps_style_6 .sc_dropcaps_item,\
        .sc_dropcaps.sc_dropcaps_style_2 .sc_dropcaps_item,\
        .sc_button.sc_button_style_border.sc_button_bg_color2,\
        .sc_button.sc_button_style_filled.sc_button_bg_color2 button,\
        .sc_button.sc_button_style_filled.sc_button_bg_color2,\
        .woocommerce ul.products li.product:nth-child(5n+3) .post_featured, .woocommerce-page ul.products li.product:nth-child(5n+3) .post_featured,\
        .woocommerce ul.products li.product:nth-child(5n+5) .post_featured, .woocommerce-page ul.products li.product:nth-child(5n+5) .post_featured,\
        .widget_area .widget_product_tag_cloud a:hover,\
        .widget_area .widget_tag_cloud a:hover,\
        .widget_area .widget_calendar .day a.day_wrap:hover,\
        .comments_list_wrap > ul > li > ul.children > li > ul.children > li > ul.children > li > ul.children > li > ul.children,\
        .comments_list_wrap > ul > li > ul > li > ul > li > ul > li > ul > li > ul > li,\
        .comments_list_wrap > ul > li > ul.children > li > ul.children,\
        .comments_list_wrap > ul > li > ul > li > ul > li,\
        .comments_wrap .form-submit input[type="submit"]:hover,\
        .comments_wrap .form-submit input[type="button"]:hover,\
        .isotope_filters a.active,\
        .isotope_filters a:hover,\
        .user_color_border,\
        .bg_tint_dark .menu_main_nav,\
        .post_info.post_info_bottom .post_info_item a:hover,\
        .post_item .post_date\
        {border-color: '+clr+';}\
        \
        .sc_button.sc_button_style_border.sc_button_bg_color2:hover,\
        .sc_button.sc_button_style_filled.sc_button_bg_color2:hover button,\
        .sc_button.sc_button_style_filled.sc_button_bg_color2:hover\
        {border-color: '+clr+' !important;}\
        \
        .sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title .sc_accordion_icon:after,\
        .menu_dark_border,\
        .menu_relayout.top_panel_opacity_transparent.top_panel_over .bg_tint_dark.top_panel_wrap,\
        .responsive_menu.top_panel_opacity_transparent.top_panel_over .bg_tint_dark.top_panel_wrap,\
        .bg_tint_dark.top_panel_wrap,\
        .post_item .post_date:after,\
        .post_item.post_featured_right .post_date:after\
        {border-top-color: '+clr+';}\
        \
        .sc_team.sc_team_style_4 .sc_team_item_avatar .sc_team_item_hover\
        {border-bottom-color:  rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.70);}\
        \
        .sc_skills.sc_skills_bar.sc_skills_horizontal .sc_skills_item.sc_skills_style_4 .sc_skills_count\
        {border-left-color: '+clr+' !important;}\
        \
        .bg_tint_dark .sc_contact_form.sc_contact_form_standard .sc_contact_form_button button,\
        .sc_tabs.sc_tabs_style_4 .sc_tabs_titles li.ui-state-active a,\
        .sc_tabs.sc_tabs_style_3 .sc_tabs_titles li.ui-state-active a:after,\
        .sc_tabs.sc_tabs_style_2 .sc_tabs_titles li.ui-state-active a,\
        .sc_slider_swiper .sc_slider_pagination_wrap span:hover,\
        .sc_slider_swiper .sc_slider_pagination_wrap .swiper-active-switch,\
        .sc_slider_controls_wrap a:hover,\
        .sc_skills.sc_skills_bar.sc_skills_horizontal .sc_skills_item.sc_skills_style_4 .sc_skills_count,\
        .sc_skills.sc_skills_bar.sc_skills_horizontal .sc_skills_item.sc_skills_style_1 .sc_skills_count,\
        .sc_scroll_controls_wrap a:hover,\
        .marked.sc_price_block:hover .sc_price_block_link .sc_button,\
        .marked.sc_price_block:hover .sc_price_block_money .sc_price,\
        .marked.sc_price_block:hover .sc_price_block_title,\
        .sc_infobox.sc_infobox_style_error,\
        .sc_icon_shape_round.sc_icon_bg_color3,\
        .sc_icon_shape_square.sc_icon_bg_color3,\
        .sc_highlight_style_1,\
        .sc_dropcaps.sc_dropcaps_style_5 .sc_dropcaps_item,\
        .sc_dropcaps.sc_dropcaps_style_4 .sc_dropcaps_item,\
        .sc_button.sc_button_style_filled.sc_button_bg_color2 .ink,\
        .sc_button.sc_button_style_filled.sc_button_bg_color2 button,\
        .sc_button.sc_button_style_filled.sc_button_bg_color2,\
        .tribe-events-day .tribe-events-day-time-slot h5,\
        .tribe-events-has-events,\
        .woocommerce ul.products li.product:nth-child(5n+3) span.new, .woocommerce-page ul.products li.product:nth-child(5n+3) span.new,\
        .woocommerce ul.products li.product:nth-child(5n+3) span.onsale, .woocommerce-page ul.products li.product:nth-child(5n+3) span.onsale,\
        .woocommerce ul.products li.product:nth-child(5n+5) span.new, .woocommerce-page ul.products li.product:nth-child(5n+5) span.new,\
        .woocommerce ul.products li.product:nth-child(5n+5) span.onsale, .woocommerce-page ul.products li.product:nth-child(5n+5) span.onsale,\
        .woocommerce a.button:hover, .woocommerce button.button:hover, .woocommerce input.button:hover, .woocommerce #respond input#submit:hover, .woocommerce #content input.button:hover, .woocommerce-page a.button:hover, .woocommerce-page button.button:hover, .woocommerce-page input.button:hover, .woocommerce-page #respond input#submit:hover, .woocommerce-page #content input.button:hover, .woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover, .woocommerce #respond input#submit.alt:hover, .woocommerce #content input.button.alt:hover, .woocommerce-page a.button.alt:hover, .woocommerce-page button.button.alt:hover, .woocommerce-page input.button.alt:hover, .woocommerce-page #respond input#submit.alt:hover, .woocommerce-page #content input.button.alt:hover,\
        .scroll_to_top:hover,\
        .widget_area .widget_product_tag_cloud a:hover,\
        .widget_area .widget_tag_cloud a:hover,\
        .comments_wrap .form-submit input[type="submit"]:hover,\
        .comments_wrap .form-submit input[type="button"]:hover,\
        .pagination_viewmore > a:hover,\
        .isotope_filters a.active,\
        .isotope_filters a:hover,\
        .menu_main_wrap .menu_main_nav_area .menu_main_responsive a:hover,\
        .top_panel_style_dark.top_panel_opacity_solid .top_panel_wrap,\
        .sc_table table tr:first-child,\
        .user_color_bgc,\
        .menu_dark_bgc,\
        .bg_tint_dark .menu_main_nav,\
        .menu_relayout.top_panel_opacity_transparent.top_panel_over .bg_tint_dark.top_panel_wrap,\
        .responsive_menu.top_panel_opacity_transparent.top_panel_over .bg_tint_dark.top_panel_wrap,\
        .bg_tint_dark.top_panel_wrap,\
        .post_info.post_info_bottom .post_info_item a:hover,\
        .post_item .post_date\
        {background-color: '+clr+';}\
        \
        .scroll_to_top:hover,\
        .sc_button.sc_button_style_border.sc_button_bg_color2:hover,\
        .custom_options #co_toggle\
        {background-color: '+clr+' !important;}\
        \
        .sc_team.sc_team_style_3 .sc_team_item_avatar .sc_team_item_hover,\
        .sc_team.sc_team_style_2 .sc_team_item_avatar .sc_team_item_hover\
        {background-color: rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.70);}\
        \
        #bbpress-forums div.bbp-topic-content a:hover,\
        #buddypress button:hover, #buddypress a.button:hover, #buddypress input[type="submit"]:hover, #buddypress input[type="button"]:hover, #buddypress input[type="reset"]:hover, #buddypress ul.button-nav li a:hover, #buddypress div.generic-button a:hover, #buddypress .comment-reply-link:hover, a.bp-title-button:hover, #buddypress div.item-list-tabs ul li.selected a:hover,\
        .user_color_bg,\
        .menu_dark_bg\
        {background: '+clr+';}\
		';
		// Link dark color
		hsb = themerex_hex2hsb(clr);
		hsb.s = Math.min(100, hsb.s + 15);
		hsb.b = Math.max(0, hsb.b - 20);
		clr = themerex_hsb2hex(hsb);
		custom_style += '';

	} else if (option == 'menu_color') {

		var clr = val;
		var rgb = themerex_hex2rgb(clr);
		// Menu color styles
		custom_style += '\
        .top_panel_style_light .copyright_wrap a:hover,\
        .top_panel_style_light .copyright_wrap .copyright_text > p a:hover,\
        .bg_tint_dark .sc_testimonials .sc_testimonials_grid .sc_testimonial_author a:hover,\
        .hover_icon:before,\
        .hover_icon:after,\
        .link_color,\
        .menu_color,\
        .menu_main_wrap .menu_main_nav > li ul li a:hover,\
        .menu_main_wrap .menu_main_nav > li ul li.current-menu-item > a,\
        .menu_main_wrap .menu_main_nav > li ul li.current-menu-ancestor > a,\
        .top_panel_style_light .content .search_wrap.search_style_regular .search_form_wrap .search_submit,\
        .top_panel_style_light .content .search_wrap.search_style_regular .search_icon,\
        .search_results .post_more,\
        .search_results .search_results_close,\
        .page_top_wrap .breadcrumbs a.breadcrumbs_item:hover,\
        .post_title .post_icon,\
        .isotope_item_courses .post_category a,\
        .isotope_item_courses .post_rating .reviews_stars_bg,\
        .isotope_item_courses .post_rating .reviews_stars_hover,\
        .isotope_item_courses .post_rating .reviews_value,\
        .isotope_item_courses_1 .post_title a,\
        .pagination_wrap .pager_next,\
        .pagination_wrap .pager_prev,\
        .pagination_wrap .pager_last,\
        .pagination_wrap .pager_first,\
        .post_item_404 .page_title,\
        .post_item_404 .page_subtitle,\
        .layout_single-courses .post_info .post_info_date,\
        .layout_single-courses .post_info .post_info_posted:before,\
        .widget_area .widget_text a:hover,\
        .widget_area .post_info a:hover,\
        .widget_area .post_info .post_info_counters .post_counters_item:before,\
        .woocommerce .woocommerce-message:before, .woocommerce-page .woocommerce-message:before,\
        .woocommerce div.product span.price, .woocommerce div.product p.price, .woocommerce #content div.product span.price, .woocommerce #content div.product p.price, .woocommerce-page div.product span.price, .woocommerce-page div.product p.price, .woocommerce-page #content div.product span.price, .woocommerce-page #content div.product p.price,.woocommerce ul.products li.product .price,.woocommerce-page ul.products li.product .price,\
        .woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover, .woocommerce #respond input#submit.alt:hover, .woocommerce #content input.button.alt:hover, .woocommerce-page a.button.alt:hover, .woocommerce-page button.button.alt:hover, .woocommerce-page input.button.alt:hover, .woocommerce-page #respond input#submit.alt:hover, .woocommerce-page #content input.button.alt:hover,\
        .woocommerce a.button:hover, .woocommerce button.button:hover, .woocommerce input.button:hover, .woocommerce #respond input#submit:hover, .woocommerce #content input.button:hover, .woocommerce-page a.button:hover, .woocommerce-page button.button:hover, .woocommerce-page input.button:hover, .woocommerce-page #respond input#submit:hover, .woocommerce-page #content input.button:hover,\
        .woocommerce .quantity input[type="button"]:hover, .woocommerce #content input[type="button"]:hover, .woocommerce-page .quantity input[type="button"]:hover, .woocommerce-page #content .quantity input[type="button"]:hover,\
        .woocommerce ul.cart_list li > .amount, .woocommerce ul.product_list_widget li > .amount, .woocommerce-page ul.cart_list li > .amount, .woocommerce-page ul.product_list_widget li > .amount,\
        .woocommerce ul.cart_list li span .amount, .woocommerce ul.product_list_widget li span .amount, .woocommerce-page ul.cart_list li span .amount, .woocommerce-page ul.product_list_widget li span .amount,\
        .woocommerce ul.cart_list li ins .amount, .woocommerce ul.product_list_widget li ins .amount, .woocommerce-page ul.cart_list li ins .amount, .woocommerce-page ul.product_list_widget li ins .amount,\
        .woocommerce.widget_shopping_cart .total .amount, .woocommerce .widget_shopping_cart .total .amount, .woocommerce-page.widget_shopping_cart .total .amount, .woocommerce-page .widget_shopping_cart .total .amount,\
        .woocommerce a:hover h3, .woocommerce-page a:hover h3,\
        .woocommerce .cart-collaterals .order-total strong, .woocommerce-page .cart-collaterals .order-total strong,\
        .woocommerce .checkout #order_review .order-total .amount, .woocommerce-page .checkout #order_review .order-total .amount,\
        .woocommerce .star-rating, .woocommerce-page .star-rating, .woocommerce .star-rating:before, .woocommerce-page .star-rating:before,\
        .widget_area .widgetWrap ul > li .star-rating span, .woocommerce #review_form #respond .stars a, .woocommerce-page #review_form #respond .stars a,\
        .woocommerce nav.woocommerce-pagination ul li a:focus, .woocommerce nav.woocommerce-pagination ul li a:hover, .woocommerce nav.woocommerce-pagination ul li span.current,\
        a.tribe-events-read-more:hover,\
        .tribe-events-button:hover,\
        .tribe-events-nav-previous a:hover,\
        .tribe-events-nav-next a:hover,\
        .tribe-events-widget-link a:hover,\
        .tribe-events-viewmore a:hover,\
        .sc_accordion.sc_accordion_style_2 .sc_accordion_item .sc_accordion_title.ui-state-active,\
        .sc_accordion.sc_accordion_style_2 .sc_accordion_item .sc_accordion_title.ui-state-active .sc_accordion_icon,\
        .sc_audio .sc_audio_author_name,\
        .sc_button.sc_button_style_filled.sc_button_bg_color1:hover,\
        .sc_button.sc_button_style_border,\
        .sc_button.sc_button_style_border.sc_button_bg_color1,\
        .sc_dropcaps.sc_dropcaps_style_1 .sc_dropcaps_item,\
        .sc_highlight_style_4,\
        .sc_icon_bg_color1,\
        .sc_icon_bg_color2,\
        .sc_icon_shape_round.sc_icon_bg_color1:hover,\
        .sc_icon_shape_square.sc_icon_bg_color1:hover,\
        a:hover .sc_icon_shape_round.sc_icon_bg_color1,\
        a:hover .sc_icon_shape_square.sc_icon_bg_color1,\
        .sc_icon_shape_round.sc_icon_bg_color2:hover,\
        .sc_icon_shape_square.sc_icon_bg_color2:hover,\
        a:hover .sc_icon_shape_round.sc_icon_bg_color2,\
        a:hover .sc_icon_shape_square.sc_icon_bg_color2,\
        .sc_list_style_iconed li:before,\
        .sc_list_style_iconed .sc_list_icon,\
        .sc_team_item .sc_team_item_info .sc_team_item_title a,\
        .sc_team.sc_team_style_1 .sc_team_item_info .sc_team_item_title a:hover,\
        .sc_team.sc_team_style_2 .sc_team_item_info .sc_team_item_title a:hover,\
        .sc_team.sc_team_style_3 .sc_team_item_info .sc_team_item_title a:hover,\
        .sc_team.sc_team_style_4 .sc_team_item_info .sc_team_item_title a:hover,\
        .sc_title_icon,\
        .sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title.ui-state-active,\
        .sc_toggles.sc_toggles_style_2 .sc_toggles_item .sc_toggles_title.ui-state-active,\
        .sc_toggles.sc_toggles_style_2 .sc_toggles_item .sc_toggles_title.ui-state-active .sc_toggles_icon,\
        .ih-item.square.effect_gym .img .post_title a:hover,\
        .bg_tint_dark .ih-item.square.effect_gym .img .post_title a:hover\
        {color: '+clr+';}\
        \
        .sc_countdown.sc_countdown_style_2 .sc_countdown_separator,\
        .sc_countdown.sc_countdown_style_2 .sc_countdown_label\
        {color: rgba('+rgb.r+','+rgb.g+','+rgb.b+' 0.80);}\
        \
        .isotope_item_courses .post_info_wrap .post_button .sc_button,\
        .sc_button.sc_button_style_filled.sc_button_bg_color1:hover\
        {color: '+clr+' !important;}\
        \
        .bg_tint_light .menu_main_nav,\
        .link_color_border,\
        .menu_color_border,\
        pre.code,\
        #toc .toc_item.current,\
        #toc .toc_item:hover,\
        .search_wrap.search_style_regular.search_opened,\
        .top_panel_style_light .content .search_wrap.search_style_regular.search_opened,\
        .pagination > a,\
        .post_format_aside.post_item_single .post_content p,\
        .post_format_aside .post_descr,\
        .isotope_filters a,\
        .pagination_single > .pager_numbers,\
        .pagination_single a,\
        .pagination_slider .pager_cur,\
        .pagination_pages > a,\
        .pagination_pages > span,\
        .comments_list_wrap > ul > li > ul.children,\
        .comments_list_wrap > ul > li > ul > li,\
        .comments_list_wrap > ul > li > ul.children > li > ul.children > li > ul.children > li > ul.children,\
        .comments_list_wrap > ul > li > ul > li > ul > li > ul > li > ul > li,\
        .widget_area .widget_calendar .today .day_wrap,\
        .woocommerce ul.products li.product .post_featured, .woocommerce-page ul.products li.product .post_featured,\
        .woocommerce ul.products li.product:nth-child(5n+1) .post_featured, .woocommerce-page ul.products li.product:nth-child(5n+1) .post_featured,\
        .woocommerce ul.products li.product:nth-child(5n+2) .post_featured, .woocommerce-page ul.products li.product:nth-child(5n+2) .post_featured,\
        .woocommerce ul.products li.product:nth-child(5n+4) .post_featured, .woocommerce-page ul.products li.product:nth-child(5n+4) .post_featured,\
        .woocommerce nav.woocommerce-pagination ul li a, .woocommerce nav.woocommerce-pagination ul li span.current,\
        .sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title.ui-state-active,\
        .sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title:hover,\
        .sc_accordion.sc_accordion_style_2 .sc_accordion_item .sc_accordion_title,\
        .sc_button.sc_button_style_filled,\
        .sc_button.sc_button_style_filled.sc_button_bg_color1,\
        .sc_button.sc_button_style_filled.sc_button_bg_color1:hover,\
        .sc_button.sc_button_style_border,\
        .sc_button.sc_button_style_border:hover,\
        .sc_button.sc_button_style_border.sc_button_bg_color1,\
        .sc_blogger.layout_date .sc_blogger_item .sc_blogger_date,\
        .sc_icon_shape_round.sc_icon_bg_color1,\
        .sc_icon_shape_square.sc_icon_bg_color1,\
        .sc_icon_shape_round.sc_icon_bg_color2,\
        .sc_icon_shape_square.sc_icon_bg_color2,\
        .sc_price_block:hover .sc_price_block_link .sc_button,\
        .marked.sc_price_block .sc_price_block_link .sc_button,\
        .sc_skills_bar .sc_skills_item .sc_skills_count,\
        .sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title.ui-state-active,\
        .sc_toggles.sc_toggles_style_2 .sc_toggles_item .sc_toggles_title .sc_toggles_icon\
        {border-color: '+clr+';}\
        \
        .sc_button.sc_button_style_border.sc_button_bg_color1:hover,\
        .sc_button.sc_button_style_filled.sc_button_bg_color1:hover\
        {border-color: '+clr+' !important;}\
        \
        .post_item_related .post_content_wrap,\
        .bg_tint_light.top_panel_wrap,\
        .menu_relayout.top_panel_opacity_transparent.top_panel_over .bg_tint_light.top_panel_wrap,\
        .responsive_menu.top_panel_opacity_transparent.top_panel_over .bg_tint_light.top_panel_wrap,\
        .woocommerce .woocommerce-message, .woocommerce-page .woocommerce-message,\
        .woocommerce a.button.alt:active, .woocommerce button.button.alt:active, .woocommerce input.button.alt:active, .woocommerce #respond input#submit.alt:active, .woocommerce #content input.button.alt:active, .woocommerce-page a.button.alt:active, .woocommerce-page button.button.alt:active, .woocommerce-page input.button.alt:active, .woocommerce-page #respond input#submit.alt:active, .woocommerce-page #content input.button.alt:active,\
        .woocommerce a.button:active, .woocommerce button.button:active, .woocommerce input.button:active, .woocommerce #respond input#submit:active, .woocommerce #content input.button:active, .woocommerce-page a.button:active, .woocommerce-page button.button:active, .woocommerce-page input.button:active, .woocommerce-page #respond input#submit:active, .woocommerce-page #content input.button:active,\
        .sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title.ui-state-active .sc_accordion_icon_opened:after,\
        .sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title:hover .sc_accordion_icon:after,\
        .sc_team_item .sc_team_item_info\
        {border-top-color: '+clr+';}\
        \
        .post_content.ih-item.circle.effect1 .spinner\
        {border-right-color: '+clr+';}\
        \
        .post_content.ih-item.circle.effect1 .spinner,\
        .comments_list_wrap .comment-respond\
        {border-bottom-color: '+clr+';}\
        \
        .border-left-color-imp\
        {border-left-color: '+clr+' !important;}\
        \
        .popup_wrap .popup_form_field .submit_button:hover,\
        .bg_tint_light.top_panel_wrap,\
        .menu_relayout.top_panel_opacity_transparent.top_panel_over .bg_tint_light.top_panel_wrap,\
        .responsive_menu.top_panel_opacity_transparent.top_panel_over .bg_tint_light.top_panel_wrap,\
        .bg_tint_light .menu_main_nav,\
        .link_color_bgc,\
        .menu_color_bgc,\
        ::selection,\
        ::-moz-selection,\
        .sc_section.cascade,\
        .sc_section.cascade.alt,\
        .top_panel_style_light.top_panel_opacity_solid .top_panel_wrap,\
        .menu_main_wrap .menu_main_nav_area .menu_main_responsive,\
        .isotope_item_courses .post_featured .post_mark_new,\
        .isotope_item_courses .post_featured .post_title,\
        .isotope_item_courses .post_content.ih-item.square.colored .info,\
        .isotope_filters a,\
        .pagination_single > .pager_numbers,\
        .pagination_single a,\
        .pagination_slider .pager_cur,\
        .pagination_pages > a,\
        .pagination_pages > span,\
        .pagination_viewmore > a,\
        .viewmore_loader,\
        .mfp-preloader span,\
        .sc_video_frame.sc_video_active:before,\
        .post_featured .post_nav_item:before,\
        .post_featured .post_nav_item .post_nav_info,\
        .error404.top_panel_style_light .page_content_wrap,\
        .scroll_to_top,\
        .woocommerce .widget_price_filter .ui-slider .ui-slider-range,.woocommerce-page .widget_price_filter .ui-slider .ui-slider-range,\
        .woocommerce a.button, .woocommerce button.button, .woocommerce input.button, .woocommerce #respond input#submit, .woocommerce #content input.button, .woocommerce-page a.button, .woocommerce-page button.button, .woocommerce-page input.button, .woocommerce-page #respond input#submit, .woocommerce-page #content input.button, .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt, .woocommerce #respond input#submit.alt, .woocommerce #content input.button.alt, .woocommerce-page a.button.alt, .woocommerce-page button.button.alt, .woocommerce-page input.button.alt, .woocommerce-page #respond input#submit.alt, .woocommerce-page #content input.button.alt,\
        .woocommerce span.new, .woocommerce-page span.new,\
        .woocommerce span.onsale, .woocommerce-page span.onsal,\
        .woocommerce ul.products li.product:nth-child(5n+2) span.new, .woocommerce-page ul.products li.product:nth-child(5n+2) span.new,\
        .woocommerce ul.products li.product:nth-child(5n+2) span.onsale, .woocommerce-page ul.products li.product:nth-child(5n+2) span.onsale,\
        .woocommerce ul.products li.product:nth-child(5n+4) span.new, .woocommerce-page ul.products li.product:nth-child(5n+4) span.new,\
        .woocommerce ul.products li.product:nth-child(5n+4) span.onsale, .woocommerce-page ul.products li.product:nth-child(5n+4) span.onsale,\
        .woocommerce nav.woocommerce-pagination ul li a, .woocommerce nav.woocommerce-pagination ul li span.current,\
        .woocommerce table.cart thead th, .woocommerce #content table.cart thead th, .woocommerce-page table.cart thead th, .woocommerce-page #content table.cart thead th,\
        .sc_accordion.sc_accordion_style_2 .sc_accordion_item .sc_accordion_title,\
        .sc_button.sc_button_style_filled,\
        .sc_button.sc_button_style_filled.sc_button_bg_color1,\
        .sc_button.sc_button_style_border:hover,\
        .sc_blogger.layout_date .sc_blogger_item .sc_blogger_date,\
        .sc_dropcaps.sc_dropcaps_style_3 .sc_dropcaps_item,\
        .sc_highlight_style_2,\
        .sc_icon_shape_round.sc_icon_bg_color1,\
        .sc_icon_shape_square.sc_icon_bg_color1,\
        .sc_icon_shape_round.sc_icon_bg_color2,\
        .sc_icon_shape_square.sc_icon_bg_color2,\
        .sc_popup:before,\
        .sc_price_block:hover .sc_price_block_title,\
        .marked.sc_price_block .sc_price_block_title,\
        .sc_price_block:hover .sc_price_block_money .sc_price,\
        .marked.sc_price_block .sc_price_block_money .sc_price,\
        .sc_price_block:hover .sc_price_block_link .sc_button,\
        .marked.sc_price_block .sc_price_block_link .sc_button,\
        .sc_scroll_controls_wrap a,\
        .sc_scroll_controls_type_side .sc_scroll_controls_wrap a,\
        .sc_skills_bar .sc_skills_item .sc_skills_count,\
        .sc_skills_counter .sc_skills_item.sc_skills_style_3 .sc_skills_count,\
        .sc_skills_counter .sc_skills_item.sc_skills_style_4 .sc_skills_count,\
        .sc_skills_counter .sc_skills_item.sc_skills_style_4 .sc_skills_info,\
        .sc_slider_controls_wrap a,\
        .sc_scroll_bar .swiper-scrollbar-drag:before,\
        .sc_tabs.sc_tabs_style_2 .sc_tabs_titles li a:hover,\
        .sc_tabs.sc_tabs_style_4 .sc_tabs_titles li a:hover,\
        .sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title.ui-state-active .sc_toggles_icon_opened,\
        .sc_toggles.sc_toggles_style_2 .sc_toggles_item .sc_toggles_title .sc_toggles_icon,\
        .sc_tooltip_parent .sc_tooltip,\
        .sc_tooltip_parent .sc_tooltip:before\
        {background-color: '+clr+';}\
        \
        .scroll_to_top,\
        .sc_scroll_bar .swiper-scrollbar-drag:before,\
        .sc_button.sc_button_style_border.sc_button_bg_color1:hover,\
        .sc_tabs.sc_tabs_style_2 .sc_tabs_titles li a:hover,\
        .sc_dropcaps.sc_dropcaps_style_3 .sc_dropcaps_item,\
        .sc_accordion.sc_accordion_style_2 .sc_accordion_item .sc_accordion_title:not(.ui-state-active)\
        {background-color: '+clr+' !important;}\
        \
        .sc_countdown.sc_countdown_style_2 .sc_countdown_digits span\
        {background-color: rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.50);}\
        \
        .widget_area .post_item .post_thumb_link:after,\
        .widget_area .widget_flickr .flickr_badge_image a:after\
        {background: rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.6);}\
        \
        .ih-item.square.effect_gym .img > a:hover .sc2:before\
        {background: rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.6);}\
        \
        .sc_slider_swiper .sc_slider_info\
        {background-color: rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.80) !important;}\
        \
        .link_color_bg,\
        .menu_color_bg,\
        .post_content.ih-item.circle.effect1.colored .info,\
        .post_content.ih-item.circle.effect2.colored .info,\
        .post_content.ih-item.circle.effect3.colored .info,\
        .post_content.ih-item.circle.effect4.colored .info,\
        .post_content.ih-item.circle.effect5.colored .info .info-back,\
        .post_content.ih-item.circle.effect6.colored .info,\
        .post_content.ih-item.circle.effect7.colored .info,\
        .post_content.ih-item.circle.effect8.colored .info,\
        .post_content.ih-item.circle.effect9.colored .info,\
        .post_content.ih-item.circle.effect10.colored .info,\
        .post_content.ih-item.circle.effect11.colored .info,\
        .post_content.ih-item.circle.effect12.colored .info,\
        .post_content.ih-item.circle.effect13.colored .info,\
        .post_content.ih-item.circle.effect14.colored .info,\
        .post_content.ih-item.circle.effect15.colored .info,\
        .post_content.ih-item.circle.effect16.colored .info,\
        .post_content.ih-item.circle.effect18.colored .info .info-back,\
        .post_content.ih-item.circle.effect19.colored .info,\
        .post_content.ih-item.circle.effect20.colored .info .info-back,\
        .post_content.ih-item.square.effect1.colored .info,\
        .post_content.ih-item.square.effect2.colored .info,\
        .post_content.ih-item.square.effect3.colored .info,\
        .post_content.ih-item.square.effect4.colored .mask1,\
        .post_content.ih-item.square.effect4.colored .mask2,\
        .post_content.ih-item.square.effect5.colored .info,\
        .post_content.ih-item.square.effect6.colored .info,\
        .post_content.ih-item.square.effect7.colored .info,\
        .post_content.ih-item.square.effect8.colored .info,\
        .post_content.ih-item.square.effect9.colored .info .info-back,\
        .post_content.ih-item.square.effect10.colored .info,\
        .post_content.ih-item.square.effect11.colored .info,\
        .post_content.ih-item.square.effect12.colored .info,\
        .post_content.ih-item.square.effect13.colored .info,\
        .post_content.ih-item.square.effect14.colored .info,\
        .post_content.ih-item.square.effect15.colored .info,\
        .post_content.ih-item.circle.effect20.colored .info .info-back,\
        .post_content.ih-item.square.effect_book.colored .info,\
        .woocommerce .widget_price_filter .ui-slider .ui-slider-handle, .woocommerce-page .widget_price_filter .ui-slider .ui-slider-handle,\
        #bbpress-forums div.bbp-topic-content a,\
        #buddypress button, #buddypress a.button, #buddypress input[type="submit"], #buddypress input[type="button"], #buddypress input[type="reset"], #buddypress ul.button-nav li a, #buddypress div.generic-button a, #buddypress .comment-reply-link, a.bp-title-button, #buddypress div.item-list-tabs ul li.selected a,\
        .sc_button.sc_button_style_filled .ink,\
        .sc_button.sc_button_style_filled.sc_button_bg_color1 .ink\
        {background: '+clr+';}\
        \
        .post_content.ih-item.circle.effect1.colored .info,\
        .post_content.ih-item.circle.effect2.colored .info,\
        .post_content.ih-item.circle.effect5.colored .info .info-back,\
        .post_content.ih-item.circle.effect19.colored .info,\
        .post_content.ih-item.square.effect4.colored .mask1,\
        .post_content.ih-item.square.effect4.colored .mask2,\
        .post_content.ih-item.square.effect6.colored .info,\
        .post_content.ih-item.square.effect7.colored .info,\
        .post_content.ih-item.square.effect12.colored .info,\
        .post_content.ih-item.square.effect13.colored .info,\
        .post_content.ih-item.square.effect_dir.colored .info,\
        .post_content.ih-item.square.effect_shift.colored .info\
        {background: rgba('+rgb.r+','+rgb.g+','+rgb.b+',0.6);}\
		';
		// Menu dark color
		hsb = themerex_hex2hsb(clr);
		hsb.s = Math.min(100, hsb.s + 15);
		hsb.b = Math.max(0, hsb.b - 20);
		clr = themerex_hsb2hex(hsb);
		custom_style += '';

	} else if (option == 'user_color') {

		var clr = val;
		var rgb = themerex_hex2rgb(clr);
		// User menu color styles
		custom_style += '';
		// User menu dark color
		hsb = themerex_hex2hsb(clr);
		hsb.s = Math.min(100, hsb.s + 15);
		hsb.b = Math.max(0, hsb.b - 20);
		clr = themerex_hsb2hex(hsb);
		custom_style += '';

	//} else if (option == 'body_style') {

		//Uncomment next row to apply changes without reloading page
		//jQuery('body').removeClass('body_style_boxed body_style_wide body_style_fullwide body_style_fullscreen').addClass('body_style_'+val);
	} else {
		themerex_custom_options_show_loader();
		//location.reload();
		var loc = jQuery('#co_site_url').val();
		var params = THEMEREX_GLOBALS['co_add_params']!=undefined ? THEMEREX_GLOBALS['co_add_params'] : {};
		params[option] = val;
		var pos = -1, pos2 = -1, pos3 = -1;
		for (var option in params) {
			val = params[option];
			pos = pos2 = pos3 = -1;
			if ((pos = loc.indexOf('?')) > 0) {
				if ((pos2 = loc.indexOf(option, pos)) > 0) {
					if ((pos3 = loc.indexOf('&', pos2)) > 0)
						loc = loc.substr(0, pos2) + option+'='+val + loc.substr(pos3);
					else
						loc = loc.substr(0, pos2) + option+'='+val;
				} else
					loc += '&'+option+'='+val;
			} else
				loc += '?'+option+'='+val;
		}
		window.location.href = loc;
		return;

	}

	if (custom_style != '') {
		var styles = jQuery('#themerex-customizer-styles').length > 0 ? jQuery('#themerex-customizer-styles') : '';
		if (styles.length == 0)
			jQuery('head').append('<style id="themerex-customizer-styles-'+option+'" type="text/css">'+custom_style+'</style>');
		else
			styles.html(custom_style);
	}
}
