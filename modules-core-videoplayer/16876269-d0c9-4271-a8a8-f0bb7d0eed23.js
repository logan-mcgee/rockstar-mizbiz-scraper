! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "16876269-d0c9-4271-a8a8-f0bb7d0eed23", e._sentryDebugIdIdentifier = "sentry-dbid-16876269-d0c9-4271-a8a8-f0bb7d0eed23")
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
  [1822], {
    44077: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "other"],
            ordinal: ["one", "two", "few", "other"]
          },
          fn: function(e, a) {
            var d = String(e).split("."),
              o = !d[1],
              l = Number(d[0]) == e,
              n = l && d[0].slice(-1),
              t = l && d[0].slice(-2);
            return a ? 1 == n && 11 != t ? "one" : 2 == n && 12 != t ? "two" : 3 == n && 13 != t ? "few" : "other" : 1 == e && o ? "one" : "other"
          }
        },
        locale: "en"
      })
    }
  }
]);