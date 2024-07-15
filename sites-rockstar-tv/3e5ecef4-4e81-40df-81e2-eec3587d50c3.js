! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "3e5ecef4-4e81-40df-81e2-eec3587d50c3", e._sentryDebugIdIdentifier = "sentry-dbid-3e5ecef4-4e81-40df-81e2-eec3587d50c3")
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
    99576: (e, r, t) => {
      var a = t(51664),
        o = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, r, t) {
        var a, d = {},
          l = null,
          _ = null;
        for (a in void 0 !== t && (l = "" + t), void 0 !== r.key && (l = "" + r.key), void 0 !== r.ref && (_ = r.ref), r) n.call(r, a) && !f.hasOwnProperty(a) && (d[a] = r[a]);
        if (e && e.defaultProps)
          for (a in r = e.defaultProps) void 0 === d[a] && (d[a] = r[a]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: _,
          props: d,
          _owner: s.current
        }
      }
      r.Fragment = d, r.jsx = l, r.jsxs = l
    },
    95240: (e, r, t) => {
      e.exports = t(99576)
    }
  }
]);