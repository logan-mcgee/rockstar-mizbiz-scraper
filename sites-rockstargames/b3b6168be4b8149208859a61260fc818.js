! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "1de33316-231e-4cc2-b08d-205d8bfdbcdc", e._sentryDebugIdIdentifier = "sentry-dbid-1de33316-231e-4cc2-b08d-205d8bfdbcdc")
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
  [240, 860], {
    99576: (e, r, o) => {
      var a = o(51664),
        t = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, r, o) {
        var a, d = {},
          l = null,
          b = null;
        for (a in void 0 !== o && (l = "" + o), void 0 !== r.key && (l = "" + r.key), void 0 !== r.ref && (b = r.ref), r) n.call(r, a) && !f.hasOwnProperty(a) && (d[a] = r[a]);
        if (e && e.defaultProps)
          for (a in r = e.defaultProps) void 0 === d[a] && (d[a] = r[a]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: b,
          props: d,
          _owner: s.current
        }
      }
      r.Fragment = d, r.jsx = l, r.jsxs = l
    },
    95240: (e, r, o) => {
      e.exports = o(99576)
    }
  }
]);