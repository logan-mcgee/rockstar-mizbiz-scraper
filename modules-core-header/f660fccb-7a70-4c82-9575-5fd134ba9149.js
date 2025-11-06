try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f660fccb-7a70-4c82-9575-5fd134ba9149", e._sentryDebugIdIdentifier = "sentry-dbid-f660fccb-7a70-4c82-9575-5fd134ba9149")
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
  [9735], {
    52116: (e, a, d) => {
      d.r(a), d.d(a, {
        Portal: () => r,
        Root: () => f
      });
      var o = d(71127),
        t = d(18429),
        n = d(12255),
        s = d(63155),
        l = d(42295),
        r = o.forwardRef(((e, a) => {
          const {
            container: d,
            ...r
          } = e, [f, c] = o.useState(!1);
          (0, s.N)((() => c(!0)), []);
          const i = d || f && globalThis?.document?.body;
          return i ? t.createPortal((0, l.jsx)(n.sG.div, {
            ...r,
            ref: a
          }), i) : null
        }));
      r.displayName = "Portal";
      var f = r
    }
  }
]);