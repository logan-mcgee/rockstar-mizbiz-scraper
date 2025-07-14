try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new t.Error).stack;
  a && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[a] = "81c9107d-a6b0-4e9b-babc-6a8f44b0e3e6", t._sentryDebugIdIdentifier = "sentry-dbid-81c9107d-a6b0-4e9b-babc-6a8f44b0e3e6")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [554], {
    70554: (t, a, e) => {
      e.r(a), e.d(a, {
        default: () => o
      });
      var s = e(14341),
        c = e(95966);
      var r = e(25854);
      const o = (0, c.withTranslations)((t => {
        let {
          t: a
        } = t;
        return (0, r.jsxs)("div", {
          className: "rockstargames-sites-rockstargamese82a9783654fecabcb84eedfee5045cb",
          children: [(0, r.jsx)("section", {
            className: "rockstargames-sites-rockstargamesb46e7530ea3e54f01d59efc53158a209",
            children: (0, r.jsx)("h1", {
              children: "Contact Us"
            })
          }), (0, r.jsxs)("section", {
            className: "rockstargames-sites-rockstargamese37eaed9bbdf361d6fc41a34f0c3658e",
            children: [(0, r.jsx)("p", {
              children: a("contact.intro")
            }), (0, r.jsxs)("p", {
              children: [(0, r.jsx)("span", {
                children: a("contact.gtao-feedback")
              }), (0, r.jsx)("br", {}), (0, r.jsx)(s.A, {
                to: "https://www.rockstargames.com/GTAOnline/feedback",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press GTAOnline Feedback",
                children: "https://www.rockstargames.com/GTAOnline/feedback"
              })]
            }), (0, r.jsxs)("p", {
              children: [(0, r.jsx)("span", {
                children: a("contact.rdo-feedback")
              }), (0, r.jsx)("br", {}), (0, r.jsx)(s.A, {
                to: "https://www.rockstargames.com/reddeadonline/feedback",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press RDO Feedback",
                children: "https://www.rockstargames.com/reddeadonline/feedback"
              })]
            }), (0, r.jsxs)("p", {
              children: [(0, r.jsx)("span", {
                children: a("contact.technical")
              }), (0, r.jsx)("br", {}), (0, r.jsx)(s.A, {
                to: "https://support.rockstargames.com/",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Support",
                children: "https://support.rockstargames.com/"
              })]
            }), (0, r.jsxs)("p", {
              children: [(0, r.jsx)("span", {
                children: a("contact.career")
              }), (0, r.jsx)("br", {}), (0, r.jsx)(s.A, {
                to: "https://www.rockstargames.com/careers/",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Careers",
                children: "https://www.rockstargames.com/careers/"
              })]
            }), (0, r.jsxs)("p", {
              children: [(0, r.jsx)("span", {
                children: a("contact.copyright")
              }), (0, r.jsx)("br", {}), (0, r.jsx)(s.A, {
                to: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Copyright Policy",
                children: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material"
              })]
            }), (0, r.jsxs)("p", {
              children: [(0, r.jsx)("span", {
                children: a("contact.legal")
              }), (0, r.jsx)("br", {}), (0, r.jsx)(s.A, {
                to: "mailto:Copyright@take2games.com",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Copyright Email",
                children: "Copyright@take2games.com"
              })]
            }), (0, r.jsxs)("p", {
              children: [(0, r.jsx)("span", {
                children: a("contact.latest")
              }), (0, r.jsx)("br", {}), (0, r.jsx)(s.A, {
                to: "https://www.rockstargames.com/",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Rockstar Games Site",
                children: "https://www.rockstargames.com/"
              }), (0, r.jsx)("br", {}), (0, r.jsx)(s.A, {
                to: "https://twitter.com/RockstarGames",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Twitter Site",
                children: "https://twitter.com/RockstarGames"
              }), (0, r.jsx)("br", {}), (0, r.jsx)(s.A, {
                to: "https://www.instagram.com/rockstargames/",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Instagram Site",
                children: "https://www.instagram.com/rockstargames/"
              }), (0, r.jsx)("br", {}), (0, r.jsx)(s.A, {
                to: "https://www.facebook.com/rockstargames",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Facebook Site",
                children: "https://www.facebook.com/rockstargames"
              }), (0, r.jsx)("br", {}), (0, r.jsx)(s.A, {
                to: "https://www.youtube.com/user/RockstarGames",
                "data-gtm-category": "Contact Us",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Press Youtube Site",
                children: "https://www.youtube.com/user/RockstarGames"
              })]
            }), (0, r.jsx)("br", {})]
          })]
        })
      }))
    }
  }
]);