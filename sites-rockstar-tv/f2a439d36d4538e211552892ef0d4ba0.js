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
    9576: (e, a, r) => {
      var t = r(1664),
        o = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, r) {
        var t, d = {},
          f = null,
          _ = null;
        for (t in void 0 !== r && (f = "" + r), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) n.call(a, t) && !l.hasOwnProperty(t) && (d[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === d[t] && (d[t] = a[t]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: _,
          props: d,
          _owner: s.current
        }
      }
      a.Fragment = d, a.jsx = f, a.jsxs = f
    },
    5240: (e, a, r) => {
      e.exports = r(9576)
    }
  }
]);