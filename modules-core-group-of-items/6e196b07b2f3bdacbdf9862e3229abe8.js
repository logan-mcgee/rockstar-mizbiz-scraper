! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "dd11a27f-243d-463f-98ea-fc7aedd6de67", e._sentryDebugIdIdentifier = "sentry-dbid-dd11a27f-243d-463f-98ea-fc7aedd6de67")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-group-of-items",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_group_of_items = self.webpackChunk_rockstargames_modules_core_group_of_items || []).push([
  [240], {
    9576: (e, o, d) => {
      var a = d(1664),
        r = Symbol.for("react.element"),
        f = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        n = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, d) {
        var a, f = {},
          s = null,
          _ = null;
        for (a in void 0 !== d && (s = "" + d), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (_ = o.ref), o) t.call(o, a) && !l.hasOwnProperty(a) && (f[a] = o[a]);
        if (e && e.defaultProps)
          for (a in o = e.defaultProps) void 0 === f[a] && (f[a] = o[a]);
        return {
          $$typeof: r,
          type: e,
          key: s,
          ref: _,
          props: f,
          _owner: n.current
        }
      }
      o.Fragment = f, o.jsx = s, o.jsxs = s
    },
    5240: (e, o, d) => {
      e.exports = d(9576)
    }
  }
]);