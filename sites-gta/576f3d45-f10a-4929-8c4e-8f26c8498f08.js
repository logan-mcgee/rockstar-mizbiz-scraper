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
        d = Object.prototype.hasOwnProperty,
        f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, o) {
        var a, r = {},
          l = null,
          c = null;
        for (a in void 0 !== o && (l = "" + o), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (c = t.ref), t) d.call(t, a) && !s.hasOwnProperty(a) && (r[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === r[a] && (r[a] = t[a]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: c,
          props: r,
          _owner: f.current
        }
      }
      t.Fragment = r, t.jsx = l, t.jsxs = l
    },
    6632: (e, t, o) => {
      e.exports = o(6516)
    },
    3002: (e, t, o) => {
      o.r(t), o.d(t, {
        default: () => d
      });
      var a = o(1403),
        n = o(4410),
        r = o(6632);
      const d = e => {
        let {
          basename: t,
          children: o,
          history: d
        } = e;
        const [f, s] = (0, a.useState)({
          action: d.action,
          location: d.location
        });
        return (0, a.useLayoutEffect)((() => d.listen(((e, t) => {
          s({
            location: e,
            action: t
          })
        }))), [d]), (0, r.jsx)(n.Router, {
          basename: t,
          location: f.location,
          navigationType: f.action,
          navigator: d,
          children: o
        })
      }
    }
  }
]);