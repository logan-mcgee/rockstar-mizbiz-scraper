try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "28cc6302-d781-4828-b929-6bd5f83bde18", e._sentryDebugIdIdentifier = "sentry-dbid-28cc6302-d781-4828-b929-6bd5f83bde18")
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
  [8272], {
    5583: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["many", "other"]
          },
          fn: function(e, a) {
            var d = String(e),
              t = d.split(/[ce]/),
              n = t[1] || 0,
              l = String(n ? Number(t[0]) * Math.pow(10, n) : d).split("."),
              s = l[0],
              o = !l[1],
              r = s.slice(-6);
            return a ? 11 == e || 8 == e || 80 == e || 800 == e ? "many" : "other" : 1 == e && o ? "one" : 0 == n && 0 != s && 0 == r && o || n < 0 || n > 5 ? "many" : "other"
          }
        },
        locale: "it"
      })
    }
  }
]);