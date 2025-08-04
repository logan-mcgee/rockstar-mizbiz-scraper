try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "392eb694-0f6c-4e8f-a24e-a7902501040d", e._sentryDebugIdIdentifier = "sentry-dbid-392eb694-0f6c-4e8f-a24e-a7902501040d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-careers",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [8272], {
    5126: () => {
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