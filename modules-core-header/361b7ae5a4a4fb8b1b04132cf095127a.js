! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3f69a2ba-6d69-4758-ba20-13eb92548a4b", e._sentryDebugIdIdentifier = "sentry-dbid-3f69a2ba-6d69-4758-ba20-13eb92548a4b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "d409e297a36831321bd01cc6fefa95672d98d375",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "d409e297a36831321bd01cc6fefa95672d98d375"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [532], {
    2912: (e, a, o) => {
      o.r(a), o.d(a, {
        default: () => l
      });
      var d = o(8200),
        n = o(8940),
        t = o(3480);
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
//# sourceMappingURL=361b7ae5a4a4fb8b1b04132cf095127a.js.map