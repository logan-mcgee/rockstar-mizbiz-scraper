! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3aec6b66-b3a9-4d22-be94-a78b28618b82", e._sentryDebugIdIdentifier = "sentry-dbid-3aec6b66-b3a9-4d22-be94-a78b28618b82")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [776], {
    99576: (e, a, o) => {
      var t = o(51664),
        d = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, a, o) {
        var t, r = {},
          s = null,
          b = null;
        for (t in void 0 !== o && (s = "" + o), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (b = a.ref), a) n.call(a, t) && !l.hasOwnProperty(t) && (r[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === r[t] && (r[t] = a[t]);
        return {
          $$typeof: d,
          type: e,
          key: s,
          ref: b,
          props: r,
          _owner: f.current
        }
      }
      a.Fragment = r, a.jsx = s, a.jsxs = s
    },
    95240: (e, a, o) => {
      e.exports = o(99576)
    },
    61880: (e, a, o) => {
      o.r(a), o.d(a, {
        default: () => t
      });
      const t = o(46188).c
    }
  }
]);