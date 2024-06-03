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
        default: () => s
      });
      var n = t(51664),
        o = t(98584),
        d = t(95240);
      const s = e => {
        let {
          basename: a,
          children: t,
          history: s
        } = e;
        const [f, l] = (0, n.useState)({
          action: s.action,
          location: s.location
        });
        return (0, n.useLayoutEffect)((() => s.listen(((e, a) => {
          l({
            location: e,
            action: a
          })
        }))), [s]), (0, d.jsx)(o.Router, {
          basename: a,
          location: f.location,
          navigationType: f.action,
          navigator: s,
          children: t
        })
      }
    }
  }
]);