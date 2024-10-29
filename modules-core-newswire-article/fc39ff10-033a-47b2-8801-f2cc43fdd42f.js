! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      f = (new Error).stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "fc39ff10-033a-47b2-8801-f2cc43fdd42f", e._sentryDebugIdIdentifier = "sentry-dbid-fc39ff10-033a-47b2-8801-f2cc43fdd42f")
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
    26516: (e, f, r) => {
      var o = r(71403),
        a = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        t = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, f, r) {
        var o, d = {},
          s = null,
          _ = null;
        for (o in void 0 !== r && (s = "" + r), void 0 !== f.key && (s = "" + f.key), void 0 !== f.ref && (_ = f.ref), f) n.call(f, o) && !l.hasOwnProperty(o) && (d[o] = f[o]);
        if (e && e.defaultProps)
          for (o in f = e.defaultProps) void 0 === d[o] && (d[o] = f[o]);
        return {
          $$typeof: a,
          type: e,
          key: s,
          ref: _,
          props: d,
          _owner: t.current
        }
      }
      f.Fragment = d, f.jsx = s, f.jsxs = s
    },
    46632: (e, f, r) => {
      e.exports = r(26516)
    }
  }
]);