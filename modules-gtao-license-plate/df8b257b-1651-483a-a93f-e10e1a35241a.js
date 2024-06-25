! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "df8b257b-1651-483a-a93f-e10e1a35241a", e._sentryDebugIdIdentifier = "sentry-dbid-df8b257b-1651-483a-a93f-e10e1a35241a")
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
      var t = o(51664),
        d = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, a, o) {
        var t, n = {},
          s = null,
          _ = null;
        for (t in void 0 !== o && (s = "" + o), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) r.call(a, t) && !f.hasOwnProperty(t) && (n[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === n[t] && (n[t] = a[t]);
        return {
          $$typeof: d,
          type: e,
          key: s,
          ref: _,
          props: n,
          _owner: l.current
        }
      }
      a.Fragment = n, a.jsx = s, a.jsxs = s
    },
    95240: (e, a, o) => {
      e.exports = o(99576)
    }
  }
]);