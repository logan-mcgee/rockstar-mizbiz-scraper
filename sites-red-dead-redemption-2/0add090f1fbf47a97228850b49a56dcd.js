! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "9eaf42f1-79f6-448d-930e-1291d7435650", e._sentryDebugIdIdentifier = "sentry-dbid-9eaf42f1-79f6-448d-930e-1291d7435650")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [240], {
    99576: (e, d, r) => {
      var o = r(51664),
        t = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, d, r) {
        var o, a = {},
          l = null,
          _ = null;
        for (o in void 0 !== r && (l = "" + r), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (_ = d.ref), d) n.call(d, o) && !s.hasOwnProperty(o) && (a[o] = d[o]);
        if (e && e.defaultProps)
          for (o in d = e.defaultProps) void 0 === a[o] && (a[o] = d[o]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: _,
          props: a,
          _owner: f.current
        }
      }
      d.Fragment = a, d.jsx = l, d.jsxs = l
    },
    95240: (e, d, r) => {
      e.exports = r(99576)
    }
  }
]);