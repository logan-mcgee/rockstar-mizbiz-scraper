! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "3b6cde93-3ffd-48e3-b6f1-459fa7c6c0bb", e._sentryDebugIdIdentifier = "sentry-dbid-3b6cde93-3ffd-48e3-b6f1-459fa7c6c0bb")
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
  [3410, 1029], {
    65039: (e, o, r) => {
      var d = r(62229),
        f = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        n = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, r) {
        var d, t = {},
          s = null,
          b = null;
        for (d in void 0 !== r && (s = "" + r), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (b = o.ref), o) a.call(o, d) && !l.hasOwnProperty(d) && (t[d] = o[d]);
        if (e && e.defaultProps)
          for (d in o = e.defaultProps) void 0 === t[d] && (t[d] = o[d]);
        return {
          $$typeof: f,
          type: e,
          key: s,
          ref: b,
          props: t,
          _owner: n.current
        }
      }
      o.Fragment = t, o.jsx = s, o.jsxs = s
    },
    91029: (e, o, r) => {
      e.exports = r(65039)
    }
  }
]);