! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bc76d612-d67c-46ab-8edc-90e63a82afc3", e._sentryDebugIdIdentifier = "sentry-dbid-bc76d612-d67c-46ab-8edc-90e63a82afc3")
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
  [240], {
    99576: (e, a, r) => {
      var o = r(51664),
        n = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, r) {
        var o, d = {},
          f = null,
          c = null;
        for (o in void 0 !== r && (f = "" + r), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (c = a.ref), a) t.call(a, o) && !s.hasOwnProperty(o) && (d[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === d[o] && (d[o] = a[o]);
        return {
          $$typeof: n,
          type: e,
          key: f,
          ref: c,
          props: d,
          _owner: l.current
        }
      }
      a.Fragment = d, a.jsx = f, a.jsxs = f
    },
    95240: (e, a, r) => {
      e.exports = r(99576)
    }
  }
]);