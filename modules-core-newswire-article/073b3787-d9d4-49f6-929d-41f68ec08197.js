! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "073b3787-d9d4-49f6-929d-41f68ec08197", e._sentryDebugIdIdentifier = "sentry-dbid-073b3787-d9d4-49f6-929d-41f68ec08197")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
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
              d = l[0],
              n = !l[1],
              o = d.slice(-1),
              t = d.slice(-2);
            return a ? "other" : 1 == e && n ? "one" : n && o >= 2 && o <= 4 && (t < 12 || t > 14) ? "few" : n && 1 != d && (0 == o || 1 == o) || n && o >= 5 && o <= 9 || n && t >= 12 && t <= 14 ? "many" : "other"
          }
        },
        locale: "pl"
      })
    }
  }
]);