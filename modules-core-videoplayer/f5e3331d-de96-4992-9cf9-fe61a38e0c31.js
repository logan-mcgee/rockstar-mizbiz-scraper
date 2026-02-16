try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "f5e3331d-de96-4992-9cf9-fe61a38e0c31", e._sentryDebugIdIdentifier = "sentry-dbid-f5e3331d-de96-4992-9cf9-fe61a38e0c31")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [2171], {
    9682: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "few", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, d) {
            var a = String(e).split("."),
              l = a[0],
              n = !a[1],
              o = l.slice(-1),
              t = l.slice(-2);
            return d ? "other" : 1 == e && n ? "one" : n && o >= 2 && o <= 4 && (t < 12 || t > 14) ? "few" : n && 1 != l && (0 == o || 1 == o) || n && o >= 5 && o <= 9 || n && t >= 12 && t <= 14 ? "many" : "other"
          }
        },
        locale: "pl"
      })
    }
  }
]);