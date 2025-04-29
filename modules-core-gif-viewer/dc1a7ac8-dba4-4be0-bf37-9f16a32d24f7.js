! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "dc1a7ac8-dba4-4be0-bf37-9f16a32d24f7", e._sentryDebugIdIdentifier = "sentry-dbid-dc1a7ac8-dba4-4be0-bf37-9f16a32d24f7")
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
  [3855], {
    2469: (e, d, o) => {
      var r = o(2229),
        a = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        f = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        t = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, d, o) {
        var r, l = {},
          s = null,
          _ = null;
        for (r in void 0 !== o && (s = "" + o), void 0 !== d.key && (s = "" + d.key), void 0 !== d.ref && (_ = d.ref), d) n.call(d, r) && !t.hasOwnProperty(r) && (l[r] = d[r]);
        if (e && e.defaultProps)
          for (r in d = e.defaultProps) void 0 === l[r] && (l[r] = d[r]);
        return {
          $$typeof: a,
          type: e,
          key: s,
          ref: _,
          props: l,
          _owner: f.current
        }
      }
      d.jsx = l, d.jsxs = l
    },
    3855: (e, d, o) => {
      e.exports = o(2469)
    }
  }
]);