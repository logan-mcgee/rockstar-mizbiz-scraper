/*! For license information please see ef6fdfdc81d0ada86c3deea216517259.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "dc8f5952-efd9-491d-9730-a71a7932a71a", e._sentryDebugIdIdentifier = "sentry-dbid-dc8f5952-efd9-491d-9730-a71a7932a71a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [240], {
    99576: (e, a, d) => {
      var o = d(51664),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, d) {
        var o, n = {},
          f = null,
          _ = null;
        for (o in void 0 !== d && (f = "" + d), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) r.call(a, o) && !s.hasOwnProperty(o) && (n[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === n[o] && (n[o] = a[o]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: _,
          props: n,
          _owner: l.current
        }
      }
      a.Fragment = n, a.jsx = f, a.jsxs = f
    },
    95240: (e, a, d) => {
      e.exports = d(99576)
    }
  }
]);
//# sourceMappingURL=ef6fdfdc81d0ada86c3deea216517259.js.map