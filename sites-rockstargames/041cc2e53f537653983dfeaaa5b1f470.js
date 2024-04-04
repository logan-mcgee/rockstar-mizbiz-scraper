/*! For license information please see 041cc2e53f537653983dfeaaa5b1f470.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a5524646-7462-4644-9c0f-5d0a6062b04c", e._sentryDebugIdIdentifier = "sentry-dbid-a5524646-7462-4644-9c0f-5d0a6062b04c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [895, 240, 860, 276], {
    99576: (e, a, t) => {
      var o = t(51664),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, t) {
        var o, r = {},
          f = null,
          i = null;
        for (o in void 0 !== t && (f = "" + t), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (i = a.ref), a) s.call(a, o) && !d.hasOwnProperty(o) && (r[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === r[o] && (r[o] = a[o]);
        return {
          $$typeof: n,
          type: e,
          key: f,
          ref: i,
          props: r,
          _owner: l.current
        }
      }
      a.Fragment = r, a.jsx = f, a.jsxs = f
    },
    95240: (e, a, t) => {
      e.exports = t(99576)
    },
    85276: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => s
      });
      var o = t(51664),
        n = t(98584),
        r = t(95240);
      const s = e => {
        let {
          basename: a,
          children: t,
          history: s
        } = e;
        const [l, d] = (0, o.useState)({
          action: s.action,
          location: s.location
        });
        return (0, o.useLayoutEffect)((() => s.listen(((e, a) => {
          d({
            location: e,
            action: a
          })
        }))), [s]), (0, r.jsx)(n.Router, {
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
//# sourceMappingURL=041cc2e53f537653983dfeaaa5b1f470.js.map