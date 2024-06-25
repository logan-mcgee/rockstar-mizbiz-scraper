! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ab1cb4d4-0cca-4e06-ada0-13045a106334", e._sentryDebugIdIdentifier = "sentry-dbid-ab1cb4d4-0cca-4e06-ada0-13045a106334")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [5276], {
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
        const [l, c] = (0, n.useState)({
          action: s.action,
          location: s.location
        });
        return (0, n.useLayoutEffect)((() => s.listen(((e, a) => {
          c({
            location: e,
            action: a
          })
        }))), [s]), (0, d.jsx)(o.Router, {
          basename: a,
          location: l.location,
          navigationType: l.action,
          navigator: s,
          children: t
        })
      }
    }
  }
]);