! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ce436a87-a0b2-4a94-9b7d-60e78b6cf26c", e._sentryDebugIdIdentifier = "sentry-dbid-ce436a87-a0b2-4a94-9b7d-60e78b6cf26c")
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
  [6632], {
    26516: (e, a, t) => {
      var n = t(71403),
        o = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        f = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, t) {
        var n, r = {},
          l = null,
          c = null;
        for (n in void 0 !== t && (l = "" + t), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (c = a.ref), a) d.call(a, n) && !s.hasOwnProperty(n) && (r[n] = a[n]);
        if (e && e.defaultProps)
          for (n in a = e.defaultProps) void 0 === r[n] && (r[n] = a[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: c,
          props: r,
          _owner: f.current
        }
      }
      a.Fragment = r, a.jsx = l, a.jsxs = l
    },
    46632: (e, a, t) => {
      e.exports = t(26516)
    }
  }
]);