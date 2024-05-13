! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "220a0b29-8dd4-47ef-a7fd-0fe14cf23be5", e._sentryDebugIdIdentifier = "sentry-dbid-220a0b29-8dd4-47ef-a7fd-0fe14cf23be5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [276], {
    85276: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => f
      });
      var d = t(51664),
        n = t(98584),
        o = t(95240);
      const f = e => {
        let {
          basename: a,
          children: t,
          history: f
        } = e;
        const [s, l] = (0, d.useState)({
          action: f.action,
          location: f.location
        });
        return (0, d.useLayoutEffect)((() => f.listen(((e, a) => {
          l({
            location: e,
            action: a
          })
        }))), [f]), (0, o.jsx)(n.Router, {
          basename: a,
          location: s.location,
          navigationType: s.action,
          navigator: f,
          children: t
        })
      }
    }
  }
]);