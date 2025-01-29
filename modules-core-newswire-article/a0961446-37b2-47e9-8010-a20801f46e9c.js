! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a0961446-37b2-47e9-8010-a20801f46e9c", e._sentryDebugIdIdentifier = "sentry-dbid-a0961446-37b2-47e9-8010-a20801f46e9c")
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
  [4281, 8096], {
    45356: (e, a, r) => {
      var o = r(62229),
        n = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, a, r) {
        var o, t = {},
          s = null,
          _ = null;
        for (o in void 0 !== r && (s = "" + r), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) d.call(a, o) && !f.hasOwnProperty(o) && (t[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === t[o] && (t[o] = a[o]);
        return {
          $$typeof: n,
          type: e,
          key: s,
          ref: _,
          props: t,
          _owner: l.current
        }
      }
      a.Fragment = t, a.jsx = s, a.jsxs = s
    },
    98096: (e, a, r) => {
      e.exports = r(45356)
    }
  }
]);