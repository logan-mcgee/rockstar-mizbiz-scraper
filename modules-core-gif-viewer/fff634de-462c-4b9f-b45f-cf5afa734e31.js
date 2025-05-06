! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fff634de-462c-4b9f-b45f-cf5afa734e31", e._sentryDebugIdIdentifier = "sentry-dbid-fff634de-462c-4b9f-b45f-cf5afa734e31")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-gif-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [8755], {
    3602: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var l = String(e),
              f = l.split(/[ce]/),
              n = f[1] || 0,
              o = String(n ? Number(f[0]) * Math.pow(10, n) : l).split("."),
              d = o[0],
              t = !o[1],
              r = d.slice(-6);
            return a ? "other" : 0 == d || 1 == d ? "one" : 0 == n && 0 != d && 0 == r && t || n < 0 || n > 5 ? "many" : "other"
          }
        },
        locale: "pt"
      })
    }
  }
]);