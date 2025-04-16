! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "16b154a4-093b-4148-a15f-446e63d01b02", e._sentryDebugIdIdentifier = "sentry-dbid-16b154a4-093b-4148-a15f-446e63d01b02")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [8755], {
    63602: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var o = String(e),
              l = o.split(/[ce]/),
              t = l[1] || 0,
              n = String(t ? Number(l[0]) * Math.pow(10, t) : o).split("."),
              d = n[0],
              r = !n[1],
              s = d.slice(-6);
            return a ? "other" : 0 == d || 1 == d ? "one" : 0 == t && 0 != d && 0 == s && r || t < 0 || t > 5 ? "many" : "other"
          }
        },
        locale: "pt"
      })
    }
  }
]);