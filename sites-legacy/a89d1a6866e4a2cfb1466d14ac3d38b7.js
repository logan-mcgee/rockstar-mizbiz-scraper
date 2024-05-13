! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "9f2bf95e-4169-42e7-807a-3f57d35df151", e._sentryDebugIdIdentifier = "sentry-dbid-9f2bf95e-4169-42e7-807a-3f57d35df151")
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
    99576: (e, d, a) => {
      var f = a(51664),
        o = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, d, a) {
        var f, t = {},
          s = null,
          _ = null;
        for (f in void 0 !== a && (s = "" + a), void 0 !== d.key && (s = "" + d.key), void 0 !== d.ref && (_ = d.ref), d) r.call(d, f) && !l.hasOwnProperty(f) && (t[f] = d[f]);
        if (e && e.defaultProps)
          for (f in d = e.defaultProps) void 0 === t[f] && (t[f] = d[f]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: _,
          props: t,
          _owner: n.current
        }
      }
      d.Fragment = t, d.jsx = s, d.jsxs = s
    },
    95240: (e, d, a) => {
      e.exports = a(99576)
    },
    61880: (e, d, a) => {
      a.r(d), a.d(d, {
        default: () => f
      });
      const f = a(46188).c
    }
  }
]);