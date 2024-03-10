/* Template globals */
"use strict";
    if (typeof TRX_ADDONS_STORAGE == 'undefined') var TRX_ADDONS_STORAGE  = {};
    CINDY_J_STORAGE['ajax_url'] = '#';
    CINDY_J_STORAGE['ajax_nonce'] = '25974a75d7';
    CINDY_J_STORAGE['site_url'] = 'http:\/\/blog-cv-html.axiomthemes.com';
    CINDY_J_STORAGE['user_logged_in'] = '';
    CINDY_J_STORAGE['mobile_layout_width'] = 960;      
    CINDY_J_STORAGE['menu_animation_in'] = 'none';
    CINDY_J_STORAGE['menu_animation_out'] = 'none'; 
    CINDY_J_STORAGE['use_mediaelements'] = 1;
    CINDY_J_STORAGE['menu_slider'] = true;
    CINDY_J_STORAGE['media_elements_enabled'] = true;
    CINDY_J_STORAGE['css_animation'] = true;
    CINDY_J_STORAGE['popup_engine'] = 'magnific';
    CINDY_J_STORAGE['email_mask'] = '^([a-zA-Z0-9_\\-]+\\.)*[a-zA-Z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$';
    CINDY_J_STORAGE['isotope_resize_delta'] = 0.3;
    CINDY_J_STORAGE['error_message_box'] = null;
    CINDY_J_STORAGE['top_panel_height'] = 0;
    CINDY_J_STORAGE['message_maxlength'] = 1000;
    CINDY_J_STORAGE['site_scheme'] = 'scheme_grey';
    CINDY_J_STORAGE['admin_mode'] = '';

var TRX_ADDONS_STORAGE = {
    "ajax_url": "#",
    "ajax_nonce": "96cdd856d1",
    "site_url": "http:\/\/blog-cv-html.axiomthemes.com",
    "vc_edit_mode": "0",
    "popup_engine": "magnific",
    "user_logged_in": "0",
    "email_mask": "^([a-zA-Z0-9_\\-]+\\.)*[a-zA-Z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$",
    "msg_ajax_error": "Invalid server answer!",
    "msg_magnific_loading": "Loading image",
    "msg_magnific_error": "Error loading image",
    "msg_error_like": "Error saving your like! Please, try again later.",
    "msg_field_name_empty": "The name can't be empty",
    "msg_field_email_empty": "Too short (or empty) email address",
    "msg_field_email_not_valid": "Invalid email address",
    "msg_field_text_empty": "The message text can't be empty",
    "msg_send_complete": "Send message complete!",
    "msg_send_error": "Transmit failed!"
};

var CINDY_J_STORAGE = {
    "ajax_url": "#",
    "ajax_nonce": "96cdd856d1",
    "site_url": "http:\/\/blog-cv.axiomthemes.com",
    "user_logged_in": "",
    "mobile_layout_width": "960",
    "menu_animation_in": "none",
    "menu_animation_out": "none",
    "use_mediaelements": "1",
    "message_maxlength": "1000",
    "site_scheme": "scheme_default",
    "admin_mode": "",
    "email_mask": "^([a-zA-Z0-9_\\-]+\\.)*[a-zA-Z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$",
    "strings": {
        "ajax_error": "Invalid server answer!",
        "error_global": "Error data validation!",
        "name_empty": "The name can&#039;t be empty",
        "name_long": "Too long name",
        "email_empty": "Too short (or empty) email address",
        "email_long": "Too long email address",
        "email_not_valid": "Invalid email address",
        "text_empty": "The message text can&#039;t be empty",
        "text_long": "Too long message text",
        "search_error": "Search error! Try again later.",
        "send_complete": "Send message complete!",
        "send_error": "Transmit failed!"
    }
};

// Javascript String constants 
(function(html) {
    "use strict";
    html.className = html.className.replace(/\bno-js\b/, 'js')
})(document.documentElement);

 // instagram parameters */
var sb_instagram_js_options = {
    "sb_instagram_at": "1960223991.3a81a9f.07f71ea44b414d85b30947571a7a8e52"
};

// Atach Event Data */
(function() {
    function addEventListener(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, handler);
        }
    }
})();

// Subscribe Data */
(function() {
    if (!window.mc4wp) {
        window.mc4wp = {
            listeners: [],
            forms: {
                on: function(event, callback) {
                    window.mc4wp.listeners.push({
                        event: event,
                        callback: callback
                    });
                }
            }
        }
    }
})();

(function(d, s, a, i, j, r, l, m, t) {
    try {
        l = d.getElementsByTagName('a');
        t = d.createElement('textarea');
        for (i = 0; l.length - i; i++) {
            try {
                a = l[i].href;
                s = a.indexOf('/cdn-cgi/l/email-protection');
                m = a.length;
                if (a && s > -1 && m > 28) {
                    j = 28 + s;
                    s = '';
                    if (j < m) {
                        r = '0x' + a.substr(j, 2) | 0;
                        for (j += 2; j < m && a.charAt(j) != 'X'; j += 2) s += '%' + ('0' + ('0x' + a.substr(j, 2) ^ r).toString(16)).slice(-2);
                        j++;
                        s = decodeURIComponent(s) + a.substr(j, m - j)
                    }
                    t.innerHTML = s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                    l[i].href = 'mailto:' + t.value
                }
            } catch (e) {}
        }
    } catch (e) {}
})(document);



function trx_addons_contact_form_validate(form) {
    "use strict";
    var url = form.attr('action');
    if (url == '') return false;
    form.find('input').removeClass('trx_addons_error_field');
    var error = trx_addons_form_validate(form, {
        rules: [{
            field: "name",
            min_length: {
                value: 1,
                message: TRX_ADDONS_STORAGE['msg_field_name_empty']
            },
        }, {
            field: "email",
            min_length: {
                value: 7,
                message: TRX_ADDONS_STORAGE['msg_field_email_empty']
            },
            mask: {
                value: TRX_ADDONS_STORAGE['email_mask'],
                message: TRX_ADDONS_STORAGE['msg_field_email_not_valid']
            }
        }, {
            field: "message",
            min_length: {
                value: 3,
                message: TRX_ADDONS_STORAGE['msg_field_text_empty']
            },
        }]
    });
    if (!error && url != '#') {
        jQuery.post(url, {
            action: "send_contact_form",
            nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
            data: form.serialize()
        }).done(function(response) {
            "use strict";
            var rez = {};
            try {
                rez = JSON.parse(response);
            } catch (e) {
                rez = {
                    error: TRX_ADDONS_STORAGE['msg_ajax_error']
                };
                console.log(response);
            }
            var result = form.find(".trx_addons_message_box").toggleClass("trx_addons_message_box_error", false).toggleClass("trx_addons_message_box_success", false);
            if (rez.error === '') {
                form.get(0).reset();
                result.addClass("trx_addons_message_box_success").html(TRX_ADDONS_STORAGE['msg_send_complete']).toggleClass('trx_addons_message_box_success', false);
            } else {
                result.addClass("trx_addons_message_box_error").html(TRX_ADDONS_STORAGE['msg_send_error'] + ' ' + rez.error);
            }
            result.fadeIn().delay(3000).fadeOut();
        });
    }
    return !error;
}