/*! For license information please see 12126f3a4dab7fc07acd7d8cb94ab5c2.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "761f225f-9e27-40a9-8e35-3f61087268f8", e._sentryDebugIdIdentifier = "sentry-dbid-761f225f-9e27-40a9-8e35-3f61087268f8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [532, 912], {
    61996: (e, o, a) => {
      var t = a(88200),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, a) {
        var t, r = {},
          s = null,
          i = null;
        for (t in void 0 !== a && (s = "" + a), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (i = o.ref), o) d.call(o, t) && !f.hasOwnProperty(t) && (r[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === r[t] && (r[t] = o[t]);
        return {
          $$typeof: n,
          type: e,
          key: s,
          ref: i,
          props: r,
          _owner: l.current
        }
      }
      o.Fragment = r, o.jsx = s, o.jsxs = s
    },
    63480: (e, o, a) => {
      e.exports = a(61996)
    },
    2912: (e, o, a) => {
      a.r(o), a.d(o, {
        default: () => d
      });
      var t = a(88200),
        n = a(78940),
        r = a(63480);
      const d = e => {
        let {
          basename: o,
          children: a,
          history: d
        } = e;
        const [l, f] = (0, t.useState)({
          action: d.action,
          location: d.location
        });
        return (0, t.useLayoutEffect)((() => d.listen(((e, o) => {
          f({
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
//# sourceMappingURL=12126f3a4dab7fc07acd7d8cb94ab5c2.js.map