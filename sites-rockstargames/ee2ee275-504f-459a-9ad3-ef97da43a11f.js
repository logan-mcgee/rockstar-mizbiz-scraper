try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ee2ee275-504f-459a-9ad3-ef97da43a11f", e._sentryDebugIdIdentifier = "sentry-dbid-ee2ee275-504f-459a-9ad3-ef97da43a11f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "793af7f1166af90e36185780de33260abbd44330",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "793af7f1166af90e36185780de33260abbd44330"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [5342], {
    45342: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => t
      });
      var d = s(70954);
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