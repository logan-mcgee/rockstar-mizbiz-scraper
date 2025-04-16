! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "180d67ff-006b-4f8f-9f1f-980c99691f06", e._sentryDebugIdIdentifier = "sentry-dbid-180d67ff-006b-4f8f-9f1f-980c99691f06")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [8176], {
    95795: (e, a, d) => {
      d.r(a), d.d(a, {
        Portal: () => r,
        Root: () => s
      });
      var o = d(62229),
        f = d(44853),
        n = d(60286),
        t = d(92600),
        l = d(73855),
        r = o.forwardRef(((e, a) => {
          const {
            container: d,
            ...r
          } = e, [s, c] = o.useState(!1);
          (0, t.N)((() => c(!0)), []);
          const b = d || s && globalThis?.document?.body;
          return b ? f.createPortal((0, l.jsx)(n.sG.div, {
            ...r,
            ref: a
          }), b) : null
        }));
      r.displayName = "Portal";
      var s = r
    }
  }
]);