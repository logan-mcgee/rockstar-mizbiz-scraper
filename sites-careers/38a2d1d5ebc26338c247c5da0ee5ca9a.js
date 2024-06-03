! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "65b2c671-e423-4dc0-b24d-f0c042fb0db5", e._sentryDebugIdIdentifier = "sentry-dbid-65b2c671-e423-4dc0-b24d-f0c042fb0db5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [240], {
    99576: (e, r, a) => {
      var o = a(51664),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, r, a) {
        var o, n = {},
          l = null,
          b = null;
        for (o in void 0 !== a && (l = "" + a), void 0 !== r.key && (l = "" + r.key), void 0 !== r.ref && (b = r.ref), r) f.call(r, o) && !s.hasOwnProperty(o) && (n[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === n[o] && (n[o] = r[o]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: b,
          props: n,
          _owner: d.current
        }
      }
      r.Fragment = n, r.jsx = l, r.jsxs = l
    },
    95240: (e, r, a) => {
      e.exports = a(99576)
    }
  }
]);