! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0ed63725-5d92-4a4a-8d50-9885477cb800", e._sentryDebugIdIdentifier = "sentry-dbid-0ed63725-5d92-4a4a-8d50-9885477cb800")
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
  [2864], {
    9927: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "few", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var d = String(e).split("."),
              l = d[0],
              n = !d[1],
              o = l.slice(-1),
              t = l.slice(-2);
            return a ? "other" : n && 1 == o && 11 != t ? "one" : n && o >= 2 && o <= 4 && (t < 12 || t > 14) ? "few" : n && 0 == o || n && o >= 5 && o <= 9 || n && t >= 11 && t <= 14 ? "many" : "other"
          }
        },
        locale: "ru"
      })
    }
  }
]);