try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "8b8294e5-ddcb-4f06-af16-0e38c79318fd", e._sentryDebugIdIdentifier = "sentry-dbid-8b8294e5-ddcb-4f06-af16-0e38c79318fd")
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
  [3745, 6126], {
    63155: (e, d, a) => {
      a.d(d, {
        N: () => n
      });
      var t = a(71127),
        n = globalThis?.document ? t.useLayoutEffect : () => {}
    },
    86126: (e, d, a) => {
      var t;
      a.r(d), a.d(d, {
        useId: () => l
      });
      var n = a(71127),
        o = a(63155),
        s = (t || (t = a.t(n, 2)))[" useId ".trim().toString()] || (() => {}),
        f = 0;

      function l(e) {
        const [d, a] = n.useState(s());
        return (0, o.N)(() => {
          e || a(e => e ?? String(f++))
        }, [e]), e || (d ? `radix-${d}` : "")
      }
    }
  }
]);