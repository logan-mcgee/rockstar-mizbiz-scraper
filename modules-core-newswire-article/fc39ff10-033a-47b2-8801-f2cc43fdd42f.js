! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "fc39ff10-033a-47b2-8801-f2cc43fdd42f", e._sentryDebugIdIdentifier = "sentry-dbid-fc39ff10-033a-47b2-8801-f2cc43fdd42f")
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
  [6632], {
    26516: (e, r, o) => {
      var a = o(71403),
        n = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, r, o) {
        var a, d = {},
          s = null,
          _ = null;
        for (a in void 0 !== o && (s = "" + o), void 0 !== r.key && (s = "" + r.key), void 0 !== r.ref && (_ = r.ref), r) t.call(r, a) && !l.hasOwnProperty(a) && (d[a] = r[a]);
        if (e && e.defaultProps)
          for (a in r = e.defaultProps) void 0 === d[a] && (d[a] = r[a]);
        return {
          $$typeof: n,
          type: e,
          key: s,
          ref: _,
          props: d,
          _owner: f.current
        }
      }
      r.Fragment = d, r.jsx = s, r.jsxs = s
    },
    46632: (e, r, o) => {
      e.exports = o(26516)
    }
  }
]);