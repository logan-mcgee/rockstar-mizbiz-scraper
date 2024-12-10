! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "43d995b4-6b61-4c62-b119-e36c7c395504", e._sentryDebugIdIdentifier = "sentry-dbid-43d995b4-6b61-4c62-b119-e36c7c395504")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [6632], {
    26516: (e, a, r) => {
      var o = r(71403),
        d = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, r) {
        var o, t = {},
          f = null,
          b = null;
        for (o in void 0 !== r && (f = "" + r), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (b = a.ref), a) n.call(a, o) && !l.hasOwnProperty(o) && (t[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === t[o] && (t[o] = a[o]);
        return {
          $$typeof: d,
          type: e,
          key: f,
          ref: b,
          props: t,
          _owner: s.current
        }
      }
      a.Fragment = t, a.jsx = f, a.jsxs = f
    },
    46632: (e, a, r) => {
      e.exports = r(26516)
    }
  }
]);