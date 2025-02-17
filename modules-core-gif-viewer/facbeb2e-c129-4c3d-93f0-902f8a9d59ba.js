! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "facbeb2e-c129-4c3d-93f0-902f8a9d59ba", e._sentryDebugIdIdentifier = "sentry-dbid-facbeb2e-c129-4c3d-93f0-902f8a9d59ba")
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
  [2347], {
    2864: () => {
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
              d = String(o ? Number(n[0]) * Math.pow(10, o) : l).split("."),
              t = d[0],
              r = !d[1],
              f = t.slice(-6);
            return a ? "other" : 1 == e ? "one" : 0 == o && 0 != t && 0 == f && r || o < 0 || o > 5 ? "many" : "other"
          }
        },
        locale: "es"
      })
    }
  }
]);