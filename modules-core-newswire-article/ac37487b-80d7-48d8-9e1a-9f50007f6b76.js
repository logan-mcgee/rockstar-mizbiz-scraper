! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "ac37487b-80d7-48d8-9e1a-9f50007f6b76", e._sentryDebugIdIdentifier = "sentry-dbid-ac37487b-80d7-48d8-9e1a-9f50007f6b76")
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
  [2570, 1029, 3410, 9830], {
    65039: (e, r, o) => {
      var a = o(62229),
        n = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, r, o) {
        var a, t = {},
          s = null,
          _ = null;
        for (a in void 0 !== o && (s = "" + o), void 0 !== r.key && (s = "" + r.key), void 0 !== r.ref && (_ = r.ref), r) d.call(r, a) && !f.hasOwnProperty(a) && (t[a] = r[a]);
        if (e && e.defaultProps)
          for (a in r = e.defaultProps) void 0 === t[a] && (t[a] = r[a]);
        return {
          $$typeof: n,
          type: e,
          key: s,
          ref: _,
          props: t,
          _owner: l.current
        }
      }
      r.Fragment = t, r.jsx = s, r.jsxs = s
    },
    91029: (e, r, o) => {
      e.exports = o(65039)
    }
  }
]);