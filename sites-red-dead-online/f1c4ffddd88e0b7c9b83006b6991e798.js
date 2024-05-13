! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "399ae320-384c-4be9-811d-d8142a0e1fa1", e._sentryDebugIdIdentifier = "sentry-dbid-399ae320-384c-4be9-811d-d8142a0e1fa1")
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
    99576: (e, d, a) => {
      var n = a(51664),
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

      function s(e, d, a) {
        var n, r = {},
          s = null,
          _ = null;
        for (n in void 0 !== a && (s = "" + a), void 0 !== d.key && (s = "" + d.key), void 0 !== d.ref && (_ = d.ref), d) t.call(d, n) && !l.hasOwnProperty(n) && (r[n] = d[n]);
        if (e && e.defaultProps)
          for (n in d = e.defaultProps) void 0 === r[n] && (r[n] = d[n]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: _,
          props: r,
          _owner: f.current
        }
      }
      d.Fragment = r, d.jsx = s, d.jsxs = s
    },
    95240: (e, d, a) => {
      e.exports = a(99576)
    }
  }
]);