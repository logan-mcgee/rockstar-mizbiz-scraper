! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "399ae320-384c-4be9-811d-d8142a0e1fa1", e._sentryDebugIdIdentifier = "sentry-dbid-399ae320-384c-4be9-811d-d8142a0e1fa1")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [240], {
    99576: (e, a, d) => {
      var n = d(51664),
        o = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        f = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, a, d) {
        var n, r = {},
          s = null,
          _ = null;
        for (n in void 0 !== d && (s = "" + d), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) t.call(a, n) && !l.hasOwnProperty(n) && (r[n] = a[n]);
        if (e && e.defaultProps)
          for (n in a = e.defaultProps) void 0 === r[n] && (r[n] = a[n]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: _,
          props: r,
          _owner: f.current
        }
      }
      a.Fragment = r, a.jsx = s, a.jsxs = s
    },
    95240: (e, a, d) => {
      e.exports = d(99576)
    }
  }
]);