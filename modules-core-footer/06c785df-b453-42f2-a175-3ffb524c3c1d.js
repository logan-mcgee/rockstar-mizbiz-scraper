try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "06c785df-b453-42f2-a175-3ffb524c3c1d", e._sentryDebugIdIdentifier = "sentry-dbid-06c785df-b453-42f2-a175-3ffb524c3c1d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [2171], {
    79682: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "few", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, d) {
            var a = String(e).split("."),
              o = a[0],
              n = !a[1],
              t = o.slice(-1),
              l = o.slice(-2);
            return d ? "other" : 1 == e && n ? "one" : n && t >= 2 && t <= 4 && (l < 12 || l > 14) ? "few" : n && 1 != o && (0 == t || 1 == t) || n && t >= 5 && t <= 9 || n && l >= 12 && l <= 14 ? "many" : "other"
          }
        },
        locale: "pl"
      })
    }
  }
]);