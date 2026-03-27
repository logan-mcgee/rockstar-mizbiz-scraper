try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f3f15123-46f3-4e21-83cb-d97ffeb5939c", e._sentryDebugIdIdentifier = "sentry-dbid-f3f15123-46f3-4e21-83cb-d97ffeb5939c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160",
    packageName: "@rockstargames/account-management"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunkaccount_management = self.webpackChunkaccount_management || []).push([
  [2171], {
    92165: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "few", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var n = String(e).split("."),
              t = n[0],
              d = !n[1],
              l = t.slice(-1),
              f = t.slice(-2);
            return a ? "other" : 1 == e && d ? "one" : d && l >= 2 && l <= 4 && (f < 12 || f > 14) ? "few" : d && 1 != t && (0 == l || 1 == l) || d && l >= 5 && l <= 9 || d && f >= 12 && f <= 14 ? "many" : "other"
          }
        },
        locale: "pl"
      })
    }
  }
]);