! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "c1dce714-ba78-45e0-8c97-635599350424", e._sentryDebugIdIdentifier = "sentry-dbid-c1dce714-ba78-45e0-8c97-635599350424")
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
    40363: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "other"],
            ordinal: ["one", "two", "few", "other"]
          },
          fn: function(e, o) {
            var a = String(e).split("."),
              d = !a[1],
              l = Number(a[0]) == e,
              n = l && a[0].slice(-1),
              t = l && a[0].slice(-2);
            return o ? 1 == n && 11 != t ? "one" : 2 == n && 12 != t ? "two" : 3 == n && 13 != t ? "few" : "other" : 1 == e && d ? "one" : "other"
          }
        },
        locale: "en"
      })
    }
  }
]);