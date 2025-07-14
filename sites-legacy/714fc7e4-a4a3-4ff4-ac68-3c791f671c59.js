try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "714fc7e4-a4a3-4ff4-ac68-3c791f671c59", e._sentryDebugIdIdentifier = "sentry-dbid-714fc7e4-a4a3-4ff4-ac68-3c791f671c59")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [8272], {
    79802: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["many", "other"]
          },
          fn: function(e, a) {
            var t = String(e),
              n = t.split(/[ce]/),
              l = n[1] || 0,
              d = String(l ? Number(n[0]) * Math.pow(10, l) : t).split("."),
              o = d[0],
              s = !d[1],
              f = o.slice(-6);
            return a ? 11 == e || 8 == e || 80 == e || 800 == e ? "many" : "other" : 1 == e && s ? "one" : 0 == l && 0 != o && 0 == f && s || l < 0 || l > 5 ? "many" : "other"
          }
        },
        locale: "it"
      })
    }
  }
]);