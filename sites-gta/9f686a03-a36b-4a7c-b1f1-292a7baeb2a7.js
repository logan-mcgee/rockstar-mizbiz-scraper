! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9f686a03-a36b-4a7c-b1f1-292a7baeb2a7", e._sentryDebugIdIdentifier = "sentry-dbid-9f686a03-a36b-4a7c-b1f1-292a7baeb2a7")
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
  [2171], {
    3130: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "few", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var t = String(e).split("."),
              l = t[0],
              n = !t[1],
              o = l.slice(-1),
              d = l.slice(-2);
            return a ? "other" : 1 == e && n ? "one" : n && o >= 2 && o <= 4 && (d < 12 || d > 14) ? "few" : n && 1 != l && (0 == o || 1 == o) || n && o >= 5 && o <= 9 || n && d >= 12 && d <= 14 ? "many" : "other"
          }
        },
        locale: "pl"
      })
    }
  }
]);