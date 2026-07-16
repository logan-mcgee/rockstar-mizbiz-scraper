try {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new a.Error).stack;
  t && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[t] = "94dc6f33-8573-4188-a6d5-5aa141dae777", a._sentryDebugIdIdentifier = "sentry-dbid-94dc6f33-8573-4188-a6d5-5aa141dae777")
} catch (a) {} {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[(new a.Error).stack] = Object.assign({}, a._sentryModuleMetadata[(new a.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7228], {
    87228(a, t, e) {
      e.r(t), e.d(t, {
        default: () => o
      });
      var s = e(39793),
        c = e(48478),
        r = e(13331);
      const o = (0, r.withTranslations)(({
        t: a
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
            children: a("contact.intro")
          }), (0, s.jsxs)("p", {
            children: [(0, s.jsx)("span", {
              children: a("contact.gtao-feedback")
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "/gta-online/feedback",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press GTAOnline Feedback",
              children: "https://www.rockstargames.com/gta-online/feedback"
            })]
          }), (0, s.jsxs)("p", {
            children: [(0, s.jsx)("span", {
              children: a("contact.rdo-feedback")
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "/reddeadonline/feedback",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press RDO Feedback",
              children: "https://www.rockstargames.com/reddeadonline/feedback"
            })]
          }), (0, s.jsxs)("p", {
            children: [(0, s.jsx)("span", {
              children: a("contact.technical")
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://support.rockstargames.com/",
              "data-ockergtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Support",
              children: "https://support.rockstargames.com/"
            })]
          }), (0, s.jsxs)("p", {
            children: [(0, s.jsx)("span", {
              children: a("contact.career")
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "/careers",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Careers",
              children: "https://www.rockstargames.com/careers"
            })]
          }), (0, s.jsxs)("p", {
            children: [(0, s.jsx)("span", {
              children: a("contact.copyright")
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://support.rockstargames.com/articles/7bNaeoMFTV0iUDGhStTXvz",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Copyright Policy",
              children: "https://support.rockstargames.com/articles/7bNaeoMFTV0iUDGhStTXvz"
            })]
          }), (0, s.jsxs)("p", {
            children: [(0, s.jsx)("span", {
              children: a("contact.security")
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://hackerone.com/rockstargames",
              target: "_blank",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "HackerOne",
              children: "https://hackerone.com/rockstargames"
            })]
          }), (0, s.jsxs)("p", {
            children: [(0, s.jsx)("span", {
              children: a("contact.legal")
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "mailto:Copyright@take2games.com",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Copyright Email",
              children: "Copyright@take2games.com"
            })]
          }), (0, s.jsxs)("p", {
            children: [(0, s.jsx)("span", {
              children: a("contact.latest")
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "/",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Rockstar Games Site",
              children: "https://www.rockstargames.com/"
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://twitter.com/RockstarGames",
              target: "_blank",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Twitter Site",
              children: "https://twitter.com/RockstarGames"
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://www.instagram.com/rockstargames/",
              target: "_blank",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Instagram Site",
              children: "https://www.instagram.com/rockstargames/"
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://www.facebook.com/rockstargames",
              target: "_blank",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Facebook Site",
              children: "https://www.facebook.com/rockstargames"
            }), (0, s.jsx)("br", {}), (0, s.jsx)(c.A, {
              to: "https://www.youtube.com/user/RockstarGames",
              target: "_blank",
              "data-gtm-category": "Contact Us",
              "data-gtm-action": "Link Click",
              "data-gtm-label": "Press Youtube Site",
              children: "https://www.youtube.com/user/RockstarGames"
            })]
          }), (0, s.jsx)("br", {})]
        })]
      }))
    }
  }
]);