! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "65a3df5f-4d7e-4c15-a8e7-bb3543ed04a1", e._sentryDebugIdIdentifier = "sentry-dbid-65a3df5f-4d7e-4c15-a8e7-bb3543ed04a1")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [776, 240], {
    99576: (e, a, d) => {
      var r = d(51664),
        o = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, d) {
        var r, t = {},
          l = null,
          _ = null;
        for (r in void 0 !== d && (l = "" + d), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) n.call(a, r) && !s.hasOwnProperty(r) && (t[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === t[r] && (t[r] = a[r]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: _,
          props: t,
          _owner: f.current
        }
      }
      a.Fragment = t, a.jsx = l, a.jsxs = l
    },
    95240: (e, a, d) => {
      e.exports = d(99576)
    },
    61880: (e, a, d) => {
      d.r(a), d.d(a, {
        default: () => r
      });
      const r = d(82078).c
    }
  }
]);