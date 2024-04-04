/*! For license information please see 64e070416b923a8945b4779fcf0e3615.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c282c619-9054-4c92-a97e-6fc0319a3af8", e._sentryDebugIdIdentifier = "sentry-dbid-c282c619-9054-4c92-a97e-6fc0319a3af8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/modules-core-feedback",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_modules_core_feedback = self.webpackChunk_rockstargames_modules_core_feedback || []).push([
  [240], {
    9576: (e, a, o) => {
      var r = o(1664),
        f = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        t = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, a, o) {
        var r, n = {},
          s = null,
          _ = null;
        for (r in void 0 !== o && (s = "" + o), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) d.call(a, r) && !l.hasOwnProperty(r) && (n[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === n[r] && (n[r] = a[r]);
        return {
          $$typeof: f,
          type: e,
          key: s,
          ref: _,
          props: n,
          _owner: t.current
        }
      }
      a.Fragment = n, a.jsx = s, a.jsxs = s
    },
    5240: (e, a, o) => {
      e.exports = o(9576)
    }
  }
]);
//# sourceMappingURL=64e070416b923a8945b4779fcf0e3615.js.map