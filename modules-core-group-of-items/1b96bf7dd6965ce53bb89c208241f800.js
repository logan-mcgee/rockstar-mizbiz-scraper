/*! For license information please see 1b96bf7dd6965ce53bb89c208241f800.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "dd11a27f-243d-463f-98ea-fc7aedd6de67", e._sentryDebugIdIdentifier = "sentry-dbid-dd11a27f-243d-463f-98ea-fc7aedd6de67")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-group-of-items",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_modules_core_group_of_items = self.webpackChunk_rockstargames_modules_core_group_of_items || []).push([
  [240], {
    9576: (e, d, o) => {
      var a = o(1664),
        r = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, d, o) {
        var a, t = {},
          s = null,
          _ = null;
        for (a in void 0 !== o && (s = "" + o), void 0 !== d.key && (s = "" + d.key), void 0 !== d.ref && (_ = d.ref), d) n.call(d, a) && !l.hasOwnProperty(a) && (t[a] = d[a]);
        if (e && e.defaultProps)
          for (a in d = e.defaultProps) void 0 === t[a] && (t[a] = d[a]);
        return {
          $$typeof: r,
          type: e,
          key: s,
          ref: _,
          props: t,
          _owner: f.current
        }
      }
      d.Fragment = t, d.jsx = s, d.jsxs = s
    },
    5240: (e, d, o) => {
      e.exports = o(9576)
    }
  }
]);
//# sourceMappingURL=1b96bf7dd6965ce53bb89c208241f800.js.map