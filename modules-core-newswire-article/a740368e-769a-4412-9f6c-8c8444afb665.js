! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "a740368e-769a-4412-9f6c-8c8444afb665", e._sentryDebugIdIdentifier = "sentry-dbid-a740368e-769a-4412-9f6c-8c8444afb665")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [3410, 1029], {
    65039: (e, r, a) => {
      var o = a(62229),
        n = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, r, a) {
        var o, t = {},
          s = null,
          c = null;
        for (o in void 0 !== a && (s = "" + a), void 0 !== r.key && (s = "" + r.key), void 0 !== r.ref && (c = r.ref), r) l.call(r, o) && !f.hasOwnProperty(o) && (t[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === t[o] && (t[o] = r[o]);
        return {
          $$typeof: n,
          type: e,
          key: s,
          ref: c,
          props: t,
          _owner: d.current
        }
      }
      r.Fragment = t, r.jsx = s, r.jsxs = s
    },
    91029: (e, r, a) => {
      e.exports = a(65039)
    }
  }
]);