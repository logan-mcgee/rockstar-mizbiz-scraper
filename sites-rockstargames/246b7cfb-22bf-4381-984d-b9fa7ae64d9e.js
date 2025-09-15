try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "246b7cfb-22bf-4381-984d-b9fa7ae64d9e", e._sentryDebugIdIdentifier = "sentry-dbid-246b7cfb-22bf-4381-984d-b9fa7ae64d9e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3549], {
    73549: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => t
      });
      var d = s(42295);
      const t = () => (0, d.jsxs)("div", {
        className: "rockstargames-sites-rockstargamesde90457c42504bea6b08059e335add00",
        children: [(0, d.jsx)("div", {
          className: "rockstargames-sites-rockstargamesf42266067086be596ce3210aca0c54eb"
        }), (0, d.jsx)("h3", {
          children: "Standard Deviation is now a part of Rockstar Games."
        })]
      })
    }
  }
]);