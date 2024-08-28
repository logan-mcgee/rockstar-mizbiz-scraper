! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5073f51a-804e-4519-9e12-f94fe6f4bfc8", e._sentryDebugIdIdentifier = "sentry-dbid-5073f51a-804e-4519-9e12-f94fe6f4bfc8")
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
  [621], {
    3002: (e, a, o) => {
      o.r(a), o.d(a, {
        default: () => l
      });
      var d = o(1403),
        n = o(4410),
        t = o(6632);
      const l = e => {
        let {
          basename: a,
          children: o,
          history: l
        } = e;
        const [f, s] = (0, d.useState)({
          action: l.action,
          location: l.location
        });
        return (0, d.useLayoutEffect)((() => l.listen(((e, a) => {
          s({
            location: e,
            action: a
          })
        }))), [l]), (0, t.jsx)(n.Router, {
          basename: a,
          location: f.location,
          navigationType: f.action,
          navigator: l,
          children: o
        })
      }
    }
  }
]);