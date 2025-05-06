! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4e63d938-2dee-445f-b22c-bdc19cd3bdcd", e._sentryDebugIdIdentifier = "sentry-dbid-4e63d938-2dee-445f-b22c-bdc19cd3bdcd")
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
  [2347], {
    8410: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var d = String(e),
              n = d.split(/[ce]/),
              t = n[1] || 0,
              l = String(t ? Number(n[0]) * Math.pow(10, t) : d).split("."),
              o = l[0],
              s = !l[1],
              r = o.slice(-6);
            return a ? "other" : 1 == e ? "one" : 0 == t && 0 != o && 0 == r && s || t < 0 || t > 5 ? "many" : "other"
          }
        },
        locale: "es"
      })
    }
  }
]);