try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2652c2ab-e2c5-40a0-85f5-13086f6bb4e4", e._sentryDebugIdIdentifier = "sentry-dbid-2652c2ab-e2c5-40a0-85f5-13086f6bb4e4")
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
  [8755], {
    56317: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var n = String(e),
              t = n.split(/[ce]/),
              l = t[1] || 0,
              o = String(l ? Number(t[0]) * Math.pow(10, l) : n).split("."),
              d = o[0],
              f = !o[1],
              s = d.slice(-6);
            return a ? "other" : 0 == d || 1 == d ? "one" : 0 == l && 0 != d && 0 == s && f || l < 0 || l > 5 ? "many" : "other"
          }
        },
        locale: "pt"
      })
    }
  }
]);