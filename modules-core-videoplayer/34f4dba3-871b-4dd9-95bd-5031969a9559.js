! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "34f4dba3-871b-4dd9-95bd-5031969a9559", e._sentryDebugIdIdentifier = "sentry-dbid-34f4dba3-871b-4dd9-95bd-5031969a9559")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [96], {
    5356: (e, a, o) => {
      var d = o(2229),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, a, o) {
        var d, n = {},
          s = null,
          _ = null;
        for (d in void 0 !== o && (s = "" + o), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) t.call(a, d) && !f.hasOwnProperty(d) && (n[d] = a[d]);
        if (e && e.defaultProps)
          for (d in a = e.defaultProps) void 0 === n[d] && (n[d] = a[d]);
        return {
          $$typeof: r,
          type: e,
          key: s,
          ref: _,
          props: n,
          _owner: l.current
        }
      }
      a.Fragment = n, a.jsx = s, a.jsxs = s
    },
    8096: (e, a, o) => {
      e.exports = o(5356)
    }
  }
]);