! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4e9bad57-f6d0-4ee2-933e-defb4e647496", e._sentryDebugIdIdentifier = "sentry-dbid-4e9bad57-f6d0-4ee2-933e-defb4e647496")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [2171], {
    51572: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "few", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var d = String(e).split("."),
              o = d[0],
              l = !d[1],
              n = o.slice(-1),
              t = o.slice(-2);
            return a ? "other" : 1 == e && l ? "one" : l && n >= 2 && n <= 4 && (t < 12 || t > 14) ? "few" : l && 1 != o && (0 == n || 1 == n) || l && n >= 5 && n <= 9 || l && t >= 12 && t <= 14 ? "many" : "other"
          }
        },
        locale: "pl"
      })
    }
  }
]);