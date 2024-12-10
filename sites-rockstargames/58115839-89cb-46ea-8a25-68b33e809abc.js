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
        default: () => s
      });
      var n = t(71403),
        o = t(14410),
        d = t(46632);
      const s = e => {
        let {
          basename: a,
          children: t,
          history: s
        } = e;
        const [l, r] = (0, n.useState)({
          action: s.action,
          location: s.location
        });
        return (0, n.useLayoutEffect)((() => s.listen(((e, a) => {
          r({
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