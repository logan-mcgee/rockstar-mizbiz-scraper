try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "227ef5f1-80d2-46a2-9ec1-8acff662a8c0", e._sentryDebugIdIdentifier = "sentry-dbid-227ef5f1-80d2-46a2-9ec1-8acff662a8c0")
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
    2823(e, d, a) {
      a.r(d), a.d(d, {
        Portal: () => f,
        Root: () => r
      });
      var o = a(4637),
        t = a(84017),
        n = a(66704),
        s = a(86627),
        l = a(39793),
        f = o.forwardRef((e, d) => {
          const {
            container: a,
            ...f
          } = e, [r, i] = o.useState(!1);
          (0, s.N)(() => i(!0), []);
          const c = a || r && globalThis?.document?.body;
          return c ? t.createPortal((0, l.jsx)(n.sG.div, {
            ...f,
            ref: d
          }), c) : null
        });
      f.displayName = "Portal";
      var r = f
    }
  }
]);