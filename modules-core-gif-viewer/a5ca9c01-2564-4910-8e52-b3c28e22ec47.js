! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a5ca9c01-2564-4910-8e52-b3c28e22ec47", e._sentryDebugIdIdentifier = "sentry-dbid-a5ca9c01-2564-4910-8e52-b3c28e22ec47")
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
    1116: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var l = String(e),
              n = l.split(/[ce]/),
              o = n[1] || 0,
              t = String(o ? Number(n[0]) * Math.pow(10, o) : l).split("."),
              d = t[0],
              r = !t[1],
              s = d.slice(-6);
            return a ? "other" : 0 == d || 1 == d ? "one" : 0 == o && 0 != d && 0 == s && r || o < 0 || o > 5 ? "many" : "other"
          }
        },
        locale: "pt"
      })
    }
  }
]);