! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "33e55a84-f314-40bd-9205-5a031db5b1b2", e._sentryDebugIdIdentifier = "sentry-dbid-33e55a84-f314-40bd-9205-5a031db5b1b2")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-gif-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [240], {
    9576: (e, o, d) => {
      var r = d(1664),
        a = Symbol.for("react.element"),
        f = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        t = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, d) {
        var r, f = {},
          s = null,
          _ = null;
        for (r in void 0 !== d && (s = "" + d), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (_ = o.ref), o) n.call(o, r) && !l.hasOwnProperty(r) && (f[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === f[r] && (f[r] = o[r]);
        return {
          $$typeof: a,
          type: e,
          key: s,
          ref: _,
          props: f,
          _owner: t.current
        }
      }
      o.Fragment = f, o.jsx = s, o.jsxs = s
    },
    5240: (e, o, d) => {
      e.exports = d(9576)
    }
  }
]);