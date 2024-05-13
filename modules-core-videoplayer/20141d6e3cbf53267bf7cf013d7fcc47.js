! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "677cf3e5-cddf-465f-bade-9b8f544f1598", e._sentryDebugIdIdentifier = "sentry-dbid-677cf3e5-cddf-465f-bade-9b8f544f1598")
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
  [240], {
    99576: (e, o, f) => {
      var r = f(51664),
        d = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        t = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, f) {
        var r, a = {},
          s = null,
          _ = null;
        for (r in void 0 !== f && (s = "" + f), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (_ = o.ref), o) n.call(o, r) && !l.hasOwnProperty(r) && (a[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === a[r] && (a[r] = o[r]);
        return {
          $$typeof: d,
          type: e,
          key: s,
          ref: _,
          props: a,
          _owner: t.current
        }
      }
      o.Fragment = a, o.jsx = s, o.jsxs = s
    },
    95240: (e, o, f) => {
      e.exports = f(99576)
    }
  }
]);