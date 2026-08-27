try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "1b6645f3-ca02-45e1-96bf-2389262c24d1", e._sentryDebugIdIdentifier = "sentry-dbid-1b6645f3-ca02-45e1-96bf-2389262c24d1")
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
  [6537, 8918], {
    88918(e, d, a) {
      let t;
      a.r(d), a.d(d, {
        useId: () => r
      });
      var n = a(4637),
        o = a(9608),
        s = Object.defineProperty,
        l = (t || (t = a.t(n, 2)))[" useId ".trim().toString()] || (() => {}),
        f = 0;

      function r(e) {
        const [d, a] = n.useState(l());
        return (0, o.N)(() => {
          e || a(e => e ?? String(f++))
        }, [e]), e || (d ? `radix-${d}` : "")
      }
      s(r, "name", {
        value: "useId",
        configurable: !0
      })
    },
    9608(e, d, a) {
      a.d(d, {
        N: () => n
      });
      var t = a(4637),
        n = globalThis?.document ? t.useLayoutEffect : () => {}
    }
  }
]);