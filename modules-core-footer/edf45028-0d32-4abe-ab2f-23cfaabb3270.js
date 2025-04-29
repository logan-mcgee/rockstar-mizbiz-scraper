! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "edf45028-0d32-4abe-ab2f-23cfaabb3270", e._sentryDebugIdIdentifier = "sentry-dbid-edf45028-0d32-4abe-ab2f-23cfaabb3270")
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
    18410: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var o = String(e),
              d = o.split(/[ce]/),
              l = d[1] || 0,
              n = String(l ? Number(d[0]) * Math.pow(10, l) : o).split("."),
              t = n[0],
              f = !n[1],
              r = t.slice(-6);
            return a ? "other" : 1 == e ? "one" : 0 == l && 0 != t && 0 == r && f || l < 0 || l > 5 ? "many" : "other"
          }
        },
        locale: "es"
      })
    }
  }
]);