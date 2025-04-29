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
              d = o[0],
              l = !o[1],
              n = d.slice(-1),
              t = d.slice(-2);
            return a ? "other" : l && 1 == n && 11 != t ? "one" : l && n >= 2 && n <= 4 && (t < 12 || t > 14) ? "few" : l && 0 == n || l && n >= 5 && n <= 9 || l && t >= 11 && t <= 14 ? "many" : "other"
          }
        },
        locale: "ru"
      })
    }
  }
]);