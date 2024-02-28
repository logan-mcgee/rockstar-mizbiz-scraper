/*! For license information please see e981020bef40912443384440ce8b1c4c.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "160b9266-b788-4ebd-a7e0-97a7775b5d6f", e._sentryDebugIdIdentifier = "sentry-dbid-160b9266-b788-4ebd-a7e0-97a7775b5d6f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "d409e297a36831321bd01cc6fefa95672d98d375",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "d409e297a36831321bd01cc6fefa95672d98d375"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [912, 532], {
    1996: (e, o, a) => {
      var t = a(8200),
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

      function f(e, o, a) {
        var t, r = {},
          f = null,
          i = null;
        for (t in void 0 !== a && (f = "" + a), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (i = o.ref), o) d.call(o, t) && !s.hasOwnProperty(t) && (r[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === r[t] && (r[t] = o[t]);
        return {
          $$typeof: n,
          type: e,
          key: f,
          ref: i,
          props: r,
          _owner: l.current
        }
      }
      o.Fragment = r, o.jsx = f, o.jsxs = f
    },
    3480: (e, o, a) => {
      e.exports = a(1996)
    },
    2912: (e, o, a) => {
      a.r(o), a.d(o, {
        default: () => d
      });
      var t = a(8200),
        n = a(8940),
        r = a(3480);
      const d = e => {
        let {
          basename: o,
          children: a,
          history: d
        } = e;
        const [l, s] = (0, t.useState)({
          action: d.action,
          location: d.location
        });
        return (0, t.useLayoutEffect)((() => d.listen(((e, o) => {
          s({
            location: e,
            action: o
          })
        }))), [d]), (0, r.jsx)(n.Router, {
          basename: o,
          location: l.location,
          navigationType: l.action,
          navigator: d,
          children: a
        })
      }
    }
  }
]);
//# sourceMappingURL=e981020bef40912443384440ce8b1c4c.js.map