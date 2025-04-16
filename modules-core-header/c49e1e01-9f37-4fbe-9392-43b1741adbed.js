! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "c49e1e01-9f37-4fbe-9392-43b1741adbed", e._sentryDebugIdIdentifier = "sentry-dbid-c49e1e01-9f37-4fbe-9392-43b1741adbed")
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
  [3928], {
    51547: (e, d, a) => {
      a.r(d), a.d(d, {
        Root: () => s,
        VisuallyHidden: () => r
      });
      var o = a(62229),
        n = a(67774),
        l = a(73855),
        r = o.forwardRef(((e, d) => (0, l.jsx)(n.sG.span, {
          ...e,
          ref: d,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
          }
        })));
      r.displayName = "VisuallyHidden";
      var s = r
    }
  }
]);