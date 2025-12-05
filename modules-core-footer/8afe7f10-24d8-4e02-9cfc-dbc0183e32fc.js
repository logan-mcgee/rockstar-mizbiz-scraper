try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "8afe7f10-24d8-4e02-9cfc-dbc0183e32fc", e._sentryDebugIdIdentifier = "sentry-dbid-8afe7f10-24d8-4e02-9cfc-dbc0183e32fc")
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
  [131], {
    36170: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["one", "other"]
          },
          fn: function(e, o) {
            var a = String(e),
              n = a.split(/[ce]/),
              t = n[1] || 0,
              d = String(t ? Number(n[0]) * Math.pow(10, t) : a).split("."),
              l = d[0],
              f = !d[1],
              s = l.slice(-6);
            return o ? 1 == e ? "one" : "other" : e >= 0 && e < 2 ? "one" : 0 == t && 0 != l && 0 == s && f || t < 0 || t > 5 ? "many" : "other"
          }
        },
        locale: "fr"
      })
    }
  }
]);