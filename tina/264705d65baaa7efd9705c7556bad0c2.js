! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9ff2f74d-9d30-4c75-95d9-85e4d54605a7", e._sentryDebugIdIdentifier = "sentry-dbid-9ff2f74d-9d30-4c75-95d9-85e4d54605a7")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [240], {
    9576: (e, a, d) => {
      var n = d(1664),
        o = Symbol.for("react.element"),
        f = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        t = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, a, d) {
        var n, f = {},
          s = null,
          _ = null;
        for (n in void 0 !== d && (s = "" + d), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) r.call(a, n) && !l.hasOwnProperty(n) && (f[n] = a[n]);
        if (e && e.defaultProps)
          for (n in a = e.defaultProps) void 0 === f[n] && (f[n] = a[n]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: _,
          props: f,
          _owner: t.current
        }
      }
      a.Fragment = f, a.jsx = s, a.jsxs = s
    },
    5240: (e, a, d) => {
      e.exports = d(9576)
    }
  }
]);