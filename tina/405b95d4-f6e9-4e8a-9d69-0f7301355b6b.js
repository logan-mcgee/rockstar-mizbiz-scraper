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
      var o = n(51664),
        r = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, a, n) {
        var o, t = {},
          s = null,
          _ = null;
        for (o in void 0 !== n && (s = "" + n), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) d.call(a, o) && !l.hasOwnProperty(o) && (t[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === t[o] && (t[o] = a[o]);
        return {
          $$typeof: r,
          type: e,
          key: s,
          ref: _,
          props: t,
          _owner: f.current
        }
      }
      a.Fragment = t, a.jsx = s, a.jsxs = s
    },
    95240: (e, a, n) => {
      e.exports = n(99576)
    }
  }
]);