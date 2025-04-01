! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2fc28144-ae24-479a-a1f2-ca328772487a", e._sentryDebugIdIdentifier = "sentry-dbid-2fc28144-ae24-479a-a1f2-ca328772487a")
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
  [8755], {
    63602: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var l = String(e),
              n = l.split(/[ce]/),
              t = n[1] || 0,
              o = String(t ? Number(n[0]) * Math.pow(10, t) : l).split("."),
              d = o[0],
              r = !o[1],
              s = d.slice(-6);
            return a ? "other" : 0 == d || 1 == d ? "one" : 0 == t && 0 != d && 0 == s && r || t < 0 || t > 5 ? "many" : "other"
          }
        },
        locale: "pt"
      })
    }
  }
]);