! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "180d67ff-006b-4f8f-9f1f-980c99691f06", e._sentryDebugIdIdentifier = "sentry-dbid-180d67ff-006b-4f8f-9f1f-980c99691f06")
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
    95795: (e, d, a) => {
      a.r(d), a.d(d, {
        Portal: () => r,
        Root: () => s
      });
      var o = a(62229),
        n = a(44853),
        t = a(60286),
        f = a(92600),
        l = a(73855),
        r = o.forwardRef(((e, d) => {
          const {
            container: a,
            ...r
          } = e, [s, b] = o.useState(!1);
          (0, f.N)((() => b(!0)), []);
          const u = a || s && globalThis?.document?.body;
          return u ? n.createPortal((0, l.jsx)(t.sG.div, {
            ...r,
            ref: d
          }), u) : null
        }));
      r.displayName = "Portal";
      var s = r
    }
  }
]);