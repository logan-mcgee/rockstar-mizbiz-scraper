! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1617df40-e1f8-405f-b5a3-cfa6acb1aa94", e._sentryDebugIdIdentifier = "sentry-dbid-1617df40-e1f8-405f-b5a3-cfa6acb1aa94")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2860, 5240], {
    99576: (e, a, t) => {
      var f = t(51664),
        n = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        r = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, t) {
        var f, d = {},
          l = null,
          _ = null;
        for (f in void 0 !== t && (l = "" + t), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) o.call(a, f) && !s.hasOwnProperty(f) && (d[f] = a[f]);
        if (e && e.defaultProps)
          for (f in a = e.defaultProps) void 0 === d[f] && (d[f] = a[f]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: _,
          props: d,
          _owner: r.current
        }
      }
      a.Fragment = d, a.jsx = l, a.jsxs = l
    },
    95240: (e, a, t) => {
      e.exports = t(99576)
    }
  }
]);