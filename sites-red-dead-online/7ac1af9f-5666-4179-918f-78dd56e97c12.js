! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "7ac1af9f-5666-4179-918f-78dd56e97c12", e._sentryDebugIdIdentifier = "sentry-dbid-7ac1af9f-5666-4179-918f-78dd56e97c12")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [131], {
    13778: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["one", "other"]
          },
          fn: function(e, d) {
            var a = String(e),
              n = a.split(/[ce]/),
              l = n[1] || 0,
              t = String(l ? Number(n[0]) * Math.pow(10, l) : a).split("."),
              o = t[0],
              r = !t[1],
              s = o.slice(-6);
            return d ? 1 == e ? "one" : "other" : e >= 0 && e < 2 ? "one" : 0 == l && 0 != o && 0 == s && r || l < 0 || l > 5 ? "many" : "other"
          }
        },
        locale: "fr"
      })
    }
  }
]);