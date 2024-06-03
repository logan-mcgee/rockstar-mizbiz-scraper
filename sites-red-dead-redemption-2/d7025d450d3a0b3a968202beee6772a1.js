! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9eaf42f1-79f6-448d-930e-1291d7435650", e._sentryDebugIdIdentifier = "sentry-dbid-9eaf42f1-79f6-448d-930e-1291d7435650")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [240], {
    99576: (e, a, r) => {
      var d = r(51664),
        o = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, r) {
        var d, t = {},
          l = null,
          _ = null;
        for (d in void 0 !== r && (l = "" + r), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) n.call(a, d) && !s.hasOwnProperty(d) && (t[d] = a[d]);
        if (e && e.defaultProps)
          for (d in a = e.defaultProps) void 0 === t[d] && (t[d] = a[d]);
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
    95240: (e, a, r) => {
      e.exports = r(99576)
    }
  }
]);