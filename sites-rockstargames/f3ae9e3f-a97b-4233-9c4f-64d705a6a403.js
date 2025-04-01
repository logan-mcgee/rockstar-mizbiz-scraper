! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f3ae9e3f-a97b-4233-9c4f-64d705a6a403", e._sentryDebugIdIdentifier = "sentry-dbid-f3ae9e3f-a97b-4233-9c4f-64d705a6a403")
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
  [1235], {
    51235: (e, a, d) => {
      d.r(a), d.d(a, {
        default: () => t
      });
      var s = d(6274),
        o = d(73855);
      const t = () => (0, o.jsx)(s.A, {
        jsonType: "cookies",
        titleKey: "Cookie Policy"
      })
    }
  }
]);