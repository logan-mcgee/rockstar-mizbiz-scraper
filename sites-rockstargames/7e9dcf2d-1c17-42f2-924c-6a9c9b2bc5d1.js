! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7e9dcf2d-1c17-42f2-924c-6a9c9b2bc5d1", e._sentryDebugIdIdentifier = "sentry-dbid-7e9dcf2d-1c17-42f2-924c-6a9c9b2bc5d1")
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
  [9081], {
    99081: (e, a, d) => {
      d.r(a), d.d(a, {
        default: () => n
      });
      var s = d(6274),
        t = d(73855);
      const n = () => (0, t.jsx)(s.A, {
        jsonType: "legal",
        titleKey: "Terms of Service"
      })
    }
  }
]);