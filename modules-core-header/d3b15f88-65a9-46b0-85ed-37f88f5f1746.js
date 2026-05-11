try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d3b15f88-65a9-46b0-85ed-37f88f5f1746", e._sentryDebugIdIdentifier = "sentry-dbid-d3b15f88-65a9-46b0-85ed-37f88f5f1746")
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
  [2202], {
    2202(e, d, a) {
      a.r(d), a.d(d, {
        Portal: () => f,
        Root: () => r
      });
      var o = a(71127),
        t = a(18429),
        n = a(78004),
        s = a(63155),
        l = a(42295),
        f = o.forwardRef((e, d) => {
          const {
            container: a,
            ...f
          } = e, [r, b] = o.useState(!1);
          (0, s.N)(() => b(!0), []);
          const i = a || r && globalThis?.document?.body;
          return i ? t.createPortal((0, l.jsx)(n.sG.div, {
            ...f,
            ref: d
          }), i) : null
        });
      f.displayName = "Portal";
      var r = f
    }
  }
]);