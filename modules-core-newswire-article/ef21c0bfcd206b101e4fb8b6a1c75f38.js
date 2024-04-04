/*! For license information please see ef21c0bfcd206b101e4fb8b6a1c75f38.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "268b65b3-4299-4587-8954-f0981e1af1c0", e._sentryDebugIdIdentifier = "sentry-dbid-268b65b3-4299-4587-8954-f0981e1af1c0")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [240], {
    9576: (e, r, a) => {
      var o = a(1664),
        d = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, r, a) {
        var o, n = {},
          f = null,
          _ = null;
        for (o in void 0 !== a && (f = "" + a), void 0 !== r.key && (f = "" + r.key), void 0 !== r.ref && (_ = r.ref), r) t.call(r, o) && !s.hasOwnProperty(o) && (n[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === n[o] && (n[o] = r[o]);
        return {
          $$typeof: d,
          type: e,
          key: f,
          ref: _,
          props: n,
          _owner: l.current
        }
      }
      r.Fragment = n, r.jsx = f, r.jsxs = f
    },
    5240: (e, r, a) => {
      e.exports = a(9576)
    }
  }
]);
//# sourceMappingURL=ef21c0bfcd206b101e4fb8b6a1c75f38.js.map