! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ad30f987-dea3-4952-ba24-ac5efa4a1de9", e._sentryDebugIdIdentifier = "sentry-dbid-ad30f987-dea3-4952-ba24-ac5efa4a1de9")
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
  [3410, 1029, 5791, 8172], {
    65039: (e, a, d) => {
      var o = d(62229),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, a, d) {
        var o, n = {},
          s = null,
          _ = null;
        for (o in void 0 !== d && (s = "" + d), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) t.call(a, o) && !l.hasOwnProperty(o) && (n[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === n[o] && (n[o] = a[o]);
        return {
          $$typeof: r,
          type: e,
          key: s,
          ref: _,
          props: n,
          _owner: f.current
        }
      }
      a.Fragment = n, a.jsx = s, a.jsxs = s
    },
    91029: (e, a, d) => {
      e.exports = d(65039)
    }
  }
]);