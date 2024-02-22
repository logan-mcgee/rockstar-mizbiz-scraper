/*! For license information please see 8b2ce792fc80cc0105ff51d39a777cbe.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "160b9266-b788-4ebd-a7e0-97a7775b5d6f", e._sentryDebugIdIdentifier = "sentry-dbid-160b9266-b788-4ebd-a7e0-97a7775b5d6f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [912, 532], {
    1996: (e, a, o) => {
      var t = o(8200),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, o) {
        var t, r = {},
          f = null,
          i = null;
        for (t in void 0 !== o && (f = "" + o), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (i = a.ref), a) d.call(a, t) && !s.hasOwnProperty(t) && (r[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === r[t] && (r[t] = a[t]);
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
    3480: (e, a, o) => {
      e.exports = o(1996)
    },
    2912: (e, a, o) => {
      o.r(a), o.d(a, {
        default: () => d
      });
      var t = o(8200),
        n = o(8940),
        r = o(3480);
      const d = e => {
        let {
          basename: a,
          children: o,
          history: d
        } = e;
        const [l, s] = (0, t.useState)({
          action: d.action,
          location: d.location
        });
        return (0, t.useLayoutEffect)((() => d.listen(((e, a) => {
          s({
            location: e,
            action: a
          })
        }))), [d]), (0, r.jsx)(n.Router, {
          basename: a,
          location: l.location,
          navigationType: l.action,
          navigator: d,
          children: o
        })
      }
    }
  }
]);
//# sourceMappingURL=8b2ce792fc80cc0105ff51d39a777cbe.js.map