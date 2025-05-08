! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d25c271b-42dd-4cea-9b0a-56290c0c76bd", e._sentryDebugIdIdentifier = "sentry-dbid-d25c271b-42dd-4cea-9b0a-56290c0c76bd")
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
    40387: (e, d, a) => {
      a.r(d), a.d(d, {
        Portal: () => s,
        Root: () => c
      });
      var o = a(62229),
        n = a(44853),
        t = a(51347),
        l = a(92600),
        r = a(73855),
        s = o.forwardRef(((e, d) => {
          const {
            container: a,
            ...s
          } = e, [c, b] = o.useState(!1);
          (0, l.N)((() => b(!0)), []);
          const f = a || c && globalThis?.document?.body;
          return f ? n.createPortal((0, r.jsx)(t.sG.div, {
            ...s,
            ref: d
          }), f) : null
        }));
      s.displayName = "Portal";
      var c = s
    }
  }
]);