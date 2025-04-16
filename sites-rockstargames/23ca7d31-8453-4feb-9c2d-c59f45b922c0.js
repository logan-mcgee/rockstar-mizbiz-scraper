! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "23ca7d31-8453-4feb-9c2d-c59f45b922c0", e._sentryDebugIdIdentifier = "sentry-dbid-23ca7d31-8453-4feb-9c2d-c59f45b922c0")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1822], {
    44077: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "other"],
            ordinal: ["one", "two", "few", "other"]
          },
          fn: function(e, a) {
            var t = String(e).split("."),
              n = !t[1],
              o = Number(t[0]) == e,
              l = o && t[0].slice(-1),
              d = o && t[0].slice(-2);
            return a ? 1 == l && 11 != d ? "one" : 2 == l && 12 != d ? "two" : 3 == l && 13 != d ? "few" : "other" : 1 == e && n ? "one" : "other"
          }
        },
        locale: "en"
      })
    }
  }
]);