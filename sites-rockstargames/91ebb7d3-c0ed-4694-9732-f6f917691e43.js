! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "91ebb7d3-c0ed-4694-9732-f6f917691e43", e._sentryDebugIdIdentifier = "sentry-dbid-91ebb7d3-c0ed-4694-9732-f6f917691e43")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9053], {
    89053: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => t
      });
      var d = s(91029);
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