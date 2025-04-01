! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d25c271b-42dd-4cea-9b0a-56290c0c76bd", e._sentryDebugIdIdentifier = "sentry-dbid-d25c271b-42dd-4cea-9b0a-56290c0c76bd")
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
  [2768], {
    40387: (e, a, d) => {
      d.r(a), d.d(a, {
        Portal: () => s,
        Root: () => f
      });
      var o = d(62229),
        n = d(44853),
        t = d(51347),
        l = d(92600),
        r = d(73855),
        s = o.forwardRef(((e, a) => {
          const {
            container: d,
            ...s
          } = e, [f, c] = o.useState(!1);
          (0, l.N)((() => c(!0)), []);
          const b = d || f && globalThis?.document?.body;
          return b ? n.createPortal((0, r.jsx)(t.sG.div, {
            ...s,
            ref: a
          }), b) : null
        }));
      s.displayName = "Portal";
      var f = s
    }
  }
]);