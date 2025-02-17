! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "973fd48d-f742-4bf4-84ca-77ca8e15cbca", e._sentryDebugIdIdentifier = "sentry-dbid-973fd48d-f742-4bf4-84ca-77ca8e15cbca")
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
  [1822], {
    363: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "other"],
            ordinal: ["one", "two", "few", "other"]
          },
          fn: function(e, a) {
            var o = String(e).split("."),
              l = !o[1],
              n = Number(o[0]) == e,
              d = n && o[0].slice(-1),
              t = n && o[0].slice(-2);
            return a ? 1 == d && 11 != t ? "one" : 2 == d && 12 != t ? "two" : 3 == d && 13 != t ? "few" : "other" : 1 == e && l ? "one" : "other"
          }
        },
        locale: "en"
      })
    }
  }
]);