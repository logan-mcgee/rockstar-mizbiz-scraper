try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "34c98071-efda-43f4-b1c9-8c15803604cf", e._sentryDebugIdIdentifier = "sentry-dbid-34c98071-efda-43f4-b1c9-8c15803604cf")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [8755], {
    80155: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, d) {
            var a = String(e),
              o = a.split(/[ce]/),
              t = o[1] || 0,
              n = String(t ? Number(o[0]) * Math.pow(10, t) : a).split("."),
              l = n[0],
              s = !n[1],
              f = l.slice(-6);
            return d ? "other" : 0 == l || 1 == l ? "one" : 0 == t && 0 != l && 0 == f && s || t < 0 || t > 5 ? "many" : "other"
          }
        },
        locale: "pt"
      })
    }
  }
]);