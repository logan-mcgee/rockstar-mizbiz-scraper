! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "080a66e5-b3c9-4fb1-85c0-d235cff37640", e._sentryDebugIdIdentifier = "sentry-dbid-080a66e5-b3c9-4fb1-85c0-d235cff37640")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [276], {
    85276: (e, a, o) => {
      o.r(a), o.d(a, {
        default: () => l
      });
      var d = o(51664),
        n = o(98584),
        t = o(95240);
      const l = e => {
        let {
          basename: a,
          children: o,
          history: l
        } = e;
        const [s, r] = (0, d.useState)({
          action: l.action,
          location: l.location
        });
        return (0, d.useLayoutEffect)((() => l.listen(((e, a) => {
          r({
            location: e,
            action: a
          })
        }))), [l]), (0, t.jsx)(n.Router, {
          basename: a,
          location: s.location,
          navigationType: s.action,
          navigator: l,
          children: o
        })
      }
    }
  }
]);
//# sourceMappingURL=3f5b284c7cc1aa8ac02eec5fca233e3a.js.map