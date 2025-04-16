! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9ac577f4-fb0c-4f9e-ac02-ebb42fc53aa3", e._sentryDebugIdIdentifier = "sentry-dbid-9ac577f4-fb0c-4f9e-ac02-ebb42fc53aa3")
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
  [2864], {
    19927: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "few", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var l = String(e).split("."),
              n = l[0],
              o = !l[1],
              t = n.slice(-1),
              d = n.slice(-2);
            return a ? "other" : o && 1 == t && 11 != d ? "one" : o && t >= 2 && t <= 4 && (d < 12 || d > 14) ? "few" : o && 0 == t || o && t >= 5 && t <= 9 || o && d >= 11 && d <= 14 ? "many" : "other"
          }
        },
        locale: "ru"
      })
    }
  }
]);