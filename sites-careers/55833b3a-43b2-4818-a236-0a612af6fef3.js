try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "55833b3a-43b2-4818-a236-0a612af6fef3", e._sentryDebugIdIdentifier = "sentry-dbid-55833b3a-43b2-4818-a236-0a612af6fef3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-careers",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [2171], {
    9682: () => {
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
              d = t.slice(-1),
              s = t.slice(-2);
            return a ? "other" : 1 == e && l ? "one" : l && d >= 2 && d <= 4 && (s < 12 || s > 14) ? "few" : l && 1 != t && (0 == d || 1 == d) || l && d >= 5 && d <= 9 || l && s >= 12 && s <= 14 ? "many" : "other"
          }
        },
        locale: "pl"
      })
    }
  }
]);