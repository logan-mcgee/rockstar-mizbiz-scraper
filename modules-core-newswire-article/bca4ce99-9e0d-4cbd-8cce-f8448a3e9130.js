! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bca4ce99-9e0d-4cbd-8cce-f8448a3e9130", e._sentryDebugIdIdentifier = "sentry-dbid-bca4ce99-9e0d-4cbd-8cce-f8448a3e9130")
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
    21116: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var l = String(e),
              d = l.split(/[ce]/),
              n = d[1] || 0,
              t = String(n ? Number(d[0]) * Math.pow(10, n) : l).split("."),
              o = t[0],
              r = !t[1],
              s = o.slice(-6);
            return a ? "other" : 0 == o || 1 == o ? "one" : 0 == n && 0 != o && 0 == s && r || n < 0 || n > 5 ? "many" : "other"
          }
        },
        locale: "pt"
      })
    }
  }
]);