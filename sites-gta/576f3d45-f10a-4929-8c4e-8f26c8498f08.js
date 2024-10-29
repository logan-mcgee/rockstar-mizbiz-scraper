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
        f = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, a) {
        var o, f = {},
          l = null,
          i = null;
        for (o in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) r.call(t, o) && !s.hasOwnProperty(o) && (f[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === f[o] && (f[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: f,
          _owner: d.current
        }
      }
      t.Fragment = f, t.jsx = l, t.jsxs = l
    },
    6632: (e, t, a) => {
      e.exports = a(6516)
    },
    3002: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => r
      });
      var o = a(1403),
        n = a(4410),
        f = a(6632);
      const r = e => {
        let {
          basename: t,
          children: a,
          history: r
        } = e;
        const [d, s] = (0, o.useState)({
          action: r.action,
          location: r.location
        });
        return (0, o.useLayoutEffect)((() => r.listen(((e, t) => {
          s({
            location: e,
            action: t
          })
        }))), [r]), (0, f.jsx)(n.Router, {
          basename: t,
          location: d.location,
          navigationType: d.action,
          navigator: r,
          children: a
        })
      }
    }
  }
]);