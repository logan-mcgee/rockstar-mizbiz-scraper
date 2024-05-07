! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5c812e42-0565-4a38-8eba-a7c70709c2a2", e._sentryDebugIdIdentifier = "sentry-dbid-5c812e42-0565-4a38-8eba-a7c70709c2a2")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [5240, 2860], {
    99576: (e, a, t) => {
      var n = t(51664),
        o = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, t) {
        var n, r = {},
          f = null,
          _ = null;
        for (n in void 0 !== t && (f = "" + t), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) d.call(a, n) && !l.hasOwnProperty(n) && (r[n] = a[n]);
        if (e && e.defaultProps)
          for (n in a = e.defaultProps) void 0 === r[n] && (r[n] = a[n]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: _,
          props: r,
          _owner: s.current
        }
      }
      a.Fragment = r, a.jsx = f, a.jsxs = f
    },
    95240: (e, a, t) => {
      e.exports = t(99576)
    }
  }
]);