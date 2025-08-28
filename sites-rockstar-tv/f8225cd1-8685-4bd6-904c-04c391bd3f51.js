try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f8225cd1-8685-4bd6-904c-04c391bd3f51", e._sentryDebugIdIdentifier = "sentry-dbid-f8225cd1-8685-4bd6-904c-04c391bd3f51")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/sites-rockstar-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [131], {
    9767: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["one", "other"]
          },
          fn: function(e, a) {
            var t = String(e),
              d = t.split(/[ce]/),
              n = d[1] || 0,
              o = String(n ? Number(d[0]) * Math.pow(10, n) : t).split("."),
              l = o[0],
              s = !o[1],
              r = l.slice(-6);
            return a ? 1 == e ? "one" : "other" : e >= 0 && e < 2 ? "one" : 0 == n && 0 != l && 0 == r && s || n < 0 || n > 5 ? "many" : "other"
          }
        },
        locale: "fr"
      })
    }
  }
]);