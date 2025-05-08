! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "ff037449-5730-4fa1-bc0c-512e72450f91", e._sentryDebugIdIdentifier = "sentry-dbid-ff037449-5730-4fa1-bc0c-512e72450f91")
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
  [7539], {
    7539: (e, d, a) => {
      a.r(d), a.d(d, {
        Portal: () => f,
        Root: () => s
      });
      var o = a(62229),
        n = a(44853),
        t = a(67774),
        l = a(46217),
        r = a(73855),
        f = o.forwardRef(((e, d) => {
          const {
            container: a,
            ...f
          } = e, [s, c] = o.useState(!1);
          (0, l.N)((() => c(!0)), []);
          const b = a || s && globalThis?.document?.body;
          return b ? n.createPortal((0, r.jsx)(t.sG.div, {
            ...f,
            ref: d
          }), b) : null
        }));
      f.displayName = "Portal";
      var s = f
    }
  }
]);