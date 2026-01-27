try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "255bab8b-34eb-4125-84ee-5aa590b4c846", e._sentryDebugIdIdentifier = "sentry-dbid-255bab8b-34eb-4125-84ee-5aa590b4c846")
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
    63155: (e, a, d) => {
      d.d(a, {
        N: () => n
      });
      var t = d(71127),
        n = globalThis?.document ? t.useLayoutEffect : () => {}
    },
    86126: (e, a, d) => {
      var t;
      d.r(a), d.d(a, {
        useId: () => l
      });
      var n = d(71127),
        o = d(63155),
        s = (t || (t = d.t(n, 2)))[" useId ".trim().toString()] || (() => {}),
        f = 0;

      function l(e) {
        const [a, d] = n.useState(s());
        return (0, o.N)(() => {
          e || d(e => e ?? String(f++))
        }, [e]), e || (a ? `radix-${a}` : "")
      }
    }
  }
]);