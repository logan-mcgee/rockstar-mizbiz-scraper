! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9a6aad17-741a-41f7-baba-c25c2fc4bcc8", e._sentryDebugIdIdentifier = "sentry-dbid-9a6aad17-741a-41f7-baba-c25c2fc4bcc8")
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
  [8272], {
    7079: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["many", "other"]
          },
          fn: function(e, a) {
            var d = String(e),
              n = d.split(/[ce]/),
              l = n[1] || 0,
              o = String(l ? Number(n[0]) * Math.pow(10, l) : d).split("."),
              t = o[0],
              r = !o[1],
              c = t.slice(-6);
            return a ? 11 == e || 8 == e || 80 == e || 800 == e ? "many" : "other" : 1 == e && r ? "one" : 0 == l && 0 != t && 0 == c && r || l < 0 || l > 5 ? "many" : "other"
          }
        },
        locale: "it"
      })
    }
  }
]);