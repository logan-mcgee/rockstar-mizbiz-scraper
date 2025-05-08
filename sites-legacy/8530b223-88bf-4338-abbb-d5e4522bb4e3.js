! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8530b223-88bf-4338-abbb-d5e4522bb4e3", e._sentryDebugIdIdentifier = "sentry-dbid-8530b223-88bf-4338-abbb-d5e4522bb4e3")
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
  [3855], {
    32469: (e, a, o) => {
      var r = o(62229),
        t = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, o) {
        var r, d = {},
          f = null,
          b = null;
        for (r in void 0 !== o && (f = "" + o), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (b = a.ref), a) n.call(a, r) && !s.hasOwnProperty(r) && (d[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === d[r] && (d[r] = a[r]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: b,
          props: d,
          _owner: l.current
        }
      }
      a.Fragment = d, a.jsx = f, a.jsxs = f
    },
    73855: (e, a, o) => {
      e.exports = o(32469)
    }
  }
]);