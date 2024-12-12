! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "43d995b4-6b61-4c62-b119-e36c7c395504", e._sentryDebugIdIdentifier = "sentry-dbid-43d995b4-6b61-4c62-b119-e36c7c395504")
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
    26516: (e, r, o) => {
      var a = o(71403),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, r, o) {
        var a, n = {},
          f = null,
          _ = null;
        for (a in void 0 !== o && (f = "" + o), void 0 !== r.key && (f = "" + r.key), void 0 !== r.ref && (_ = r.ref), r) s.call(r, a) && !l.hasOwnProperty(a) && (n[a] = r[a]);
        if (e && e.defaultProps)
          for (a in r = e.defaultProps) void 0 === n[a] && (n[a] = r[a]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: _,
          props: n,
          _owner: d.current
        }
      }
      r.Fragment = n, r.jsx = f, r.jsxs = f
    },
    46632: (e, r, o) => {
      e.exports = o(26516)
    }
  }
]);