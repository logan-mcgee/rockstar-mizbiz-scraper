! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "58115839-89cb-46ea-8a25-68b33e809abc", e._sentryDebugIdIdentifier = "sentry-dbid-58115839-89cb-46ea-8a25-68b33e809abc")
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
  [621], {
    73002: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => d
      });
      var n = t(71403),
        o = t(14410),
        s = t(46632);
      const d = e => {
        let {
          basename: a,
          children: t,
          history: d
        } = e;
        const [l, r] = (0, n.useState)({
          action: d.action,
          location: d.location
        });
        return (0, n.useLayoutEffect)((() => d.listen(((e, a) => {
          r({
            location: e,
            action: a
          })
        }))), [d]), (0, s.jsx)(o.Router, {
          basename: a,
          location: l.location,
          navigationType: l.action,
          navigator: d,
          children: t
        })
      }
    }
  }
]);