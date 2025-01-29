! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "a591717d-2b4d-445a-ba8f-a497a5bdeb9b", e._sentryDebugIdIdentifier = "sentry-dbid-a591717d-2b4d-445a-ba8f-a497a5bdeb9b")
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
  [471, 8096, 8676], {
    45356: (e, r, a) => {
      var o = a(62229),
        d = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, r, a) {
        var o, n = {},
          s = null,
          _ = null;
        for (o in void 0 !== a && (s = "" + a), void 0 !== r.key && (s = "" + r.key), void 0 !== r.ref && (_ = r.ref), r) t.call(r, o) && !l.hasOwnProperty(o) && (n[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === n[o] && (n[o] = r[o]);
        return {
          $$typeof: d,
          type: e,
          key: s,
          ref: _,
          props: n,
          _owner: f.current
        }
      }
      r.Fragment = n, r.jsx = s, r.jsxs = s
    },
    98096: (e, r, a) => {
      e.exports = a(45356)
    }
  }
]);