try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "99861763-93a4-4949-9d34-3baf8a929436", e._sentryDebugIdIdentifier = "sentry-dbid-99861763-93a4-4949-9d34-3baf8a929436")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [2320], {
    22320: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => o
      });
      var t = s(42295);
      const d = {
          content: "rockstargames-sites-rockstargamesf5e7ab9c74f01e6dc42bea36681208d9",
          logo: "rockstargames-sites-rockstargamesd8b754695ff6e6ac5f4e44b7dd6a6446",
          maint: "rockstargames-sites-rockstargamesb2ef0f4b0fa8e8140d3b77bff10095b7"
        },
        o = () => (0, t.jsx)("div", {
          className: d.maint,
          children: (0, t.jsxs)("div", {
            className: d.content,
            children: [(0, t.jsx)("div", {
              className: d.logo
            }), (0, t.jsx)("p", {
              children: "The Rockstar Games Social Club is currently undergoing maintenance. Please check back soon."
            }), (0, t.jsx)("a", {
              className: d.support,
              href: "https://support.rockstargames.com/",
              children: "https://support.rockstargames.com/"
            })]
          })
        })
    }
  }
]);