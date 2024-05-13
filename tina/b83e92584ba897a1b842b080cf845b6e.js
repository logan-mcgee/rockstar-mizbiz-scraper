! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      f = (new Error).stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "9ff2f74d-9d30-4c75-95d9-85e4d54605a7", e._sentryDebugIdIdentifier = "sentry-dbid-9ff2f74d-9d30-4c75-95d9-85e4d54605a7")
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
    9576: (e, f, n) => {
      var d = n(1664),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        t = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, f, n) {
        var d, a = {},
          s = null,
          _ = null;
        for (d in void 0 !== n && (s = "" + n), void 0 !== f.key && (s = "" + f.key), void 0 !== f.ref && (_ = f.ref), f) r.call(f, d) && !l.hasOwnProperty(d) && (a[d] = f[d]);
        if (e && e.defaultProps)
          for (d in f = e.defaultProps) void 0 === a[d] && (a[d] = f[d]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: _,
          props: a,
          _owner: t.current
        }
      }
      f.Fragment = a, f.jsx = s, f.jsxs = s
    },
    5240: (e, f, n) => {
      e.exports = n(9576)
    }
  }
]);