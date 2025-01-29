! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fddd3687-c267-48f1-b0fe-e25440184893", e._sentryDebugIdIdentifier = "sentry-dbid-fddd3687-c267-48f1-b0fe-e25440184893")
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
  [96], {
    5356: (e, a, o) => {
      var r = o(2229),
        d = Symbol.for("react.element"),
        f = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        n = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        t = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, o) {
        var r, l = {},
          s = null,
          _ = null;
        for (r in void 0 !== o && (s = "" + o), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) f.call(a, r) && !t.hasOwnProperty(r) && (l[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === l[r] && (l[r] = a[r]);
        return {
          $$typeof: d,
          type: e,
          key: s,
          ref: _,
          props: l,
          _owner: n.current
        }
      }
      a.jsx = l, a.jsxs = l
    },
    8096: (e, a, o) => {
      e.exports = o(5356)
    }
  }
]);