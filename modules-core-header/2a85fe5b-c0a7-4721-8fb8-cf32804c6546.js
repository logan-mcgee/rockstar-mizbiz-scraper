try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "2a85fe5b-c0a7-4721-8fb8-cf32804c6546", e._sentryDebugIdIdentifier = "sentry-dbid-2a85fe5b-c0a7-4721-8fb8-cf32804c6546")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [1915, 4296], {
    94296(e, d, t) {
      let a;
      t.r(d), t.d(d, {
        useId: () => l
      });
      var n = t(4637),
        o = t(10198),
        s = (a || (a = t.t(n, 2)))[" useId ".trim().toString()] || (() => {}),
        f = 0;

      function l(e) {
        const [d, t] = n.useState(s());
        return (0, o.N)(() => {
          e || t(e => e ?? String(f++))
        }, [e]), e || (d ? `radix-${d}` : "")
      }
    },
    10198(e, d, t) {
      t.d(d, {
        N: () => n
      });
      var a = t(4637),
        n = globalThis?.document ? a.useLayoutEffect : () => {}
    }
  }
]);