! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "69d0f24c-780e-4a99-b9dd-0f7729649461", e._sentryDebugIdIdentifier = "sentry-dbid-69d0f24c-780e-4a99-b9dd-0f7729649461")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/intl",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_intl = self.webpackChunk_rockstargames_intl || []).push([
  [135], {
    135: (e, a, t) => {
      t.r(a), t.d(a, {
        card: () => l,
        engagement: () => o,
        sitesCareers: () => r,
        sitesCirco: () => i,
        sitesLegacy: () => d,
        sitesRockstar: () => _,
        videoplayer: () => n
      });
      var s = t(717);
      const l = (0, s.defineMessages)({
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
        }),
        o = (0, s.defineMessages)({
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
        }),
        r = (0, s.defineMessages)({
          careers_home_msg: {
            id: "careers_home_msg",
            defaultMessage: "<p>Join a tight-knit team responsible for creating and publishing some of the most popular, innovative and critically acclaimed interactive entertainment in the world including the Grand Theft Auto series, the Red Dead series and many more.</p><p>Known for our dedication to quality and authenticity, a career at Rockstar Games is an opportunity to work on some of the most cutting edge, creatively rewarding and challenging projects available in any entertainment medium with some of the most talented people in the industry.</p><p>We offer successful candidates highly competitive salary and compensation packages, including a comprehensive benefits package for all eligible employees. Rockstar Games is an equal opportunity employer.</p>"
          }
        }),
        i = (0, s.defineMessages)({
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
        }),
        d = (0, s.defineMessages)({
          legacy_header_cta_label_reddeadredemption: {
            id: "legacy_header_cta_label_reddeadredemption",
            defaultMessage: "Buy Now"
          },
          highlights_title_std: {
            id: "highlights_title_std",
            defaultMessage: "Features"
          }
        }),
        _ = (0, s.defineMessages)({
          rsg_total_results_message: {
            id: "rsg_total_results_message",
            defaultMessage: "Showing {Tab} filtered by {Query}"
          },
          rsg_no_results: {
            id: "rsg_no_results",
            defaultMessage: "Sorry, there were no results."
          }
        }),
        n = (0, s.defineMessages)({
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
    }
  }
]);