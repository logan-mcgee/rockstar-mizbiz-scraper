try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new t.Error).stack;
  a && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[a] = "65c0bb56-2303-4579-8e81-6308d66a378f", t._sentryDebugIdIdentifier = "sentry-dbid-65c0bb56-2303-4579-8e81-6308d66a378f")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8813], {
    38813: (t, a, e) => {
      e.r(a), e.d(a, {
        default: () => o
      });
      var s = e(42295),
        c = e(14200),
        r = e(95966);
      const o = (0, r.withTranslations)((({
        t
      }) => (0, s.jsxs)("div", {
        className: "rockstargames-sites-rockstargamese82a9783654fecabcb84eedfee5045cb",
        children: [(0, s.jsx)("section", {
          className: "rockstargames-sites-rockstargamesb46e7530ea3e54f01d59efc53158a209",
          children: (0, s.jsx)("h1", {
            children: "Contact Us"
          })
        }), (0, s.jsxs)("section", {
          className: "rockstargames-sites-rockstargamese37eaed9bbdf361d6fc41a34f0c3658e",
          children: [(0, s.jsx)("p", {
            children: t("contact.intro")
          }), (0, s.jsxs)("p", {
            children: [(0, s.jsx)("span", {
              children: t("contact.gtao-feedback")
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://www.rockstargames.com/GTAOnline/feedback",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press GTAOnline Feedback",
              children: "https://www.rockstargames.com/GTAOnline/feedback"
            })]
          }), (0, s.jsxs)("p", {
            children: [(0, s.jsx)("span", {
              children: t("contact.rdo-feedback")
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://www.rockstargames.com/reddeadonline/feedback",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press RDO Feedback",
              children: "https://www.rockstargames.com/reddeadonline/feedback"
            })]
          }), (0, s.jsxs)("p", {
            children: [(0, s.jsx)("span", {
              children: t("contact.technical")
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://support.rockstargames.com/",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Support",
              children: "https://support.rockstargames.com/"
            })]
          }), (0, s.jsxs)("p", {
            children: [(0, s.jsx)("span", {
              children: t("contact.career")
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://www.rockstargames.com/careers/",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Careers",
              children: "https://www.rockstargames.com/careers/"
            })]
          }), (0, s.jsxs)("p", {
            children: [(0, s.jsx)("span", {
              children: t("contact.copyright")
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://support.rockstargames.com/articles/7bNaeoMFTV0iUDGhStTXvz",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Copyright Policy",
              children: "https://support.rockstargames.com/articles/7bNaeoMFTV0iUDGhStTXvz"
            })]
          }), (0, s.jsxs)("p", {
            children: [(0, s.jsx)("span", {
              children: t("contact.legal")
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "mailto:Copyright@take2games.com",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Copyright Email",
              children: "Copyright@take2games.com"
            })]
          }), (0, s.jsxs)("p", {
            children: [(0, s.jsx)("span", {
              children: t("contact.latest")
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://www.rockstargames.com/",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Rockstar Games Site",
              children: "https://www.rockstargames.com/"
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://twitter.com/RockstarGames",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Twitter Site",
              children: "https://twitter.com/RockstarGames"
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://www.instagram.com/rockstargames/",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Instagram Site",
              children: "https://www.instagram.com/rockstargames/"
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://www.facebook.com/rockstargames",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Facebook Site",
              children: "https://www.facebook.com/rockstargames"
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://www.youtube.com/user/RockstarGames",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Youtube Site",
              children: "https://www.youtube.com/user/RockstarGames"
            })]
          }), (0, s.jsx)("br", {})]
        })]
      })))
    }
  }
]);