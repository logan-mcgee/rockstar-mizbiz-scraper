! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "0e9e149b-296b-4c1c-a1c0-ddaad58db0b2", e._sentryDebugIdIdentifier = "sentry-dbid-0e9e149b-296b-4c1c-a1c0-ddaad58db0b2")
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
    99576: (e, d, a) => {
      var r = a(51664),
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

      function l(e, d, a) {
        var r, t = {},
          l = null,
          _ = null;
        for (r in void 0 !== a && (l = "" + a), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (_ = d.ref), d) n.call(d, r) && !s.hasOwnProperty(r) && (t[r] = d[r]);
        if (e && e.defaultProps)
          for (r in d = e.defaultProps) void 0 === t[r] && (t[r] = d[r]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: _,
          props: t,
          _owner: f.current
        }
      }
      d.Fragment = t, d.jsx = l, d.jsxs = l
    },
    95240: (e, d, a) => {
      e.exports = a(99576)
    }
  }
]);