! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b15e63bf-413b-4a33-a7b6-cd72434dad2b", e._sentryDebugIdIdentifier = "sentry-dbid-b15e63bf-413b-4a33-a7b6-cd72434dad2b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [2171], {
    43130: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "few", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var l = String(e).split("."),
              n = l[0],
              t = !l[1],
              d = n.slice(-1),
              o = n.slice(-2);
            return a ? "other" : 1 == e && t ? "one" : t && d >= 2 && d <= 4 && (o < 12 || o > 14) ? "few" : t && 1 != n && (0 == d || 1 == d) || t && d >= 5 && d <= 9 || t && o >= 12 && o <= 14 ? "many" : "other"
          }
        },
        locale: "pl"
      })
    }
  }
]);