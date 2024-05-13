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
    99576: (e, r, d) => {
      var o = d(51664),
        a = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, r, d) {
        var o, t = {},
          l = null,
          b = null;
        for (o in void 0 !== d && (l = "" + d), void 0 !== r.key && (l = "" + r.key), void 0 !== r.ref && (b = r.ref), r) n.call(r, o) && !s.hasOwnProperty(o) && (t[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === t[o] && (t[o] = r[o]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: b,
          props: t,
          _owner: f.current
        }
      }
      r.Fragment = t, r.jsx = l, r.jsxs = l
    },
    95240: (e, r, d) => {
      e.exports = d(99576)
    }
  }
]);