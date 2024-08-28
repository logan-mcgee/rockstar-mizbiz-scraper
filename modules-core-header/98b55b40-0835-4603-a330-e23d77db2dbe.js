! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "98b55b40-0835-4603-a330-e23d77db2dbe", e._sentryDebugIdIdentifier = "sentry-dbid-98b55b40-0835-4603-a330-e23d77db2dbe")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [764, 621], {
    6516: (e, o, a) => {
      var t = a(1403),
        n = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, o, a) {
        var t, d = {},
          f = null,
          i = null;
        for (t in void 0 !== a && (f = "" + a), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (i = o.ref), o) r.call(o, t) && !s.hasOwnProperty(t) && (d[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === d[t] && (d[t] = o[t]);
        return {
          $$typeof: n,
          type: e,
          key: f,
          ref: i,
          props: d,
          _owner: l.current
        }
      }
      o.Fragment = d, o.jsx = f, o.jsxs = f
    },
    6632: (e, o, a) => {
      e.exports = a(6516)
    },
    3002: (e, o, a) => {
      a.r(o), a.d(o, {
        default: () => r
      });
      var t = a(1403),
        n = a(4410),
        d = a(6632);
      const r = e => {
        let {
          basename: o,
          children: a,
          history: r
        } = e;
        const [l, s] = (0, t.useState)({
          action: r.action,
          location: r.location
        });
        return (0, t.useLayoutEffect)((() => r.listen(((e, o) => {
          s({
            location: e,
            action: o
          })
        }))), [r]), (0, d.jsx)(n.Router, {
          basename: o,
          location: l.location,
          navigationType: l.action,
          navigator: r,
          children: a
        })
      }
    }
  }
]);