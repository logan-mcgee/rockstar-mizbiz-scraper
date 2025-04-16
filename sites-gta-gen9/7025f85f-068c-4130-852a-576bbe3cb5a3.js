! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7025f85f-068c-4130-852a-576bbe3cb5a3", e._sentryDebugIdIdentifier = "sentry-dbid-7025f85f-068c-4130-852a-576bbe3cb5a3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2864], {
    19927: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "few", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var n = String(e).split("."),
              t = n[0],
              l = !n[1],
              o = t.slice(-1),
              d = t.slice(-2);
            return a ? "other" : l && 1 == o && 11 != d ? "one" : l && o >= 2 && o <= 4 && (d < 12 || d > 14) ? "few" : l && 0 == o || l && o >= 5 && o <= 9 || l && d >= 11 && d <= 14 ? "many" : "other"
          }
        },
        locale: "ru"
      })
    }
  }
]);