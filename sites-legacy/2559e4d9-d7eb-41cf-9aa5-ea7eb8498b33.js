try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2559e4d9-d7eb-41cf-9aa5-ea7eb8498b33", e._sentryDebugIdIdentifier = "sentry-dbid-2559e4d9-d7eb-41cf-9aa5-ea7eb8498b33")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [2864], {
    41007: () => {
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
              o = t.slice(-2);
            return a ? "other" : d && 1 == l && 11 != o ? "one" : d && l >= 2 && l <= 4 && (o < 12 || o > 14) ? "few" : d && 0 == l || d && l >= 5 && l <= 9 || d && o >= 11 && o <= 14 ? "many" : "other"
          }
        },
        locale: "ru"
      })
    }
  }
]);