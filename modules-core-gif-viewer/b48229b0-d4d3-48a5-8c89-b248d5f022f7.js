! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "b48229b0-d4d3-48a5-8c89-b248d5f022f7", e._sentryDebugIdIdentifier = "sentry-dbid-b48229b0-d4d3-48a5-8c89-b248d5f022f7")
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
  [1029], {
    5039: (e, o, r) => {
      var d = r(2229),
        a = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        f = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        t = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, o, r) {
        var d, l = {},
          s = null,
          _ = null;
        for (d in void 0 !== r && (s = "" + r), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (_ = o.ref), o) n.call(o, d) && !t.hasOwnProperty(d) && (l[d] = o[d]);
        if (e && e.defaultProps)
          for (d in o = e.defaultProps) void 0 === l[d] && (l[d] = o[d]);
        return {
          $$typeof: a,
          type: e,
          key: s,
          ref: _,
          props: l,
          _owner: f.current
        }
      }
      o.jsx = l, o.jsxs = l
    },
    1029: (e, o, r) => {
      e.exports = r(5039)
    }
  }
]);