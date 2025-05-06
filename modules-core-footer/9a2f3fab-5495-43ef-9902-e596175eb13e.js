! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "9a2f3fab-5495-43ef-9902-e596175eb13e", e._sentryDebugIdIdentifier = "sentry-dbid-9a2f3fab-5495-43ef-9902-e596175eb13e")
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
    44077: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "other"],
            ordinal: ["one", "two", "few", "other"]
          },
          fn: function(e, o) {
            var a = String(e).split("."),
              l = !a[1],
              n = Number(a[0]) == e,
              d = n && a[0].slice(-1),
              t = n && a[0].slice(-2);
            return o ? 1 == d && 11 != t ? "one" : 2 == d && 12 != t ? "two" : 3 == d && 13 != t ? "few" : "other" : 1 == e && l ? "one" : "other"
          }
        },
        locale: "en"
      })
    }
  }
]);