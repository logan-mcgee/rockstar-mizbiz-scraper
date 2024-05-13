! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d8da0884-22d9-4a23-8d61-381aa38634f3", e._sentryDebugIdIdentifier = "sentry-dbid-d8da0884-22d9-4a23-8d61-381aa38634f3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstar-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [240], {
    9576: (e, a, d) => {
      var r = d(1664),
        t = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, d) {
        var r, o = {},
          l = null,
          _ = null;
        for (r in void 0 !== d && (l = "" + d), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) n.call(a, r) && !s.hasOwnProperty(r) && (o[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === o[r] && (o[r] = a[r]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: _,
          props: o,
          _owner: f.current
        }
      }
      a.Fragment = o, a.jsx = l, a.jsxs = l
    },
    5240: (e, a, d) => {
      e.exports = d(9576)
    }
  }
]);