! function() {
  try {
    var a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new a.Error).stack;
    t && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[t] = "65c91ca5-8a4f-4ed0-abd6-6fd8c65ba254", a._sentryDebugIdIdentifier = "sentry-dbid-65c91ca5-8a4f-4ed0-abd6-6fd8c65ba254")
  } catch (a) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [554], {
    70554: (a, t, e) => {
      e.r(t), e.d(t, {
        default: () => r
      });
      var s = e(14341),
        c = e(95966);
      var o = e(25854);
      const r = (0, c.withTranslations)((a => {
        let {
          t
        } = a;
        return (0, o.jsxs)("div", {
          className: "rockstargames-sites-rockstargamese82a9783654fecabcb84eedfee5045cb",
          children: [(0, o.jsx)("section", {
            className: "rockstargames-sites-rockstargamesb46e7530ea3e54f01d59efc53158a209",
            children: (0, o.jsx)("h1", {
              children: "Contact Us"
            })
          }), (0, o.jsxs)("section", {
            className: "rockstargames-sites-rockstargamese37eaed9bbdf361d6fc41a34f0c3658e",
            children: [(0, o.jsx)("p", {
              children: t("contact.intro")
            }), (0, o.jsxs)("p", {
              children: [(0, o.jsx)("span", {
                children: t("contact.gtao-feedback")
              }), (0, o.jsx)("br", {}), (0, o.jsx)(s.A, {
                to: "https://www.rockstargames.com/GTAOnline/feedback",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press GTAOnline Feedback",
                children: "https://www.rockstargames.com/GTAOnline/feedback"
              })]
            }), (0, o.jsxs)("p", {
              children: [(0, o.jsx)("span", {
                children: t("contact.rdo-feedback")
              }), (0, o.jsx)("br", {}), (0, o.jsx)(s.A, {
                to: "https://www.rockstargames.com/reddeadonline/feedback",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press RDO Feedback",
                children: "https://www.rockstargames.com/reddeadonline/feedback"
              })]
            }), (0, o.jsxs)("p", {
              children: [(0, o.jsx)("span", {
                children: t("contact.technical")
              }), (0, o.jsx)("br", {}), (0, o.jsx)(s.A, {
                to: "https://support.rockstargames.com/",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Support",
                children: "https://support.rockstargames.com/"
              })]
            }), (0, o.jsxs)("p", {
              children: [(0, o.jsx)("span", {
                children: t("contact.career")
              }), (0, o.jsx)("br", {}), (0, o.jsx)(s.A, {
                to: "https://www.rockstargames.com/careers/",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Careers",
                children: "https://www.rockstargames.com/careers/"
              })]
            }), (0, o.jsxs)("p", {
              children: [(0, o.jsx)("span", {
                children: t("contact.copyright")
              }), (0, o.jsx)("br", {}), (0, o.jsx)(s.A, {
                to: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Copyright Policy",
                children: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material"
              })]
            }), (0, o.jsxs)("p", {
              children: [(0, o.jsx)("span", {
                children: t("contact.legal")
              }), (0, o.jsx)("br", {}), (0, o.jsx)(s.A, {
                to: "mailto:Copyright@take2games.com",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Copyright Email",
                children: "Copyright@take2games.com"
              })]
            }), (0, o.jsxs)("p", {
              children: [(0, o.jsx)("span", {
                children: t("contact.latest")
              }), (0, o.jsx)("br", {}), (0, o.jsx)(s.A, {
                to: "https://www.rockstargames.com/",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Rockstar Games Site",
                children: "https://www.rockstargames.com/"
              }), (0, o.jsx)("br", {}), (0, o.jsx)(s.A, {
                to: "https://twitter.com/RockstarGames",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Twitter Site",
                children: "https://twitter.com/RockstarGames"
              }), (0, o.jsx)("br", {}), (0, o.jsx)(s.A, {
                to: "https://www.instagram.com/rockstargames/",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Instagram Site",
                children: "https://www.instagram.com/rockstargames/"
              }), (0, o.jsx)("br", {}), (0, o.jsx)(s.A, {
                to: "https://www.facebook.com/rockstargames",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Facebook Site",
                children: "https://www.facebook.com/rockstargames"
              }), (0, o.jsx)("br", {}), (0, o.jsx)(s.A, {
                to: "https://www.youtube.com/user/RockstarGames",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Youtube Site",
                children: "https://www.youtube.com/user/RockstarGames"
              })]
            }), (0, o.jsx)("br", {})]
          })]
        })
      }))
    }
  }
]);