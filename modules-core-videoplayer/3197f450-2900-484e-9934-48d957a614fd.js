! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3197f450-2900-484e-9934-48d957a614fd", e._sentryDebugIdIdentifier = "sentry-dbid-3197f450-2900-484e-9934-48d957a614fd")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [2347], {
    18410: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var l = String(e),
              o = l.split(/[ce]/),
              d = o[1] || 0,
              n = String(d ? Number(o[0]) * Math.pow(10, d) : l).split("."),
              t = n[0],
              r = !n[1],
              s = t.slice(-6);
            return a ? "other" : 1 == e ? "one" : 0 == d && 0 != t && 0 == s && r || d < 0 || d > 5 ? "many" : "other"
          }
        },
        locale: "es"
      })
    }
  }
]);