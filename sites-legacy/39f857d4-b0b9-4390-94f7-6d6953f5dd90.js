! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "39f857d4-b0b9-4390-94f7-6d6953f5dd90", e._sentryDebugIdIdentifier = "sentry-dbid-39f857d4-b0b9-4390-94f7-6d6953f5dd90")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [8096], {
    45356: (e, d, f) => {
      var o = f(62229),
        r = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, d, f) {
        var o, t = {},
          s = null,
          _ = null;
        for (o in void 0 !== f && (s = "" + f), void 0 !== d.key && (s = "" + d.key), void 0 !== d.ref && (_ = d.ref), d) n.call(d, o) && !l.hasOwnProperty(o) && (t[o] = d[o]);
        if (e && e.defaultProps)
          for (o in d = e.defaultProps) void 0 === t[o] && (t[o] = d[o]);
        return {
          $$typeof: r,
          type: e,
          key: s,
          ref: _,
          props: t,
          _owner: a.current
        }
      }
      d.Fragment = t, d.jsx = s, d.jsxs = s
    },
    98096: (e, d, f) => {
      e.exports = f(45356)
    }
  }
]);