! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e2499840-6a6a-4199-a85c-55db55b207a8", e._sentryDebugIdIdentifier = "sentry-dbid-e2499840-6a6a-4199-a85c-55db55b207a8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [2864], {
    8509: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "few", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var t = String(e).split("."),
              n = t[0],
              d = !t[1],
              l = n.slice(-1),
              o = n.slice(-2);
            return a ? "other" : d && 1 == l && 11 != o ? "one" : d && l >= 2 && l <= 4 && (o < 12 || o > 14) ? "few" : d && 0 == l || d && l >= 5 && l <= 9 || d && o >= 11 && o <= 14 ? "many" : "other"
          }
        },
        locale: "ru"
      })
    }
  }
]);