! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ea3d2312-2dc0-4d43-86a7-e6e35f33de9c", e._sentryDebugIdIdentifier = "sentry-dbid-ea3d2312-2dc0-4d43-86a7-e6e35f33de9c")
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
  [4841], {
    54841: (e, a, d) => {
      d.r(a), d.d(a, {
        default: () => n
      });
      var s = d(6274),
        t = d(73855);
      const n = () => (0, t.jsx)(s.A, {
        jsonType: "sk-privacy-addendum",
        metaUrlOverride: "south-korean-privacy-addendum",
        titleKey: "Addendum Applicable to Users in South Korea",
        noCountrySelector: !0
      })
    }
  }
]);