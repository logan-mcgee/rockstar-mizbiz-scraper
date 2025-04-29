! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "167f02f7-21bc-4855-9b19-a525b3e26797", e._sentryDebugIdIdentifier = "sentry-dbid-167f02f7-21bc-4855-9b19-a525b3e26797")
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
  [5162], {
    42781: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => d
      });
      var n = t(62229),
        o = t(9623),
        s = t(73855);
      const d = e => {
        let {
          basename: a,
          children: t,
          history: d
        } = e;
        const [f, l] = (0, n.useState)({
          action: d.action,
          location: d.location
        });
        return (0, n.useLayoutEffect)((() => d.listen(((e, a) => {
          l({
            location: e,
            action: a
          })
        }))), [d]), (0, s.jsx)(o.Router, {
          basename: a,
          location: f.location,
          navigationType: f.action,
          navigator: d,
          children: t
        })
      }
    }
  }
]);