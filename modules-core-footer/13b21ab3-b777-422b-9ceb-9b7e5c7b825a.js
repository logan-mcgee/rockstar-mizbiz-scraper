! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "13b21ab3-b777-422b-9ceb-9b7e5c7b825a", e._sentryDebugIdIdentifier = "sentry-dbid-13b21ab3-b777-422b-9ceb-9b7e5c7b825a")
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
  [2347], {
    483: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var o = String(e),
              l = o.split(/[ce]/),
              n = l[1] || 0,
              t = String(n ? Number(l[0]) * Math.pow(10, n) : o).split("."),
              d = t[0],
              r = !t[1],
              s = d.slice(-6);
            return a ? "other" : 1 == e ? "one" : 0 == n && 0 != d && 0 == s && r || n < 0 || n > 5 ? "many" : "other"
          }
        },
        locale: "es"
      })
    }
  }
]);