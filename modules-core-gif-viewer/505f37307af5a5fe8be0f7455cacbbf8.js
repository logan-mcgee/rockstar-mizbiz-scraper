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
    9576: (e, o, r) => {
      var a = r(1664),
        n = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        t = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, r) {
        var a, d = {},
          s = null,
          _ = null;
        for (a in void 0 !== r && (s = "" + r), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (_ = o.ref), o) f.call(o, a) && !l.hasOwnProperty(a) && (d[a] = o[a]);
        if (e && e.defaultProps)
          for (a in o = e.defaultProps) void 0 === d[a] && (d[a] = o[a]);
        return {
          $$typeof: n,
          type: e,
          key: s,
          ref: _,
          props: d,
          _owner: t.current
        }
      }
      o.Fragment = d, o.jsx = s, o.jsxs = s
    },
    5240: (e, o, r) => {
      e.exports = r(9576)
    }
  }
]);