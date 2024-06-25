! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "405b95d4-f6e9-4e8a-9d69-0f7301355b6b", e._sentryDebugIdIdentifier = "sentry-dbid-405b95d4-f6e9-4e8a-9d69-0f7301355b6b")
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
    99576: (e, a, n) => {
      var d = n(51664),
        o = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        f = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, a, n) {
        var d, r = {},
          s = null,
          b = null;
        for (d in void 0 !== n && (s = "" + n), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (b = a.ref), a) t.call(a, d) && !l.hasOwnProperty(d) && (r[d] = a[d]);
        if (e && e.defaultProps)
          for (d in a = e.defaultProps) void 0 === r[d] && (r[d] = a[d]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: b,
          props: r,
          _owner: f.current
        }
      }
      a.Fragment = r, a.jsx = s, a.jsxs = s
    },
    95240: (e, a, n) => {
      e.exports = n(99576)
    }
  }
]);