try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "227ef5f1-80d2-46a2-9ec1-8acff662a8c0", e._sentryDebugIdIdentifier = "sentry-dbid-227ef5f1-80d2-46a2-9ec1-8acff662a8c0")
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
  [2823], {
    2823(e, a, d) {
      d.r(a), d.d(a, {
        Portal: () => l,
        Root: () => r
      });
      var o = d(4637),
        t = d(84017),
        n = d(66704),
        f = d(86627),
        s = d(39793),
        l = o.forwardRef((e, a) => {
          const {
            container: d,
            ...l
          } = e, [r, i] = o.useState(!1);
          (0, f.N)(() => i(!0), []);
          const b = d || r && globalThis?.document?.body;
          return b ? t.createPortal((0, s.jsx)(n.sG.div, {
            ...l,
            ref: a
          }), b) : null
        });
      l.displayName = "Portal";
      var r = l
    }
  }
]);