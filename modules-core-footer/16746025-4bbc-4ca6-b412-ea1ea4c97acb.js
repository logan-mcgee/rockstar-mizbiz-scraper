! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "16746025-4bbc-4ca6-b412-ea1ea4c97acb", e._sentryDebugIdIdentifier = "sentry-dbid-16746025-4bbc-4ca6-b412-ea1ea4c97acb")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [1029], {
    5039: (e, o, a) => {
      var r = a(2229),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, a) {
        var r, n = {},
          s = null,
          c = null;
        for (r in void 0 !== a && (s = "" + a), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (c = o.ref), o) d.call(o, r) && !f.hasOwnProperty(r) && (n[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === n[r] && (n[r] = o[r]);
        return {
          $$typeof: t,
          type: e,
          key: s,
          ref: c,
          props: n,
          _owner: l.current
        }
      }
      o.Fragment = n, o.jsx = s, o.jsxs = s
    },
    1029: (e, o, a) => {
      e.exports = a(5039)
    }
  }
]);