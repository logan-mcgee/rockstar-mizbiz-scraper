try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ab116100-0e4e-45d1-9a70-9cada8b1b0a9", e._sentryDebugIdIdentifier = "sentry-dbid-ab116100-0e4e-45d1-9a70-9cada8b1b0a9")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [2864], {
    81790: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "few", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var d = String(e).split("."),
              o = d[0],
              n = !d[1],
              t = o.slice(-1),
              l = o.slice(-2);
            return a ? "other" : n && 1 == t && 11 != l ? "one" : n && t >= 2 && t <= 4 && (l < 12 || l > 14) ? "few" : n && 0 == t || n && t >= 5 && t <= 9 || n && l >= 11 && l <= 14 ? "many" : "other"
          }
        },
        locale: "ru"
      })
    }
  }
]);