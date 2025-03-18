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
      var f = r(62229),
        a = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        d = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, r) {
        var f, t = {},
          s = null,
          _ = null;
        for (f in void 0 !== r && (s = "" + r), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (_ = o.ref), o) n.call(o, f) && !l.hasOwnProperty(f) && (t[f] = o[f]);
        if (e && e.defaultProps)
          for (f in o = e.defaultProps) void 0 === t[f] && (t[f] = o[f]);
        return {
          $$typeof: a,
          type: e,
          key: s,
          ref: _,
          props: t,
          _owner: d.current
        }
      }
      o.Fragment = t, o.jsx = s, o.jsxs = s
    },
    91029: (e, o, r) => {
      e.exports = r(65039)
    }
  }
]);