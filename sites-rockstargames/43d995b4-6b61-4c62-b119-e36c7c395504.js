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
      var t = o(71403),
        a = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, r, o) {
        var t, n = {},
          l = null,
          c = null;
        for (t in void 0 !== o && (l = "" + o), void 0 !== r.key && (l = "" + r.key), void 0 !== r.ref && (c = r.ref), r) s.call(r, t) && !f.hasOwnProperty(t) && (n[t] = r[t]);
        if (e && e.defaultProps)
          for (t in r = e.defaultProps) void 0 === n[t] && (n[t] = r[t]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: c,
          props: n,
          _owner: d.current
        }
      }
      r.Fragment = n, r.jsx = l, r.jsxs = l
    },
    46632: (e, r, o) => {
      e.exports = o(26516)
    }
  }
]);