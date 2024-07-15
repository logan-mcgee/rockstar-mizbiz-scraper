! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5ad723e2-70fc-401d-8dc0-cc8577cf47e4", e._sentryDebugIdIdentifier = "sentry-dbid-5ad723e2-70fc-401d-8dc0-cc8577cf47e4")
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
    99576: (e, a, r) => {
      var d = r(51664),
        o = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, r) {
        var d, t = {},
          l = null,
          c = null;
        for (d in void 0 !== r && (l = "" + r), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (c = a.ref), a) n.call(a, d) && !f.hasOwnProperty(d) && (t[d] = a[d]);
        if (e && e.defaultProps)
          for (d in a = e.defaultProps) void 0 === t[d] && (t[d] = a[d]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: c,
          props: t,
          _owner: s.current
        }
      }
      a.Fragment = t, a.jsx = l, a.jsxs = l
    },
    95240: (e, a, r) => {
      e.exports = r(99576)
    },
    61880: (e, a, r) => {
      r.r(a), r.d(a, {
        default: () => d
      });
      const d = r(82078).c
    }
  }
]);