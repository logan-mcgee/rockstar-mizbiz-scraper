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
    6516: (e, t, a) => {
      var o = a(1403),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, a) {
        var o, r = {},
          d = null,
          i = null;
        for (o in void 0 !== a && (d = "" + a), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (i = t.ref), t) f.call(t, o) && !l.hasOwnProperty(o) && (r[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === r[o] && (r[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: i,
          props: r,
          _owner: s.current
        }
      }
      t.Fragment = r, t.jsx = d, t.jsxs = d
    },
    6632: (e, t, a) => {
      e.exports = a(6516)
    },
    3002: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => f
      });
      var o = a(1403),
        n = a(4410),
        r = a(6632);
      const f = e => {
        let {
          basename: t,
          children: a,
          history: f
        } = e;
        const [s, l] = (0, o.useState)({
          action: f.action,
          location: f.location
        });
        return (0, o.useLayoutEffect)((() => f.listen(((e, t) => {
          l({
            location: e,
            action: t
          })
        }))), [f]), (0, r.jsx)(n.Router, {
          basename: t,
          location: s.location,
          navigationType: s.action,
          navigator: f,
          children: a
        })
      }
    }
  }
]);