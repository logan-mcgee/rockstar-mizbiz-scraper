! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "576f3d45-f10a-4929-8c4e-8f26c8498f08", e._sentryDebugIdIdentifier = "sentry-dbid-576f3d45-f10a-4929-8c4e-8f26c8498f08")
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
    6516: (e, a, t) => {
      var o = t(1403),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, t) {
        var o, r = {},
          l = null,
          i = null;
        for (o in void 0 !== t && (l = "" + t), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (i = a.ref), a) d.call(a, o) && !f.hasOwnProperty(o) && (r[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === r[o] && (r[o] = a[o]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: r,
          _owner: s.current
        }
      }
      a.Fragment = r, a.jsx = l, a.jsxs = l
    },
    6632: (e, a, t) => {
      e.exports = t(6516)
    },
    3002: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => d
      });
      var o = t(1403),
        n = t(4410),
        r = t(6632);
      const d = e => {
        let {
          basename: a,
          children: t,
          history: d
        } = e;
        const [s, f] = (0, o.useState)({
          action: d.action,
          location: d.location
        });
        return (0, o.useLayoutEffect)((() => d.listen(((e, a) => {
          f({
            location: e,
            action: a
          })
        }))), [d]), (0, r.jsx)(n.Router, {
          basename: a,
          location: s.location,
          navigationType: s.action,
          navigator: d,
          children: t
        })
      }
    }
  }
]);