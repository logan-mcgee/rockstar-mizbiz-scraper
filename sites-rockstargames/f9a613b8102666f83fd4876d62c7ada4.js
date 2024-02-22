! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a713b63e-4da8-46cd-96ff-05411b7e8baf", e._sentryDebugIdIdentifier = "sentry-dbid-a713b63e-4da8-46cd-96ff-05411b7e8baf")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [532], {
    2912: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => d
      });
      var n = t(8200),
        o = t(1320),
        s = t(3480);
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
//# sourceMappingURL=f9a613b8102666f83fd4876d62c7ada4.js.map