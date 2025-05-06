! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f05729e4-3300-4ec9-9672-21df54f185cd", e._sentryDebugIdIdentifier = "sentry-dbid-f05729e4-3300-4ec9-9672-21df54f185cd")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-trilogy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [1822], {
    4077: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "other"],
            ordinal: ["one", "two", "few", "other"]
          },
          fn: function(e, a) {
            var t = String(e).split("."),
              l = !t[1],
              d = Number(t[0]) == e,
              n = d && t[0].slice(-1),
              o = d && t[0].slice(-2);
            return a ? 1 == n && 11 != o ? "one" : 2 == n && 12 != o ? "two" : 3 == n && 13 != o ? "few" : "other" : 1 == e && l ? "one" : "other"
          }
        },
        locale: "en"
      })
    }
  }
]);