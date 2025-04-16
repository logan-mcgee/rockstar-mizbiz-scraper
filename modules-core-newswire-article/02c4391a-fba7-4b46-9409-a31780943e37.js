! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "02c4391a-fba7-4b46-9409-a31780943e37", e._sentryDebugIdIdentifier = "sentry-dbid-02c4391a-fba7-4b46-9409-a31780943e37")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [131], {
    13778: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["one", "other"]
          },
          fn: function(e, a) {
            var n = String(e),
              l = n.split(/[ce]/),
              o = l[1] || 0,
              t = String(o ? Number(l[0]) * Math.pow(10, o) : n).split("."),
              r = t[0],
              d = !t[1],
              s = r.slice(-6);
            return a ? 1 == e ? "one" : "other" : e >= 0 && e < 2 ? "one" : 0 == o && 0 != r && 0 == s && d || o < 0 || o > 5 ? "many" : "other"
          }
        },
        locale: "fr"
      })
    }
  }
]);