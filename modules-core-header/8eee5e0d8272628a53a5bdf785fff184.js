! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1bddeb94-8818-4c43-8e36-766e18451f9a", e._sentryDebugIdIdentifier = "sentry-dbid-1bddeb94-8818-4c43-8e36-766e18451f9a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "9e0f348dc2ade82ef557806d58f5a6f2792dae49",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "9e0f348dc2ade82ef557806d58f5a6f2792dae49"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [912], {
    2912: (e, a, o) => {
      o.r(a), o.d(a, {
        default: () => l
      });
      var d = o(88200),
        n = o(78940),
        t = o(63480);
      const l = e => {
        let {
          basename: a,
          children: o,
          history: l
        } = e;
        const [s, f] = (0, d.useState)({
          action: l.action,
          location: l.location
        });
        return (0, d.useLayoutEffect)((() => l.listen(((e, a) => {
          f({
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
//# sourceMappingURL=8eee5e0d8272628a53a5bdf785fff184.js.map