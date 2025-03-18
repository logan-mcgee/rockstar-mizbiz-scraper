! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c08663b5-82db-4aac-8a1f-721a483625f4", e._sentryDebugIdIdentifier = "sentry-dbid-c08663b5-82db-4aac-8a1f-721a483625f4")
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
  [194], {
    97813: (e, a, d) => {
      d.r(a), d.d(a, {
        Portal: () => f,
        Root: () => s
      });
      var o = d(62229),
        n = d(44853),
        t = d(96988),
        l = d(66698),
        r = d(91029),
        f = o.forwardRef(((e, a) => {
          const {
            container: d,
            ...f
          } = e, [s, c] = o.useState(!1);
          (0, l.N)((() => c(!0)), []);
          const b = d || s && globalThis?.document?.body;
          return b ? n.createPortal((0, r.jsx)(t.sG.div, {
            ...f,
            ref: a
          }), b) : null
        }));
      f.displayName = "Portal";
      var s = f
    }
  }
]);