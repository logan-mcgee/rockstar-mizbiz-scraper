! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "576f3d45-f10a-4929-8c4e-8f26c8498f08", e._sentryDebugIdIdentifier = "sentry-dbid-576f3d45-f10a-4929-8c4e-8f26c8498f08")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [621, 2], {
    6516: (e, t, o) => {
      var a = o(1403),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, o) {
        var a, r = {},
          l = null,
          c = null;
        for (a in void 0 !== o && (l = "" + o), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (c = t.ref), t) f.call(t, a) && !d.hasOwnProperty(a) && (r[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === r[a] && (r[a] = t[a]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: c,
          props: r,
          _owner: s.current
        }
      }
      t.Fragment = r, t.jsx = l, t.jsxs = l
    },
    6632: (e, t, o) => {
      e.exports = o(6516)
    },
    3002: (e, t, o) => {
      o.r(t), o.d(t, {
        default: () => f
      });
      var a = o(1403),
        n = o(4410),
        r = o(6632);
      const f = e => {
        let {
          basename: t,
          children: o,
          history: f
        } = e;
        const [s, d] = (0, a.useState)({
          action: f.action,
          location: f.location
        });
        return (0, a.useLayoutEffect)((() => f.listen(((e, t) => {
          d({
            location: e,
            action: t
          })
        }))), [f]), (0, r.jsx)(n.Router, {
          basename: t,
          location: s.location,
          navigationType: s.action,
          navigator: f,
          children: o
        })
      }
    }
  }
]);