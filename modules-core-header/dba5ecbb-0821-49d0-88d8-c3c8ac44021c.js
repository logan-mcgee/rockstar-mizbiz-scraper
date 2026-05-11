try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "dba5ecbb-0821-49d0-88d8-c3c8ac44021c", e._sentryDebugIdIdentifier = "sentry-dbid-dba5ecbb-0821-49d0-88d8-c3c8ac44021c")
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
    65515(e, d, a) {
      a.r(d), a.d(d, {
        Portal: () => r,
        Root: () => b
      });
      var o = a(71127),
        t = a(18429),
        n = a(78004),
        s = a(63155),
        l = a(42295),
        r = o.forwardRef((e, d) => {
          const {
            container: a,
            ...r
          } = e, [b, f] = o.useState(!1);
          (0, s.N)(() => f(!0), []);
          const c = a || b && globalThis?.document?.body;
          return c ? t.createPortal((0, l.jsx)(n.sG.div, {
            ...r,
            ref: d
          }), c) : null
        });
      r.displayName = "Portal";
      var b = r
    }
  }
]);