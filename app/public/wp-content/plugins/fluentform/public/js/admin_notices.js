!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/",t(t.s=856)}({856:function(n,e,t){n.exports=t(857)},857:function(n,e){({initNagButton:function(){jQuery(".ff_nag_cross").on("click",(function(n){n.preventDefault();var e=jQuery(this).attr("data-notice_name"),t=jQuery(this).attr("data-notice_type");jQuery("#ff_notice_"+e).remove(),jQuery.post(ajaxurl,{action:"fluentform_notice_action",notice_name:e,action_type:t}).then((function(n){console.log(n)})).fail((function(n){console.log(n)}))}))},initTrackYes:function(){jQuery(".ff_track_yes").on("click",(function(n){n.preventDefault();var e=jQuery(this).attr("data-notice_name"),t=0;jQuery("#ff-optin-send-email").attr("checked")&&(t=1),jQuery("#ff_notice_"+e).remove(),jQuery.post(ajaxurl,{action:"fluentform_notice_action_track_yes",notice_name:e,email_enabled:t}).then((function(n){console.log(n)})).fail((function(n){console.log(n)}))}))},initSmtpInstall:function(){var n=jQuery(".intstall_fluentsmtp");n.on("click",(function(e){var t=this;e.preventDefault(),jQuery(this).attr("disabled",!0),jQuery(".ff_addon_installing").show(),jQuery.post(ajaxurl,{action:"fluentform_install_fluentsmtp"}).then((function(e){n.text("Please wait...."),e.is_installed&&e.config_url?window.location.href=e.config_url:e.is_installed?location.reload():alert("something is wrong when installing the plugin. Please install FluentSMTP manually."),console.log(e)})).fail((function(n){var e="something is wrong when installing the plugin. Please install FluentSMTP manually.";n.responseJSON&&n.responseJSON.message&&(e=n.responseJSON.message),alert(e),console.log(n)})).always((function(){jQuery(t).attr("disabled",!1),jQuery(".ff_addon_installing").hide()}))}))},initReady:function(){var n=this;jQuery(document).ready((function(){n.initNagButton(),n.initTrackYes(),n.initSmtpInstall()}))}}).initReady()}});