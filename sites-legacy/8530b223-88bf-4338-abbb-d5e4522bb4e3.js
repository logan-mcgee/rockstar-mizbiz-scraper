! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "8530b223-88bf-4338-abbb-d5e4522bb4e3", e._sentryDebugIdIdentifier = "sentry-dbid-8530b223-88bf-4338-abbb-d5e4522bb4e3")
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
    32469: (e, d, a) => {
      var o = a(62229),
        r = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, d, a) {
        var o, t = {},
          f = null,
          b = null;
        for (o in void 0 !== a && (f = "" + a), void 0 !== d.key && (f = "" + d.key), void 0 !== d.ref && (b = d.ref), d) n.call(d, o) && !s.hasOwnProperty(o) && (t[o] = d[o]);
        if (e && e.defaultProps)
          for (o in d = e.defaultProps) void 0 === t[o] && (t[o] = d[o]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: b,
          props: t,
          _owner: l.current
        }
      }
      d.Fragment = t, d.jsx = f, d.jsxs = f
    },
    73855: (e, d, a) => {
      e.exports = a(32469)
    }
  }
]);