! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "080a66e5-b3c9-4fb1-85c0-d235cff37640", e._sentryDebugIdIdentifier = "sentry-dbid-080a66e5-b3c9-4fb1-85c0-d235cff37640")
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
  [276], {
    85276: (e, a, o) => {
      o.r(a), o.d(a, {
        default: () => f
      });
      var n = o(51664),
        t = o(98584),
        d = o(95240);
      const f = e => {
        let {
          basename: a,
          children: o,
          history: f
        } = e;
        const [l, s] = (0, n.useState)({
          action: f.action,
          location: f.location
        });
        return (0, n.useLayoutEffect)((() => f.listen(((e, a) => {
          s({
            location: e,
            action: a
          })
        }))), [f]), (0, d.jsx)(t.Router, {
          basename: a,
          location: l.location,
          navigationType: l.action,
          navigator: f,
          children: o
        })
      }
    }
  }
]);