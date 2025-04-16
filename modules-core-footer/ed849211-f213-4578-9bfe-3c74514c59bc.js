! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ed849211-f213-4578-9bfe-3c74514c59bc", e._sentryDebugIdIdentifier = "sentry-dbid-ed849211-f213-4578-9bfe-3c74514c59bc")
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
  [2864], {
    19927: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "few", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var o = String(e).split("."),
              l = o[0],
              n = !o[1],
              t = l.slice(-1),
              d = l.slice(-2);
            return a ? "other" : n && 1 == t && 11 != d ? "one" : n && t >= 2 && t <= 4 && (d < 12 || d > 14) ? "few" : n && 0 == t || n && t >= 5 && t <= 9 || n && d >= 11 && d <= 14 ? "many" : "other"
          }
        },
        locale: "ru"
      })
    }
  }
]);