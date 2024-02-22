/*! For license information please see 70ae5de1ee3f84f83055e21bcca3cf2d.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9f55fc48-2fcd-48f1-a5c7-a7058746e766", e._sentryDebugIdIdentifier = "sentry-dbid-9f55fc48-2fcd-48f1-a5c7-a7058746e766")
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
  [912, 532], {
    1996: (e, a, t) => {
      var o = t(8200),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, a, t) {
        var o, r = {},
          d = null,
          i = null;
        for (o in void 0 !== t && (d = "" + t), void 0 !== a.key && (d = "" + a.key), void 0 !== a.ref && (i = a.ref), a) s.call(a, o) && !l.hasOwnProperty(o) && (r[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === r[o] && (r[o] = a[o]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: i,
          props: r,
          _owner: f.current
        }
      }
      a.Fragment = r, a.jsx = d, a.jsxs = d
    },
    3480: (e, a, t) => {
      e.exports = t(1996)
    },
    2912: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => s
      });
      var o = t(8200),
        n = t(1320),
        r = t(3480);
      const s = e => {
        let {
          basename: a,
          children: t,
          history: s
        } = e;
        const [f, l] = (0, o.useState)({
          action: s.action,
          location: s.location
        });
        return (0, o.useLayoutEffect)((() => s.listen(((e, a) => {
          l({
            location: e,
            action: a
          })
        }))), [s]), (0, r.jsx)(n.Router, {
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
//# sourceMappingURL=70ae5de1ee3f84f83055e21bcca3cf2d.js.map