! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "8cb51f14-eaec-45b1-bc82-bb0032c1f843", e._sentryDebugIdIdentifier = "sentry-dbid-8cb51f14-eaec-45b1-bc82-bb0032c1f843")
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
  [3855], {
    32469: (e, r, o) => {
      var a = o(62229),
        n = Symbol.for("react.element"),
        f = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, r, o) {
        var a, f = {},
          s = null,
          _ = null;
        for (a in void 0 !== o && (s = "" + o), void 0 !== r.key && (s = "" + r.key), void 0 !== r.ref && (_ = r.ref), r) t.call(r, a) && !d.hasOwnProperty(a) && (f[a] = r[a]);
        if (e && e.defaultProps)
          for (a in r = e.defaultProps) void 0 === f[a] && (f[a] = r[a]);
        return {
          $$typeof: n,
          type: e,
          key: s,
          ref: _,
          props: f,
          _owner: l.current
        }
      }
      r.Fragment = f, r.jsx = s, r.jsxs = s
    },
    73855: (e, r, o) => {
      e.exports = o(32469)
    }
  }
]);