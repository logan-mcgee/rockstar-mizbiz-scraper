try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "7b0d64ab-061a-4b3b-9610-e56d8319b0da", e._sentryDebugIdIdentifier = "sentry-dbid-7b0d64ab-061a-4b3b-9610-e56d8319b0da")
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
    94296(e, d, a) {
      let t;
      a.r(d), a.d(d, {
        useId: () => r
      });
      var n = a(4637),
        o = a(10198),
        s = (t || (t = a.t(n, 2)))[" useId ".trim().toString()] || (() => {}),
        l = 0;

      function r(e) {
        const [d, a] = n.useState(s());
        return (0, o.N)(() => {
          e || a(e => e ?? String(l++))
        }, [e]), e || (d ? `radix-${d}` : "")
      }
    },
    10198(e, d, a) {
      a.d(d, {
        N: () => n
      });
      var t = a(4637),
        n = globalThis?.document ? t.useLayoutEffect : () => {}
    }
  }
]);