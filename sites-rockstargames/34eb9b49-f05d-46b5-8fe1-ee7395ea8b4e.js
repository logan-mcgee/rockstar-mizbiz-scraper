try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "34eb9b49-f05d-46b5-8fe1-ee7395ea8b4e", e._sentryDebugIdIdentifier = "sentry-dbid-34eb9b49-f05d-46b5-8fe1-ee7395ea8b4e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8272], {
    45583: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["many", "other"]
          },
          fn: function(e, a) {
            var t = String(e),
              n = t.split(/[ce]/),
              d = n[1] || 0,
              s = String(d ? Number(n[0]) * Math.pow(10, d) : t).split("."),
              l = s[0],
              o = !s[1],
              f = l.slice(-6);
            return a ? 11 == e || 8 == e || 80 == e || 800 == e ? "many" : "other" : 1 == e && o ? "one" : 0 == d && 0 != l && 0 == f && o || d < 0 || d > 5 ? "many" : "other"
          }
        },
        locale: "it"
      })
    }
  }
]);