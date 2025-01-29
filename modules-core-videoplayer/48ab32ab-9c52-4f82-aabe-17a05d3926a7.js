! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "48ab32ab-9c52-4f82-aabe-17a05d3926a7", e._sentryDebugIdIdentifier = "sentry-dbid-48ab32ab-9c52-4f82-aabe-17a05d3926a7")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [94], {
    539: (e, a, l) => {
      "use strict";
      l.d(a, {
        LD: () => o
      });
      var t = l(1788);
      (0, t.defineMessages)({
        card_learn_more: {
          id: "card_learn_more",
          defaultMessage: "Learn More"
        },
        events_deck_next_aria_label: {
          id: "events_deck_next_aria_label",
          defaultMessage: "Next Page of Events"
        },
        events_deck_previous_aria_label: {
          id: "events_deck_previous_aria_label",
          defaultMessage: "Previous Page of Events"
        },
        events_deck_modal_next_aria_label: {
          id: "events_deck_modal_next_aria_label",
          defaultMessage: "Next event"
        },
        events_deck_modal_previous_aria_label: {
          id: "events_deck_modal_previous_aria_label",
          defaultMessage: "Previous event"
        },
        events_deck_modal_close_label: {
          id: "events_deck_modal_close_label",
          defaultMessage: "Close"
        },
        events_deck_paging_label: {
          id: "events_deck_paging_label",
          defaultMessage: "On page {currentPage} of {totalPages}"
        },
        events_deck_modal_group_label: {
          id: "events_deck_modal_group_label",
          defaultMessage: "Event Details"
        }
      }), (0, t.defineMessages)({
        engagement_legal_text: {
          id: "engagement_legal_text",
          defaultMessage: "Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms."
        },
        engagement_faq: {
          id: "engagement_faq",
          defaultMessage: "FAQ"
        },
        engagement_faqs: {
          id: "engagement_faqs",
          defaultMessage: "FAQs"
        },
        engagement_link_account: {
          id: "engagement_link_account",
          defaultMessage: "Link Another Account"
        },
        engagement_link_console_account: {
          id: "engagement_link_console_account",
          defaultMessage: "Link Game Account"
        }
      }), (0, t.defineMessages)({
        careers_home_msg: {
          id: "careers_home_msg",
          defaultMessage: "<p>Join a tight-knit team responsible for creating and publishing some of the most popular, innovative and critically acclaimed interactive entertainment in the world including the Grand Theft Auto series, the Red Dead series and many more.</p><p>Known for our dedication to quality and authenticity, a career at Rockstar Games is an opportunity to work on some of the most cutting edge, creatively rewarding and challenging projects available in any entertainment medium with some of the most talented people in the industry.</p><p>We offer successful candidates highly competitive salary and compensation packages, including a comprehensive benefits package for all eligible employees. Rockstar Games is an equal opportunity employer.</p>"
        }
      }), (0, t.defineMessages)({
        clr_nav_home: {
          id: "clr_nav_home",
          defaultMessage: "Home"
        },
        clr_nav_news: {
          id: "clr_nav_news",
          defaultMessage: "News"
        },
        clr_nav_releases: {
          id: "clr_nav_releases",
          defaultMessage: "Releases"
        },
        clr_nav_about: {
          id: "clr_nav_about",
          defaultMessage: "About"
        },
        clr_nav_store: {
          id: "clr_nav_store",
          defaultMessage: "Store"
        },
        clr_all_releases_link: {
          id: "clr_all_releases_link",
          defaultMessage: "See All Releases"
        },
        clr_all_store_link: {
          id: "clr_all_store_link",
          defaultMessage: "See All Store Items"
        },
        clr_news_header: {
          id: "clr_news_header",
          defaultMessage: "News"
        },
        clr_read_more: {
          id: "clr_read_more",
          defaultMessage: "Read More"
        },
        clr_show_more: {
          id: "clr_show_more",
          defaultMessage: "Show More"
        },
        clr_releases_header: {
          id: "clr_releases_header",
          defaultMessage: "Releases"
        },
        clr_about_us_header: {
          id: "clr_about_us_header",
          defaultMessage: "About Us"
        },
        clr_about_us_body: {
          id: "clr_about_us_body",
          defaultMessage: "CircoLoco Records is a partnership between CircoLoco, one of the most influential brands in global club culture and Rockstar Games, creators of some of the world's most popular and critically acclaimed video games, with a view to supporting underground dance music culture worldwide in the physical and digital worlds."
        },
        clr_about_us_body_2: {
          id: "clr_about_us_body_2",
          defaultMessage: "Representing house and techno for over 20 years through its parties at Ibiza's DC10 and around the world, CircoLoco's dancefloor has become a principal intersection between underground dance music and elements of fashion, art and wider culture. The launch of CircoLoco Records reinforces CircoLoco's commitment to championing forward-thinking dance music artists beyond the club."
        },
        clr_about_us_body_3: {
          id: "clr_about_us_body_3",
          defaultMessage: "Creators of some of the world's most popular video games including the Grand Theft Auto and Red Dead Redemption series, Rockstar Games' reputation for supporting music and club culture stretches back to the brand's inception in 1998. Whether through the meticulously curated radio stations found in the Grand Theft Auto series or the virtual dance clubs of Grand Theft Auto Online featuring some of the world's greatest DJ's, Rockstar Games has consistently championed artists and club culture."
        },
        clr_about_us_body_4: {
          id: "clr_about_us_body_4",
          defaultMessage: "CircoLoco Records will break new ground in an effort to support dance music culture and represents an opportunity to elevate the scene through the collective power of these two entertainment brands."
        },
        clr_legal_disclaimer: {
          id: "clr_legal_disclaimer",
          defaultMessage: "Rockstar Records LLC. All rights reserved. © 2023. R* is a trademark of Take-Two Interactive Software, Inc. The CircoLoco Records mark used under license from A&A Music Property, S.L. The CircoLoco Records Store is operated by Xsolla."
        },
        clr_press_footer_link_text: {
          id: "clr_press_footer_link_text",
          defaultMessage: "Press"
        },
        clr_submissions_footer_link_text: {
          id: "clr_submissions_footer_link_text",
          defaultMessage: "Submissions"
        },
        clr_terms_footer_link_text: {
          id: "clr_terms_footer_link_text",
          defaultMessage: "Terms & Conditions"
        },
        clr_privacy_footer_link_text: {
          id: "clr_privacy_footer_link_text",
          defaultMessage: "Privacy Policy"
        },
        clr_cookie_policy_footer_link_text: {
          id: "clr_cookie_policy_footer_link_text",
          defaultMessage: "Cookie Policy"
        },
        clr_cookie_settings_footer_link_text: {
          id: "clr_cookie_settings_footer_link_text",
          defaultMessage: "Cookie Settings"
        },
        clr_subscribe_header: {
          id: "clr_subscribe_header",
          defaultMessage: "Join the mailing list"
        },
        clr_subscribe_body: {
          id: "clr_subscribe_body",
          defaultMessage: "Get CircoLoco Records news – including release announcements, contests, special events, and more – delivered directly to your inbox."
        },
        clr_subscribe: {
          id: "clr_subscribe",
          defaultMessage: "Subscribe"
        },
        clr_subscribe_legal_text: {
          id: "clr_subscribe_legal_text",
          defaultMessage: "By subscribing to our newsletter, you agree to CircoLoco Records Privacy Policy and Terms of Use."
        },
        clr_subscribe_email: {
          id: "clr_subscribe_email",
          defaultMessage: "Email Address"
        },
        clr_subscribe_date_of_birth: {
          id: "clr_subscribe_date_of_birth",
          defaultMessage: "Date of Birth"
        },
        clr_subscribe_country: {
          id: "clr_subscribe_country",
          defaultMessage: "Country"
        }
      }), (0, t.defineMessages)({
        legacy_header_cta_label_reddeadredemption: {
          id: "legacy_header_cta_label_reddeadredemption",
          defaultMessage: "Buy Now"
        },
        highlights_title_std: {
          id: "highlights_title_std",
          defaultMessage: "Features"
        }
      }), (0, t.defineMessages)({
        rsg_total_results_message: {
          id: "rsg_total_results_message",
          defaultMessage: "Showing {Tab} filtered by {Query}"
        },
        rsg_no_results: {
          id: "rsg_no_results",
          defaultMessage: "Sorry, there were no results."
        },
        resources_tile_header: {
          id: "resources_tile_header",
          defaultMessage: "Explore Safety Resources"
        },
        resources_tile_description: {
          id: "resources_tile_description",
          defaultMessage: "Quickly find resources if you or someone you know is struggling and in need of help."
        },
        safety_learn_more_button: {
          id: "safety_learn_more_button",
          defaultMessage: "Learn More"
        },
        community_guidelines_tile_header: {
          id: "community_guidelines_tile_header",
          defaultMessage: "Explore Community Guidelines"
        },
        community_guidelines_tile_description: {
          id: "community_guidelines_tile_description",
          defaultMessage: "These guidelines outline the values we uphold and the policies we enforce to ensure player experiences are fair, respectful, and safe."
        },
        support_tile_header: {
          id: "support_tile_header",
          defaultMessage: "Need account assistance?"
        },
        support_tile_description: {
          id: "support_tile_description",
          defaultMessage: "For additional assistance with managing your account or data and privacy settings, visit our Customer Support page."
        },
        safety_get_support_button: {
          id: "safety_get_support_button",
          defaultMessage: "Get Support"
        },
        community_guidelines_image_alt_text: {
          id: "community_guidelines_image_alt_text",
          defaultMessage: "Say Sorry, Be Nice"
        },
        handshake_icon_alt_text: {
          id: "handshake_icon_alt_text",
          defaultMessage: "Handshake icon"
        },
        heartbook_icon_alt_text: {
          id: "heartbook_icon_alt_text",
          defaultMessage: "Book with heart icon"
        },
        support_chat_icon_alt_text: {
          id: "support_chat_icon_alt_text",
          defaultMessage: "Support chat icon"
        },
        resources_last_updated_date: {
          id: "resources_last_updated_date",
          defaultMessage: "November 18, 2024"
        }
      });
      const o = (0, t.defineMessages)({
        videoplayer_playlist_active_badge: {
          id: "videoplayer_playlist_active_badge",
          defaultMessage: "Now Playing"
        },
        videoplayer_unmute_tap: {
          id: "videoplayer_unmute_tap",
          defaultMessage: "Tap anywhere to unmute."
        },
        videoplayer_unmute_click: {
          id: "videoplayer_unmute_click",
          defaultMessage: "Click anywhere to unmute."
        },
        videoplayer_share_title: {
          id: "videoplayer_share_title",
          defaultMessage: "Share"
        },
        videoplayer_share_copy: {
          id: "videoplayer_share_copy",
          defaultMessage: "Copy"
        },
        videoplayer_share_time_copied: {
          id: "videoplayer_share_copied",
          defaultMessage: "Link Copied"
        },
        videoplayer_share_time_copy: {
          id: "videoplayer_share_time_copy",
          defaultMessage: "Start shared video at"
        },
        videoplayer_airplay_option_label: {
          id: "videoplayer_airplay_option_label",
          defaultMessage: "AirPlay"
        },
        videoplayer_cast_to_tv_option_label: {
          id: "videoplayer_cast_to_tv_option_label",
          defaultMessage: "Cast to TV"
        },
        videoplayer_tv_code_option_label: {
          id: "videoplayer_tv_code_option_label",
          defaultMessage: "Link with TV Code"
        },
        videoplayer_error: {
          id: "videoplayer_error",
          defaultMessage: "Something went wrong with the video player."
        },
        videoplayer_airplay_not_supported_error: {
          id: "videoplayer_airplay_not_supported_error",
          defaultMessage: "AirPlay not supported in this browser."
        },
        videoplayer_video_not_found_error: {
          id: "videoplayer_video_not_found_error",
          defaultMessage: "Video element not found."
        },
        videoplayer_airplay_button_label: {
          id: "videoplayer_airplay_button_label",
          defaultMessage: "Screen Share"
        },
        videoplayer_captions_button_label: {
          id: "videoplayer_captions_button_label",
          defaultMessage: "Caption Settings Menu"
        },
        videoplayer_downloads_button_label: {
          id: "videoplayer_downloads_button_label",
          defaultMessage: "Download Options Menu"
        },
        videoplayer_fullscreen_button_label: {
          id: "videoplayer_fullscreen_button_label",
          defaultMessage: "Fullscreen Toggle"
        },
        videoplayer_play_pause_button_label: {
          id: "videoplayer_play_pause_button_label",
          defaultMessage: "Play/Pause Toggle"
        },
        videoplayer_progress_bar_label: {
          id: "videoplayer_progress_bar_label",
          defaultMessage: "Progress Bar"
        },
        videoplayer_quality_settings_button_label: {
          id: "videoplayer_quality_settings_button_label",
          defaultMessage: "Quality Settings Menu"
        },
        videoplayer_share_menu_button_label: {
          id: "videoplayer_share_menu_button_label",
          defaultMessage: "Share Menu"
        },
        videoplayer_share_link_button_label: {
          id: "videoplayer_share_link_button_label",
          defaultMessage: "Share to {name}"
        },
        videoplayer_volume_toggle_button_label: {
          id: "videoplayer_volume_toggle_button_label",
          defaultMessage: "Mute/Unmute Toggle"
        },
        videoplayer_captions_menu_header: {
          id: "videoplayer_captions_menu_header",
          defaultMessage: "Subtitles / CC"
        },
        videoplayer_downloads_menu_header: {
          id: "videoplayer_downloads_menu_header",
          defaultMessage: "Download"
        },
        videoplayer_airplay_menu_header: {
          id: "videoplayer_airplay_menu_header",
          defaultMessage: "Download"
        },
        videoplayer_quality_settings_menu_header: {
          id: "videoplayer_quality_settings_menu_header",
          defaultMessage: "Quality Settings"
        },
        videoplayer_share_menu_header: {
          id: "videoplayer_share_menu_header",
          defaultMessage: "Share"
        },
        videoplayer_captions_menu_off_label: {
          id: "videoplayer_captions_menu_off_label",
          defaultMessage: "Off"
        }
      })
    },
    5138: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => r,
        C: () => t
      });
      const t = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        o = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        r = () => {
          let e;
          const {
            location: a
          } = window, l = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), t = o.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [t, o] = a;
            return o === l && (e = {
              site: t,
              subDomain: o
            }, !0)
          })) >= 0)), r = o[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    171: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => c
      });
      var t = l(4099),
        o = l.n(t);
      const r = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        i = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}');
      var s = l(8096);
      const n = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        d = e => {
          let a, {
            type: l = n.SPINNING
          } = e;
          switch (l) {
            case n.THREE_DOTS:
              a = i;
              break;
            case n.SPINNING:
            default:
              a = r
          }
          return (0, s.jsx)(o(), {
            loop: !0,
            autoplay: !0,
            animationData: a,
            style: {
              width: "50px",
              height: "50px"
            },
            "data-testid": "loader-spinner"
          })
        },
        c = () => (0, s.jsx)("div", {
          className: "rockstargames-modules-core-videoplayerb93df9086c68643b2659f4db7a32cea3",
          children: (0, s.jsx)(d, {})
        })
    },
    5937: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => r
      });
      const t = {
        wrapper: "rockstargames-modules-core-videoplayerd123f0029451dc514d7dcc334036d022",
        large: "rockstargames-modules-core-videoplayerd9bcf68dc7a6abafcbc0d4fe15daae92",
        badge: "rockstargames-modules-core-videoplayerc4ed39bbd2766eb49440c0dd7422bc88",
        hero: "rockstargames-modules-core-videoplayera2683dc04cb861acee168e8f9655c73e",
        stdWrapper: "rockstargames-modules-core-videoplayerbf0406fb4aea802764a3151ce133d5f6"
      };
      var o = l(8096);
      const r = e => {
        let {
          children: a,
          hero: l = !1,
          wrapper: r = !0,
          titleCrop: i
        } = e;
        return (0, o.jsx)("div", {
          className: [t.wrapper, l ? t.hero : "", r ? t.stdWrapper : ""].join(" "),
          ...i ? {
            style: {
              "--videoplayer-info-crop": i
            }
          } : {},
          children: a
        })
      }
    },
    9094: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => sa
      });
      var t = l(2229),
        o = l(9623),
        r = l(5138);
      var i = l(8096);
      class s extends t.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, i.jsxs)("div", {
            className: "rockstargames-modules-core-videoplayerd5c408a8b618087ef4bb452f96526b2b",
            children: [(0, i.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, i.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      var n = l(7224),
        d = l(5966),
        c = l(1788),
        u = l(66),
        _ = l(539),
        p = l(6454),
        v = l(3581),
        m = l.n(v),
        b = l(1904);
      const y = (0, c.defineMessages)({
          videoplayer_play_button_label: {
            id: "videoplayer_play_button_label",
            defaultMessage: "Play button"
          },
          videoplayer_pause_button_label: {
            id: "videoplayer_pause_button_label",
            defaultMessage: "Pause button"
          }
        }),
        f = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: s = "20",
            viewBox: n = "0 0 20 20",
            width: d = "20"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            height: s,
            width: d,
            viewBox: n,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M4.16797 3.33333C4.16797 2.8731 4.54106 2.5 5.0013 2.5H8.33464C8.79487 2.5 9.16797 2.8731 9.16797 3.33333V16.6667C9.16797 17.1269 8.79487 17.5 8.33464 17.5H5.0013C4.54106 17.5 4.16797 17.1269 4.16797 16.6667V3.33333Z",
              fill: o
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M10.8346 3.33333C10.8346 2.8731 11.2077 2.5 11.668 2.5H15.0013C15.4615 2.5 15.8346 2.8731 15.8346 3.33333V16.6667C15.8346 17.1269 15.4615 17.5 15.0013 17.5H11.668C11.2077 17.5 10.8346 17.1269 10.8346 16.6667V3.33333Z",
              fill: o
            })]
          })
        };
      var h = l(429);
      const g = "rockstargames-modules-core-videoplayerd8d9ad003eb5b094a636f36119a162cf",
        k = () => {
          const {
            state: e,
            setState: a,
            trackGa: l
          } = (0, b.Tc)(), {
            accentColor: o,
            playing: r,
            controlsActive: s
          } = e, [n, d] = (0, t.useState)(null), u = (0, t.useRef)(null), {
            formatMessage: _
          } = (0, c.useIntl)();
          return (0, t.useEffect)((() => {
            d((e => {
              if (!e) return null;
              const a = e.replace(/^#/, ""),
                l = parseInt(a, 16),
                t = l >> 16 & 255,
                o = l >> 8 & 255,
                r = 255 & l;
              return Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(r) ? null : {
                r: t,
                g: o,
                b: r
              }
            })(o))
          }), [o]), (0, t.useLayoutEffect)((() => {
            const e = v.gsap.context((() => {
              u?.current && (r && v.gsap.to(u?.current, {
                autoAlpha: 0,
                delay: .8,
                duration: .2
              }), s || v.gsap.to(u?.current, {
                autoAlpha: 0
              }))
            }));
            return () => e.revert()
          }), [u?.current, s]), (0, i.jsx)("button", {
            "aria-label": _(r ? y.videoplayer_pause_button_label : y.videoplayer_play_button_label),
            className: "rockstargames-modules-core-videoplayerf5797419bd63cef5e61c3e4908183d85",
            onClick: () => {
              a("showTitle", !1), a("playing", !0), a("running", !0), a("volume", 1), l({
                event: "video_play_manual"
              })
            },
            type: "button",
            children: (0, i.jsx)("div", {
              className: "rockstargames-modules-core-videoplayera16206bf2139e9fceb1780abffe3450c",
              ref: u,
              style: {
                "--button-background": `rgba(${n?.r}, ${n?.g}, ${n?.b}, 1.0)`
              },
              children: r ? (0, i.jsx)(f, {
                className: g
              }) : (0, i.jsx)(h.A, {
                className: g
              })
            })
          })
        },
        C = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "#CF242B",
            fillRule: r = "evenodd",
            height: s = "32",
            viewBox: n = "0 0 32 32",
            width: d = "32"
          } = e;
          const c = "32" !== s ? s : "32",
            u = "32" !== d ? d : "32",
            _ = "0 0 32 32" !== n ? n : `0 0 ${u} ${c}`;
          return (0, i.jsxs)("svg", {
            className: l,
            width: u,
            height: c,
            viewBox: _,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM21.0127 24L19.9246 16.5826L26 12.3328H19.2596L18.0929 5L13.7948 12.2603H7L11.1349 16.6128L7.73751 23.9093L15.161 19.5024L21.0127 24Z",
              fill: o
            })]
          })
        },
        x = e => {
          let {
            alt: a = "",
            className: l = "",
            fill: t = "#FCAF17",
            viewBox: o = "0 0 216 198.83"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            viewBox: o,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              fill: "#000",
              d: "M214.55,197.37a4.94,4.94,0,1,1,1.45-3.5A4.75,4.75,0,0,1,214.55,197.37Zm-6.52-6.5a4.27,4.27,0,0,0,0,6,4.25,4.25,0,0,0,6,0,4.26,4.26,0,0,0-6-6Zm2.92.27a4.24,4.24,0,0,1,1.5.2,1.36,1.36,0,0,1,.84,1.38,1.17,1.17,0,0,1-.53,1.08,2.45,2.45,0,0,1-.78.26,1.32,1.32,0,0,1,.93.52,1.57,1.57,0,0,1,.3.84v.39c0,.13,0,.27,0,.41a1.2,1.2,0,0,0,0,.28l0,.07h-.89a.07.07,0,0,0,0,0s0,0,0-.07l0-.17v-.42c0-.63-.17-1.05-.52-1.24a2.45,2.45,0,0,0-1.07-.17H210v2.12h-.95v-5.43Zm1,.89a2.38,2.38,0,0,0-1.16-.2H210v1.94h.87a2.48,2.48,0,0,0,.93-.13A.94.94,0,0,0,212,192Z"
            }), (0, i.jsx)("path", {
              fill: "#000",
              d: "M178.43,0H38.26C17.17,0,0,16.66,0,37.12V161.63c0,20.74,16.65,37,37.91,37H178.08c21.26,0,37.92-16.26,37.92-37V37.12C216,16.31,199.5,0,178.43,0Zm33.31,161.62c0,18.36-14.78,32.75-33.66,32.75H37.91C19,194.37,4.25,180,4.25,161.62V37.11c0-18.43,15-32.86,34-32.86H178.43c18.68,0,33.31,14.43,33.31,32.86Z"
            }), (0, i.jsx)("path", {
              fill: t,
              d: "M178.43,4.25H38.26c-19.06,0-34,14.43-34,32.86V161.62C4.25,180,19,194.37,37.91,194.37H178.08c18.88,0,33.66-14.39,33.66-32.75V37.11C211.74,18.68,197.11,4.25,178.43,4.25Z"
            }), (0, i.jsx)("path", {
              fill: "#000",
              d: "M185.49,118.2H158.43l-4.29-27L138.28,118h-3a23.14,23.14,0,0,1-2.52-10.42c0-4.6.34-9.1.34-15,0-7.76-2.28-11.92-8.37-13.38V79c12.94-1.8,18.81-10.36,18.81-22.42,0-17.12-11.39-20.84-26.32-20.84H77.08l-17,80.4H81.45l6.18-29.25h14.19c7.57,0,10.67,3.7,10.67,10.79,0,5.39-.56,9.66-.56,13.81,0,1.54.35,5.11,1.38,6.49,0,0,15.43,16.29,15.43,16.29l-13.27,28.55L143.86,146,165,162.23l-4-26.93ZM108.2,71.86h-17L95.3,52.48h15.79c5.62,0,11.46,1.46,11.46,8.34C122.55,69.49,115.9,71.86,108.2,71.86Z"
            }), (0, i.jsx)("polygon", {
              fill: "#FFF",
              points: "173.03 122.13 155.08 122.13 151.97 102.6 140.53 121.94 122.42 121.94 133.43 133.54 124.38 152.98 144.16 141.23 159.74 153.21 156.84 133.46 173.03 122.13"
            })]
          })
        },
        w = {
          pillBtn: "rockstargames-modules-core-videoplayerf07343afbfb17e068081239e0feb7ce6",
          selected: "rockstargames-modules-core-videoplayerdf5739b361e5ac853630003f0c264462",
          info: "rockstargames-modules-core-videoplayere6292f37e9e73118d04aef857cfa00f6",
          title: "rockstargames-modules-core-videoplayerad77b653301cafe0158055c023939c9f",
          icon: "rockstargames-modules-core-videoplayere6648f376b683a2bef66da3220c7aabe",
          titleText: "rockstargames-modules-core-videoplayerf15eb598ba4a434302b080a9b42b5aea",
          hidden: "rockstargames-modules-core-videoplayere657a665ecf4c2992cd1779a9621f64b",
          brand: "rockstargames-modules-core-videoplayere642e0e1cd810bfc5336dd55e5cef5e7"
        },
        M = () => {
          const {
            state: e,
            trackGa: a
          } = (0, b.Tc)(), {
            brand: l,
            shareData: t,
            videoData: o
          } = e, {
            video: s
          } = o, {
            currentSite: n
          } = (0, r.A)(), d = () => a({
            event: "cta_other",
            text: "rockstar"
          });
          let c, u;
          return "clr" === l ? (u = (0, i.jsx)(C, {
            className: [w.brand, w[l]].join(" ")
          }), c = "https://circolocorecords.com") : (u = (0, i.jsx)(x, {
            className: [w.brand, w[l]].join(" ")
          }), c = `https://${n?.subDomain??"www"}.rockstargames.com/`), s?.title ? (0, i.jsxs)("div", {
            role: "paragraph",
            className: w.title,
            children: [(0, i.jsx)("a", {
              href: t?.brandUrl,
              target: "_blank",
              onClick: d,
              onKeyDown: d,
              rel: "noreferrer",
              tabIndex: 0,
              className: w.icon,
              children: u
            }), (0, i.jsx)("a", {
              href: t?.url,
              target: "_blank",
              className: w.titleText,
              children: t?.title
            })]
          }) : null
        },
        j = () => {
          const {
            state: e
          } = (0, b.Tc)(), {
            idle: a,
            videoData: l,
            autoplay: t,
            playing: o,
            startTime: r
          } = e, {
            video: s
          } = l, n = !t && !o && !r;
          return s ? (0, i.jsx)("div", {
            className: [w.info, a ? w.hidden : "", n ? w.isPreview : ""].join(" "),
            children: (0, i.jsx)(M, {})
          }) : null
        },
        N = () => {
          const {
            state: e
          } = (0, b.Tc)(), {
            videoData: a
          } = e, {
            video: l
          } = a;
          return l ? (0, i.jsx)("div", {
            className: "rockstargames-modules-core-videoplayercf77c18623958812f40cdab83aa6d574",
            style: {
              background: `url(${l.screencap.includes("akamai")?`${l.screencap}?im=Resize=1920`:l.screencap}) center/contain no-repeat`
            }
          }) : null
        },
        L = () => (0, i.jsxs)("div", {
          className: "rockstargames-modules-core-videoplayerbd453eb9633925a3cf21d24f220cb103",
          children: [(0, i.jsx)(j, {}), (0, i.jsx)(N, {}), (0, i.jsx)(k, {})]
        });
      var S = l(171),
        R = l(5937);
      const E = (0, c.defineMessages)({
          videoplayer_fullscreen_button_label: {
            id: "videoplayer_fullscreen_button_label",
            defaultMessage: "Toggle video in fullscreen mode"
          },
          videoplayer_fullscreen_hover_label: {
            id: "videoplayer_fullscreen_hover_label",
            defaultMessage: "Fullscreen"
          },
          videoplayer_windowed_hover_label: {
            id: "videoplayer_windowed_hover_label",
            defaultMessage: "Windowed"
          }
        }),
        V = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: s = "20",
            viewBox: n = "0 0 20 20",
            width: d = "20"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            height: s,
            width: d,
            viewBox: n,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M6.66797 1.66663C7.12821 1.66663 7.5013 2.03972 7.5013 2.49996V4.99996C7.5013 5.663 7.23791 6.29889 6.76907 6.76773C6.30023 7.23657 5.66434 7.49996 5.0013 7.49996H2.5013C2.04106 7.49996 1.66797 7.12686 1.66797 6.66663C1.66797 6.20639 2.04106 5.83329 2.5013 5.83329H5.0013C5.22232 5.83329 5.43428 5.7455 5.59056 5.58921C5.74684 5.43293 5.83464 5.22097 5.83464 4.99996V2.49996C5.83464 2.03972 6.20773 1.66663 6.66797 1.66663ZM13.3346 1.66663C13.7949 1.66663 14.168 2.03972 14.168 2.49996V4.99996C14.168 5.22097 14.2558 5.43293 14.412 5.58921C14.5683 5.7455 14.7803 5.83329 15.0013 5.83329H17.5013C17.9615 5.83329 18.3346 6.20639 18.3346 6.66663C18.3346 7.12686 17.9615 7.49996 17.5013 7.49996H15.0013C14.3383 7.49996 13.7024 7.23657 13.2335 6.76773C12.7647 6.29889 12.5013 5.663 12.5013 4.99996V2.49996C12.5013 2.03972 12.8744 1.66663 13.3346 1.66663ZM1.66797 13.3333C1.66797 12.8731 2.04106 12.5 2.5013 12.5H5.0013C5.66434 12.5 6.30023 12.7634 6.76907 13.2322C7.23791 13.701 7.5013 14.3369 7.5013 15V17.5C7.5013 17.9602 7.12821 18.3333 6.66797 18.3333C6.20773 18.3333 5.83464 17.9602 5.83464 17.5V15C5.83464 14.7789 5.74684 14.567 5.59056 14.4107C5.43428 14.2544 5.22232 14.1666 5.0013 14.1666H2.5013C2.04106 14.1666 1.66797 13.7935 1.66797 13.3333ZM15.0013 14.1666C14.7803 14.1666 14.5683 14.2544 14.412 14.4107C14.2558 14.567 14.168 14.7789 14.168 15V17.5C14.168 17.9602 13.7949 18.3333 13.3346 18.3333C12.8744 18.3333 12.5013 17.9602 12.5013 17.5V15C12.5013 14.3369 12.7647 13.701 13.2335 13.2322C13.7024 12.7634 14.3383 12.5 15.0013 12.5H17.5013C17.9615 12.5 18.3346 12.8731 18.3346 13.3333C18.3346 13.7935 17.9615 14.1666 17.5013 14.1666H15.0013Z",
              fill: o
            })]
          })
        },
        T = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: s = "20",
            viewBox: n = "0 0 20 20",
            width: d = "20"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            height: s,
            width: d,
            viewBox: n,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M2.4002 2.39886C2.86904 1.93002 3.50493 1.66663 4.16797 1.66663H6.66797C7.12821 1.66663 7.5013 2.03972 7.5013 2.49996C7.5013 2.9602 7.12821 3.33329 6.66797 3.33329H4.16797C3.94695 3.33329 3.73499 3.42109 3.57871 3.57737C3.42243 3.73365 3.33464 3.94561 3.33464 4.16663V6.66663C3.33464 7.12686 2.96154 7.49996 2.5013 7.49996C2.04106 7.49996 1.66797 7.12686 1.66797 6.66663V4.16663C1.66797 3.50358 1.93136 2.8677 2.4002 2.39886ZM12.5013 2.49996C12.5013 2.03972 12.8744 1.66663 13.3346 1.66663H15.8346C16.4977 1.66663 17.1336 1.93002 17.6024 2.39886C18.0712 2.8677 18.3346 3.50358 18.3346 4.16663V6.66663C18.3346 7.12686 17.9615 7.49996 17.5013 7.49996C17.0411 7.49996 16.668 7.12686 16.668 6.66663V4.16663C16.668 3.94561 16.5802 3.73365 16.4239 3.57737C16.2676 3.42109 16.0557 3.33329 15.8346 3.33329H13.3346C12.8744 3.33329 12.5013 2.9602 12.5013 2.49996ZM2.5013 12.5C2.96154 12.5 3.33464 12.8731 3.33464 13.3333V15.8333C3.33464 16.0543 3.42243 16.2663 3.57871 16.4225C3.73499 16.5788 3.94696 16.6666 4.16797 16.6666H6.66797C7.12821 16.6666 7.5013 17.0397 7.5013 17.5C7.5013 17.9602 7.12821 18.3333 6.66797 18.3333H4.16797C3.50493 18.3333 2.86904 18.0699 2.4002 17.6011C1.93136 17.1322 1.66797 16.4963 1.66797 15.8333V13.3333C1.66797 12.8731 2.04106 12.5 2.5013 12.5ZM17.5013 12.5C17.9615 12.5 18.3346 12.8731 18.3346 13.3333V15.8333C18.3346 16.4963 18.0712 17.1322 17.6024 17.6011C17.1336 18.0699 16.4977 18.3333 15.8346 18.3333H13.3346C12.8744 18.3333 12.5013 17.9602 12.5013 17.5C12.5013 17.0397 12.8744 16.6666 13.3346 16.6666H15.8346C16.0556 16.6666 16.2676 16.5788 16.4239 16.4225C16.5802 16.2663 16.668 16.0543 16.668 15.8333V13.3333C16.668 12.8731 17.0411 12.5 17.5013 12.5Z",
              fill: o
            })]
          })
        },
        A = {
          pillBtn: "rockstargames-modules-core-videoplayerc3acdd763406af22f9aeebb0de208882",
          selected: "rockstargames-modules-core-videoplayerdb4cd43ec804bdb05b1572501a73db54",
          controlItemOptionButton: "rockstargames-modules-core-videoplayerd2198af42455a28a34075e66f1d8e2bc",
          hoverIcon: "rockstargames-modules-core-videoplayera9ab87567cba360260376bdb1d85a3fd",
          icon: "rockstargames-modules-core-videoplayerc6c27af76d4f0eb4bebd4a3eeb2a8c15"
        };
      var B = l(5971);
      const D = {
          pillBtn: "rockstargames-modules-core-videoplayerdf46157663084d4223c50dda9c96dcd4",
          selected: "rockstargames-modules-core-videoplayere653297e212b56ef11131ec24e48b470",
          controlItemOptionButton: "rockstargames-modules-core-videoplayere34f1c72565bfc5deb5bee9001bab763",
          hoverIcon: "rockstargames-modules-core-videoplayerbbd8db9707199cbc6c825f98e475c41c",
          tooltip: "rockstargames-modules-core-videoplayera1c409dbf6086110b6291957dac06fd6",
          button: "rockstargames-modules-core-videoplayerea5b581015e7f2a7149e17ffede61f2b"
        },
        P = e => {
          let {
            children: a,
            tooltipLabel: l,
            className: o,
            hideTooltip: r = !1,
            ...s
          } = e;
          const [n, d] = (0, t.useState)(null), [c, u] = (0, t.useState)(null), [_, p] = (0, t.useState)(!1), {
            styles: v,
            attributes: m
          } = (0, B.usePopper)(n, c, {
            modifiers: [{
              name: "flip",
              options: {
                allowedAutoPlacements: ["top"],
                fallbackPlacements: ["bottom"]
              }
            }, {
              name: "offset",
              options: {
                offset: [0, 20]
              }
            }],
            placement: "auto"
          });
          return (0, i.jsxs)("div", {
            children: [l && !r && _ && (0, i.jsx)("span", {
              className: D.tooltip,
              ref: u,
              style: v.popper,
              ...m,
              children: l
            }), (0, i.jsx)("button", {
              ...s,
              className: [D.button, o].join(" "),
              onPointerEnter: e => {
                "mouse" === e.pointerType && p(!0)
              },
              onPointerLeave: () => {
                p(!1)
              },
              type: "button",
              ref: d,
              children: a
            })]
          })
        },
        O = () => {
          const {
            formatMessage: e
          } = (0, c.useIntl)(), {
            state: a,
            setState: l
          } = (0, b.Tc)(), {
            fullscreen: t
          } = a, o = () => {
            l("fullscreen", !t)
          };
          return (0, i.jsx)(P, {
            tooltipLabel: e(t ? E.videoplayer_windowed_hover_label : E.videoplayer_fullscreen_hover_label),
            "aria-label": e(E.videoplayer_fullscreen_button_label),
            className: A.button,
            onClick: o,
            onKeyDown: e => {
              "Enter" === e.code && (e.preventDefault(), o())
            },
            children: t ? (0, i.jsx)(V, {
              className: A.icon
            }) : (0, i.jsx)(T, {
              className: A.icon
            })
          })
        };
      var H = l(2918);
      const I = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            height: o = "80",
            fill: r = "#fff",
            fillRule: s = "evenodd",
            viewBox: n = "0 0 80 80",
            width: d = "80"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            height: o,
            role: "img",
            viewBox: n,
            width: d,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              fillRule: s,
              clipRule: t,
              d: "M39.9868 6.6667L39.9994 6.66666C46.5921 6.66668 53.0367 8.62165 58.5184 12.2844C64 15.9471 68.2724 21.153 70.7953 27.2439C73.3183 33.3348 73.9784 40.037 72.6922 46.503C71.406 52.9691 68.2313 58.9085 63.5696 63.5702C58.9078 68.232 52.9684 71.4067 46.5024 72.6929C40.0363 73.979 33.3341 73.3189 27.2432 70.796C21.1524 68.2731 15.9464 64.0007 12.2837 58.519C8.62098 53.0374 6.66602 46.5927 6.66602 40C6.66602 38.1591 8.1584 36.6667 9.99935 36.6667C11.8403 36.6667 13.3327 38.1591 13.3327 40C13.3327 45.2742 14.8967 50.4299 17.8268 54.8152C20.757 59.2005 24.9218 62.6185 29.7945 64.6368C34.6672 66.6551 40.0289 67.1832 45.2018 66.1543C50.3746 65.1254 55.1261 62.5856 58.8555 58.8562C62.5849 55.1268 65.1247 50.3752 66.1536 45.2024C67.1826 40.0296 66.6545 34.6678 64.6361 29.7951C62.6178 24.9224 59.1999 20.7577 54.8146 17.8275C50.431 14.8985 45.2776 13.3346 40.0056 13.3333C32.4904 13.3632 25.277 16.2928 19.8692 21.5108L12.3564 29.0237C11.0546 30.3254 8.94407 30.3254 7.64233 29.0237C6.34058 27.722 6.34058 25.6114 7.64233 24.3097L15.1757 16.7763L15.2159 16.7368C21.8642 10.3097 30.7398 6.70149 39.9868 6.6667Z",
              fill: r
            }), (0, i.jsx)("path", {
              fillRule: s,
              clipRule: t,
              d: "M9.99935 6.66668C11.8403 6.66668 13.3327 8.15906 13.3327 10V23.3333H26.666C28.507 23.3333 29.9994 24.8257 29.9994 26.6667C29.9994 28.5076 28.507 30 26.666 30H9.99935C8.1584 30 6.66602 28.5076 6.66602 26.6667V10C6.66602 8.15906 8.1584 6.66668 9.99935 6.66668Z",
              fill: r
            })]
          })
        },
        q = (0, c.defineMessages)({
          videoplayer_play_pause_button_label: {
            id: "videoplayer_play_pause_button_label",
            defaultMessage: "Play/Pause Toggle"
          },
          videoplayer_play_hover_label: {
            id: "videoplayer_play_hover_label",
            defaultMessage: "Play"
          },
          videoplayer_pause_hover_label: {
            id: "videoplayer_pause_hover_label",
            defaultMessage: "Pause"
          },
          videoplayer_replay_hover_label: {
            id: "videoplayer_replay_hover_label",
            defaultMessage: "Replay"
          }
        }),
        F = "rockstargames-modules-core-videoplayere2bb62f7d1ed11e190e89b6d7f17eb02",
        Z = () => {
          (0, H.useGtmTrack)();
          const {
            formatMessage: e
          } = (0, c.useIntl)(), {
            state: a,
            setState: l,
            replay: t,
            trackGa: o
          } = (0, b.Tc)(), {
            playerEnded: r,
            playing: s
          } = a;
          return (0, i.jsx)(P, {
            tooltipLabel: e(r ? q.videoplayer_replay_hover_label : s ? q.videoplayer_pause_hover_label : q.videoplayer_play_hover_label),
            "aria-label": e(q.videoplayer_play_pause_button_label),
            onMouseDown: e => {
              r && "function" == typeof t ? (o({
                event: "video_replay"
              }), t()) : (o({
                event: s ? "video_pause" : "video_play_manual"
              }), l("playing", !s))
            },
            onKeyDown: e => {
              "Enter" === e.code && (e.preventDefault(), l("playing", !s))
            },
            children: r ? (0, i.jsx)(I, {
              className: F
            }) : s ? (0, i.jsx)(f, {
              className: F
            }) : (0, i.jsx)(h.A, {
              className: F
            })
          })
        };
      var G = l(4848),
        z = l.n(G);
      const $ = (0, c.defineMessages)({
          videoplayer_progress_bar_label: {
            id: "videoplayer_progress_bar_label",
            defaultMessage: "Progress Bar"
          }
        }),
        U = {
          controlItemOptionButton: "rockstargames-modules-core-videoplayercf23064a5fe658ada98e9417e16b77f7",
          hoverIcon: "rockstargames-modules-core-videoplayercf4d7db26140a8681567c777a34b06ba",
          progressBar: "rockstargames-modules-core-videoplayerd5fb5e9590cfd5b8cabdc8ae499b3c2f",
          pillBtn: "rockstargames-modules-core-videoplayerd8c8045d382169c910b9aabaac555155",
          selected: "rockstargames-modules-core-videoplayereb017049de6b16a7493764ef74a27cbb",
          timestamp: "rockstargames-modules-core-videoplayerb8c342271a08654d347b68bfa9ae87f6",
          isDragging: "rockstargames-modules-core-videoplayerdfa731c4aecb6afa364bb59f2db70714",
          background: "rockstargames-modules-core-videoplayerde86d7306a08838b0ef437474dc79ce1",
          buffer: "rockstargames-modules-core-videoplayerf059cf2ee72159a3fcd74a5f6cab0023",
          time: "rockstargames-modules-core-videoplayeradced9d51c07ea0a098fe8b6fa0e297e"
        },
        K = () => {
          const e = (0, t.useRef)(null),
            a = (0, t.useRef)(null),
            {
              formatMessage: l
            } = (0, c.useIntl)(),
            [o, r] = (0, t.useState)({
              25: !1,
              50: !1,
              75: !1,
              90: !1
            }),
            [s, n] = (0, t.useState)(0),
            [d, u] = (0, t.useState)(!1),
            [_, p] = (0, t.useState)(null),
            [v, m] = (0, t.useState)(0),
            {
              state: y,
              setState: f,
              trackGaQuartile: h
            } = (0, b.Tc)(),
            {
              accentColor: g,
              buffered: k,
              currentTime: C,
              idle: x,
              playerEnded: w,
              playing: M,
              playerRef: j,
              progressBarState: N,
              timing: L,
              videoRef: S
            } = y,
            R = function() {
              let {
                centerX: e = 0
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              if (!a.current) return;
              let l = null;
              const {
                x: t,
                width: o
              } = a.current.getBoundingClientRect();
              l = (e - t) / o, l = Math.min(1, Math.max(0, l)), f("progressBarState", {
                percent: l
              })
            },
            E = e => {
              if (!a?.current || !S?.current || !L?.duration) return;
              const l = a.current.getBoundingClientRect();
              let t = (e.clientX - l.left) / l.width * L.duration;
              t = Math.min(L.duration, Math.max(0, t)), p(t)
            };
          return (0, t.useEffect)((() => {
            const e = () => {
              p(null)
            };
            return document.addEventListener("mouseleave", e), document.addEventListener("mouseup", e), () => {
              document.removeEventListener("mouseleave", e), document.removeEventListener("mouseup", e)
            }
          }), []), (0, t.useEffect)((() => {
            d && N?.percent ? m(N.percent) : L?.current && L?.duration && m(L.current / L.duration)
          }), [d, N?.percent, L?.current, L?.duration]), (0, t.useEffect)((() => {
            const e = S?.current,
              a = () => {
                if (!e?.currentTime || !e?.duration) return;
                const a = {
                    ...o
                  },
                  l = e.duration,
                  t = e.currentTime,
                  i = Math.floor(t / l * 100),
                  d = Math.floor(l),
                  c = e => h("video_threshold", d, e);
                i > s && (!a[90] && i >= 90 ? (c(90), a[90] = !0) : !a[75] && i >= 75 && i < 90 ? (c(75), a[75] = !0) : !a[50] && i >= 50 && i < 75 ? (c(50), a[50] = !0) : !a[25] && i >= 25 && i < 50 && (c(25), a[25] = !0), r(a), n(i))
              };
            return e?.addEventListener("timeupdate", a), () => {
              e?.removeEventListener("timeupdate", a)
            }
          }), [S, o, s]), (0, t.useEffect)((() => {
            w || N.percent || !M || f("controlsActive", !x)
          }), [x, w, N.percent, M]), (0, t.useEffect)((() => {
            const e = N.percent ? N.percent * L.duration : C;
            f("currentTime", e)
          }), [N.percent, L.duration]), (0, t.useEffect)((() => {
            const a = e?.current;
            if (!a) return;
            const l = a.getContext("2d"),
              t = a.getBoundingClientRect();
            if (a.width = t.width, a.height = t.height, l.clearRect(0, 0, t.width, t.height), l.fillStyle = "rgba(255, 255, 255, 0.5)", !k || !k.length) return;
            const o = t.width / L.duration;
            for (let e = 0; e < k.length; e += 1) {
              const a = k.start(e),
                r = k.end(e),
                i = a * o,
                s = r * o;
              a <= L.current && L.current <= r && l.fillRect(i, 0, s - i, t.height)
            }
          }), [k, e, L.duration, L.current]), (0, t.useEffect)((() => {
            if (!a.current) return;
            const e = new(z())(a.current),
              l = e => {
                u(!0), !w && j?.current?.contains(e.srcEvent.target) ? (R({
                  centerX: e.center.x
                }), E(e.srcEvent)) : R()
              },
              t = () => {
                u(!1), R()
              },
              o = e => {
                !w && j?.current?.contains(e.srcEvent.target) ? (R({
                  centerX: e.center.x
                }), E(e.srcEvent)) : R()
              };
            return e.on("pan", l), e.on("panend", t), e.on("tap", o), () => {
              e.off("pan", l), e.off("panend", t), e.off("tap", o)
            }
          }), [j?.current, a?.current, w, L?.duration]), w ? null : (0, i.jsx)("div", {
            ref: a,
            role: "slider",
            "aria-valuenow": N?.percent ?? 0,
            tabIndex: 0,
            "aria-label": l($.videoplayer_progress_bar_label),
            className: [U.progressBar, d ? U.isDragging : ""].join(" "),
            onMouseLeave: e => d ? null : p(null),
            onMouseMove: e => E(e),
            children: (0, i.jsxs)("div", {
              className: U.background,
              children: [(0, i.jsx)("canvas", {
                className: U.buffer,
                ref: e
              }), (0, i.jsx)("div", {
                className: U.time,
                style: {
                  "--accent-color": g,
                  "--percent-current": v
                }
              }), null !== _ && (0, i.jsx)("div", {
                style: {
                  "--left-position": _ / (S?.current?.duration ?? 1)
                },
                className: U.timestamp,
                children: function() {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                  const a = Math.max(0, Math.floor(e / 60)),
                    l = Math.max(0, Math.floor(e % 60));
                  return `${String(a).padStart(2,"0")}:${String(l).padStart(2,"0")}`
                }(_)
              })]
            })
          })
        },
        W = {
          controlItemOptionButton: "rockstargames-modules-core-videoplayere102015be44628245993fd21432916e3",
          hoverIcon: "rockstargames-modules-core-videoplayerc3394809f27f421d5875404b621400c7",
          time: "rockstargames-modules-core-videoplayerdc09491e7f7da613daa4aa0e4150d1bb",
          pillBtn: "rockstargames-modules-core-videoplayerc60925a281613846f8dcedfdd38dcfa3",
          selected: "rockstargames-modules-core-videoplayerdd2be89472702b0830e1d58f13c9ec7d",
          clr: "rockstargames-modules-core-videoplayerfc0b6f5b1966f8660e8ecad13d074db1"
        },
        Q = e => {
          const a = new Date(1e3 * e),
            l = a.getUTCMinutes(),
            t = a.getSeconds();
          return `${l.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`
        },
        X = () => {
          const {
            state: e
          } = (0, b.Tc)(), {
            brand: a,
            timing: l
          } = e, {
            current: t,
            duration: o
          } = l;
          return (0, i.jsx)("div", {
            className: [W.time, W[a]].join(" ").trim(),
            children: `${Q(t)} / ${Q(o)}`
          })
        },
        J = e => !!e && ["button", "a", "input", "select", "textarea", "label", "[tabindex]"].some((a => e.matches(a))),
        Y = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: s = "20",
            type: n = "up",
            viewBox: d = "0 0 20 20",
            width: c = "20"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            height: s,
            width: c,
            viewBox: d,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (() => {
              switch (n) {
                case "up":
                default:
                  return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("path", {
                      d: "M16.4797 3.51919C16.1544 3.19371 15.6267 3.19363 15.3012 3.51901C14.9757 3.8444 14.9757 4.37204 15.3011 4.69752C16.7071 6.10398 17.4969 8.01129 17.4969 10C17.4969 11.9888 16.7071 13.8961 15.3011 15.3025C14.9757 15.628 14.9757 16.1556 15.3012 16.481C15.6267 16.8064 16.1544 16.8063 16.4797 16.4809C18.1982 14.7619 19.1636 12.4307 19.1636 10C19.1636 7.56935 18.1982 5.23819 16.4797 3.51919Z",
                      fill: o
                    }), (0, i.jsx)("path", {
                      d: "M13.5381 6.46086C13.2127 6.13537 12.685 6.13529 12.3596 6.46068C12.0341 6.78607 12.034 7.31371 12.3594 7.63919C12.9843 8.26428 13.3353 9.11198 13.3353 9.99586C13.3353 10.8797 12.9843 11.7274 12.3594 12.3525C12.034 12.678 12.0341 13.2056 12.3596 13.531C12.685 13.8564 13.2127 13.8563 13.5381 13.5309C14.4754 12.5932 15.002 11.3217 15.002 9.99586C15.002 8.67004 14.4754 7.3985 13.5381 6.46086Z",
                      fill: o
                    }), (0, i.jsx)("path", {
                      fillRule: r,
                      clipRule: t,
                      d: "M9.9987 4.16671C9.9987 3.84637 9.81508 3.55439 9.52635 3.41562C9.23763 3.27685 8.89493 3.31587 8.64479 3.51598L4.70638 6.66671H1.66536C1.20513 6.66671 0.832031 7.0398 0.832031 7.50004V12.5C0.832031 12.9603 1.20513 13.3334 1.66536 13.3334H4.70638L8.64479 16.4841C8.89493 16.6842 9.23763 16.7232 9.52635 16.5845C9.81508 16.4457 9.9987 16.1537 9.9987 15.8334V4.16671ZM5.51928 8.15076L8.33203 5.90056V14.0995L5.51928 11.8493C5.37152 11.7311 5.18792 11.6667 4.9987 11.6667H2.4987V8.33337H4.9987C5.18792 8.33337 5.37152 8.26897 5.51928 8.15076Z",
                      fill: o
                    })]
                  });
                case "down":
                  return (0, i.jsx)("path", {
                    fillRule: r,
                    clipRule: t,
                    d: "M9.9987 4.16672C9.9987 3.84638 9.81508 3.5544 9.52636 3.41563C9.23763 3.27686 8.89493 3.31588 8.64479 3.51599L4.70638 6.66672H1.66536C1.20513 6.66672 0.832031 7.03981 0.832031 7.50005V12.5C0.832031 12.9603 1.20513 13.3334 1.66536 13.3334H4.70638L8.64479 16.4841C8.89493 16.6842 9.23763 16.7232 9.52636 16.5845C9.81508 16.4457 9.9987 16.1537 9.9987 15.8334V4.16672ZM5.51928 8.15077L8.33203 5.90057V14.0995L5.51928 11.8493C5.37152 11.7311 5.18792 11.6667 4.9987 11.6667H2.4987V8.33338H4.9987C5.18792 8.33338 5.37152 8.26898 5.51928 8.15077ZM13.5381 6.46089C13.2127 6.13541 12.685 6.13533 12.3596 6.46071C12.0341 6.7861 12.034 7.31374 12.3594 7.63923C12.9843 8.26432 13.3353 9.11201 13.3353 9.99589C13.3353 10.8798 12.9843 11.7275 12.3594 12.3526C12.034 12.678 12.0341 13.2057 12.3596 13.5311C12.685 13.8565 13.2127 13.8564 13.5381 13.5309C14.4754 12.5933 15.002 11.3217 15.002 9.99589C15.002 8.67007 14.4754 7.39853 13.5381 6.46089Z",
                    fill: o
                  });
                case "muted":
                  return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("path", {
                      fillRule: r,
                      clipRule: t,
                      d: "M9.52635 3.41563C9.81508 3.5544 9.9987 3.84638 9.9987 4.16672V15.8334C9.9987 16.1537 9.81508 16.4457 9.52635 16.5845C9.23763 16.7232 8.89493 16.6842 8.64479 16.4841L4.70638 13.3334H1.66536C1.20513 13.3334 0.832031 12.9603 0.832031 12.5V7.50005C0.832031 7.03981 1.20513 6.66672 1.66536 6.66672H4.70638L8.64479 3.51599C8.89493 3.31588 9.23763 3.27686 9.52635 3.41563ZM8.33203 5.90057L5.51928 8.15077C5.37152 8.26898 5.18792 8.33338 4.9987 8.33338H2.4987V11.6667H4.9987C5.18792 11.6667 5.37152 11.7311 5.51928 11.8493L8.33203 14.0995V5.90057Z",
                      fill: o
                    }), (0, i.jsx)("path", {
                      d: "M19.7546 6.91079C20.0801 7.23622 20.0801 7.76386 19.7546 8.0893L17.8439 10L19.7546 11.9108C20.0801 12.2362 20.0801 12.7639 19.7546 13.0893C19.4292 13.4147 18.9015 13.4147 18.5761 13.0893L16.6654 11.1786L14.7546 13.0893C14.4292 13.4147 13.9015 13.4147 13.5761 13.0893C13.2507 12.7639 13.2507 12.2362 13.5761 11.9108L15.4869 10L13.5761 8.0893C13.2507 7.76386 13.2507 7.23622 13.5761 6.91079C13.9015 6.58535 14.4292 6.58535 14.7546 6.91079L16.6654 8.82153L18.5761 6.91079C18.9015 6.58535 19.4292 6.58535 19.7546 6.91079Z",
                      fill: o
                    })]
                  })
              }
            })()]
          })
        },
        ee = (0, c.defineMessages)({
          videoplayer_volume_toggle_button_label: {
            id: "videoplayer_volume_toggle_button_label",
            defaultMessage: "Mute/Unmute Toggle"
          },
          videoplayer_volume_slider_label: {
            id: "videoplayer_volume_slider_label",
            defaultMessage: "Volume"
          }
        }),
        ae = {
          controlItemOptionButton: "rockstargames-modules-core-videoplayerbd832ea62bed27299da3508d8af7176b",
          hoverIcon: "rockstargames-modules-core-videoplayerac056ad4b9cfef43c9e0497356d889f1",
          volumeControls: "rockstargames-modules-core-videoplayere9444f5fb728d0bbeeee13197ab9e8c8",
          pillBtn: "rockstargames-modules-core-videoplayerdd89bd309a367c738cb0f7c67aec4362",
          selected: "rockstargames-modules-core-videoplayere7a637dbad29f2d2da992c9bda2eab72",
          volumeBar: "rockstargames-modules-core-videoplayerc53e9a8ef1eb17e73a9b14345aea667d",
          expand: "rockstargames-modules-core-videoplayerb7ee87503e6abcf7ca9015848cbd75e9",
          volumeBarIndicator: "rockstargames-modules-core-videoplayera6810e881da9742354ccbeb8457a07e8",
          volumeBarBackground: "rockstargames-modules-core-videoplayeracfcf6e26a55c7f25a2ce148f01942b7",
          icon: "rockstargames-modules-core-videoplayerb6e3dcbfe85be96b62c183be72291268"
        },
        le = () => {
          const {
            formatMessage: e
          } = (0, c.useIntl)(), [a, l] = (0, t.useState)(!1), [o, r] = (0, t.useState)(1), [s, n] = (0, t.useState)(1), [d, u] = (0, t.useState)(!1), _ = (0, t.useRef)(null), {
            state: p,
            setState: v
          } = (0, b.Tc)(), {
            volume: m
          } = p, y = e => {
            if (_?.current) {
              const a = _.current.getBoundingClientRect(),
                l = (e.clientX - a.left) / a.width * 100,
                t = Math.min(1, Math.max(0, 1 * l / 100));
              h(t)
            }
          }, f = e => {
            const a = Math.min(1, Math.max(0, m + e));
            h(a)
          }, h = e => {
            n(e > .01 ? e : 0), v("volume", e > .01 ? e : 0)
          }, g = (0, t.useCallback)((e => {
            e.preventDefault(), e.stopPropagation(), y(e)
          }), []), k = e => {
            u(!1), window.removeEventListener("pointermove", g)
          };
          return (0, t.useEffect)((() => (window.addEventListener("pointerup", k), window.addEventListener("pointercancel", k), () => {
            window.removeEventListener("pointerup", k), window.removeEventListener("pointercancel", k), window.removeEventListener("pointermove", g)
          })), []), (0, i.jsxs)("div", {
            className: ae.volumeControls,
            onMouseEnter: () => {
              l(!0)
            },
            onMouseLeave: () => {
              l(!1)
            },
            children: [(0, i.jsx)(P, {
              tooltipLabel: e(ee.videoplayer_volume_slider_label),
              tabIndex: 0,
              onClick: () => {
                m > 0 && r(m);
                const e = m > 0 ? 0 : o;
                h(e), v("volume", e)
              },
              onKeyDown: e => {
                J(e.target) || (e.preventDefault(), m > 0 && r(m), v("volume", m > 0 ? 0 : o))
              },
              "aria-label": e(ee.videoplayer_volume_toggle_button_label),
              className: ae.button,
              children: 0 === m ? (0, i.jsx)(Y, {
                type: "muted",
                className: ae.icon
              }) : (0, i.jsx)(Y, {
                type: "up",
                className: ae.icon
              })
            }), (0, i.jsxs)("div", {
              "aria-label": e(ee.videoplayer_volume_slider_label),
              "aria-valuenow": m,
              "aria-valuemax": 1,
              "aria-valuemin": 0,
              className: [ae.volumeBar, a || d ? ae.expand : ""].join(" ").trim(),
              tabIndex: 0,
              ref: _,
              role: "slider",
              onMouseDown: e => {
                e.preventDefault(), u(!0), window.addEventListener("pointermove", g), y(e)
              },
              onKeyDown: e => {
                if (!J(e.target)) switch (e.code) {
                  case "ArrowRight":
                  case "ArrowUp":
                    f(.05);
                    break;
                  case "ArrowLeft":
                  case "ArrowDown":
                    f(-.05)
                }
              },
              children: [(0, i.jsx)("div", {
                className: ae.volumeBarIndicator,
                style: {
                  "--percent-current": `${s}`
                }
              }), (0, i.jsx)("div", {
                className: ae.volumeBarBackground
              })]
            })]
          })
        };
      var te = l(7654);
      const oe = () => (0, i.jsx)("span", {
          className: "rockstargames-modules-core-videoplayerd9ebc60a4ffee00fe85b248250d44ce8"
        }),
        re = e => {
          let {
            alt: a = "",
            className: l = "",
            fill: t = "white",
            height: o = "20",
            width: r = "20",
            viewBox: s = "0 0 20 20"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            width: r,
            height: o,
            viewBox: s,
            fill: t,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              d: "M10.8346 2.49996C10.8346 2.03972 10.4615 1.66663 10.0013 1.66663C9.54106 1.66663 9.16797 2.03972 9.16797 2.49996V10.4881L6.42389 7.74404C6.09845 7.4186 5.57082 7.4186 5.24538 7.74404C4.91994 8.06947 4.91994 8.59711 5.24538 8.92255L9.41145 13.0886C9.41346 13.0906 9.41548 13.0926 9.41751 13.0946C9.49613 13.1718 9.58626 13.2303 9.68232 13.2701C9.77985 13.3105 9.88672 13.333 9.9988 13.3333L10.0013 13.3333L10.0038 13.3333C10.2302 13.3326 10.4353 13.2417 10.5851 13.0946C10.5871 13.0926 10.5891 13.0906 10.5912 13.0886L14.7572 8.92255C15.0827 8.59711 15.0827 8.06947 14.7572 7.74404C14.4318 7.4186 13.9042 7.4186 13.5787 7.74404L10.8346 10.4881V2.49996Z",
              fill: "white"
            }), (0, i.jsx)("path", {
              d: "M2.5013 11.6666C2.96154 11.6666 3.33464 12.0397 3.33464 12.5V15.8333C3.33464 16.0543 3.42243 16.2663 3.57871 16.4225C3.73499 16.5788 3.94696 16.6666 4.16797 16.6666H15.8346C16.0556 16.6666 16.2676 16.5788 16.4239 16.4225C16.5802 16.2663 16.668 16.0543 16.668 15.8333V12.5C16.668 12.0397 17.0411 11.6666 17.5013 11.6666C17.9615 11.6666 18.3346 12.0397 18.3346 12.5V15.8333C18.3346 16.4963 18.0712 17.1322 17.6024 17.6011C17.1336 18.0699 16.4977 18.3333 15.8346 18.3333H4.16797C3.50493 18.3333 2.86904 18.0699 2.4002 17.6011C1.93136 17.1322 1.66797 16.4963 1.66797 15.8333V12.5C1.66797 12.0397 2.04106 11.6666 2.5013 11.6666Z",
              fill: "white"
            })]
          })
        },
        ie = (0, c.defineMessages)({
          videoplayer_downloads_button_label: {
            id: "videoplayer_downloads_button_label",
            defaultMessage: "Download Options Menu"
          },
          videoplayer_downloads_menu_header: {
            id: "videoplayer_downloads_menu_header",
            defaultMessage: "Download"
          },
          videoplayer_downloads_menu_back_button_label: {
            id: "videoplayer_downloads_menu_back_button_label",
            defaultMessage: "Back"
          }
        }),
        se = {
          pillBtn: "rockstargames-modules-core-videoplayera12f7e0424e52363ec9923d33a93d2e6",
          selected: "rockstargames-modules-core-videoplayerd122fb39a7afc2f1cb7013f3c5fd6e68",
          controlItemOptionButton: "rockstargames-modules-core-videoplayeraffa436aebf2d19163987ad9a195d63f",
          hoverIcon: "rockstargames-modules-core-videoplayercff2539fd7bce7510795610988736d32",
          icon: "rockstargames-modules-core-videoplayerb0dc743bc7b8c0a36fbcbd42931f280f",
          label: "rockstargames-modules-core-videoplayerfb58826eca4adca01b9a4876233ffbf8",
          labelText: "rockstargames-modules-core-videoplayerb46e44807793f4183c09817f7ae53eeb",
          header: "rockstargames-modules-core-videoplayerfdf535c1fb32ccd28085e718f6885f51",
          menuLabel: "rockstargames-modules-core-videoplayera49aba86ab8febc1b38ec3e202680d22",
          backButton: "rockstargames-modules-core-videoplayerfaade9f30bc6c05278b4c05fcd848a6c",
          options: "rockstargames-modules-core-videoplayerdb3072415ee5e1f813ece1269b479d39",
          subtext: "rockstargames-modules-core-videoplayercfbcf9fc7c83555f5b2b69a3b97506d7",
          button: "rockstargames-modules-core-videoplayera1912cca564ecf1f1c7454b3032d0c4b"
        },
        ne = e => {
          const a = parseInt(e, 10);
          let l;
          return a >= 1080 && (l = "HD"), a >= 2160 && (l = "4K"), l
        },
        de = e => {
          let {
            collapsed: a = !1,
            onClick: l
          } = e;
          const {
            formatMessage: t
          } = (0, c.useIntl)(), {
            trackGa: o,
            menuStates: r
          } = (0, b.Tc)();
          return (0, i.jsx)(P, {
            tooltipLabel: t(ie.videoplayer_downloads_menu_header),
            "data-testid": "download-menu-btn",
            "aria-label": t(ie.videoplayer_downloads_button_label),
            onClick: () => {
              o({
                event: "video_download"
              }), l()
            },
            onKeyDown: e => {
              J(e.target) || (o({
                event: "video_download"
              }), l())
            },
            hideTooltip: r.isDownloadMenuOpen,
            children: (0, i.jsxs)("span", {
              className: se.label,
              children: [(0, i.jsx)(re, {
                className: se.icon
              }), a && (0, i.jsx)("span", {
                className: se.labelText,
                children: t(ie.videoplayer_downloads_menu_header)
              })]
            })
          })
        },
        ce = e => {
          let {
            collapsed: a = !1,
            onBackButtonClick: l,
            onOptionSelect: o
          } = e;
          const [r, s] = (0, t.useState)(0), [n, d] = (0, t.useState)([]), {
            formatMessage: u
          } = (0, c.useIntl)(), {
            state: _,
            setState: p,
            menuStates: v,
            trackGa: m
          } = (0, b.Tc)(), {
            fileIndex: y,
            videoData: f,
            videoRef: h
          } = _, {
            video: g
          } = f;
          return (0, t.useEffect)((() => {
            if (!n.length) return;
            const e = n.find((e => e.value === g?.files[y].resolution)),
              a = void 0 === e ? n.length - 1 : n.indexOf(e);
            s(a)
          }), [y, n]), (0, t.useEffect)((() => {
            if (!g?.files) return;
            const e = g.files.map((e => ({
              label: e.resolution,
              subtext: ne(e.resolution),
              value: e.resolution
            })));
            d([...e])
          }), [g]), v?.isDownloadMenuOpen ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("header", {
              className: se.header,
              children: (0, i.jsxs)("div", {
                className: se.menuLabel,
                children: [a ? (0, i.jsx)("div", {
                  role: "button",
                  className: se.backButton,
                  "aria-label": u(ie.videoplayer_downloads_menu_back_button_label),
                  onClick: () => {
                    "function" == typeof l && l()
                  },
                  onKeyUp: () => {
                    "function" == typeof l && l()
                  },
                  tabIndex: 0,
                  children: (0, i.jsx)(oe, {})
                }) : (0, i.jsx)(re, {}), u(ie.videoplayer_downloads_menu_header)]
              })
            }), (0, i.jsx)("section", {
              className: se.options,
              children: n && n.map(((e, a) => (0, i.jsxs)("button", {
                type: "button",
                "aria-label": e.label,
                className: [se.button, r === a ? se.selected : ""].join(" ").trim(),
                onClick: () => (async e => {
                  if (!g?.files) return;
                  const a = g.files.find((a => a.resolution === e.value));
                  if (a) {
                    g.files.indexOf(a);
                    try {
                      m({
                        event: "video_download",
                        text: a.resolution
                      });
                      const e = await fetch(a.src),
                        l = await e.blob(),
                        t = window.URL.createObjectURL(l),
                        o = document.createElement("a");
                      o.href = t, o.download = `rockstar-games-${g.game.title?.toLowerCase().replace(/\s+/g,"-")}-${g.title?.toLowerCase().replace(/\s+/g,"-")}-${a.resolution}.mp4`, document.body.appendChild(o), o.click(), document.body.removeChild(o)
                    } catch (e) {
                      console.error("An error occurred fetching video:", e.message)
                    }
                    "function" == typeof o && o()
                  }
                })(e),
                children: [(0, i.jsxs)("span", {
                  className: se.buttonLabel,
                  children: [e.label, e.subtext && (0, i.jsx)("sup", {
                    className: se.subtext,
                    children: e.subtext
                  })]
                }), (0, i.jsx)("div", {
                  className: se.hoverIcon,
                  children: (0, i.jsx)(re, {
                    className: se.icon
                  })
                })]
              }, e.label)))
            })]
          }) : null
        },
        ue = () => (0, i.jsx)("span", {
          className: "rockstargames-modules-core-videoplayerb6e8ef849317cb16d1ee5eeb0847644e"
        }),
        _e = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: s = "20",
            viewBox: n = "0 0 20 20",
            width: d = "20"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            fill: o,
            height: s,
            role: "img",
            viewBox: n,
            width: d,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M10 8.33333C9.07953 8.33333 8.33333 9.07953 8.33333 10C8.33333 10.9205 9.07953 11.6667 10 11.6667C10.9205 11.6667 11.6667 10.9205 11.6667 10C11.6667 9.07953 10.9205 8.33333 10 8.33333ZM6.66667 10C6.66667 8.15905 8.15905 6.66667 10 6.66667C11.8409 6.66667 13.3333 8.15905 13.3333 10C13.3333 11.8409 11.8409 13.3333 10 13.3333C8.15905 13.3333 6.66667 11.8409 6.66667 10Z",
              fill: o
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M10 1.66667C9.77899 1.66667 9.56703 1.75446 9.41074 1.91074C9.25446 2.06703 9.16667 2.27899 9.16667 2.5V2.64499C9.16495 3.07566 9.03733 3.49644 8.79953 3.85551C8.56173 4.21459 8.22413 4.49629 7.82828 4.66595C7.75781 4.69615 7.68368 4.71641 7.60801 4.7263C7.24831 4.85226 6.8611 4.88331 6.48417 4.81497C6.05 4.73624 5.64937 4.52927 5.33395 4.22072L5.32737 4.21429L5.27741 4.16426C5.20002 4.08677 5.10778 4.02498 5.00662 3.98304C4.90545 3.94111 4.79701 3.91952 4.6875 3.91952C4.57799 3.91952 4.46955 3.94111 4.36838 3.98304C4.26722 4.02498 4.17531 4.08645 4.09792 4.16393L4.09726 4.16458C4.01978 4.24198 3.95831 4.33388 3.91638 4.43505C3.87444 4.53621 3.85286 4.64465 3.85286 4.75417C3.85286 4.86368 3.87444 4.97212 3.91638 5.07328C3.95831 5.17445 4.01978 5.26636 4.09726 5.34375L4.15409 5.40058C4.46264 5.71601 4.66958 6.11667 4.7483 6.55083C4.82546 6.97636 4.77594 7.41497 4.60621 7.81231C4.45157 8.21777 4.18081 8.56889 3.82754 8.82157C3.46712 9.07935 3.03748 9.22274 2.59449 9.2331L2.575 9.23333H2.5C2.27899 9.23333 2.06703 9.32113 1.91074 9.47741C1.75446 9.63369 1.66667 9.84565 1.66667 10.0667C1.66667 10.2877 1.75446 10.4996 1.91074 10.6559C2.06703 10.8122 2.27899 10.9 2.5 10.9H2.64499C3.07566 10.9017 3.49644 11.0293 3.85551 11.2671C4.21334 11.5041 4.49433 11.8402 4.66418 12.2343C4.8409 12.6369 4.89342 13.0831 4.81497 13.5158C4.73624 13.95 4.52927 14.3506 4.22072 14.6661L4.21429 14.6726L4.16425 14.7226C4.08677 14.8 4.02498 14.8922 3.98304 14.9934C3.94111 15.0945 3.91952 15.203 3.91952 15.3125C3.91952 15.422 3.94111 15.5305 3.98304 15.6316C4.02498 15.7328 4.08645 15.8247 4.16393 15.9021L4.16458 15.9027C4.24198 15.9802 4.33388 16.0417 4.43505 16.0836C4.53622 16.1256 4.64465 16.1471 4.75417 16.1471C4.86368 16.1471 4.97212 16.1256 5.07328 16.0836C5.17445 16.0417 5.26636 15.9802 5.34375 15.9027L5.40058 15.8459C5.71601 15.5374 6.11667 15.3304 6.55083 15.2517C6.97635 15.1745 7.41497 15.2241 7.81231 15.3938C8.21777 15.5484 8.56889 15.8192 8.82157 16.1725C9.07935 16.5329 9.22274 16.9625 9.2331 17.4055L9.23333 17.425V17.5C9.23333 17.721 9.32113 17.933 9.47741 18.0893C9.63369 18.2455 9.84565 18.3333 10.0667 18.3333C10.2877 18.3333 10.4996 18.2455 10.6559 18.0893C10.8122 17.933 10.9 17.721 10.9 17.5V17.3583L10.9 17.355C10.9017 16.9243 11.0293 16.5036 11.2671 16.1445C11.5041 15.7866 11.8402 15.5056 12.2344 15.3358C12.637 15.1591 13.0832 15.1066 13.5158 15.185C13.95 15.2638 14.3506 15.4707 14.6661 15.7793L14.6726 15.7857L14.7226 15.8357C14.8 15.9132 14.8922 15.975 14.9934 16.017C15.0945 16.0589 15.203 16.0805 15.3125 16.0805C15.422 16.0805 15.5305 16.0589 15.6316 16.017C15.7328 15.975 15.8247 15.9136 15.9021 15.8361L15.9027 15.8354C15.9802 15.758 16.0417 15.6661 16.0836 15.5649C16.1256 15.4638 16.1471 15.3553 16.1471 15.2458C16.1471 15.1363 16.1256 15.0279 16.0836 14.9267C16.0417 14.8255 15.9802 14.7336 15.9027 14.6562L15.8459 14.5994C15.5374 14.284 15.3304 13.8833 15.2517 13.4492C15.1732 13.0165 15.2258 12.5703 15.4024 12.1677C15.5723 11.7736 15.8533 11.4375 16.2112 11.2005C16.5702 10.9627 16.991 10.8351 17.4217 10.8333L17.425 10.8333L17.5 10.8333C17.721 10.8333 17.933 10.7455 18.0893 10.5893C18.2455 10.433 18.3333 10.221 18.3333 10C18.3333 9.77899 18.2455 9.56703 18.0893 9.41074C17.933 9.25446 17.721 9.16667 17.5 9.16667H17.3583L17.355 9.16666C16.9243 9.16494 16.5036 9.03733 16.1445 8.79953C15.7854 8.56173 15.5037 8.22413 15.334 7.82828C15.3038 7.75781 15.2836 7.68368 15.2737 7.60801C15.1477 7.24831 15.1167 6.8611 15.185 6.48417C15.2638 6.05 15.4707 5.64938 15.7793 5.33395L15.7857 5.32738L15.8357 5.27741C15.9132 5.20002 15.975 5.10778 16.017 5.00662C16.0589 4.90545 16.0805 4.79701 16.0805 4.6875C16.0805 4.57799 16.0589 4.46955 16.017 4.36838C15.975 4.26722 15.9136 4.17531 15.8361 4.09792L15.8354 4.09726C15.758 4.01978 15.6661 3.95831 15.5649 3.91638C15.4638 3.87444 15.3553 3.85286 15.2458 3.85286C15.1363 3.85286 15.0279 3.87444 14.9267 3.91638C14.8256 3.95832 14.7336 4.01978 14.6562 4.09726L14.5994 4.15409C14.284 4.46264 13.8833 4.66958 13.4492 4.7483C13.0165 4.82676 12.5702 4.77423 12.1676 4.59751C11.7735 4.42767 11.4374 4.14667 11.2005 3.78885C10.9627 3.42977 10.8351 3.009 10.8333 2.57832L10.8333 2.575V2.5C10.8333 2.27899 10.7455 2.06703 10.5893 1.91074C10.433 1.75446 10.221 1.66667 10 1.66667ZM8.23223 0.732233C8.70107 0.263392 9.33696 0 10 0C10.663 0 11.2989 0.263392 11.7678 0.732233C12.2366 1.20107 12.5 1.83696 12.5 2.5V2.57292C12.5007 2.67812 12.5319 2.78087 12.59 2.8686C12.6484 2.95667 12.7312 3.02577 12.8283 3.06738L12.8365 3.0709C12.9355 3.1146 13.0453 3.12768 13.1518 3.10837C13.2571 3.08928 13.3544 3.0394 13.4314 2.96509L13.4771 2.91941C13.7093 2.68696 13.985 2.50257 14.2885 2.37676C14.592 2.25095 14.9173 2.18619 15.2458 2.18619C15.5744 2.18619 15.8997 2.25095 16.2032 2.37676C16.5067 2.50257 16.7824 2.68697 17.0146 2.91941C17.2467 3.15145 17.4309 3.42694 17.5566 3.73015C17.6824 4.03364 17.7471 4.35896 17.7471 4.6875C17.7471 5.01604 17.6824 5.34136 17.5566 5.64485C17.4308 5.9482 17.2465 6.22381 17.0143 6.45592L16.9683 6.50192C16.8939 6.5789 16.8441 6.67618 16.825 6.78152C16.8056 6.88801 16.8187 6.99785 16.8624 7.09686C16.8859 7.15023 16.9038 7.20577 16.9156 7.26256C16.9551 7.32066 17.0056 7.37082 17.0647 7.40996C17.1525 7.46806 17.2552 7.49934 17.3604 7.5H17.5C18.163 7.5 18.7989 7.76339 19.2678 8.23223C19.7366 8.70107 20 9.33696 20 10C20 10.663 19.7366 11.2989 19.2678 11.7678C18.7989 12.2366 18.163 12.5 17.5 12.5H17.4271C17.3219 12.5007 17.2191 12.5319 17.1314 12.59C17.0433 12.6484 16.9742 12.7312 16.9326 12.8283L16.9291 12.8365C16.8854 12.9355 16.8723 13.0453 16.8916 13.1518C16.9107 13.2571 16.9606 13.3544 17.0349 13.4314L17.0806 13.4771C17.3129 13.7092 17.4975 13.9851 17.6232 14.2885C17.7491 14.592 17.8138 14.9173 17.8138 15.2458C17.8138 15.5744 17.7491 15.8997 17.6232 16.2032C17.4974 16.5067 17.313 16.7824 17.0806 17.0146L16.4917 16.425L17.0813 17.0139C16.8491 17.2464 16.5733 17.4308 16.2699 17.5566C15.9664 17.6824 15.641 17.7471 15.3125 17.7471C14.984 17.7471 14.6586 17.6824 14.3551 17.5566C14.0518 17.4308 13.7762 17.2465 13.5441 17.0143L13.4981 16.9682C13.4211 16.8939 13.3238 16.8441 13.2185 16.825C13.112 16.8056 13.0022 16.8187 12.9031 16.8624L12.895 16.866C12.7979 16.9076 12.715 16.9767 12.6567 17.0647C12.5986 17.1525 12.5673 17.2552 12.5667 17.3604V17.5C12.5667 18.163 12.3033 18.7989 11.8344 19.2678C11.3656 19.7366 10.7297 20 10.0667 20C9.40362 20 8.76774 19.7366 8.2989 19.2678C7.83006 18.7989 7.56667 18.163 7.56667 17.5V17.437C7.56271 17.331 7.52772 17.2284 7.46595 17.142C7.40272 17.0536 7.31436 16.9863 7.21235 16.9488C7.19587 16.9427 7.17959 16.9361 7.16353 16.9291C7.06451 16.8854 6.95468 16.8723 6.84818 16.8916C6.74285 16.9107 6.64556 16.9606 6.56858 17.0349L6.52292 17.0806C6.2908 17.3129 6.01487 17.4975 5.71152 17.6232C5.40802 17.7491 5.08271 17.8138 4.75417 17.8138C4.42563 17.8138 4.10031 17.7491 3.79682 17.6232C3.49361 17.4976 3.21812 17.3134 2.98607 17.0813C2.75363 16.8491 2.56923 16.5733 2.44342 16.2699C2.31761 15.9664 2.25286 15.641 2.25286 15.3125C2.25286 14.984 2.31761 14.6586 2.44342 14.3551C2.56923 14.0517 2.75363 13.7759 2.98607 13.5437L3.03176 13.4981C3.10607 13.4211 3.15594 13.3238 3.17504 13.2185C3.19435 13.112 3.18131 13.0022 3.13761 12.9031L3.13401 12.895C3.09239 12.7979 3.02334 12.715 2.93526 12.6567C2.84753 12.5986 2.74479 12.5673 2.63958 12.5667H2.5C1.83696 12.5667 1.20107 12.3033 0.732233 11.8344C0.263392 11.3656 0 10.7297 0 10.0667C0 9.40363 0.263392 8.76774 0.732233 8.2989C1.20107 7.83006 1.83696 7.56667 2.5 7.56667H2.56303C2.66903 7.56271 2.7716 7.52772 2.85796 7.46595C2.94636 7.40272 3.0137 7.31436 3.05122 7.21235C3.05728 7.19587 3.06386 7.17959 3.07095 7.16353C3.11465 7.06451 3.12768 6.95468 3.10837 6.84818C3.08927 6.74285 3.0394 6.64557 2.96508 6.56859L2.91941 6.52292C2.68696 6.29073 2.50257 6.01501 2.37676 5.71152C2.25095 5.40802 2.18619 5.08271 2.18619 4.75417C2.18619 4.42563 2.25095 4.10031 2.37676 3.79682C2.50251 3.49346 2.68679 3.21786 2.91908 2.98574C3.15119 2.75346 3.4268 2.56917 3.73015 2.44342C4.03364 2.31761 4.35896 2.25286 4.6875 2.25286C5.01604 2.25286 5.34136 2.31761 5.64485 2.44342C5.94835 2.56923 6.22407 2.75363 6.45625 2.98607L6.50192 3.03175C6.5789 3.10607 6.67618 3.15594 6.78152 3.17504C6.88801 3.19435 6.99785 3.18131 7.09686 3.13761C7.15023 3.11406 7.20577 3.09624 7.26256 3.08435C7.32066 3.04491 7.37082 2.99436 7.40996 2.93526C7.46806 2.84753 7.49934 2.74479 7.5 2.63958V2.5C7.5 1.83696 7.76339 1.20107 8.23223 0.732233Z",
              fill: o
            })]
          })
        },
        pe = e => {
          let {
            accentColor: a = "#FCAF17",
            alt: l = "",
            className: t = "",
            height: o = "22",
            label: r,
            viewBox: s = "0 0 30 24",
            width: n = "30"
          } = e;
          return (0, i.jsxs)("svg", {
            className: t,
            height: o,
            role: "img",
            viewBox: s,
            width: n,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: l
            }), (0, i.jsx)("path", {
              d: "M10 2C10 0.89543 10.8954 0 12 0H26.2857C27.3903 0 28.2857 0.895431 28.2857 2V12C28.2857 13.1046 27.3903 14 26.2857 14H12C10.8954 14 10 13.1046 10 12V2Z",
              fill: a
            }), "4K" === r ? (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("path", {
                d: "M17.8025 4V7.73315H18.6609V8.73595H17.8025V10H16.6393V8.73595H14V7.44663L16.5511 4H17.8025ZM15.0028 7.73315H16.6393V5.55056H16.6152L15.0028 7.73315Z",
                fill: "#121212"
              }), (0, i.jsx)("path", {
                d: "M24.021 4L21.855 6.41011L24.2857 10H22.8177L21.0207 7.24438L20.4832 7.80056V10H19.2959V4H20.4832V6.31742L21.133 5.56742L22.5048 4H24.021Z",
                fill: "#121212"
              })]
            }) : (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("path", {
                d: "M17.9966 6.31742V4H19.385V10H17.9966V7.42978H15.3885V10H14V4H15.3885V6.31742H17.9966Z",
                fill: "#121212"
              }), (0, i.jsx)("path", {
                d: "M22.5476 4C25.0525 4 26 5.16292 26 6.95786C26 8.75281 25.0056 10 22.7352 10H20.371V4H22.5476ZM21.7595 8.94663H22.6039C24.0768 8.94663 24.6115 8.30618 24.6115 7C24.6115 5.70225 24.1237 5.01124 22.4162 5.01124H21.7595V8.94663Z",
                fill: "#121212"
              })]
            })]
          })
        },
        ve = e => {
          let {
            alt: a = "",
            className: l = "",
            fill: t = "none",
            height: o = "24",
            stroke: r = "white",
            strokeLinecap: s = "round",
            strokeLinejoin: n = "round",
            strokeWidth: d = "2",
            viewBox: c = "0 0 24 24",
            width: u = "24"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            fill: t,
            height: o,
            role: "img",
            viewBox: c,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              d: "M20 6L9 17L4 12",
              stroke: r,
              strokeWidth: d,
              strokeLinecap: s,
              strokeLinejoin: n
            })]
          })
        },
        me = (0, c.defineMessages)({
          videoplayer_quality_settings_button_label: {
            id: "videoplayer_quality_settings_button_label",
            defaultMessage: "Quality Settings Menu"
          }
        }),
        be = (0, c.defineMessages)({
          videoplayer_quality_settings_menu_header: {
            id: "videoplayer_quality_settings_menu_header",
            defaultMessage: "Settings"
          },
          videoplayer_quality_menu_back_button_label: {
            id: "videoplayer_quality_menu_back_button_label",
            defaultMessage: "Back"
          }
        }),
        ye = {
          pillBtn: "rockstargames-modules-core-videoplayerffff951e5973ce0bc461e1411ad5544d",
          selected: "rockstargames-modules-core-videoplayerb3851bdd059e4224115e9aa4df3a5af7",
          controlItemOptionButton: "rockstargames-modules-core-videoplayera08db4abb40b87969ac716513f4773b5",
          hoverIcon: "rockstargames-modules-core-videoplayerb179906ad4f91e0553ffea89b6099ca7",
          label: "rockstargames-modules-core-videoplayerbb043777fac9db5fc99a1f929a9d3a11",
          icon: "rockstargames-modules-core-videoplayerd93ba7789de7d6015c34cffea4122d7e",
          iconAndLabelContainer: "rockstargames-modules-core-videoplayerc2b75d4c9212edb10fbf060b701475e8",
          iconLabel: "rockstargames-modules-core-videoplayerf0c80dac1fc7711ae8a0522b035974c4",
          labelText: "rockstargames-modules-core-videoplayeraa491006f5962540d770a658a135e4a7",
          header: "rockstargames-modules-core-videoplayerd496864a51d200a3f42c9ae33924ade9",
          menuLabel: "rockstargames-modules-core-videoplayerf5bbeae0cc261779d5892926c364956d",
          backButton: "rockstargames-modules-core-videoplayerac946d5fb2752122d5122005288623d2",
          options: "rockstargames-modules-core-videoplayerc0dbafb30a341e4b91b4f01f6c3e2ad4",
          subtext: "rockstargames-modules-core-videoplayerb31488b2213ac80c231638fcb2345803",
          button: "rockstargames-modules-core-videoplayera6245cc347de7e8fb01377f8167e4949",
          checkmark: "rockstargames-modules-core-videoplayerbcbf6f3dc9a8c1ce5ba36fe828f0721e",
          selectedValue: "rockstargames-modules-core-videoplayerd27f58ca4744c1aff29fe7f665604c9f"
        },
        fe = e => {
          const a = parseInt(e, 10);
          let l;
          return a >= 1080 && (l = "HD"), a >= 2160 && (l = "4K"), l
        },
        he = e => {
          let {
            collapsed: a = !1,
            onClick: l
          } = e;
          const [o, r] = (0, t.useState)(), {
            formatMessage: s
          } = (0, c.useIntl)(), {
            state: n,
            trackGa: u,
            menuStates: _
          } = (0, b.Tc)(), {
            accentColor: p,
            fileIndex: v,
            videoData: m
          } = n, {
            video: y
          } = m;
          return (0, t.useEffect)((() => {
            y && r(fe(y.files[v]?.resolution))
          }), [v, y?.files]), (0, i.jsxs)(P, {
            tooltipLabel: s(be.videoplayer_quality_settings_menu_header),
            "aria-label": s(me.videoplayer_quality_settings_button_label),
            onClick: () => {
              u({
                event: "video_quality"
              }), l()
            },
            onKeyUp: e => {
              J(e.target) || (e.preventDefault(), u({
                event: "video_quality"
              }), l())
            },
            hideTooltip: _.isQualityMenuOpen,
            children: [(0, i.jsxs)("span", {
              className: ye.label,
              children: [(0, i.jsxs)("span", {
                className: ye.iconAndLabelContainer,
                children: [(0, i.jsx)(_e, {
                  className: (0, d.classList)(ye.icon, o ? ye.labeledIcon : ""),
                  label: o
                }), o && (0, i.jsx)(pe, {
                  accentColor: p,
                  className: ye.iconLabel,
                  label: o
                })]
              }), a && (0, i.jsx)("span", {
                className: ye.labelText,
                children: s(be.videoplayer_quality_settings_menu_header)
              })]
            }), a && (0, i.jsx)(ue, {})]
          })
        },
        ge = e => {
          let {
            collapsed: a = !1,
            onBackButtonClick: l,
            onOptionSelect: o
          } = e;
          const [r, s] = (0, t.useState)(0), [n, d] = (0, t.useState)([]), {
            formatMessage: u
          } = (0, c.useIntl)(), {
            state: _,
            setState: p,
            menuStates: v,
            trackGa: m
          } = (0, b.Tc)(), {
            fileIndex: y,
            videoData: f,
            videoRef: h
          } = _, {
            video: g
          } = f;
          return (0, t.useEffect)((() => {
            if (!n.length) return;
            const e = n.find((e => e.value === g?.files[y].resolution)),
              a = void 0 === e ? n.length - 1 : n.indexOf(e);
            s(a)
          }), [y, n]), (0, t.useEffect)((() => {
            if (!g?.files) return;
            const e = g.files.map((e => ({
              label: e.resolution,
              subtext: fe(e.resolution),
              value: e.resolution
            })));
            d([...e])
          }), [g]), v?.isQualityMenuOpen ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("header", {
              className: ye.header,
              children: [(0, i.jsxs)("div", {
                className: ye.menuLabel,
                children: [a ? (0, i.jsx)("div", {
                  role: "button",
                  className: ye.backButton,
                  "aria-label": u(be.videoplayer_quality_menu_back_button_label),
                  onClick: () => {
                    "function" == typeof l && l()
                  },
                  onKeyUp: () => {
                    "function" == typeof l && l()
                  },
                  tabIndex: 0,
                  children: (0, i.jsx)(oe, {})
                }) : (0, i.jsx)(_e, {}), u(be.videoplayer_quality_settings_menu_header)]
              }), Number.isInteger(r) && n?.length && (0, i.jsx)("div", {
                className: ye.selectedValue,
                children: n[r]?.label
              })]
            }), (0, i.jsx)("section", {
              className: ye.options,
              children: n && n.map(((e, a) => {
                const l = `${e.label}${e.subtext?` ${e.subtext}`:""}`;
                return (0, i.jsxs)("button", {
                  type: "button",
                  "aria-label": l,
                  className: [ye.button, r === a ? ye.selected : ""].join(" ").trim(),
                  onClick: () => (e => {
                    if (!g?.files) return;
                    const a = g.files.find((a => a.resolution === e.value));
                    if (!a) return;
                    const l = g.files.indexOf(a);
                    m({
                      event: "video_quality",
                      text: a.resolution
                    }), p("savedTime", h?.current?.currentTime), p("fileIndex", l), "function" == typeof o && o()
                  })(e),
                  children: [(0, i.jsxs)("span", {
                    className: ye.buttonLabel,
                    children: [e.label, e.subtext && (0, i.jsx)("sup", {
                      className: ye.subtext,
                      children: e.subtext
                    })]
                  }), r === a && (0, i.jsx)(ve, {
                    className: ye.checkmark
                  })]
                }, e.label)
              }))
            })]
          }) : null
        },
        ke = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            isFilled: s = !1,
            height: n = "20",
            width: d = "22",
            viewBox: c = "0 0 22 20"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            width: d,
            height: n,
            viewBox: c,
            fill: o,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), s ? (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M19.8581 3C20.2996 3 20.6997 3.15098 21.0033 3.43922H21.0171C21.3206 3.72745 21.5 4.11176 21.5 4.5098V15.4902C21.5 15.8882 21.3206 16.2725 21.0171 16.5608C20.7135 16.849 20.2996 17 19.8719 17H2.12812C1.6866 17 1.28647 16.849 0.982917 16.5608C0.679369 16.2863 0.5 15.8882 0.5 15.4902V4.5098C0.5 4.11176 0.679369 3.72745 0.982917 3.43922C1.30026 3.15098 1.70039 3 2.12812 3H19.8581ZM8.03496 13.5689C7.35888 13.5689 6.69659 13.4042 6.11709 13.0885C5.53759 12.7728 5.04087 12.3199 4.70973 11.7846C4.37859 11.2493 4.19922 10.6179 4.19922 10.0003C4.19922 9.38262 4.37859 8.76497 4.70973 8.21595C5.05467 7.68066 5.53759 7.22772 6.11709 6.91203C6.69659 6.59635 7.35888 6.43164 8.03496 6.43164C8.71105 6.43164 9.37333 6.59635 9.95283 6.91203C10.0494 6.96693 10.146 7.03556 10.215 7.11792C10.2978 7.20027 10.353 7.29635 10.3806 7.40615C10.4082 7.51595 10.422 7.62576 10.4082 7.73556C10.3944 7.84537 10.353 7.95517 10.2978 8.05125C10.2426 8.14733 10.1598 8.22968 10.0632 8.29831C9.96663 8.36693 9.85625 8.40811 9.74587 8.43556C9.63549 8.44929 9.51131 8.46301 9.40093 8.44929C9.29055 8.43556 9.18017 8.39439 9.08358 8.33948C8.76624 8.17478 8.4075 8.0787 8.04876 8.0787C7.67622 8.0787 7.31748 8.17478 7.00014 8.33948C6.68279 8.50419 6.42064 8.75125 6.24127 9.03948C6.0619 9.32772 5.96532 9.65713 5.96532 10.0003C5.96532 10.3434 6.0619 10.6728 6.24127 10.9611C6.42064 11.2493 6.68279 11.4963 7.00014 11.6611C7.63483 12.0042 8.44889 12.0042 9.08358 11.6611C9.29055 11.5512 9.52511 11.5238 9.74587 11.5787C9.98043 11.6336 10.1736 11.7709 10.284 11.963C10.3944 12.1552 10.422 12.3885 10.3668 12.5944C10.2978 12.8003 10.1598 12.9924 9.95283 13.1022H9.93904C9.35954 13.4042 8.71105 13.5689 8.03496 13.5689ZM15.4305 13.5689C14.7544 13.5689 14.0921 13.4042 13.5126 13.0885C12.9331 12.7728 12.4364 12.3199 12.1053 11.7846C11.7741 11.2493 11.5948 10.6179 11.5948 10.0003C11.5948 9.38262 11.7741 8.76497 12.1053 8.21595C12.4502 7.68066 12.9331 7.22772 13.5126 6.91203C14.0921 6.59635 14.7544 6.43164 15.4305 6.43164C16.1066 6.43164 16.7689 6.59635 17.3484 6.91203C17.4449 6.96693 17.5415 7.03556 17.6105 7.11792C17.6933 7.20027 17.7485 7.29635 17.7761 7.40615C17.8037 7.51595 17.8175 7.62576 17.8037 7.73556C17.7899 7.84537 17.7485 7.95517 17.6933 8.05125C17.6243 8.14733 17.5553 8.22968 17.4587 8.29831C17.3622 8.36693 17.2518 8.40811 17.1414 8.43556C17.031 8.44929 16.9068 8.46301 16.7965 8.44929C16.6861 8.43556 16.5757 8.39439 16.4791 8.33948C16.1618 8.17478 15.803 8.0787 15.4443 8.0787C15.0718 8.0787 14.713 8.17478 14.3957 8.33948C14.0783 8.50419 13.8162 8.75125 13.6368 9.03948C13.4574 9.32772 13.3608 9.65713 13.3608 10.0003C13.3608 10.3434 13.4574 10.6728 13.6368 10.9611C13.8162 11.2493 14.0783 11.4963 14.3957 11.6611C15.0304 12.0042 15.8444 12.0042 16.4791 11.6611C16.6861 11.5512 16.9068 11.5238 17.1414 11.5787C17.376 11.6336 17.5553 11.7709 17.6795 11.963C17.7899 12.1552 17.8175 12.3885 17.7623 12.5944C17.6933 12.8003 17.5553 12.9787 17.3484 13.0885C16.7689 13.4042 16.1066 13.5689 15.4305 13.5689Z",
              fill: o
            }) : (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("path", {
                d: "m6.12943 13.0882c.57951.3157 1.24179.4804 1.91788.4804.67608 0 1.32457-.1647 1.90407-.4666h.0138c.20692-.1098.34492-.302.41392-.5079.0552-.2059.0276-.4392-.0828-.6314-.1104-.1921-.30353-.3294-.53809-.3843-.22076-.0549-.45532-.0274-.66228.0824-.6347.3431-1.44875.3431-2.08345 0-.31734-.1647-.5795-.4118-.75887-.7-.17937-.2883-.27595-.6177-.27595-.9608 0-.34314.09658-.67255.27595-.96078.17937-.28824.44153-.5353.75887-.7.31735-.16471.67609-.26079 1.04862-.26079.35874 0 .71748.09608 1.03483.26079.09658.0549.20696.09607.31734.1098s.23456 0 .34494-.01373c.11038-.02745.22077-.06862.31739-.13725.0965-.06863.1793-.15098.2345-.24706s.0966-.20588.1104-.31569c.0138-.1098 0-.2196-.0276-.32941-.0276-.1098-.0828-.20588-.1656-.28823-.069-.08236-.1655-.15098-.26212-.20589-.5795-.31568-1.24179-.48039-1.91787-.48039-.67609 0-1.33837.16471-1.91788.48039-.5795.31569-1.06241.76863-1.40735 1.30393-.33115.54902-.51052 1.16666-.51052 1.78431 0 .6176.17937 1.249.51052 1.7843.33114.5353.82785.9882 1.40735 1.3039z"
              }), (0, i.jsx)("path", {
                d: "m13.525 13.0882c.5795.3157 1.2418.4804 1.9178.4804.6761 0 1.3384-.1647 1.9179-.4804.207-.1098.345-.2882.4139-.4941.0552-.2059.0276-.4392-.0827-.6314-.1242-.1921-.3036-.3294-.5382-.3843-.2345-.0549-.4553-.0274-.6622.0824-.6347.3431-1.4488.3431-2.0835 0-.3173-.1647-.5795-.4118-.7589-.7-.1793-.2883-.2759-.6177-.2759-.9608 0-.34314.0966-.67255.2759-.96078.1794-.28824.4416-.5353.7589-.7.3174-.16471.6761-.26079 1.0486-.26079.3588 0 .7175.09608 1.0349.26079.0965.0549.2069.09607.3173.1098s.2346 0 .3449-.01373c.1104-.02745.2208-.06862.3174-.13725s.1656-.15098.2346-.24706c.0551-.09608.0965-.20588.1103-.31569.0138-.1098 0-.2196-.0276-.32941-.0276-.1098-.0827-.20588-.1655-.28823-.069-.08236-.1656-.15098-.2622-.20589-.5795-.31568-1.2418-.48039-1.9179-.48039-.676 0-1.3383.16471-1.9178.48039-.5795.31569-1.0625.76863-1.4074 1.30393-.3311.54902-.5105 1.16666-.5105 1.78431 0 .6176.1794 1.249.5105 1.7843.3312.5353.8279.9882 1.4074 1.3039z"
              }), (0, i.jsx)("path", {
                d: "m21.0033 3.43922c-.3036-.28824-.7037-.43922-1.1452-.43922h-17.72998c-.42773 0-.82786.15098-1.145203.43922-.303548.28823-.482917.67254-.482917 1.07058v10.9804c0 .398.179369.7961.482917 1.0706.303553.2882.703683.4392 1.145203.4392h17.74378c.4277 0 .8416-.151 1.1452-.4392.3035-.2883.4829-.6726.4829-1.0706v-10.9804c0-.39804-.1794-.78235-.4829-1.07058zm-1.2832 1.20784v10.70584h-17.454v-10.70584h17.4678z"
              })]
            })]
          })
        },
        Ce = e => {
          let {
            className: a = "",
            clipRule: l = "evenodd",
            fill: t = "white",
            fillRule: o = "evenodd",
            height: r = "2",
            width: s = "24",
            viewBox: n = "0 0 24 2"
          } = e;
          return (0, i.jsx)("svg", {
            className: a,
            width: s,
            height: r,
            viewBox: n,
            fill: t,
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("path", {
              fillRule: o,
              clipRule: l,
              d: "M-8.74227e-08 0.999999C-3.91405e-08 0.447715 0.511675 4.4732e-08 1.14286 9.99118e-08L22.8571 1.99824e-06C23.4883 2.05342e-06 24 0.447717 24 1C24 1.55229 23.4883 2 22.8571 2L1.14286 2C0.511674 2 -1.35705e-07 1.55228 -8.74227e-08 0.999999Z",
              fill: t
            })
          })
        },
        xe = (0, c.defineMessages)({
          videoplayer_captions_button_label: {
            id: "videoplayer_captions_button_label",
            defaultMessage: "Captions"
          },
          videoplayer_captions_menu_header: {
            id: "videoplayer_captions_menu_header",
            defaultMessage: "Subtitles / CC"
          },
          videoplayer_captions_menu_back_button_label: {
            id: "videoplayer_captions_menu_back_button_label",
            defaultMessage: "Back"
          },
          videoplayer_captions_menu_subtitles_label: {
            id: "videoplayer_captions_menu_subtitles_label",
            defaultMessage: "(Subtitles)"
          },
          videoplayer_captions_menu_off_label: {
            id: "videoplayer_captions_menu_off_label",
            defaultMessage: "Off"
          }
        }),
        we = {
          pillBtn: "rockstargames-modules-core-videoplayerd448f9e2002ebcefc51286e0afb0399b",
          selected: "rockstargames-modules-core-videoplayerd295c635fc3175bdba53fc003004beef",
          controlItemOptionButton: "rockstargames-modules-core-videoplayeracaa16ab8f01cb793eec45d372402fd1",
          hoverIcon: "rockstargames-modules-core-videoplayeredd39fcfb2647270f4303bb5e61e4dc4",
          icon: "rockstargames-modules-core-videoplayerf6fffc9ba50d5c569e661962b7686f8b",
          active: "rockstargames-modules-core-videoplayerad6aa8a2077a829a2e713609bd73a3ec",
          underline: "rockstargames-modules-core-videoplayereab038eb02473816480fe34d07970ed1",
          labelText: "rockstargames-modules-core-videoplayercfd96d9f356e720a044c6d9852f5bc53",
          header: "rockstargames-modules-core-videoplayercbf98171c3f78cf312c67d1dc52a1441",
          menuLabel: "rockstargames-modules-core-videoplayerf49da5773f56cf63ad93459d352136dc",
          backButton: "rockstargames-modules-core-videoplayerad2b3a54cff72bee78ed53f1325b4d72",
          options: "rockstargames-modules-core-videoplayerad5e9bf26ccf4bc96c8c05c19ab02e96",
          subtext: "rockstargames-modules-core-videoplayerdccd2413833b410b886462d23f69ee61",
          button: "rockstargames-modules-core-videoplayerbbe121fc34a6b3f0fe59ce773a7c6429",
          checkmark: "rockstargames-modules-core-videoplayerb6f06c079efc144cd470552623bce583",
          selectedValue: "rockstargames-modules-core-videoplayerd0ee091e19bdeda1f765dc581de3776e"
        },
        Me = e => {
          let {
            collapsed: a = !1,
            onClick: l
          } = e;
          const {
            formatMessage: t
          } = (0, c.useIntl)(), {
            trackGa: o,
            state: r,
            menuStates: s
          } = (0, b.Tc)(), {
            accentColor: n,
            activeCaption: d
          } = r;
          return (0, i.jsxs)(P, {
            tooltipLabel: t(xe.videoplayer_captions_menu_header),
            "aria-label": t(xe.videoplayer_captions_button_label),
            onClick: () => {
              o({
                event: "video_caption"
              }), l()
            },
            onKeyDown: e => {
              J(e.target) || (o({
                event: "video_caption"
              }), l())
            },
            hideTooltip: s.isCaptionsMenuOpen,
            children: [(0, i.jsxs)("span", {
              className: we.label,
              children: [(0, i.jsx)(ke, {
                className: we.icon,
                isFilled: !(!s.isCaptionsMenuOpen && !d)
              }), !!d && (0, i.jsx)(Ce, {
                className: we.underline,
                fill: n
              }), a && (0, i.jsx)("span", {
                className: we.labelText,
                children: t(xe.videoplayer_captions_menu_header)
              })]
            }), a && (0, i.jsx)(ue, {})]
          })
        },
        je = e => {
          let {
            collapsed: a = !1,
            onBackButtonClick: l,
            onOptionSelect: o
          } = e;
          const [r, s] = (0, t.useState)([]), {
            formatMessage: n
          } = (0, c.useIntl)(), {
            state: u,
            setState: _,
            menuStates: p
          } = (0, b.Tc)(), {
            captions: v,
            activeCaption: m
          } = u;
          return (0, t.useEffect)((() => {
            if (!v) return s([]), void _("activeCaption", 0);
            const e = v.map(((e, a) => {
              const l = e.label?.replace(/\([^)]*\)/g, "").trim(),
                t = "subtitles" === e.kind;
              return {
                defaultSelected: e.isDefault,
                label: `${(0,d.getLanguageLabel)(l)} ${t?n(xe.videoplayer_captions_menu_subtitles_label):""}`.trim(),
                value: a
              }
            }));
            s([...e])
          }), [v]), p?.isCaptionsMenuOpen ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("header", {
              className: we.header,
              children: (0, i.jsxs)("div", {
                className: we.menuLabel,
                children: [a ? (0, i.jsx)("div", {
                  role: "button",
                  className: we.backButton,
                  "aria-label": n(xe.videoplayer_captions_menu_back_button_label),
                  onClick: () => {
                    "function" == typeof l && l()
                  },
                  onKeyUp: () => {
                    "function" == typeof l && l()
                  },
                  tabIndex: 0,
                  children: (0, i.jsx)(oe, {})
                }) : (0, i.jsx)(ke, {}), n(xe.videoplayer_captions_menu_header)]
              })
            }), (0, i.jsx)("section", {
              className: we.options,
              children: r && r.map(((e, a) => (0, i.jsxs)("button", {
                type: "button",
                "aria-label": e.label,
                className: [we.button, a === m ? we.selected : ""].join(" ").trim(),
                onClick: () => (e => {
                  const a = e.value;
                  _("showCaptions", !m === a), _("activeCaption", m === a ? 0 : a), "function" == typeof o && o()
                })(e),
                children: [(0, i.jsx)("span", {
                  className: we.buttonLabel,
                  children: e.label
                }), m === e.value && (0, i.jsx)(ve, {
                  className: we.checkmark
                })]
              }, e.label)))
            })]
          }) : null
        },
        Ne = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: s = "20",
            viewBox: n = "0 0 20 20",
            width: d = "20"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            height: s,
            role: "img",
            viewBox: n,
            width: d,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M18.9213 1.07735C19.1477 1.30372 19.2243 1.63974 19.1186 1.9419L13.2853 18.6086C13.1724 18.9311 12.8741 19.152 12.5327 19.1659C12.1913 19.1798 11.876 18.984 11.7372 18.6717L8.53403 11.4646L1.32692 8.26145C1.01469 8.12268 0.8188 7.80737 0.832728 7.46597C0.846656 7.12457 1.06758 6.82627 1.39008 6.71339L18.0567 0.88006C18.3589 0.774305 18.6949 0.850988 18.9213 1.07735ZM3.9246 7.59211L9.50382 10.0718C9.69234 10.1556 9.84309 10.3063 9.92688 10.4948L12.4065 16.074L16.9737 3.02492L3.9246 7.59211Z",
              fill: o
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M18.9213 1.07735C19.2467 1.40279 19.2467 1.93043 18.9213 2.25586L9.75463 11.4225C9.42919 11.748 8.90155 11.748 8.57611 11.4225C8.25068 11.0971 8.25068 10.5695 8.57611 10.244L17.7428 1.07735C18.0682 0.751916 18.5959 0.751916 18.9213 1.07735Z",
              fill: o
            })]
          })
        },
        Le = e => {
          let {
            alt: a = "",
            className: l = "",
            fill: t = "white",
            height: o = "17",
            viewBox: r = "0 0 16 17",
            width: s = "16"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            height: o,
            role: "img",
            viewBox: r,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              d: "M14.6654 8.54073C14.6654 4.83632 11.6806 1.83331 7.9987 1.83331C4.3168 1.83331 1.33203 4.83632 1.33203 8.54073C1.33203 11.8886 3.76993 14.6635 6.95703 15.1666V10.4796H5.26433V8.54073H6.95703V7.063C6.95703 5.38195 7.95232 4.4534 9.47513 4.4534C10.2045 4.4534 10.9675 4.5844 10.9675 4.5844V6.23505H10.1268C9.29864 6.23505 9.04037 6.75209 9.04037 7.28253V8.54073H10.8893L10.5938 10.4796H9.04036V15.1666C12.2275 14.6635 14.6654 11.8886 14.6654 8.54073Z",
              fill: t
            })]
          })
        },
        Se = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: s = "17",
            viewBox: n = "0 0 16 17",
            width: d = "16"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            height: s,
            role: "img",
            viewBox: n,
            width: d,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M12.1135 7.10253C12.3861 6.82994 12.757 6.6557 13.1786 6.6557C14.7326 6.6557 15.2497 8.73809 13.8474 9.45752C13.9092 9.67953 13.9345 9.92683 13.9345 10.1629C13.9345 12.5179 11.2816 14.426 8.01051 14.426C4.75343 14.426 2.10055 12.5179 2.10055 10.1629C2.10055 9.92683 2.12304 9.69077 2.17362 9.46876C0.743205 8.75214 1.25467 6.6557 2.81717 6.6557C3.23871 6.6557 3.62371 6.82994 3.8963 7.11377C4.90237 6.41964 6.24005 5.97281 7.72667 5.91098L8.58099 2.04408C8.61752 1.90638 8.75241 1.80802 8.89012 1.84455L11.6273 2.45157C11.8128 2.09467 12.1865 1.83331 12.6193 1.83331C13.2404 1.83331 13.735 2.34197 13.735 2.94898C13.735 3.556 13.2376 4.06465 12.6193 4.06465C12.0123 4.06465 11.5177 3.57005 11.5177 2.96303L9.03906 2.4066L8.26062 5.91379C9.75848 5.96157 11.1102 6.4084 12.1135 7.10253ZM5.55724 8.50203C4.93617 8.50203 4.44157 8.99944 4.44157 9.6177C4.44157 10.2247 4.93898 10.7221 5.55724 10.7193C6.16425 10.7193 6.65885 10.2247 6.65885 9.6177C6.65885 8.99663 6.16425 8.50203 5.55724 8.50203ZM10.4639 12.2453C9.441 13.2682 6.55487 13.2682 5.53194 12.2453C5.41953 12.1469 5.41953 11.9727 5.53194 11.8603C5.6303 11.7619 5.80454 11.7619 5.9029 11.8603C6.68415 12.6612 9.27519 12.6752 10.0902 11.8603C10.1885 11.7619 10.3628 11.7619 10.4611 11.8603C10.5763 11.9727 10.5763 12.1469 10.4639 12.2453ZM9.33983 9.62051C9.33983 10.2275 9.83443 10.7221 10.4414 10.7221C11.0597 10.7221 11.5543 10.2247 11.5571 9.62051C11.5571 8.99944 11.0597 8.50484 10.4414 8.50484C9.83443 8.50484 9.33983 9.00225 9.33983 9.62051Z",
              fill: o
            })]
          })
        },
        Re = e => {
          let {
            alt: a = "",
            className: l = "",
            fill: t = "white",
            height: o = "17",
            viewBox: r = "0 0 16 17",
            width: s = "16"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            height: o,
            role: "img",
            viewBox: r,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              d: "M9.01608 7.68329L12.987 3.16669H12.046L8.59808 7.08839L5.84422 3.16669H2.66797L6.83234 9.097L2.66797 13.8334H3.609L7.25011 9.6919L10.1584 13.8334H13.3346L9.01585 7.68329H9.01608ZM7.72721 9.14925L7.30528 8.55872L3.94807 3.85985H5.39344L8.10274 7.65199L8.52468 8.24251L12.0465 13.1717H10.6011L7.72721 9.14947V9.14925Z",
              fill: t
            })]
          })
        },
        Ee = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: s = "17",
            viewBox: n = "0 0 16 17",
            width: d = "16"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            height: s,
            role: "img",
            viewBox: n,
            width: d,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M5.80604 4.36189C6.06639 4.62224 6.06639 5.04435 5.80604 5.3047L2.27744 8.83329L5.80604 12.3619C6.06639 12.6222 6.06639 13.0443 5.80604 13.3047C5.54569 13.565 5.12358 13.565 4.86323 13.3047L0.863231 9.3047C0.602881 9.04435 0.602881 8.62224 0.863231 8.36189L4.86323 4.36189C5.12358 4.10154 5.54569 4.10154 5.80604 4.36189Z",
              fill: o
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M10.1953 4.36189C10.4556 4.10154 10.8777 4.10154 11.1381 4.36189L15.1381 8.36189C15.3984 8.62224 15.3984 9.04435 15.1381 9.3047L11.1381 13.3047C10.8777 13.565 10.4556 13.565 10.1953 13.3047C9.93491 13.0443 9.93491 12.6222 10.1953 12.3619L13.7239 8.83329L10.1953 5.3047C9.93491 5.04435 9.93491 4.62224 10.1953 4.36189Z",
              fill: o
            })]
          })
        },
        Ve = e => {
          let {
            alt: a = "",
            className: l = "",
            fill: t = "none",
            height: o = "24",
            stroke: r = "white",
            strokeLinecap: s = "round",
            strokeLinejoin: n = "round",
            strokeWidth: d = "2",
            viewBox: c = "0 0 24 24",
            width: u = "24"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            fill: t,
            height: o,
            role: "img",
            viewBox: c,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              d: "M20 6L9 17L4 12",
              stroke: r,
              strokeWidth: d,
              strokeLinecap: s,
              strokeLinejoin: n
            })]
          })
        },
        Te = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: s = "24",
            width: n = "24",
            viewBox: d = "0 0 24 24"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            width: n,
            height: s,
            viewBox: d,
            fill: o,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M10 9C9.44772 9 9 9.44772 9 10V20C9 20.5523 9.44772 21 10 21H20C20.5523 21 21 20.5523 21 20V10C21 9.44772 20.5523 9 20 9H10ZM7 10C7 8.34315 8.34315 7 10 7H20C21.6569 7 23 8.34315 23 10V20C23 21.6569 21.6569 23 20 23H10C8.34315 23 7 21.6569 7 20V10Z",
              fill: o
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M4 3C3.45228 3 3 3.45228 3 4V14C3 14.5477 3.45228 15 4 15C4.55228 15 5 15.4477 5 16C5 16.5523 4.55228 17 4 17C2.34772 17 1 15.6523 1 14V4C1 2.34772 2.34772 1 4 1H14C15.6523 1 17 2.34772 17 4C17 4.55228 16.5523 5 16 5C15.4477 5 15 4.55228 15 4C15 3.45228 14.5477 3 14 3H4Z",
              fill: o
            })]
          })
        },
        Ae = (0, c.defineMessages)({
          videoplayer_share_menu_button_label: {
            id: "videoplayer_share_menu_button_label",
            defaultMessage: "Share Menu"
          },
          videoplayer_share_link_button_label: {
            id: "videoplayer_share_link_button_label",
            defaultMessage: "Share to {name}"
          },
          videoplayer_share_menu_header: {
            id: "videoplayer_share_menu_header",
            defaultMessage: "Share"
          },
          videoplayer_share_title: {
            id: "videoplayer_share_title",
            defaultMessage: "Share"
          },
          videoplayer_share_copy: {
            id: "videoplayer_share_copy",
            defaultMessage: "Copy"
          },
          videoplayer_share_time_copied: {
            id: "videoplayer_share_time_copied",
            defaultMessage: "Copied!"
          },
          videoplayer_share_time_copy: {
            id: "videoplayer_share_time_copy",
            defaultMessage: "Start shared video at"
          },
          videoplayer_share_menu_back_button_label: {
            id: "videoplayer_share_menu_back_button_label",
            defaultMessage: "Back"
          }
        }),
        Be = {
          pillBtn: "rockstargames-modules-core-videoplayerb2ee867461f243775c94c92f03bebb07",
          selected: "rockstargames-modules-core-videoplayera4f7da3a04e3bf51ce976b38463d6e76",
          controlItemOptionButton: "rockstargames-modules-core-videoplayera58dd8da25850608cc293aca827b5425",
          hoverIcon: "rockstargames-modules-core-videoplayerd64a78e1874a8ae8e723a9331ad28842",
          label: "rockstargames-modules-core-videoplayerad04cd3af46a2098552828e125ba5cc9",
          icon: "rockstargames-modules-core-videoplayeracf2ccafeee880e90d1d5135c4b0f183",
          labelText: "rockstargames-modules-core-videoplayerd74cb9a7c360f79cb1592f508c2f479e",
          header: "rockstargames-modules-core-videoplayerd55dffdc995d61aa68662c0c059c1de0",
          menuLabel: "rockstargames-modules-core-videoplayerc22389392e517fdd67ee90cfc40084f7",
          backButton: "rockstargames-modules-core-videoplayera59d9b8eedfacc0e881094fd97580f60",
          content: "rockstargames-modules-core-videoplayereaec75f5013a2740f6afaf67f54630fa",
          copyLinkIcon: "rockstargames-modules-core-videoplayerc146553c0d0ed5e815e6d43a4a1cc5db",
          downloadIcon: "rockstargames-modules-core-videoplayerba7be2a003dcf26c38c7a12083fee5e1",
          embedIcon: "rockstargames-modules-core-videoplayere35d5cdf5dafb59929c40e759f7bba4a",
          linkIcon: "rockstargames-modules-core-videoplayerbdf5272bac190d9cad28b8e3810f25e3",
          socialIcons: "rockstargames-modules-core-videoplayerb29c33ba9d6bc61f4b34ae59fafa0ab0",
          buttonLink: "rockstargames-modules-core-videoplayerbb60ab10fb57bb10ac665218bacdbbcd",
          facebook: "rockstargames-modules-core-videoplayerf0c9d2597e358c0fccef11363999bca3",
          instagram: "rockstargames-modules-core-videoplayereab9d4c9e231234977cc6f065d6680b2",
          reddit: "rockstargames-modules-core-videoplayerbefc80914acc62b68a4a446b28d33659",
          twitter: "rockstargames-modules-core-videoplayerec689763b7e76c19eeca91da59cd102e",
          embed: "rockstargames-modules-core-videoplayerd15832c87a32356315b91dbc10d73129",
          buttonActionIndicator: "rockstargames-modules-core-videoplayerbecaf2a718a3a5f52ca61d6cf30c6079",
          showActionIndicator: "rockstargames-modules-core-videoplayerc3de5cd6c311051e41c01d53802a73f5",
          copyLink: "rockstargames-modules-core-videoplayercd63edb36e275b801cd92392e8a581f1",
          shareLink: "rockstargames-modules-core-videoplayerfb159b9c329eabb5e7ef85a181d3b673",
          checkbox: "rockstargames-modules-core-videoplayerdf33f5089ecfc18d94f8b256f8f0a9b2",
          checkmark: "rockstargames-modules-core-videoplayerfbc5dcf4ef3e46db7117f2b4f8bb6306",
          timestamp: "rockstargames-modules-core-videoplayerf867ad9d942ae00d9b65bd01f73fb9d0"
        };
      m().registerPlugin(te.useGSAP);
      const De = e => {
          let {
            collapsed: a = !1,
            onClick: l
          } = e;
          const {
            formatMessage: t
          } = (0, c.useIntl)(), {
            state: o,
            trackGa: r,
            menuStates: s
          } = (0, b.Tc)(), {
            shareData: n
          } = o, {
            isMobile: u
          } = (0, d.useWindowResize)();
          return n ? (0, i.jsx)(P, {
            tooltipLabel: t(Ae.videoplayer_share_menu_header),
            "aria-label": t(Ae.videoplayer_share_menu_button_label),
            type: "button",
            onClick: async () => {
              r({
                event: "video_share"
              }), s?.isShareMenuOpen && r({
                event: "video_share",
                text: "closed"
              }), u && navigator?.share ? await (navigator?.share?.(n)) : l()
            },
            hideTooltip: s.isShareMenuOpen,
            children: (0, i.jsxs)("span", {
              className: Be.label,
              children: [(0, i.jsx)(Ne, {
                className: Be.icon
              }), a && (0, i.jsx)("span", {
                className: Be.labelText,
                children: t(Ae.videoplayer_share_menu_header)
              })]
            })
          }) : null
        },
        Pe = e => {
          let {
            collapsed: a = !1,
            onBackButtonClick: l
          } = e;
          const [o, r] = (0, t.useState)(!1), [s, n] = (0, t.useState)(!1), u = (0, t.useRef)(null), {
            contextSafe: _
          } = (0, te.useGSAP)(), {
            formatMessage: p
          } = (0, c.useIntl)(), {
            state: v,
            trackGa: y,
            menuStates: f
          } = (0, b.Tc)(), {
            shareData: h,
            timing: g
          } = v;
          if ((0, t.useEffect)((() => {
              n(!1)
            }), [o, h?.embed]), !h) return null;
          const {
            title: k,
            url: C
          } = h, x = [{
            icon: (0, i.jsx)(Le, {}),
            name: "facebook",
            template: "https://www.facebook.com/sharer/sharer.php?u={url}"
          }, {
            icon: (0, i.jsx)(Re, {
              fill: "black"
            }),
            name: "twitter",
            template: "https://twitter.com/intent/tweet?url={url}&text={title}&via=RockstarGames"
          }, {
            icon: (0, i.jsx)(Se, {}),
            name: "reddit",
            template: "http://www.reddit.com/submit?url={url}&title={title}&r=gaming"
          }], w = [{
            icon: (0, i.jsx)(Ee, {
              className: Be.embedIcon
            }),
            name: "embed",
            template: h.embed,
            actionText: p(Ae.videoplayer_share_time_copied)
          }], M = () => Math.floor(g.current), j = e => {
            let a = "?";
            return e.includes("?") && (a = "&"), `${e}${o?`${a}start=${M()}`:""}`
          }, N = (0, i.jsxs)(i.Fragment, {
            children: [p(Ae.videoplayer_share_copy), (0, i.jsx)(Te, {
              className: Be.copyLinkIcon,
              fill: "black"
            })]
          }), L = (0, i.jsxs)(i.Fragment, {
            children: [p(Ae.videoplayer_share_time_copied), (0, i.jsx)(Ve, {
              className: Be.copyLinkIcon,
              stroke: "black"
            })]
          }), S = _((e => {
            e && m().fromTo(`button[name="${e}"] span`, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              onComplete: () => {
                m().to(`button[name="${e}"] span`, {
                  delay: 2,
                  autoAlpha: 0
                })
              }
            })
          }));
          return f?.isShareMenuOpen ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("header", {
              className: Be.header,
              children: (0, i.jsxs)("div", {
                className: Be.menuLabel,
                children: [a ? (0, i.jsx)("div", {
                  role: "button",
                  className: Be.backButton,
                  "aria-label": p(Ae.videoplayer_share_menu_header),
                  onClick: () => {
                    l?.()
                  },
                  onKeyUp: () => {
                    l?.()
                  },
                  tabIndex: 0,
                  children: (0, i.jsx)(oe, {})
                }) : (0, i.jsx)(Ne, {}), p(Ae.videoplayer_share_menu_header)]
              })
            }), (0, i.jsxs)("section", {
              className: Be.content,
              children: [(0, i.jsxs)("div", {
                className: Be.socialIcons,
                children: [x.map((e => {
                  let {
                    name: a,
                    icon: l,
                    template: t
                  } = e;
                  return (0, i.jsx)("a", {
                    "aria-label": p(Ae.videoplayer_share_link_button_label, {
                      name: a
                    }),
                    className: (0, d.classList)(Be.buttonLink, Be[a]),
                    href: t.replace("{title}", encodeURI(k)).replace("{url}", encodeURI(C)),
                    target: "_blank",
                    onClick: () => {
                      y({
                        event: "video_share",
                        text: a
                      })
                    },
                    onKeyUp: () => {
                      y({
                        event: "video_share",
                        text: a
                      })
                    },
                    rel: "noreferrer",
                    tabIndex: 0,
                    children: l
                  }, a)
                })), (0, i.jsx)("div", {
                  ref: u,
                  children: w.map((e => {
                    let {
                      name: a,
                      icon: l,
                      actionText: t
                    } = e;
                    return (0, i.jsxs)("button", {
                      className: (0, d.classList)(Be.buttonLink, Be[a]),
                      name: a,
                      onClick: async () => {
                        await navigator.clipboard.writeText(h.embed), S(a)
                      },
                      type: "button",
                      tabIndex: 0,
                      children: [t && (0, i.jsx)("span", {
                        className: (0, d.classList)(Be.buttonActionIndicator, a),
                        children: t
                      }), l]
                    }, a)
                  }))
                })]
              }), (0, i.jsxs)("div", {
                className: Be.copyLink,
                children: [(0, i.jsx)("input", {
                  value: j(h.url),
                  readOnly: !0
                }), navigator?.clipboard?.writeText && (0, i.jsx)("button", {
                  type: "button",
                  onClick: async () => {
                    await navigator.clipboard.writeText(j(h.url)), y({
                      event: "video_share",
                      text: "Share URL copied"
                    }), n(!0)
                  },
                  children: s ? L : N
                })]
              }), (0, i.jsxs)("div", {
                className: Be.shareLink,
                tabIndex: 0,
                role: "checkbox",
                "aria-checked": o,
                onClick: () => r(!o),
                onKeyDown: e => {
                  " " !== e.key && "Enter" !== e.key || r(!o)
                },
                children: [(0, i.jsx)("div", {
                  className: (0, d.classList)(Be.checkbox, o ? Be.selected : ""),
                  children: o && (0, i.jsx)(Ve, {
                    className: Be.checkmark,
                    stroke: "black"
                  })
                }), (0, i.jsxs)("label", {
                  htmlFor: "shareTime",
                  children: [(0, i.jsx)(c.FormattedMessage, {
                    ...Ae.videoplayer_share_time_copy
                  }), (0, i.jsx)("span", {
                    className: [Be.timestamp, o ? Be.selected : ""].join(" ").trim(),
                    children: (() => {
                      const e = M(),
                        a = e % 60;
                      return `${Math.floor(e/60).toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`
                    })()
                  })]
                })]
              })]
            })]
          }) : null
        },
        Oe = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: s = "20",
            viewBox: n = "0 0 20 20",
            width: d = "20"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            height: s,
            width: d,
            viewBox: n,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M3.33218 4.16667C3.11117 4.16667 2.8992 4.25446 2.74292 4.41074C2.58664 4.56702 2.49885 4.77899 2.49885 5V6.66667C2.49885 7.1269 2.12575 7.5 1.66551 7.5C1.20528 7.5 0.83218 7.1269 0.83218 6.66667V5C0.83218 4.33696 1.09557 3.70107 1.56441 3.23223C2.03325 2.76339 2.66914 2.5 3.33218 2.5H16.6655C17.3286 2.5 17.9644 2.76339 18.4333 3.23223C18.9021 3.70107 19.1655 4.33696 19.1655 5V15C19.1655 15.663 18.9021 16.2989 18.4333 16.7678C17.9644 17.2366 17.3286 17.5 16.6655 17.5H11.6655C11.2053 17.5 10.8322 17.1269 10.8322 16.6667C10.8322 16.2064 11.2053 15.8333 11.6655 15.8333H16.6655C16.8865 15.8333 17.0985 15.7455 17.2548 15.5893C17.411 15.433 17.4988 15.221 17.4988 15V5C17.4988 4.77899 17.411 4.56702 17.2548 4.41074C17.0985 4.25446 16.8865 4.16667 16.6655 4.16667H3.33218Z",
              fill: o
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M0.836833 9.91206C0.8854 9.45439 1.29579 9.12275 1.75345 9.17132C3.64917 9.37249 5.41861 10.2176 6.76661 11.5656C8.11462 12.9136 8.95969 14.683 9.16086 16.5787C9.20943 17.0364 8.87779 17.4468 8.42012 17.4953C7.96245 17.5439 7.55207 17.2123 7.5035 16.7546C7.34256 15.238 6.66651 13.8225 5.5881 12.7441C4.5097 11.6657 3.09415 10.9896 1.57757 10.8287C1.11991 10.7801 0.788265 10.3697 0.836833 9.91206Z",
              fill: o
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M0.846267 13.1808C0.930534 12.7283 1.36564 12.4298 1.81809 12.5141C2.81075 12.699 3.72417 13.18 4.43815 13.894C5.15213 14.608 5.63322 15.5214 5.81809 16.5141C5.90236 16.9665 5.60388 17.4016 5.15143 17.4859C4.69897 17.5702 4.26387 17.2717 4.1796 16.8192C4.05635 16.1575 3.73563 15.5485 3.25964 15.0725C2.78365 14.5966 2.1747 14.2758 1.51293 14.1526C1.06048 14.0683 0.762 13.6332 0.846267 13.1808Z",
              fill: o
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M0.83218 16.6667C0.83218 16.2064 1.20528 15.8333 1.66551 15.8333H1.67385C2.13408 15.8333 2.50718 16.2064 2.50718 16.6667C2.50718 17.1269 2.13408 17.5 1.67385 17.5H1.66551C1.20528 17.5 0.83218 17.1269 0.83218 16.6667Z",
              fill: o
            })]
          })
        },
        He = (0, c.defineMessages)({
          videoplayer_airplay_menu_header: {
            id: "videoplayer_airplay_menu_header",
            defaultMessage: "Download"
          },
          videoplayer_airplay_option_label: {
            id: "videoplayer_airplay_option_label",
            defaultMessage: "AirPlay"
          },
          videoplayer_airplay_not_supported_error: {
            id: "videoplayer_airplay_not_supported_error",
            defaultMessage: "AirPlay not supported in this browser."
          },
          videoplayer_airplay_button_label: {
            id: "videoplayer_airplay_button_label",
            defaultMessage: "Screen Share"
          },
          videoplayer_video_not_found_error: {
            defaultMessage: "Video element not found.",
            id: "videoplayer_video_not_found_error"
          }
        }),
        Ie = e => {
          let {
            collapsed: a = !1,
            onClick: l
          } = e;
          const {
            formatMessage: t
          } = (0, c.useIntl)(), {
            state: o,
            menuStates: r
          } = (0, b.Tc)(), {
            airplayAvailable: s,
            videoRef: n
          } = o, d = () => {
            if (n?.current) {
              const e = n.current;
              if (e.webkitShowPlaybackTargetPicker) e.webkitShowPlaybackTargetPicker();
              else {
                const a = t(He.videoplayer_airplay_not_supported_error);
                e.textContent = a
              }
            } else {
              if (!n?.current) return;
              const e = t(He.videoplayer_video_not_found_error);
              n.current.textContent = e
            }
            l()
          };
          return s ? (0, i.jsx)(P, {
            tooltipLabel: t(He.videoplayer_airplay_button_label),
            "aria-label": t(He.videoplayer_airplay_button_label),
            onClick: d,
            onKeyUp: d,
            hideTooltip: r.isAirPlayMenuOpen,
            children: (0, i.jsxs)("span", {
              className: "rockstargames-modules-core-videoplayere2995a41e1c230ade4641eb7454a0256",
              children: [(0, i.jsx)(Oe, {
                className: "rockstargames-modules-core-videoplayerea5d369ad6b480b69c6dc65a82844444"
              }), a && (0, i.jsx)("span", {
                className: "rockstargames-modules-core-videoplayerdc5ef32629c87c7d0381855d06b27434",
                children: t(He.videoplayer_airplay_button_label)
              })]
            })
          }) : null
        },
        qe = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: s = "20",
            viewBox: n = "0 0 20 20",
            width: d = "20"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            height: s,
            role: "img",
            viewBox: n,
            width: d,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M8.33203 10C8.33203 9.07953 9.07822 8.33333 9.9987 8.33333C10.9192 8.33333 11.6654 9.07953 11.6654 10C11.6654 10.9205 10.9192 11.6667 9.9987 11.6667C9.07822 11.6667 8.33203 10.9205 8.33203 10Z",
              fill: o
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M8.33203 4.16667C8.33203 3.24619 9.07822 2.5 9.9987 2.5C10.9192 2.5 11.6654 3.24619 11.6654 4.16667C11.6654 5.08714 10.9192 5.83333 9.9987 5.83333C9.07822 5.83333 8.33203 5.08714 8.33203 4.16667Z",
              fill: o
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M8.33203 15.8333C8.33203 14.9129 9.07822 14.1667 9.9987 14.1667C10.9192 14.1667 11.6654 14.9129 11.6654 15.8333C11.6654 16.7538 10.9192 17.5 9.9987 17.5C9.07822 17.5 8.33203 16.7538 8.33203 15.8333Z",
              fill: o
            })]
          })
        },
        Fe = (0, c.defineMessages)({
          videoplayer_collapsed_menu_label: {
            id: "videoplayer_collapsed_menu_label",
            defaultMessage: "Additional Settings"
          },
          videoplayer_collapsed_menu_header_label: {
            id: "videoplayer_collapsed_menu_header_label",
            defaultMessage: "More"
          }
        }),
        Ze = "rockstargames-modules-core-videoplayere553b94795a0b079d20d0d77beaee659";
      v.gsap.registerPlugin(te.useGSAP);
      const Ge = e => {
          let {
            onClick: a
          } = e;
          const {
            formatMessage: l
          } = (0, c.useIntl)(), t = () => {
            "function" == typeof a && a()
          };
          return (0, i.jsx)("button", {
            "aria-label": l(Fe.videoplayer_collapsed_menu_label),
            type: "button",
            onClick: t,
            onKeyUp: t,
            tabIndex: 0,
            className: "rockstargames-modules-core-videoplayerc1e2a883d91ed4410e6d2c24b64c586b",
            children: (0, i.jsx)(qe, {
              className: Ze
            })
          })
        },
        ze = () => {
          const [e, a] = (0, t.useState)([]), [l, o] = (0, t.useState)([]), [r, s] = (0, t.useState)([]), [n, u] = (0, t.useState)(), _ = (0, t.useRef)(null), {
            formatMessage: p
          } = (0, c.useIntl)(), {
            windowWidth: m
          } = (0, d.useWindowResize)(), {
            state: y,
            toggleMenu: f,
            menuStates: h
          } = (0, b.Tc)(), {
            airplayAvailable: g,
            captions: k,
            playerRef: C,
            videoData: x,
            videoRef: w
          } = y, {
            video: M
          } = x, {
            contextSafe: j
          } = (0, te.useGSAP)(), N = w?.current ? .5 * w.current.clientHeight : "200", L = ["downloads", "share", "airplay", "quality", "captions"], S = ["captions", "quality", "downloads", "share", "airplay"], R = j((e => {
            const a = .125,
              l = "none";
            h?.isAnyMenuOpen ? h[e] ? (0, b.CN)() ? v.gsap.timeline({
              overwrite: "auto"
            }).to(_?.current, {
              "--backdrop-opacity": 0,
              bottom: void 0 !== n ? -n : "-100%",
              duration: a,
              ease: l,
              onComplete: () => {
                _?.current?.close(), f(e, !1)
              }
            }) : v.gsap.to(_?.current, {
              duration: a,
              ease: l,
              opacity: 1,
              onComplete: () => {
                _?.current?.close(), f(e, !1)
              }
            }) : (0, b.CN)() ? v.gsap.timeline({
              onStart: () => {
                f(e, !0)
              },
              duration: a,
              ease: l,
              overwrite: "auto",
              onComplete: () => {
                u(_?.current?.clientHeight)
              }
            }).fromTo(_?.current, {
              height: void 0 !== n ? n : 0
            }, {
              height: "auto"
            }) : v.gsap.to(_?.current, {
              duration: a,
              ease: l,
              opacity: 0,
              onComplete: () => {
                _?.current?.close(), f(e, !0), v.gsap.to(_?.current, {
                  delay: .05,
                  onStart: () => {
                    _?.current?.show()
                  },
                  duration: a,
                  ease: l,
                  opacity: 1
                })
              }
            }) : (_?.current?.open && _?.current?.close(), (0, b.CN)() ? v.gsap.timeline({
              onComplete: () => {
                u(_?.current?.clientHeight)
              },
              overwrite: "auto"
            }).fromTo(_?.current, {
              "--backdrop-opacity": 0,
              bottom: "-100%"
            }, {
              onStart: () => {
                _?.current?.showModal(), f(e, !0)
              },
              "--backdrop-opacity": .8,
              bottom: 0,
              duration: a,
              ease: l
            }) : v.gsap.fromTo(_?.current, {
              opacity: 0
            }, {
              duration: a,
              ease: l,
              opacity: 1,
              onStart: () => {
                _?.current?.show(), f(e, !0)
              }
            }))
          }));
          return (0, t.useEffect)((() => {
            const e = [...L];
            if (!g) {
              const a = e.indexOf("airplay");
              a > -1 && e.splice(a, 1)
            }
            if (!k?.length) {
              const a = e.indexOf("captions");
              a > -1 && e.splice(a, 1)
            }
            s([...e])
          }), [M?.id, g, k?.length]), (0, t.useEffect)((() => {
            const e = v.gsap.context((() => {
              if (!C?.current) return;
              const e = C?.current?.clientWidth || 0,
                l = Math.floor(e / 2),
                t = Math.floor(l / 60) - 2,
                s = r.length - t,
                n = s > 1 ? s : 0,
                d = r.slice(0, n),
                c = r.slice(n, r.length),
                u = new Map([
                  ["airplay", {
                    button: (0, i.jsx)(Ie, {
                      collapsed: d.some((e => "airplay" === e)),
                      onClick: () => R("isAirplayMenuOpen")
                    }, "airplay_button")
                  }],
                  ["downloads", {
                    button: (0, i.jsx)(de, {
                      collapsed: d.some((e => "downloads" === e)),
                      onClick: () => R("isDownloadMenuOpen")
                    }, "downloads_button"),
                    content: (0, i.jsx)(ce, {
                      collapsed: d.some((e => "downloads" === e)),
                      onBackButtonClick: () => R("isEllipsisMenuOpen"),
                      onOptionSelect: () => R("isDownloadMenuOpen")
                    }, "downloads_content")
                  }],
                  ["quality", {
                    button: (0, i.jsx)(he, {
                      collapsed: d.some((e => "quality" === e)),
                      onClick: () => R("isQualityMenuOpen")
                    }, "quality_button"),
                    content: (0, i.jsx)(ge, {
                      collapsed: d.some((e => "quality" === e)),
                      onBackButtonClick: () => R("isEllipsisMenuOpen"),
                      onOptionSelect: () => R("isQualityMenuOpen")
                    }, "quality_content")
                  }],
                  ["captions", {
                    button: (0, i.jsx)(Me, {
                      collapsed: d.some((e => "captions" === e)),
                      onClick: () => R("isCaptionsMenuOpen")
                    }, "captions_button"),
                    content: (0, i.jsx)(je, {
                      collapsed: d.some((e => "captions" === e)),
                      onBackButtonClick: () => R("isEllipsisMenuOpen"),
                      onOptionSelect: () => R("isCaptionsMenuOpen")
                    }, "captions_content")
                  }],
                  ["share", {
                    button: (0, i.jsx)(De, {
                      collapsed: d.some((e => "share" === e)),
                      onClick: () => R("isShareMenuOpen")
                    }, "share_button"),
                    content: (0, i.jsx)(Pe, {
                      collapsed: d.some((e => "share" === e)),
                      onBackButtonClick: () => R("isEllipsisMenuOpen")
                    }, "share_content")
                  }]
                ]);
              if (c.length) {
                const e = [];
                c.forEach((a => {
                  if (u.has(a) && S.indexOf(a) > -1) {
                    const l = S.indexOf(a);
                    e[l] = u.get(a)
                  }
                })), o(e.filter((e => e)))
              } else o([]);
              !d.length && h?.isEllipsisMenuOpen ? (f("isEllipsisMenuOpen", !1), a([])) : a(d.map((e => u?.get(e)))?.filter((e => e)) || [])
            }));
            return () => e.revert()
          }), [r, m, C?.current, n, h?.isEllipsisMenuOpen, h?.isCaptionsMenuOpen, h?.isQualityMenuOpen, h?.isDownloadMenuOpen, h?.isShareMenuOpen, h?.isAirPlayMenuOpen]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("dialog", {
              "data-testid": "menu-handler-dialog",
              className: "rockstargames-modules-core-videoplayerd5e74e0ede826b8de9962b746a1b02ef",
              onClick: e => {
                if (!e.currentTarget) return;
                const a = e.currentTarget.getBoundingClientRect();
                (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && (e.preventDefault(), e.stopPropagation(), R("isAnyMenuOpen"))
              },
              ref: _,
              style: {
                "--options-height": `${N}px`
              },
              children: [l.concat(e).map((e => e.content)), e.length > 0 && h?.isEllipsisMenuOpen && (0, i.jsxs)("div", {
                children: [(0, i.jsx)("header", {
                  className: "rockstargames-modules-core-videoplayeraa248530d71bb9ad7c3a60badcc5c8f5",
                  children: (0, i.jsxs)("div", {
                    className: "rockstargames-modules-core-videoplayerf3f60b73622da5aa98cd8e0aefd8f3eb",
                    children: [(0, i.jsx)(qe, {
                      className: Ze
                    }), (0, i.jsx)("span", {
                      children: p(Fe.videoplayer_collapsed_menu_header_label)
                    })]
                  })
                }), (0, i.jsx)("div", {
                  className: "rockstargames-modules-core-videoplayerb20cd372c678def2a7b1257e8812955b",
                  children: e.map((e => e.button))
                })]
              })]
            }), e.length > 0 && (0, i.jsx)(Ge, {
              onClick: () => R("isEllipsisMenuOpen")
            }), l.length > 0 && l.map((e => e.button))]
          })
        },
        $e = () => {
          const e = (0, t.useRef)(null),
            {
              state: a,
              setState: l
            } = (0, b.Tc)(),
            {
              controlsActive: o,
              idle: r,
              playerEnded: s
            } = a,
            n = () => {
              if (e?.current) {
                const a = document.activeElement,
                  t = e?.current.querySelector(":focus") || e?.current.contains(a);
                l("controlsActive", !!t)
              }
            };
          return (0, t.useEffect)((() => (document.addEventListener("focusin", n), document.addEventListener("focusout", n), () => {
            document.removeEventListener("focusin", n), document.removeEventListener("focusout", n)
          })), []), (0, i.jsxs)("div", {
            className: (0, d.classList)("rockstargames-modules-core-videoplayerdc593c045ad6b5f437206948b73eca15", !o && r ? "rockstargames-modules-core-videoplayera523729bef294342658080805393357c" : ""),
            style: {
              "--controls-bg-height": s ? "3.2rem" : "7rem"
            },
            ref: e,
            children: [(0, i.jsx)(K, {}), (0, i.jsxs)("div", {
              className: "rockstargames-modules-core-videoplayere896a32de026619c95d99f5a6ef8f2e3",
              children: [(0, i.jsxs)("div", {
                className: "rockstargames-modules-core-videoplayera86db04eebbc57b7bf7c8edad75b5a11",
                children: [(0, i.jsx)(Z, {}), (0, i.jsx)(le, {}), (0, i.jsx)(X, {})]
              }), (0, i.jsxs)("div", {
                className: "rockstargames-modules-core-videoplayerc3610319e2e13e380acbfc8281cdb296",
                children: [(0, i.jsx)(ze, {}), (0, i.jsx)(O, {})]
              })]
            })]
          })
        },
        Ue = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: s = "20",
            viewBox: n = "0 0 20 20",
            width: d = "20"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            height: s,
            width: d,
            viewBox: n,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M4.16797 3.33333C4.16797 2.8731 4.54106 2.5 5.0013 2.5H8.33464C8.79487 2.5 9.16797 2.8731 9.16797 3.33333V16.6667C9.16797 17.1269 8.79487 17.5 8.33464 17.5H5.0013C4.54106 17.5 4.16797 17.1269 4.16797 16.6667V3.33333Z",
              fill: o
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M10.8346 3.33333C10.8346 2.8731 11.2077 2.5 11.668 2.5H15.0013C15.4615 2.5 15.8346 2.8731 15.8346 3.33333V16.6667C15.8346 17.1269 15.4615 17.5 15.0013 17.5H11.668C11.2077 17.5 10.8346 17.1269 10.8346 16.6667V3.33333Z",
              fill: o
            })]
          })
        },
        Ke = e => {
          let {
            alt: a = "",
            className: l = "",
            clipRule: t = "evenodd",
            fill: o = "white",
            fillRule: r = "evenodd",
            height: s = "20",
            viewBox: n = "0 0 20 20",
            width: d = "20"
          } = e;
          return (0, i.jsxs)("svg", {
            className: l,
            height: s,
            width: d,
            viewBox: n,
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: a
            }), (0, i.jsx)("path", {
              fillRule: r,
              clipRule: t,
              d: "M3.76604 1.76853C4.0336 1.62246 4.35957 1.63413 4.616 1.79898L16.2827 9.29898C16.5212 9.45231 16.6654 9.71641 16.6654 9.99996C16.6654 10.2835 16.5212 10.5476 16.2827 10.7009L4.616 18.2009C4.35957 18.3658 4.0336 18.3775 3.76604 18.2314C3.49848 18.0853 3.33203 17.8048 3.33203 17.5V2.49996C3.33203 2.19512 3.49848 1.91461 3.76604 1.76853Z",
              fill: o
            })]
          })
        },
        We = {
          pillBtn: "rockstargames-modules-core-videoplayerfb8dfc0358d1adfa8315cf38b00aa635",
          selected: "rockstargames-modules-core-videoplayere63edadbe1e97de16002e611193cd1d6",
          controlItemOptionButton: "rockstargames-modules-core-videoplayerd5b690e5a142266ad83908884f79b118",
          hoverIcon: "rockstargames-modules-core-videoplayera64f91574b03ae29e99b13bc775c875c",
          playPauseOverlay: "rockstargames-modules-core-videoplayerbaa0d120e1c6c5e5f102e52dc48ee7c3",
          iconWrapper: "rockstargames-modules-core-videoplayerd1ff550825c51ddc3f33b7eb17f4f6b1",
          icon: "rockstargames-modules-core-videoplayerc97ed234a08181a46e5823765e6f876b",
          animated: "rockstargames-modules-core-videoplayera36215709a57936e69196a6830d8b663",
          show: "rockstargames-modules-core-videoplayerdb7048e3e0d6f9b1493efa28a42aaf17",
          fadeInOut: "rockstargames-modules-core-videoplayerba69a5b69d08ba43eb3a102180f361f3"
        },
        Qe = () => {
          const {
            state: e
          } = (0, b.Tc)(), {
            playing: a
          } = e;
          return (0, i.jsxs)("div", {
            className: We.playPauseOverlay,
            children: [(0, i.jsx)("div", {
              className: [We.iconWrapper, We.animated, `${a?We.show:""}`].join(" "),
              children: (0, i.jsx)(Ke, {
                className: We.icon,
                height: "40",
                width: "40"
              })
            }), (0, i.jsx)("div", {
              className: [We.iconWrapper, We.animated, `${a?"":We.show}`].join(" "),
              children: (0, i.jsx)(Ue, {
                className: We.icon,
                height: "40",
                width: "40"
              })
            })]
          })
        },
        Xe = {
          pillBtn: "rockstargames-modules-core-videoplayerdd5fd415de695ac20cd798a968a9eeec",
          selected: "rockstargames-modules-core-videoplayere7d44293eee90473c58ab438469c21e9",
          rockstarVideoElement: "rockstargames-modules-core-videoplayera95870af9b1a5c6a626d23c71b698248",
          customCaptions: "rockstargames-modules-core-videoplayerbb74a1519b1d297e7ab97d8f8ae88f71",
          controlsInactive: "rockstargames-modules-core-videoplayere21ec5f5b2c235c1505db33747c6435e"
        },
        Je = () => {
          const {
            state: e,
            setState: a,
            trackGa: l,
            toggleMenu: o
          } = (0, b.Tc)(), {
            activeCaption: r,
            airplayAvailable: s,
            captions: n,
            currentTime: d,
            controlsActive: c,
            fileIndex: u,
            onVideoComplete: _,
            playerEnded: p,
            playing: v,
            savedTime: m,
            videoData: y,
            volume: f
          } = e, {
            video: h
          } = y, [g, k] = (0, t.useState)(null), C = (0, t.useRef)(null), x = (0, t.useRef)(null), [w, M] = (0, t.useState)("");
          (0, t.useEffect)((() => {
            const e = h?.files?.[u]?.src ?? null;
            e && k(e)
          }), [u, h]), (0, t.useEffect)((() => {
            a("videoRef", C)
          }), [C]), (0, t.useEffect)((() => {
            d && C.current && (C.current.currentTime = d, a("currentTime", null))
          }), [d, C?.current]), (0, t.useEffect)((() => {
            const e = C?.current;
            if (!e) return;
            const t = e => {
                a("meta", e)
              },
              o = () => {
                0 !== m && a("currentTime", m), a("playerEnded", !1)
              },
              r = () => {
                a("timing", {
                  duration: (Number.isNaN(e.duration) ? 0 : e.duration) ?? 0,
                  current: (Number.isNaN(e.currentTime) ? 0 : e.currentTime) ?? 0
                })
              },
              i = () => {
                a("volume", e.volume)
              },
              n = () => {
                a("playerEnded", !1)
              },
              d = () => {
                l({
                  event: "video_complete"
                }), a("playing", !1), _ ? _?.() : a("playerEnded", !0)
              },
              c = () => {
                a("playing", !1), a("fullscreen", !1)
              },
              u = () => {
                a("buffered", e.buffered)
              },
              p = e => {
                s || ("available" === e.availability ? a("airplayAvailable", !0) : a("airplayAvailable", !1))
              };
            return e.addEventListener("webkitplaybacktargetavailabilitychanged", p), e.addEventListener("loadeddata", o), e.addEventListener("loadedmetadata", t), e.addEventListener("timeupdate", r), e.addEventListener("volumechange", i), e.addEventListener("seeked", n), e.addEventListener("ended", d), e.addEventListener("progress", u), e.addEventListener("webkitendfullscreen", c), () => {
              e.removeEventListener("webkitplaybacktargetavailabilitychanged", p), e.removeEventListener("loadeddata", o), e.removeEventListener("loadedmetadata", t), e.removeEventListener("timeupdate", r), e.removeEventListener("volumechange", i), e.removeEventListener("seeked", n), e.removeEventListener("ended", d), e.removeEventListener("progress", u), e.removeEventListener("webkitendfullscreen", c)
            }
          }), [v, m, C?.current]), (0, t.useEffect)((() => {
            const e = C.current,
              a = x.current;
            if (!e || !a && r || !n || 0 === n.length) return;
            const l = Array.from(e.textTracks);
            if (0 === l.length) return;
            l.forEach((e => {
              e.mode = "hidden"
            }));
            const t = () => {
                const e = l[r]?.activeCues?.[0],
                  a = e ? e.text : "";
                M(a)
              },
              o = l[r];
            return o && o.addEventListener("cuechange", t), () => {
              o && o.removeEventListener("cuechange", t)
            }
          }), [r, n]);
          const j = () => {
            a("isVideoClicked", !0), o("isAnyMenuOpen", !1), p || ((0, b.CN)() ? (a("controlsActive", !c), a("playing", !0)) : (a("controlsActive", v), a("playing", !v)))
          };
          return (0, t.useEffect)((() => {
            const e = e => {
              const l = C?.current;
              if (!l) return;
              const t = {
                space: "Space",
                arrowRight: "ArrowRight",
                arrowLeft: "ArrowLeft"
              };
              if (Object.values(t).includes(e.code) && (e.preventDefault(), l && !p)) switch (e.code) {
                case t.space:
                  p || J(document.activeElement) || a("playing", !v);
                  break;
                case t.arrowRight:
                  l.currentTime += 5;
                  break;
                case t.arrowLeft:
                  l.currentTime -= 5
              }
            };
            return document.addEventListener("keydown", e, !1), () => {
              document.removeEventListener("keydown", e, !1)
            }
          }), [C?.current, v, p]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("video", {
              ref: C,
              autoPlay: !0,
              className: Xe.rockstarVideoElement,
              src: g,
              muted: 0 === f,
              playsInline: !0,
              "x-webkit-airplay": "allow",
              onPlay: () => {
                a("playing", !0)
              },
              onPause: () => {
                a("playing", !1)
              },
              onTouchEnd: () => {
                j()
              },
              onClick: e => {
                e.preventDefault(), (0, b.CN)() || j()
              },
              crossOrigin: "anonymous",
              children: [(0, i.jsx)("source", {
                src: g ?? void 0,
                type: "video/mp4"
              }), n && n.map((e => {
                let {
                  isDefault: a,
                  label: l,
                  kind: t,
                  src: o,
                  srclang: r
                } = e;
                return (0, i.jsx)("track", {
                  label: l,
                  kind: t,
                  src: o,
                  srcLang: r,
                  default: a
                }, l)
              }))]
            }), !!r && (0, i.jsx)("div", {
              ref: x,
              className: [Xe.customCaptions, c ? "" : Xe.controlsInactive].join(" "),
              children: (0, i.jsx)("div", {
                dangerouslySetInnerHTML: {
                  __html: w
                }
              })
            })]
          })
        },
        Ye = {
          videoplayer: "rockstargames-modules-core-videoplayerf409d08f813837374524ace53aca71a0",
          videoplayerEnded: "rockstargames-modules-core-videoplayerd0483907db218cee6789cc8fd2e9561a",
          videoplayerNotRunning: "rockstargames-modules-core-videoplayerd579486eeae792526c1de9adeea2dcde",
          controls: "rockstargames-modules-core-videoplayerf70e0fbb25401cd9aa7d034577424784"
        },
        ea = () => {
          const {
            state: e
          } = (0, b.Tc)(), {
            playerEnded: a,
            videoChangeCallback: l,
            videoData: t
          } = e, {
            related: o
          } = t;
          return a && o?.results.length ? (0, i.jsx)("div", {
            className: "rockstargames-modules-core-videoplayere4daaf67c357bca509c4ec256a811300",
            children: (0, i.jsx)("div", {
              className: "rockstargames-modules-core-videoplayera430700444470447707d67fa7b0a8f13",
              "aria-live": "polite",
              children: o.results.map((e => {
                return (0, i.jsx)("button", {
                  style: {
                    background: `url(${a=e.screencap||"",`${a}?im=Resize=400`}) no-repeat center/contain`
                  },
                  onClick: () => l(e.id),
                  className: "rockstargames-modules-core-videoplayere6e0e93c0c23ef391fa8c4eaa4546173",
                  role: "link",
                  tabIndex: 0,
                  onKeyDown: a => ((e, a) => {
                    let {
                      code: t
                    } = e;
                    "Enter" === t && l(a)
                  })(a, e.id),
                  type: "button",
                  children: (0, i.jsx)("div", {
                    className: "rockstargames-modules-core-videoplayerb9597be789a90bcb47f0c44ccdbeb89d",
                    children: e.title
                  })
                }, e.id);
                var a
              }))
            })
          }) : null
        },
        aa = () => {
          const {
            state: e,
            setState: a,
            menuStates: l,
            toggleMenu: o,
            trackGa: r
          } = (0, b.Tc)(), {
            autoplayUnmuteCheck: s,
            context: n,
            controlsActive: d,
            currentTime: c,
            fullscreen: u,
            meta: _,
            playerEnded: p,
            playing: v,
            running: m,
            videoRef: y,
            volume: f
          } = e, [h, g] = (0, t.useState)(!1), k = (0, t.useRef)(), C = (0, t.useRef)(), x = () => document?.fullscreenEnabled ?? !1, w = () => "string" == typeof document.fullscreenElement?.nodeName, M = () => {
            k.current && clearInterval(k?.current)
          }, N = () => {
            M(), a("idle", !1), k.current = setTimeout((() => {
              h || a("idle", !0)
            }), 3e3)
          };
          return (0, t.useEffect)((() => {
            N()
          }), [h]), (0, t.useEffect)((() => {
            g(p || l?.isAnyMenuOpen || !v)
          }), [p, l?.isAnyMenuOpen, v]), (0, t.useEffect)((() => {
            a("playerRef", C)
          }), [C]), (0, t.useEffect)((() => {
            if (!C?.current || !y?.current) return;
            const e = y.current,
              a = C.current,
              {
                webkitDisplayingFullscreen: l,
                webkitSupportsFullscreen: t
              } = e,
              o = () => {
                u ? a.requestFullscreen() : document.exitFullscreen()
              };
            u ? x() && !w() ? o() : t && !l && y.current.webkitEnterFullscreen() : x() && w() ? o() : t && l && y.current.webkitExitFullscreen()
          }), [u, C, y]), (0, t.useEffect)((() => {
            const e = () => {
              N(), a("fullscreen", w()), r({
                event: "video_fullscreen",
                text: w() ? "entered" : "exited"
              })
            };
            return document.addEventListener("fullscreenchange", e), () => {
              document.removeEventListener("fullscreenchange", e)
            }
          }), [v, p]), (0, t.useEffect)((() => {
            (async () => {
              if (y?.current && _)
                if (v) try {
                  await y.current.play()
                } catch (e) {
                  a("volume", 0), a("autoplayUnmuteCheck", !0)
                } else y.current.pause()
            })()
          }), [s, _, v, y?.current]), (0, t.useEffect)((() => {
            c && y?.current && (y.current.currentTime = c)
          }), [c, y?.current]), (0, t.useEffect)((() => {
            y?.current && (y.current.volume = f)
          }), [f, y]), (0, t.useEffect)((() => {
            d || a("isAnyMenuOpen", !1)
          }), [d]), (0, t.useEffect)((() => {
            p && (a("fullscreen", !1), a("isAnyMenuOpen", !1), a("controlsActive", !0), a("progressBarState", {}))
          }), [p]), (0, t.useEffect)((() => () => {
            M()
          }), []), (0, t.useEffect)((() => {
            const e = e => {
              C.current && !C.current.contains(e.target) && o("isAnyMenuOpen", !1)
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
          }), []), (0, i.jsxs)("div", {
            role: "presentation",
            ref: C,
            "data-context": n,
            className: [Ye.videoplayer, p ? Ye.videoplayerEnded : "", m ? "" : Ye.videoplayerNotRunning].join(" "),
            onMouseLeave: () => {
              l?.isAnyMenuOpen || a("idle", !0)
            },
            onMouseEnter: N,
            onMouseMove: N,
            onTouchEnd: M,
            onTouchStart: M,
            children: [(0, i.jsx)(Qe, {}), (0, i.jsx)(j, {}), (0, i.jsx)(Je, {}), (0, i.jsx)($e, {}), p && (0, i.jsx)(ea, {})]
          })
        },
        la = e => {
          let {
            id: a
          } = e;
          return (0, i.jsx)("iframe", {
            className: "rockstargames-modules-core-videoplayerc659acb30b226b50d0dfe51736cb1472",
            src: `https://www.youtube.com/embed/${a}?autoplay=1`,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            title: "Rockstar Games on YouTube"
          })
        },
        ta = {
          ...u.intlMessages,
          ...p
        },
        oa = document.getElementsByTagName("html")[0].lang ?? "en_us",
        ra = e => {
          let {
            aspectRatio: a = 16 / 9,
            autoplay: l = !1,
            context: s = "site",
            id: d,
            hero: u = !1,
            resolution: p = "_auto",
            wrapper: v = !0,
            videoChangeCallback: m,
            onVideoComplete: y,
            locale: f = oa,
            titleCrop: h
          } = e;
          const {
            state: g,
            setState: k,
            trackGa: C
          } = (0, b.Tc)(), [x] = (0, o.useSearchParams)(), w = (0, b.zY)({
            id: d.toString(),
            locale: f
          }), {
            autoplay: M,
            brand: j,
            fileIndex: N,
            running: E,
            videoData: V
          } = g, {
            loading: T,
            video: A
          } = V, B = (0, o.useNavigate)(), {
            formatMessage: D
          } = (0, c.useIntl)(), {
            currentSite: P
          } = (0, r.A)();
          return (0, t.useEffect)((() => {
            k("onVideoComplete", y)
          }), [y]), (0, t.useEffect)((() => {
            if (!A) return;
            const {
              files: e,
              tracks: a
            } = A, l = e.findIndex((e => e.resolution === p)), t = e.findIndex((e => e.default));
            k("fileIndex", -1 !== l ? l : -1 !== t ? t : 0), k("captions", function(e, a) {
              if (!e || !Array.isArray(e) || !e.length) return [];
              const l = [];
              e.forEach((e => {
                let {
                  lang: a,
                  captions: t,
                  subtitles: o
                } = e;
                o && "0" !== o && l.push({
                  isDefault: !1,
                  kind: "subtitles",
                  label: a,
                  srclang: a,
                  src: o
                }), t && "0" !== t && l.push({
                  isDefault: !1,
                  kind: "captions",
                  label: a,
                  srclang: a,
                  src: t
                })
              }));
              const t = l.sort(((e, a) => e.label?.localeCompare(a.label)));
              return t.unshift({
                isDefault: !0,
                kind: "captions",
                label: a,
                srclang: "",
                src: ""
              }), [...t]
            }(a, D(_.LD.videoplayer_captions_menu_off_label))), k("accentColor", (0, b.q8)(A?.game?.title_slug ?? ""))
          }), [p, A]), (0, t.useEffect)((() => {
            if (!A) return;
            let e, a, l = f.split("_")[1] ?? "";
            "hans" === l && (l = "zh");
            const t = "en_us" !== f && l ? `${l}/` : "";
            "clr" === j ? (e = "https://circolocorecords.com", a = e) : (a = `https://${P?.subDomain??"www"}.rockstargames.com`, e = `${a}/${t}videos/${A.id}?resolution=${A.files[N]?.resolution}&embed`);
            const o = `${A.game.title}: ${A.title}`,
              r = {
                allow: "autoplay; fullscreen; picture-in-picture; clipboard-read; clipboard-write;",
                src: `https://${P?.subDomain}.rockstargames.com/videoplayer/?id=${A.id}&locale=${f}&resolution=${A.files[N]?.resolution}&embed`,
                style: "aspect-ratio: 16 / 9; width: 100%; border: none;",
                title: `Rockstar Games Video: ${o}`
              };
            let i = "<iframe";
            Object.keys(r).map((e => {
              i += ` ${e}="${r[e]}"`
            })), i += "></iframe>";
            const s = {
              title: o,
              text: A.description,
              url: e,
              embed: i,
              brandUrl: a
            };
            k("shareData", s)
          }), [j, N, A]), (0, t.useEffect)((() => {
            k("videoChangeCallback", m || (e => {
              B(`../videos/${e}`)
            }))
          }), [m]), (0, t.useEffect)((() => {
            const e = x.get("start") ?? 0;
            k("currentTime", Number(e))
          }), [d, x.get("start")]), (0, t.useEffect)((() => {
            E && k("autoplay", !0)
          }), [E]), (0, t.useEffect)((() => {
            const {
              video: e
            } = w;
            923 === e?.game?.id && k("brand", "clr");
            const a = l || M || !1;
            k("controlsActive", !0), k("fullscreen", !1), k("idle", !1), k("meta", null), k("playerEnded", !1), k("playing", a), k("progressBarState", {}), k("isAnyMenuOpen", !1), k("shareOpen", !1), k("videoId", d), a && (k("autoplay", !0), k("running", !0)), k("videoData", w)
          }), [JSON.stringify(w)]), (0, t.useEffect)((() => {
            M && !T && A && A.id === d && C({
              event: "video_play_auto"
            })
          }), [M, T, A, d]), (0, t.useEffect)((() => {
            k("aspectRatio", a)
          }), [a]), (0, t.useEffect)((() => {
            k("context", s)
          }), [s]), (0, t.useEffect)((() => {
            k("resolution", p)
          }), [p]), !A || T ? (0, i.jsx)(R.A, {
            hero: u,
            wrapper: v,
            titleCrop: h,
            children: (0, i.jsx)(S.A, {})
          }) : ["gtaosession", "gtaostream", "community"].includes(A.groupType) || A.youtubeOnly ? A.agegated ? (0, i.jsx)(n.AgeGate, {
            children: (0, i.jsx)(la, {
              id: A.youtubeId
            })
          }) : (0, i.jsx)(la, {
            id: A.youtubeId
          }) : M || E ? A.agegated ? (0, i.jsx)(R.A, {
            hero: u,
            wrapper: v,
            titleCrop: h,
            children: (0, i.jsx)(n.AgeGate, {
              options: {
                bgImg: A.screencap
              },
              ga: {
                element_placement: "video player"
              },
              children: (0, i.jsx)(aa, {})
            })
          }) : (0, i.jsx)(R.A, {
            hero: u,
            wrapper: v,
            titleCrop: h,
            children: (0, i.jsx)(aa, {})
          }) : (0, i.jsx)(R.A, {
            hero: u,
            wrapper: v,
            titleCrop: h,
            children: (0, i.jsx)(L, {})
          })
        },
        ia = (0, i.jsx)(c.FormattedMessage, {
          ..._.LD.videoplayer_error
        }),
        sa = (0, c.withIntl)((0, d.withGtmTracking)(function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(t) {
            return (0, i.jsx)(s, {
              header: a,
              hidden: l,
              children: (0, i.jsx)(e, {
                ...t
              })
            })
          }
        }((e => (0, i.jsx)(b.M8, {
          children: (0, i.jsx)(ra, {
            ...e
          })
        })), ia)), ta)
    },
    429: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => o
      });
      var t = l(8096);
      const o = e => {
        let {
          alt: a = "",
          className: l = "",
          clipRule: o = "evenodd",
          fill: r = "white",
          fillRule: i = "evenodd",
          height: s = "20",
          viewBox: n = "0 0 20 20",
          width: d = "20"
        } = e;
        return (0, t.jsxs)("svg", {
          className: l,
          height: s,
          width: d,
          viewBox: n,
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, t.jsx)("title", {
            children: a
          }), (0, t.jsx)("path", {
            fillRule: i,
            clipRule: o,
            d: "M3.76604 1.76853C4.0336 1.62246 4.35957 1.63413 4.616 1.79898L16.2827 9.29898C16.5212 9.45231 16.6654 9.71641 16.6654 9.99996C16.6654 10.2835 16.5212 10.5476 16.2827 10.7009L4.616 18.2009C4.35957 18.3658 4.0336 18.3775 3.76604 18.2314C3.49848 18.0853 3.33203 17.8048 3.33203 17.5V2.49996C3.33203 2.19512 3.49848 1.91461 3.76604 1.76853Z",
            fill: r
          })]
        })
      }
    },
    1904: (e, a, l) => {
      "use strict";
      l.d(a, {
        M8: () => _,
        q8: () => y,
        CN: () => b,
        DZ: () => t.LD,
        zY: () => m,
        Tc: () => p
      });
      var t = l(539),
        o = l(2229),
        r = l(1569),
        i = l(5966),
        s = l(2918),
        n = l(8096);
      const d = {
          activeCaption: 0,
          airplayAvailable: !1,
          aspectRatio: 16 / 9,
          autoplay: !1,
          autoplayUnmuteCheck: !1,
          brand: "rockstar",
          captions: [],
          context: "",
          controlsActive: !0,
          currentTime: 0,
          fileIndex: 0,
          fullscreen: !1,
          idle: !1,
          playerEnded: !1,
          playing: !1,
          progressBarState: {},
          resolution: "_auto",
          running: !1,
          savedTime: 0,
          showTitle: !0,
          startTime: 0,
          timing: {
            current: 0,
            duration: 0
          },
          videoData: {
            loading: !0
          },
          volume: 1
        },
        c = {},
        u = (0, i.setContextItem)({
          context: (0, o.createContext)({}),
          key: "videoplayer"
        }),
        _ = e => {
          let {
            children: a
          } = e;
          const [l] = (0, o.useState)((0, r.v4)()), t = (e => {
            let {
              id: a
            } = e;
            const l = c[a] ?? (c[a] = (0, i.makeVar)(d)),
              t = (e, a) => l({
                ...l(),
                [e]: a
              }),
              r = (0, i.useReactiveVar)(l),
              n = (0, s.useGtmTrack)(),
              u = (0, i.useLocale)(),
              {
                videoData: _
              } = r,
              [p, v] = (0, o.useState)({
                isCaptionsMenuOpen: !1,
                isPlayOnTVMenuOpen: !1,
                isDownloadMenuOpen: !1,
                isQualityMenuOpen: !1,
                isSettingsMenuOpen: !1,
                isShareMenuOpen: !1,
                isEllipsisMenuOpen: !1,
                isAirPlayMenuOpen: !1,
                isAnyMenuOpen: !1
              }),
              m = (0, o.useCallback)((e => {
                const {
                  video: a
                } = _;
                if (!a || !n) return;
                const {
                  id: l,
                  title: t
                } = a;
                n.track({
                  video_id: l,
                  video_title: t,
                  video_type: _?.video?.groupType,
                  video_language: u,
                  element_placement: "video player",
                  ...e
                })
              }), [u, _?.video?.id]);
            return {
              state: r,
              setState: t,
              menuStates: p,
              toggleMenu: (e, a) => {
                const l = {
                  ...p
                };
                for (const e in l) Object.hasOwn(l, e) && (l[e] = !1);
                if (e && Object.hasOwn(l, e)) {
                  const t = void 0 === a ? !p[e] : a;
                  t && (l[e] = t), l.isAnyMenuOpen = t
                }
                v(l)
              },
              replay: () => {
                t("playerEnded", !1), t("playing", !0), t("currentTime", 0), t("timing", {
                  current: 0,
                  duration: 0
                })
              },
              trackGa: m,
              trackGaQuartile: (e, a, l) => {
                const {
                  video: t
                } = _;
                if (!t || !n) return;
                const {
                  id: o,
                  title: r
                } = t;
                n.track({
                  event: e,
                  video_id: o,
                  video_title: r,
                  video_type: _?.video?.groupType,
                  video_language: u,
                  video_length: a,
                  video_percentage: Math.floor(l ?? 0),
                  element_placement: "video player"
                })
              }
            }
          })({
            id: l
          });
          return a ? (0, n.jsx)(u.Provider, {
            value: t,
            children: a
          }) : null
        },
        p = () => (0, o.useContext)(u);
      var v = l(4633);
      const m = e => {
          let {
            id: a,
            locale: l
          } = e;
          const [t, r] = (0, o.useState)(), [s, n] = (0, o.useState)(), [d, c] = (0, o.useState)(), {
            data: u,
            loading: _
          } = (0, i.useQuery)(v.VideoData, {
            variables: t,
            skip: !t || !Object.entries(t).length
          });
          return (0, o.useEffect)((() => {
            if (!a) return;
            const e = {
              id: a
            };
            l && (e.locale = l), r(e)
          }), [a, l]), (0, o.useEffect)((() => {
            u?.video && n(u.video), u?.related && c(u.related)
          }), [u]), {
            loading: _,
            related: d,
            video: s
          }
        },
        b = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
        y = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : "#FCAF17"
    },
    4633: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "VideoData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "id"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withTranslations"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !0
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "video"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "screencap"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "game"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "titleSlug"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "createdFormatted"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "agegated"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "groupType"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "youtubeId"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "youtubeOnly"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tracks"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "captions"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "lang"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "files"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "resolution"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "default"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "related"
              },
              name: {
                kind: "Name",
                value: "videos"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "relatedToId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "50"
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "screencap"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "createdFormatted"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "game"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "title"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "titleSlug"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "translations"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "config"
                },
                value: {
                  kind: "StringValue",
                  value: "default",
                  block: !1
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withTranslations"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "value"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 976
        }
      };

      function l(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          l(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          l(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          l(e, a)
        }))
      }
      a.loc.source = {
        body: 'query VideoData(\n    $id: String!\n    $locale: String!\n    $withTranslations: Boolean! = false\n    $cache: Boolean = true\n) {\n    video(id: $id, locale: $locale) {\n        id\n        title\n        screencap\n        game {\n            id\n            title\n            titleSlug\n        }\n        createdFormatted\n        description\n        agegated\n        groupType\n        youtubeId\n        youtubeOnly\n        tracks {\n            captions\n            lang\n        }\n        files {\n            resolution\n            src\n            default\n        }\n    }\n    related: videos(relatedToId: $id, locale: $locale, limit: 50) {\n        results {\n            id\n            title\n            screencap\n            createdFormatted\n            game {\n                id\n                title\n                titleSlug\n            }\n        }\n    }\n    translations(locale: $locale, config: "default")\n        @include(if: $withTranslations) {\n        key\n        value\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function o(e, a) {
        for (var l = 0; l < e.definitions.length; l++) {
          var t = e.definitions[l];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          l(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.VideoData = function(e, a) {
        var l = {
          kind: e.kind,
          definitions: [o(e, a)]
        };
        e.hasOwnProperty("loc") && (l.loc = e.loc);
        var r = t[a] || new Set,
          i = new Set,
          s = new Set;
        for (r.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var n = s;
          s = new Set, n.forEach((function(e) {
            i.has(e) || (i.add(e), (t[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var t = o(e, a);
          t && l.definitions.push(t)
        })), l
      }(a, "VideoData")
    },
    6454: e => {
      "use strict";
      e.exports = JSON.parse('{"us":{"videoplayer_airplay_button_label":"Screen Share","videoplayer_airplay_menu_header":"Download","videoplayer_airplay_not_supported_error":"AirPlay not supported in this browser.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Video element not found.","videoplayer_captions_button_label":"Captions","videoplayer_captions_menu_back_button_label":"Back","videoplayer_captions_menu_header":"Subtitles / CC","videoplayer_captions_menu_off_label":"Off","videoplayer_captions_menu_subtitles_label":"(Subtitles)","videoplayer_downloads_button_label":"Download Options Menu","videoplayer_downloads_menu_back_button_label":"Back","videoplayer_downloads_menu_header":"Download","videoplayer_quality_menu_back_button_label":"Back","videoplayer_quality_settings_menu_header":"Settings","videoplayer_share_link_button_label":"Share to {name}","videoplayer_share_menu_back_button_label":"Back","videoplayer_share_menu_button_label":"Share Menu","videoplayer_share_menu_header":"Share","videoplayer_share_time_copied":"Copied!","videoplayer_share_time_copy":"Start shared video at","videoplayer_pause_button_label":"Pause button","videoplayer_play_button_label":"Play button","videoplayer_fullscreen_button_label":"Toggle video in fullscreen mode","videoplayer_fullscreen_hover_label":"Fullscreen","videoplayer_windowed_hover_label":"Windowed","videoplayer_unmute_click":"Click anywhere to unmute.","videoplayer_unmute_tap":"Tap anywhere to unmute.","videoplayer_pause_hover_label":"Pause","videoplayer_play_hover_label":"Play","videoplayer_play_pause_button_label":"Play/Pause Toggle","videoplayer_replay_hover_label":"Replay","videoplayer_progress_bar_label":"Progress Bar","videoplayer_quality_settings_button_label":"Quality Settings Menu","videoplayer_share_copy":"Copy","videoplayer_share_title":"Share","videoplayer_volume_slider_label":"Volume","videoplayer_volume_toggle_button_label":"Mute/Unmute Toggle"},"de":{"videoplayer_airplay_button_label":"Bildschirm teilen","videoplayer_airplay_menu_header":"Herunterladen","videoplayer_airplay_not_supported_error":"AirPlay wird von diesem Browser nicht unterstützt.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Das Videoelement wurde nicht gefunden.","videoplayer_captions_button_label":"Untertitel","videoplayer_captions_menu_back_button_label":"Zurück","videoplayer_captions_menu_header":"Untertitel/CC","videoplayer_captions_menu_off_label":"Aus","videoplayer_captions_menu_subtitles_label":"(Untertitel)","videoplayer_downloads_button_label":"Download-Optionen","videoplayer_downloads_menu_back_button_label":"Zurück","videoplayer_downloads_menu_header":"Herunterladen","videoplayer_quality_menu_back_button_label":"Zurück","videoplayer_quality_settings_menu_header":"Einstellungen","videoplayer_share_link_button_label":"Mit {name} teilen","videoplayer_share_menu_back_button_label":"Zurück","videoplayer_share_menu_button_label":"Teilenmenü","videoplayer_share_menu_header":"Teilen","videoplayer_share_time_copied":"Kopiert!","videoplayer_share_time_copy":"Beginne geteiltes Video bei","videoplayer_pause_button_label":"Pausetaste","videoplayer_play_button_label":"Play-Taste","videoplayer_fullscreen_button_label":"Video im Vollbildmodus abspielen","videoplayer_fullscreen_hover_label":"Vollbild","videoplayer_windowed_hover_label":"Fenstermodus","videoplayer_unmute_click":"Klicken, um die Stummschaltung aufzuheben.","videoplayer_unmute_tap":"Tippen, um die Stummschaltung aufzuheben.","videoplayer_pause_hover_label":"Pause","videoplayer_play_hover_label":"Abspielen","videoplayer_play_pause_button_label":"Abspielen/Pause","videoplayer_replay_hover_label":"Wiederholen","videoplayer_progress_bar_label":"Fortschrittsanzeige","videoplayer_quality_settings_button_label":"Qualitätseinstellungsmenü","videoplayer_share_copy":"Kopieren","videoplayer_share_title":"Teilen","videoplayer_volume_slider_label":"Lautstärke","videoplayer_volume_toggle_button_label":"Stummschaltung an/aus"},"es":{"videoplayer_airplay_button_label":"Compartir pantalla","videoplayer_airplay_menu_header":"Descargar","videoplayer_airplay_not_supported_error":"Este navegador no es compatible con AirPlay.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Elemento de vídeo no encontrado.","videoplayer_captions_button_label":"Subtítulos descriptivos","videoplayer_captions_menu_back_button_label":"Volver","videoplayer_captions_menu_header":"Subtítulos/Subtítulos cerrados","videoplayer_captions_menu_off_label":"No","videoplayer_captions_menu_subtitles_label":"(Subtítulos)","videoplayer_downloads_button_label":"Menú Opciones de descarga","videoplayer_downloads_menu_back_button_label":"Volver","videoplayer_downloads_menu_header":"Descargar","videoplayer_quality_menu_back_button_label":"Volver","videoplayer_quality_settings_menu_header":"Ajustes","videoplayer_share_link_button_label":"Compartir con {name}","videoplayer_share_menu_back_button_label":"Volver","videoplayer_share_menu_button_label":"Menú Compartir","videoplayer_share_menu_header":"Compartir","videoplayer_share_time_copied":"¡Copiado!","videoplayer_share_time_copy":"Iniciar vídeo compartido en el minuto","videoplayer_pause_button_label":"Botón de pausa","videoplayer_play_button_label":"Botón de reproducción","videoplayer_fullscreen_button_label":"Cambiar el vídeo a pantalla completa.","videoplayer_fullscreen_hover_label":"Pantalla completa","videoplayer_windowed_hover_label":"Modo ventana","videoplayer_unmute_click":"Haz clic en cualquier lugar para activar el audio.","videoplayer_unmute_tap":"Toca en cualquier lugar para activar el audio.","videoplayer_pause_hover_label":"Pausar","videoplayer_play_hover_label":"Reproducir","videoplayer_play_pause_button_label":"Reproducir/Pausar","videoplayer_replay_hover_label":"Volver a ver","videoplayer_progress_bar_label":"Barra de progreso","videoplayer_quality_settings_button_label":"Menú Ajustes de calidad","videoplayer_share_copy":"Copiar","videoplayer_share_title":"Compartir","videoplayer_volume_slider_label":"Volumen","videoplayer_volume_toggle_button_label":"Silenciar/Habilitar audio"},"mx":{"videoplayer_airplay_button_label":"Compartir pantalla","videoplayer_airplay_menu_header":"Descargar","videoplayer_airplay_not_supported_error":"Este navegador no es compatible con AirPlay.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Elemento de video no encontrado.","videoplayer_captions_button_label":"Configuración de subtítulos","videoplayer_captions_menu_back_button_label":"Atrás","videoplayer_captions_menu_header":"Subtítulos","videoplayer_captions_menu_off_label":"No","videoplayer_captions_menu_subtitles_label":"(Subtítulos)","videoplayer_downloads_button_label":"Opciones de descarga","videoplayer_downloads_menu_back_button_label":"Atrás","videoplayer_downloads_menu_header":"Descargar","videoplayer_quality_menu_back_button_label":"Atrás","videoplayer_quality_settings_menu_header":"Configuración","videoplayer_share_link_button_label":"Compartir con {name}","videoplayer_share_menu_back_button_label":"Atrás","videoplayer_share_menu_button_label":"Compartir","videoplayer_share_menu_header":"Compartir","videoplayer_share_time_copied":"¡Copiado!","videoplayer_share_time_copy":"Iniciar video compartido en","videoplayer_pause_button_label":"Botón de pausa","videoplayer_play_button_label":"Botón de reproducción","videoplayer_fullscreen_button_label":"Cambiar video a pantalla completa","videoplayer_fullscreen_hover_label":"Pantalla completa","videoplayer_windowed_hover_label":"Ventana","videoplayer_unmute_click":"Haz clic en cualquier parte para activar el sonido.","videoplayer_unmute_tap":"Toca en cualquier parte para activar el sonido.","videoplayer_pause_hover_label":"Pausar","videoplayer_play_hover_label":"Reproducir","videoplayer_play_pause_button_label":"Reproducir/Pausar","videoplayer_replay_hover_label":"Repetir","videoplayer_progress_bar_label":"Barra de progreso","videoplayer_quality_settings_button_label":"Configuración de calidad","videoplayer_share_copy":"Copiar","videoplayer_share_title":"Compartir","videoplayer_volume_slider_label":"Volumen","videoplayer_volume_toggle_button_label":"Activar/Desactivar silenciado"},"fr":{"videoplayer_airplay_button_label":"Partage d\'écran","videoplayer_airplay_menu_header":"Téléchargement","videoplayer_airplay_not_supported_error":"AirPlay n\'est pas pris en charge par ce navigateur.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Élément vidéo introuvable.","videoplayer_captions_button_label":"Sous-titres","videoplayer_captions_menu_back_button_label":"Retour","videoplayer_captions_menu_header":"Sous-titres","videoplayer_captions_menu_off_label":"Sans","videoplayer_captions_menu_subtitles_label":"(Sous-titres)","videoplayer_downloads_button_label":"Menu des options de téléchargement","videoplayer_downloads_menu_back_button_label":"Retour","videoplayer_downloads_menu_header":"Téléchargement","videoplayer_quality_menu_back_button_label":"Retour","videoplayer_quality_settings_menu_header":"Paramètres","videoplayer_share_link_button_label":"Partager avec {name}","videoplayer_share_menu_back_button_label":"Retour","videoplayer_share_menu_button_label":"Menu de partage","videoplayer_share_menu_header":"Partage","videoplayer_share_time_copied":"Copié !","videoplayer_share_time_copy":"Démarrer la vidéo partagée à","videoplayer_pause_button_label":"Bouton Pause","videoplayer_play_button_label":"Bouton Lecture","videoplayer_fullscreen_button_label":"Bouton pour activer/désactiver le plein écran","videoplayer_fullscreen_hover_label":"Plein écran","videoplayer_windowed_hover_label":"Mode fenêtré","videoplayer_unmute_click":"Cliquez n\'importe où pour activer le son.","videoplayer_unmute_tap":"Touchez n\'importe où pour activer le son.","videoplayer_pause_hover_label":"Pause","videoplayer_play_hover_label":"Lecture","videoplayer_play_pause_button_label":"Bouton Lecture/pause","videoplayer_replay_hover_label":"Relire","videoplayer_progress_bar_label":"Barre de progression","videoplayer_quality_settings_button_label":"Menu des paramètres de qualité","videoplayer_share_copy":"Copier","videoplayer_share_title":"Partage","videoplayer_volume_slider_label":"Volume","videoplayer_volume_toggle_button_label":"Bouton pour activer/désactiver le son"},"it":{"videoplayer_airplay_button_label":"Condivisione schermo","videoplayer_airplay_menu_header":"Scarica","videoplayer_airplay_not_supported_error":"Questo browser non supporta AirPlay.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Elemento video non trovato.","videoplayer_captions_button_label":"Audio descrizione","videoplayer_captions_menu_back_button_label":"Indietro","videoplayer_captions_menu_header":"Sottotitoli","videoplayer_captions_menu_off_label":"Disattivati","videoplayer_captions_menu_subtitles_label":"(Sottotitoli)","videoplayer_downloads_button_label":"Menu opzioni download","videoplayer_downloads_menu_back_button_label":"Indietro","videoplayer_downloads_menu_header":"Scarica","videoplayer_quality_menu_back_button_label":"Indietro","videoplayer_quality_settings_menu_header":"Impostazioni","videoplayer_share_link_button_label":"Condividi con {name}","videoplayer_share_menu_back_button_label":"Indietro","videoplayer_share_menu_button_label":"Menu opzioni condivisione","videoplayer_share_menu_header":"Condividi","videoplayer_share_time_copied":"Elemento copiato!","videoplayer_share_time_copy":"Fai iniziare il video condiviso da qui:","videoplayer_pause_button_label":"Pulsante pausa","videoplayer_play_button_label":"Pulsante riproduzione","videoplayer_fullscreen_button_label":"Attiva/Disattiva la modalità video a schermo intero","videoplayer_fullscreen_hover_label":"Schermo intero","videoplayer_windowed_hover_label":"In finestra","videoplayer_unmute_click":"Clicca in un punto qualsiasi per attivare l\'audio.","videoplayer_unmute_tap":"Tocca un punto qualsiasi per attivare l\'audio.","videoplayer_pause_hover_label":"Pausa","videoplayer_play_hover_label":"Riproduci","videoplayer_play_pause_button_label":"Attiva/Disattiva la riproduzione o la pausa","videoplayer_replay_hover_label":"Riproduci di nuovo","videoplayer_progress_bar_label":"Barra progresso","videoplayer_quality_settings_button_label":"Menu impostazioni qualità","videoplayer_share_copy":"Copia","videoplayer_share_title":"Condividi","videoplayer_volume_slider_label":"Volume","videoplayer_volume_toggle_button_label":"Attiva/Disattiva l’audio"},"jp":{"videoplayer_airplay_button_label":"画面共有","videoplayer_airplay_menu_header":"ダウンロード","videoplayer_airplay_not_supported_error":"このブラウザはAirPlayに対応していません。","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"ビデオ要素が見つかりません。","videoplayer_captions_button_label":"キャプション","videoplayer_captions_menu_back_button_label":"戻る","videoplayer_captions_menu_header":"字幕/クローズドキャプション","videoplayer_captions_menu_off_label":"オフ","videoplayer_captions_menu_subtitles_label":"(字幕)","videoplayer_downloads_button_label":"ダウンロードオプションメニュー","videoplayer_downloads_menu_back_button_label":"戻る","videoplayer_downloads_menu_header":"ダウンロード","videoplayer_quality_menu_back_button_label":"戻る","videoplayer_quality_settings_menu_header":"設定","videoplayer_share_link_button_label":"{name}に共有","videoplayer_share_menu_back_button_label":"戻る","videoplayer_share_menu_button_label":"共有メニュー","videoplayer_share_menu_header":"共有","videoplayer_share_time_copied":"コピー完了！","videoplayer_share_time_copy":"共有するビデオの開始位置：","videoplayer_pause_button_label":"一時停止ボタン","videoplayer_play_button_label":"再生ボタン","videoplayer_fullscreen_button_label":"フルスクリーンモードにビデオを切り替え","videoplayer_fullscreen_hover_label":"フルスクリーン","videoplayer_windowed_hover_label":"ウィンドウ表示","videoplayer_unmute_click":"クリックしてミュートを解除。","videoplayer_unmute_tap":"タップしてミュートを解除。","videoplayer_pause_hover_label":"一時停止","videoplayer_play_hover_label":"再生","videoplayer_play_pause_button_label":"再生/一時停止切り替え","videoplayer_replay_hover_label":"もう一回見る","videoplayer_progress_bar_label":"進行状況バー","videoplayer_quality_settings_button_label":"品質設定メニュー","videoplayer_share_copy":"コピー","videoplayer_share_title":"共有","videoplayer_volume_slider_label":"音量","videoplayer_volume_toggle_button_label":"ミュート/ミュート解除切り替え"},"kr":{"videoplayer_airplay_button_label":"화면 공유","videoplayer_airplay_menu_header":"다운로드","videoplayer_airplay_not_supported_error":"이 브라우저에서는 AirPlay가 지원되지 않습니다.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"동영상 요소를 찾을 수 없습니다.","videoplayer_captions_button_label":"캡션","videoplayer_captions_menu_back_button_label":"뒤로가기","videoplayer_captions_menu_header":"자막/CC","videoplayer_captions_menu_off_label":"끄기","videoplayer_captions_menu_subtitles_label":"(자막)","videoplayer_downloads_button_label":"다운로드 옵션 메뉴","videoplayer_downloads_menu_back_button_label":"뒤로가기","videoplayer_downloads_menu_header":"다운로드","videoplayer_quality_menu_back_button_label":"뒤로가기","videoplayer_quality_settings_menu_header":"설정","videoplayer_share_link_button_label":"{name}에게 공유","videoplayer_share_menu_back_button_label":"뒤로가기","videoplayer_share_menu_button_label":"공유 메뉴","videoplayer_share_menu_header":"공유","videoplayer_share_time_copied":"복사됨!","videoplayer_share_time_copy":"공유된 동영상 시작","videoplayer_pause_button_label":"일시 정지 버튼","videoplayer_play_button_label":"재생 버튼","videoplayer_fullscreen_button_label":"전체 화면으로 전환","videoplayer_fullscreen_hover_label":"전체 화면","videoplayer_windowed_hover_label":"창모드","videoplayer_unmute_click":"음소거를 해제하려면 아무 데나 클릭하십시오.","videoplayer_unmute_tap":"음소거를 해제하려면 아무 데나 탭하십시오.","videoplayer_pause_hover_label":"일시 정지","videoplayer_play_hover_label":"재생","videoplayer_play_pause_button_label":"재생/일시 정지 전환","videoplayer_replay_hover_label":"다시 재생","videoplayer_progress_bar_label":"진행률 표시줄","videoplayer_quality_settings_button_label":"품질 설정 메뉴","videoplayer_share_copy":"복사","videoplayer_share_title":"공유","videoplayer_volume_slider_label":"볼륨","videoplayer_volume_toggle_button_label":"음소거/소리 전환"},"pl":{"videoplayer_airplay_button_label":"Udostępnianie ekranu","videoplayer_airplay_menu_header":"Pobierz","videoplayer_airplay_not_supported_error":"Ta przeglądarka nie obsługuje funkcji AirPlay.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Nie znaleziono filmu.","videoplayer_captions_button_label":"Napisy","videoplayer_captions_menu_back_button_label":"Wstecz","videoplayer_captions_menu_header":"Napisy dla niesłyszących","videoplayer_captions_menu_off_label":"Wyłącz","videoplayer_captions_menu_subtitles_label":"(Napisy)","videoplayer_downloads_button_label":"Menu ustawień pobierania","videoplayer_downloads_menu_back_button_label":"Wstecz","videoplayer_downloads_menu_header":"Pobierz","videoplayer_quality_menu_back_button_label":"Wstecz","videoplayer_quality_settings_menu_header":"Ustawienia","videoplayer_share_link_button_label":"Udostępnij: {name}","videoplayer_share_menu_back_button_label":"Wróć","videoplayer_share_menu_button_label":"Menu udostępniania","videoplayer_share_menu_header":"Udostępnij","videoplayer_share_time_copied":"Skopiowano","videoplayer_share_time_copy":"Rozpocznij udostępnianie od","videoplayer_pause_button_label":"Przycisk zatrzymania","videoplayer_play_button_label":"Przycisk odtwarzania","videoplayer_fullscreen_button_label":"Przełącz na tryb pełnoekranowy","videoplayer_fullscreen_hover_label":"Pełny ekran","videoplayer_windowed_hover_label":"Okno","videoplayer_unmute_click":"Kliknij gdziekolwiek, aby wyłączyć wyciszenie.","videoplayer_unmute_tap":"Dotknij ekranu gdziekolwiek, aby wyłączyć wyciszenie.","videoplayer_pause_hover_label":"Zatrzymaj","videoplayer_play_hover_label":"Odtwórz","videoplayer_play_pause_button_label":"Odtwarzaj/zatrzymaj","videoplayer_replay_hover_label":"Odtwórz ponownie","videoplayer_progress_bar_label":"Pasek postępów","videoplayer_quality_settings_button_label":"Menu ustawień jakości","videoplayer_share_copy":"Kopiuj","videoplayer_share_title":"Udostępnij","videoplayer_volume_slider_label":"Głośność","videoplayer_volume_toggle_button_label":"Wycisz/wyłącz wyciszenie"},"br":{"videoplayer_airplay_button_label":"Compartilhamento de tela","videoplayer_airplay_menu_header":"Baixar","videoplayer_airplay_not_supported_error":"O AirPlay não é compatível com este navegador.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Vídeo não encontrado.","videoplayer_captions_button_label":"Legendas","videoplayer_captions_menu_back_button_label":"Voltar","videoplayer_captions_menu_header":"Legendas / CC","videoplayer_captions_menu_off_label":"Desligado","videoplayer_captions_menu_subtitles_label":"(Legendas)","videoplayer_downloads_button_label":"Menu de opções de download","videoplayer_downloads_menu_back_button_label":"Voltar","videoplayer_downloads_menu_header":"Baixar","videoplayer_quality_menu_back_button_label":"Voltar","videoplayer_quality_settings_menu_header":"Configurações","videoplayer_share_link_button_label":"Compartilhar com {name}","videoplayer_share_menu_back_button_label":"Voltar","videoplayer_share_menu_button_label":"Menu de compartilhamento","videoplayer_share_menu_header":"Compartilhar","videoplayer_share_time_copied":"Copiado!","videoplayer_share_time_copy":"Iniciar vídeo compartilhado em","videoplayer_pause_button_label":"Botão Pausar","videoplayer_play_button_label":"Botão Tocar","videoplayer_fullscreen_button_label":"Alternar para modo tela cheia","videoplayer_fullscreen_hover_label":"Tela cheia","videoplayer_windowed_hover_label":"Modo janela","videoplayer_unmute_click":"Clique em qualquer lugar para ativar o som.","videoplayer_unmute_tap":"Toque em qualquer lugar para ativar o som.","videoplayer_pause_hover_label":"Pausar","videoplayer_play_hover_label":"Tocar","videoplayer_play_pause_button_label":"Tocar/pausar","videoplayer_replay_hover_label":"Replay","videoplayer_progress_bar_label":"Barra de progresso","videoplayer_quality_settings_button_label":"Menu de configurações de qualidade","videoplayer_share_copy":"Copiar","videoplayer_share_title":"Compartilhar","videoplayer_volume_slider_label":"Volume","videoplayer_volume_toggle_button_label":"Ativar/desativar som"},"ru":{"videoplayer_airplay_button_label":"Демонстрация экрана","videoplayer_airplay_menu_header":"Загрузить","videoplayer_airplay_not_supported_error":"В данном браузере не поддерживается AirPlay.","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"Видеоэлемент не найден.","videoplayer_captions_button_label":"Меню субтитров","videoplayer_captions_menu_back_button_label":"Назад","videoplayer_captions_menu_header":"Субтитры","videoplayer_captions_menu_off_label":"Откл.","videoplayer_captions_menu_subtitles_label":"(субтитры)","videoplayer_downloads_button_label":"Меню загрузки","videoplayer_downloads_menu_back_button_label":"Назад","videoplayer_downloads_menu_header":"Загрузить","videoplayer_quality_menu_back_button_label":"Назад","videoplayer_quality_settings_menu_header":"Настройки","videoplayer_share_link_button_label":"Поделиться с {name}","videoplayer_share_menu_back_button_label":"Назад","videoplayer_share_menu_button_label":"Меню «Поделиться»","videoplayer_share_menu_header":"Поделиться","videoplayer_share_time_copied":"Скопировано!","videoplayer_share_time_copy":"Воспроизводить видео с","videoplayer_pause_button_label":"Кнопка паузы","videoplayer_play_button_label":"Кнопка воспроизведения","videoplayer_fullscreen_button_label":"Переключение полноэкранного режима видео","videoplayer_fullscreen_hover_label":"Полноэкранный режим","videoplayer_windowed_hover_label":"Оконный режим","videoplayer_unmute_click":"Щелкните куда-либо, чтобы включить звук.","videoplayer_unmute_tap":"Нажмите куда-либо, чтобы включить звук.","videoplayer_pause_hover_label":"Пауза","videoplayer_play_hover_label":"Воспроизведение","videoplayer_play_pause_button_label":"Пауза/воспроизведение","videoplayer_replay_hover_label":"Повтор","videoplayer_progress_bar_label":"Полоса перемотки","videoplayer_quality_settings_button_label":"Меню настроек качества","videoplayer_share_copy":"Копировать","videoplayer_share_title":"Поделиться","videoplayer_volume_slider_label":"Громкость","videoplayer_volume_toggle_button_label":"Выключить/включить звук"},"hans":{"videoplayer_airplay_button_label":"屏幕共享","videoplayer_airplay_menu_header":"下载","videoplayer_airplay_not_supported_error":"此浏览器不支持 AirPlay。","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"未找到视频元素。","videoplayer_captions_button_label":"原文字幕","videoplayer_captions_menu_back_button_label":"返回","videoplayer_captions_menu_header":"字幕 / 隐藏字幕","videoplayer_captions_menu_off_label":"关闭","videoplayer_captions_menu_subtitles_label":"（字幕）","videoplayer_downloads_button_label":"下载选项菜单","videoplayer_downloads_menu_back_button_label":"返回","videoplayer_downloads_menu_header":"下载","videoplayer_quality_menu_back_button_label":"返回","videoplayer_quality_settings_menu_header":"设置","videoplayer_share_link_button_label":"分享至 {name}","videoplayer_share_menu_back_button_label":"返回","videoplayer_share_menu_button_label":"分享菜单","videoplayer_share_menu_header":"分享","videoplayer_share_time_copied":"已复制！","videoplayer_share_time_copy":"视频分享开始时间：","videoplayer_pause_button_label":"暂停键","videoplayer_play_button_label":"播放键","videoplayer_fullscreen_button_label":"将视频切换至全屏模式","videoplayer_fullscreen_hover_label":"全屏","videoplayer_windowed_hover_label":"窗口化","videoplayer_unmute_click":"点击任意地方以取消静音。","videoplayer_unmute_tap":"按任意地方以取消静音。","videoplayer_pause_hover_label":"暂停","videoplayer_play_hover_label":"播放","videoplayer_play_pause_button_label":"播放/暂停切换","videoplayer_replay_hover_label":"重新播放","videoplayer_progress_bar_label":"进度条","videoplayer_quality_settings_button_label":"画质设置菜单","videoplayer_share_copy":"复制","videoplayer_share_title":"分享","videoplayer_volume_slider_label":"音量","videoplayer_volume_toggle_button_label":"静音/取消静音切换"},"tw":{"videoplayer_airplay_button_label":"分享畫面","videoplayer_airplay_menu_header":"下載","videoplayer_airplay_not_supported_error":"此瀏覽器不支援 AirPlay。","videoplayer_airplay_option_label":"AirPlay","videoplayer_video_not_found_error":"找不到影片元素。","videoplayer_captions_button_label":"字幕","videoplayer_captions_menu_back_button_label":"返回","videoplayer_captions_menu_header":"字幕 / CC","videoplayer_captions_menu_off_label":"關閉","videoplayer_captions_menu_subtitles_label":"（字幕）","videoplayer_downloads_button_label":"下載選項選單","videoplayer_downloads_menu_back_button_label":"返回","videoplayer_downloads_menu_header":"下載","videoplayer_quality_menu_back_button_label":"返回","videoplayer_quality_settings_menu_header":"設定","videoplayer_share_link_button_label":"分享至：{name}","videoplayer_share_menu_back_button_label":"返回","videoplayer_share_menu_button_label":"分享選單","videoplayer_share_menu_header":"分享","videoplayer_share_time_copied":"已複製！","videoplayer_share_time_copy":"分享影片開始時間：","videoplayer_pause_button_label":"暫停按鍵","videoplayer_play_button_label":"播放按鍵","videoplayer_fullscreen_button_label":"切換影片至全螢幕模式","videoplayer_fullscreen_hover_label":"全螢幕","videoplayer_windowed_hover_label":"視窗顯示","videoplayer_unmute_click":"點擊任何地方取消靜音。","videoplayer_unmute_tap":"點按任何地方取消靜音。","videoplayer_pause_hover_label":"暫停","videoplayer_play_hover_label":"播放","videoplayer_play_pause_button_label":"切換播放/暫停","videoplayer_replay_hover_label":"重播","videoplayer_progress_bar_label":"進度條","videoplayer_quality_settings_button_label":"畫質設定選單","videoplayer_share_copy":"複製","videoplayer_share_title":"分享","videoplayer_volume_slider_label":"音量","videoplayer_volume_toggle_button_label":"切換靜音/取消靜音"}}')
    }
  }
]);