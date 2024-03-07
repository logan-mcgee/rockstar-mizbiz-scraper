! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1bddeb94-8818-4c43-8e36-766e18451f9a", e._sentryDebugIdIdentifier = "sentry-dbid-1bddeb94-8818-4c43-8e36-766e18451f9a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "b356924da36d0f3d7db4edbb6216f9bbe11be0f1",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "b356924da36d0f3d7db4edbb6216f9bbe11be0f1"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [912], {
    2912: (e, a, d) => {
      d.r(a), d.d(a, {
        default: () => l
      });
      var o = d(88200),
        n = d(78940),
        t = d(63480);
      const l = e => {
        let {
          basename: a,
          children: d,
          history: l
        } = e;
        const [s, r] = (0, o.useState)({
          action: l.action,
          location: l.location
        });
        return (0, o.useLayoutEffect)((() => l.listen(((e, a) => {
          r({
            location: e,
            action: a
          })
        }))), [l]), (0, t.jsx)(n.Router, {
          basename: a,
          location: s.location,
          navigationType: s.action,
          navigator: l,
          children: d
        })
      }
    }
  }
]);
//# sourceMappingURL=835c99ee776706186fd6f4dba90b510c.js.map