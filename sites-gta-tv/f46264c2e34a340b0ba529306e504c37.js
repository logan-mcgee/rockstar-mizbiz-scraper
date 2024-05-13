! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "387127b2-a0ef-42d8-ae7f-249d6f4a184e", e._sentryDebugIdIdentifier = "sentry-dbid-387127b2-a0ef-42d8-ae7f-249d6f4a184e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [860], {
    9576: (e, a, t) => {
      var d = t(1664),
        o = Symbol.for("react.element"),
        f = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        n = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, t) {
        var d, f = {},
          l = null,
          _ = null;
        for (d in void 0 !== t && (l = "" + t), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) r.call(a, d) && !s.hasOwnProperty(d) && (f[d] = a[d]);
        if (e && e.defaultProps)
          for (d in a = e.defaultProps) void 0 === f[d] && (f[d] = a[d]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: _,
          props: f,
          _owner: n.current
        }
      }
      a.Fragment = f, a.jsx = l, a.jsxs = l
    },
    5240: (e, a, t) => {
      e.exports = t(9576)
    }
  }
]);