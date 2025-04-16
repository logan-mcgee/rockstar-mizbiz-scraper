! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "746ac9b2-2c05-4705-a352-9b9539bca184", e._sentryDebugIdIdentifier = "sentry-dbid-746ac9b2-2c05-4705-a352-9b9539bca184")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [131], {
    3778: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["one", "other"]
          },
          fn: function(e, a) {
            var n = String(e),
              t = n.split(/[ce]/),
              l = t[1] || 0,
              o = String(l ? Number(t[0]) * Math.pow(10, l) : n).split("."),
              r = o[0],
              d = !o[1],
              s = r.slice(-6);
            return a ? 1 == e ? "one" : "other" : e >= 0 && e < 2 ? "one" : 0 == l && 0 != r && 0 == s && d || l < 0 || l > 5 ? "many" : "other"
          }
        },
        locale: "fr"
      })
    }
  }
]);