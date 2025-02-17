! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6531dc0b-2b04-4956-aaf0-6216c42e8a8e", e._sentryDebugIdIdentifier = "sentry-dbid-6531dc0b-2b04-4956-aaf0-6216c42e8a8e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [2864], {
    38509: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "few", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var l = String(e).split("."),
              o = l[0],
              d = !l[1],
              n = o.slice(-1),
              t = o.slice(-2);
            return a ? "other" : d && 1 == n && 11 != t ? "one" : d && n >= 2 && n <= 4 && (t < 12 || t > 14) ? "few" : d && 0 == n || d && n >= 5 && n <= 9 || d && t >= 11 && t <= 14 ? "many" : "other"
          }
        },
        locale: "ru"
      })
    }
  }
]);