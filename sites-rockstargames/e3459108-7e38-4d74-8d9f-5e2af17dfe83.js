! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e3459108-7e38-4d74-8d9f-5e2af17dfe83", e._sentryDebugIdIdentifier = "sentry-dbid-e3459108-7e38-4d74-8d9f-5e2af17dfe83")
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
  [3914], {
    73914: (e, a, d) => {
      d.r(a), d.d(a, {
        default: () => f
      });
      var s = d(6274),
        t = d(73855);
      const f = () => (0, t.jsx)(s.A, {
        jsonType: "privacy",
        titleKey: "Privacy Policy"
      })
    }
  }
]);