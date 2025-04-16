! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ed3e250d-8942-4c32-8c5f-0d1c5446dc0f", e._sentryDebugIdIdentifier = "sentry-dbid-ed3e250d-8942-4c32-8c5f-0d1c5446dc0f")
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
  [2171], {
    3130: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "few", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var l = String(e).split("."),
              n = l[0],
              d = !l[1],
              t = n.slice(-1),
              o = n.slice(-2);
            return a ? "other" : 1 == e && d ? "one" : d && t >= 2 && t <= 4 && (o < 12 || o > 14) ? "few" : d && 1 != n && (0 == t || 1 == t) || d && t >= 5 && t <= 9 || d && o >= 12 && o <= 14 ? "many" : "other"
          }
        },
        locale: "pl"
      })
    }
  }
]);