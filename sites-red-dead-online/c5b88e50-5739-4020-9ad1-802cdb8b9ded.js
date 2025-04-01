! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c5b88e50-5739-4020-9ad1-802cdb8b9ded", e._sentryDebugIdIdentifier = "sentry-dbid-c5b88e50-5739-4020-9ad1-802cdb8b9ded")
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
  [2171], {
    43130: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "few", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var d = String(e).split("."),
              n = d[0],
              l = !d[1],
              t = n.slice(-1),
              o = n.slice(-2);
            return a ? "other" : 1 == e && l ? "one" : l && t >= 2 && t <= 4 && (o < 12 || o > 14) ? "few" : l && 1 != n && (0 == t || 1 == t) || l && t >= 5 && t <= 9 || l && o >= 12 && o <= 14 ? "many" : "other"
          }
        },
        locale: "pl"
      })
    }
  }
]);