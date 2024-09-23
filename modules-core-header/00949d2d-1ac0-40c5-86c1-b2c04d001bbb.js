! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "00949d2d-1ac0-40c5-86c1-b2c04d001bbb", e._sentryDebugIdIdentifier = "sentry-dbid-00949d2d-1ac0-40c5-86c1-b2c04d001bbb")
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
  [2], {
    3002: (e, a, o) => {
      o.r(a), o.d(a, {
        default: () => l
      });
      var n = o(1403),
        d = o(4410),
        t = o(6632);
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
        }))), [l]), (0, t.jsx)(d.Router, {
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