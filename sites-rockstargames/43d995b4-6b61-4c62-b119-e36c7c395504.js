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
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, r) {
        var o, n = {},
          l = null,
          _ = null;
        for (o in void 0 !== r && (l = "" + r), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) s.call(a, o) && !f.hasOwnProperty(o) && (n[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === n[o] && (n[o] = a[o]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: _,
          props: n,
          _owner: d.current
        }
      }
      a.Fragment = n, a.jsx = l, a.jsxs = l
    },
    46632: (e, a, r) => {
      e.exports = r(26516)
    }
  }
]);