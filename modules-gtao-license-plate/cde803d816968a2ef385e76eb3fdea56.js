! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "dc8f5952-efd9-491d-9730-a71a7932a71a", e._sentryDebugIdIdentifier = "sentry-dbid-dc8f5952-efd9-491d-9730-a71a7932a71a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [240], {
    99576: (e, a, o) => {
      var d = o(51664),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        f = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, a, o) {
        var d, n = {},
          s = null,
          _ = null;
        for (d in void 0 !== o && (s = "" + o), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) r.call(a, d) && !l.hasOwnProperty(d) && (n[d] = a[d]);
        if (e && e.defaultProps)
          for (d in a = e.defaultProps) void 0 === n[d] && (n[d] = a[d]);
        return {
          $$typeof: t,
          type: e,
          key: s,
          ref: _,
          props: n,
          _owner: f.current
        }
      }
      a.Fragment = n, a.jsx = s, a.jsxs = s
    },
    95240: (e, a, o) => {
      e.exports = o(99576)
    }
  }
]);