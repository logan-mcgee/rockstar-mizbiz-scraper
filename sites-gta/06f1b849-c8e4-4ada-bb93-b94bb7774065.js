! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "06f1b849-c8e4-4ada-bb93-b94bb7774065", e._sentryDebugIdIdentifier = "sentry-dbid-06f1b849-c8e4-4ada-bb93-b94bb7774065")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [2864], {
    9927: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "few", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var t = String(e).split("."),
              n = t[0],
              l = !t[1],
              d = n.slice(-1),
              o = n.slice(-2);
            return a ? "other" : l && 1 == d && 11 != o ? "one" : l && d >= 2 && d <= 4 && (o < 12 || o > 14) ? "few" : l && 0 == d || l && d >= 5 && d <= 9 || l && o >= 11 && o <= 14 ? "many" : "other"
          }
        },
        locale: "ru"
      })
    }
  }
]);