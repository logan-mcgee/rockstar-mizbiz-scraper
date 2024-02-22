! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3f69a2ba-6d69-4758-ba20-13eb92548a4b", e._sentryDebugIdIdentifier = "sentry-dbid-3f69a2ba-6d69-4758-ba20-13eb92548a4b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [532], {
    2912: (e, a, o) => {
      o.r(a), o.d(a, {
        default: () => l
      });
      var n = o(8200),
        t = o(8940),
        d = o(3480);
      const l = e => {
        let {
          basename: a,
          children: o,
          history: l
        } = e;
        const [s, r] = (0, n.useState)({
          action: l.action,
          location: l.location
        });
        return (0, n.useLayoutEffect)((() => l.listen(((e, a) => {
          r({
            location: e,
            action: a
          })
        }))), [l]), (0, d.jsx)(t.Router, {
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
//# sourceMappingURL=d97e5c9ee8b9e12c233d6b50fd2f392e.js.map