! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "87d84dcb-20d3-4272-bc2c-97bd4ceb3a76", e._sentryDebugIdIdentifier = "sentry-dbid-87d84dcb-20d3-4272-bc2c-97bd4ceb3a76")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [5710, 1029, 3410, 5791, 8172, 1554], {
    65039: (e, d, o) => {
      var r = o(62229),
        a = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, d, o) {
        var r, n = {},
          s = null,
          b = null;
        for (r in void 0 !== o && (s = "" + o), void 0 !== d.key && (s = "" + d.key), void 0 !== d.ref && (b = d.ref), d) t.call(d, r) && !f.hasOwnProperty(r) && (n[r] = d[r]);
        if (e && e.defaultProps)
          for (r in d = e.defaultProps) void 0 === n[r] && (n[r] = d[r]);
        return {
          $$typeof: a,
          type: e,
          key: s,
          ref: b,
          props: n,
          _owner: l.current
        }
      }
      d.Fragment = n, d.jsx = s, d.jsxs = s
    },
    91029: (e, d, o) => {
      e.exports = o(65039)
    }
  }
]);