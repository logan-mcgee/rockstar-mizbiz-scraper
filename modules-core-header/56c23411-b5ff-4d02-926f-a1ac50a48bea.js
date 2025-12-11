try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "56c23411-b5ff-4d02-926f-a1ac50a48bea", e._sentryDebugIdIdentifier = "sentry-dbid-56c23411-b5ff-4d02-926f-a1ac50a48bea")
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
  [7896], {
    65515: (e, a, d) => {
      d.r(a), d.d(a, {
        Portal: () => l,
        Root: () => r
      });
      var o = d(71127),
        t = d(18429),
        n = d(23846),
        s = d(63155),
        f = d(42295),
        l = o.forwardRef((e, a) => {
          const {
            container: d,
            ...l
          } = e, [r, i] = o.useState(!1);
          (0, s.N)(() => i(!0), []);
          const b = d || r && globalThis?.document?.body;
          return b ? t.createPortal((0, f.jsx)(n.sG.div, {
            ...l,
            ref: a
          }), b) : null
        });
      l.displayName = "Portal";
      var r = l
    }
  }
]);