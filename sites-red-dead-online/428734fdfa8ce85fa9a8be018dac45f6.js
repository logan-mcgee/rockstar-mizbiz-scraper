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
    99576: (e, a, n) => {
      var d = n(51664),
        o = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, n) {
        var d, r = {},
          f = null,
          _ = null;
        for (d in void 0 !== n && (f = "" + n), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) t.call(a, d) && !s.hasOwnProperty(d) && (r[d] = a[d]);
        if (e && e.defaultProps)
          for (d in a = e.defaultProps) void 0 === r[d] && (r[d] = a[d]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: _,
          props: r,
          _owner: l.current
        }
      }
      a.Fragment = r, a.jsx = f, a.jsxs = f
    },
    95240: (e, a, n) => {
      e.exports = n(99576)
    }
  }
]);