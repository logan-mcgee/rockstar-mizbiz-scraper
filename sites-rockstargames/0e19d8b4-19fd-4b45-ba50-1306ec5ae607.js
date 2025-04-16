! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0e19d8b4-19fd-4b45-ba50-1306ec5ae607", e._sentryDebugIdIdentifier = "sentry-dbid-0e19d8b4-19fd-4b45-ba50-1306ec5ae607")
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
  [7214], {
    7214: (e, a, o) => {
      o.r(a), o.d(a, {
        default: () => d
      });
      var t = o(6274),
        n = o(73855);
      const d = () => (0, n.jsx)(t.A, {
        jsonType: "corpinfo",
        titleKey: "Corporate Information",
        noCountrySelector: !0
      })
    }
  }
]);