! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "da3e8b69-faab-4337-b4fa-22d3fa5c53da", e._sentryDebugIdIdentifier = "sentry-dbid-da3e8b69-faab-4337-b4fa-22d3fa5c53da")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [4169], {
    80689: (e, a, t) => {
      var s = t(20605).Symbol;
      e.exports = s
    },
    95192: (e, a, t) => {
      var s = t(80689),
        r = t(54915),
        o = t(18150),
        i = s ? s.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? r(e) : o(e)
      }
    },
    42368: (e, a, t) => {
      var s = t(69896),
        r = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, s(e) + 1).replace(r, "") : e
      }
    },
    38888: (e, a, t) => {
      var s = "object" == typeof t.g && t.g && t.g.Object === Object && t.g;
      e.exports = s
    },
    54915: (e, a, t) => {
      var s = t(80689),
        r = Object.prototype,
        o = r.hasOwnProperty,
        i = r.toString,
        l = s ? s.toStringTag : void 0;
      e.exports = function(e) {
        var a = o.call(e, l),
          t = e[l];
        try {
          e[l] = void 0;
          var s = !0
        } catch (e) {}
        var r = i.call(e);
        return s && (a ? e[l] = t : delete e[l]), r
      }
    },
    18150: e => {
      var a = Object.prototype.toString;
      e.exports = function(e) {
        return a.call(e)
      }
    },
    20605: (e, a, t) => {
      var s = t(38888),
        r = "object" == typeof self && self && self.Object === Object && self,
        o = s || r || Function("return this")();
      e.exports = o
    },
    69896: e => {
      var a = /\s/;
      e.exports = function(e) {
        for (var t = e.length; t-- && a.test(e.charAt(t)););
        return t
      }
    },
    45757: (e, a, t) => {
      var s = t(23693),
        r = t(42204),
        o = t(79902),
        i = Math.max,
        l = Math.min;
      e.exports = function(e, a, t) {
        var n, d, _, c, u, f, g = 0,
          p = !1,
          b = !1,
          m = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function y(a) {
          var t = n,
            s = d;
          return n = d = void 0, g = a, c = e.apply(s, t)
        }

        function h(e) {
          var t = e - f;
          return void 0 === f || t >= a || t < 0 || b && e - g >= _
        }

        function v() {
          var e = r();
          if (h(e)) return M(e);
          u = setTimeout(v, function(e) {
            var t = a - (e - f);
            return b ? l(t, _ - (e - g)) : t
          }(e))
        }

        function M(e) {
          return u = void 0, m && n ? y(e) : (n = d = void 0, c)
        }

        function k() {
          var e = r(),
            t = h(e);
          if (n = arguments, d = this, f = e, t) {
            if (void 0 === u) return function(e) {
              return g = e, u = setTimeout(v, a), p ? y(e) : c
            }(f);
            if (b) return clearTimeout(u), u = setTimeout(v, a), y(f)
          }
          return void 0 === u && (u = setTimeout(v, a)), c
        }
        return a = o(a) || 0, s(t) && (p = !!t.leading, _ = (b = "maxWait" in t) ? i(o(t.maxWait) || 0, a) : _, m = "trailing" in t ? !!t.trailing : m), k.cancel = function() {
          void 0 !== u && clearTimeout(u), g = 0, n = f = d = u = void 0
        }, k.flush = function() {
          return void 0 === u ? c : M(r())
        }, k
      }
    },
    23693: e => {
      e.exports = function(e) {
        var a = typeof e;
        return null != e && ("object" == a || "function" == a)
      }
    },
    56490: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    69978: (e, a, t) => {
      var s = t(95192),
        r = t(56490);
      e.exports = function(e) {
        return "symbol" == typeof e || r(e) && "[object Symbol]" == s(e)
      }
    },
    42204: (e, a, t) => {
      var s = t(20605);
      e.exports = function() {
        return s.Date.now()
      }
    },
    79902: (e, a, t) => {
      var s = t(42368),
        r = t(23693),
        o = t(69978),
        i = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        n = /^0o[0-7]+$/i,
        d = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (o(e)) return NaN;
        if (r(e)) {
          var a = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = r(a) ? a + "" : a
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = s(e);
        var t = l.test(e);
        return t || n.test(e) ? d(e.slice(2), t ? 2 : 8) : i.test(e) ? NaN : +e
      }
    },
    64269: (e, a, t) => {
      "use strict";
      t.d(a, {
        C: () => i,
        f: () => l
      });
      var s = t(78322);

      function r(e) {
        return e
      }

      function o(e, a) {
        void 0 === a && (a = r);
        var t = [],
          s = !1;
        return {
          read: function() {
            if (s) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return t.length ? t[t.length - 1] : e
          },
          useMedium: function(e) {
            var r = a(e, s);
            return t.push(r),
              function() {
                t = t.filter((function(e) {
                  return e !== r
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (s = !0; t.length;) {
              var a = t;
              t = [], a.forEach(e)
            }
            t = {
              push: function(a) {
                return e(a)
              },
              filter: function() {
                return t
              }
            }
          },
          assignMedium: function(e) {
            s = !0;
            var a = [];
            if (t.length) {
              var r = t;
              t = [], r.forEach(e), a = t
            }
            var o = function() {
                var t = a;
                a = [], t.forEach(e)
              },
              i = function() {
                return Promise.resolve().then(o)
              };
            i(), t = {
              push: function(e) {
                a.push(e), i()
              },
              filter: function(e) {
                return a = a.filter(e), t
              }
            }
          }
        }
      }

      function i(e, a) {
        return void 0 === a && (a = r), o(e, a)
      }

      function l(e) {
        void 0 === e && (e = {});
        var a = o(null);
        return a.options = (0, s.Cl)({
          async: !0,
          ssr: !1
        }, e), a
      }
    },
    14818: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(9623);
      const r = {
        pillBtn: "rockstargames-sites-gta-gen9a76545929bba4f1522661c9f297ea3c5",
        selected: "rockstargames-sites-gta-gen9e5b12527bec7eae7fce9642c9827cc3b",
        plusButton: "rockstargames-sites-gta-gen9b35e9ba36ecaabe08c02c44808110761",
        small: "rockstargames-sites-gta-gen9b3ba679464048120f8440e7ae0d14086",
        btnText: "rockstargames-sites-gta-gen9e146813e6b911567a15379239351bb9f",
        btnTexticon: "rockstargames-sites-gta-gen9add785fa73d6a7f8cdf490add2819974",
        whiteBtn: "rockstargames-sites-gta-gen9d94aba4fb4bae812e14f8715816752c2",
        blackBtn: "rockstargames-sites-gta-gen9d3207a3907ff5e6cc1498c67d5562087",
        transparentBtn: "rockstargames-sites-gta-gen9d4515b6bf9a4c714239cac9e27932235",
        iconBtn: "rockstargames-sites-gta-gen9a305be36306fd7f0977b052ccab54910",
        link: "rockstargames-sites-gta-gen9a73b743df91203999c432aceb1093e62",
        xboxone: "rockstargames-sites-gta-gen9cadebea37980f01b56560143374013b3",
        xboxseriesxs: "rockstargames-sites-gta-gen9c28e2bcbd4ed4fc95b67860cb7033999",
        ps4: "rockstargames-sites-gta-gen9af1b302b53e77d0da20f92de2973fd29",
        ps5: "rockstargames-sites-gta-gen9b5164622a2b180ed2b04eab4d489763b",
        pc: "rockstargames-sites-gta-gen9c4a7b17bb99afb02a9f9b9b133be7844"
      };
      var o = t(98096);
      const i = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: r,
            ariaLabel: i
          } = e;
          return (0, o.jsx)("button", {
            className: t,
            onClick: s,
            style: r,
            type: "button",
            "aria-label": i,
            children: a
          })
        },
        l = e => {
          let {
            children: a,
            className: t,
            onClick: r,
            style: i,
            to: l,
            ariaLabel: n
          } = e;
          return (0, o.jsx)(s.NavLink, {
            className: t,
            onClick: r,
            style: i,
            to: l,
            "aria-label": n,
            children: a
          })
        },
        n = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: s,
            icon: n = "",
            img: d,
            labelColor: _ = "#000",
            onClick: c,
            secondText: u,
            size: f,
            text: g,
            to: p,
            type: b = "",
            ariaLabel: m
          } = e;
          const y = [r.plusButton, r[b] ?? "", r[f] ?? "", r[s] ?? "", t].join(" "),
            h = {
              "--hvr-color": a ?? _,
              "--hvr-bg-color": _ ?? a,
              "--hvr-border-color": a ?? _
            },
            v = (0, o.jsxs)(o.Fragment, {
              children: [d ? (0, o.jsx)("img", {
                src: d,
                alt: ""
              }) : "", (0, o.jsxs)("div", {
                className: r.btnText,
                icon: n,
                children: [g, u ? (0, o.jsx)("span", {
                  children: u
                }) : ""]
              })]
            });
          if (p) {
            if (p.startsWith("http")) {
              const e = p.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, o.jsx)("span", {
                onClick: c,
                onKeyDown: c,
                className: y,
                role: "button",
                "aria-label": m,
                tabIndex: 0,
                children: (0, o.jsx)("a", {
                  href: p,
                  target: e,
                  children: v
                })
              })
            }
            return (0, o.jsx)(l, {
              className: y,
              onClick: c,
              style: {
                ...h
              },
              to: p,
              ariaLabel: m,
              children: v
            })
          }
          return (0, o.jsx)(i, {
            className: y,
            onClick: c,
            style: {
              ...h
            },
            ariaLabel: m,
            children: v
          })
        }
    },
    539: (e, a, t) => {
      "use strict";
      t.d(a, {
        Nr: () => r,
        oY: () => o
      });
      var s = t(81788);
      const r = (0, s.defineMessages)({
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
        });
      (0, s.defineMessages)({
        careers_home_msg: {
          id: "careers_home_msg",
          defaultMessage: "<p>Join a tight-knit team responsible for creating and publishing some of the most popular, innovative and critically acclaimed interactive entertainment in the world including the Grand Theft Auto series, the Red Dead series and many more.</p><p>Known for our dedication to quality and authenticity, a career at Rockstar Games is an opportunity to work on some of the most cutting edge, creatively rewarding and challenging projects available in any entertainment medium with some of the most talented people in the industry.</p><p>We offer successful candidates highly competitive salary and compensation packages, including a comprehensive benefits package for all eligible employees. Rockstar Games is an equal opportunity employer.</p>"
        }
      }), (0, s.defineMessages)({
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
      }), (0, s.defineMessages)({
        legacy_header_cta_label_reddeadredemption: {
          id: "legacy_header_cta_label_reddeadredemption",
          defaultMessage: "Buy Now"
        },
        highlights_title_std: {
          id: "highlights_title_std",
          defaultMessage: "Features"
        }
      }), (0, s.defineMessages)({
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
      }), (0, s.defineMessages)({
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