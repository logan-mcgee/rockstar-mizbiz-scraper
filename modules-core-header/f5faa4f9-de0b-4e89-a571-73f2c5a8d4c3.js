try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f5faa4f9-de0b-4e89-a571-73f2c5a8d4c3", e._sentryDebugIdIdentifier = "sentry-dbid-f5faa4f9-de0b-4e89-a571-73f2c5a8d4c3")
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
  [4511], {
    34511(e, a, d) {
      d.r(a), d.d(a, {
        Portal: () => f,
        Root: () => r
      });
      var o = d(71127),
        t = d(18429),
        n = d(78004),
        s = d(63155),
        l = d(42295),
        f = o.forwardRef((e, a) => {
          const {
            container: d,
            ...f
          } = e, [r, b] = o.useState(!1);
          (0, s.N)(() => b(!0), []);
          const i = d || r && globalThis?.document?.body;
          return i ? t.createPortal((0, l.jsx)(n.sG.div, {
            ...f,
            ref: a
          }), i) : null
        });
      f.displayName = "Portal";
      var r = f
    }
  }
]);