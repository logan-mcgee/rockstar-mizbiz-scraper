! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0c17b481-dd78-4825-a713-59f88ec25702", e._sentryDebugIdIdentifier = "sentry-dbid-0c17b481-dd78-4825-a713-59f88ec25702")
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
  [6401], {
    46401: (e, a, d) => {
      d.r(a), d.d(a, {
        default: () => n
      });
      var t = d(6274),
        s = d(73855);
      const n = () => (0, s.jsx)(t.A, {
        jsonType: "ccpa",
        titleKey: "ccpa-title",
        noCountrySelector: !0
      })
    }
  }
]);