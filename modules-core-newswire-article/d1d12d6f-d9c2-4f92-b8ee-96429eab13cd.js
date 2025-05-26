! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d1d12d6f-d9c2-4f92-b8ee-96429eab13cd", e._sentryDebugIdIdentifier = "sentry-dbid-d1d12d6f-d9c2-4f92-b8ee-96429eab13cd")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [5854, 7650, 9279], {
    25854: (e, a, d) => {
      e.exports = d(41454)
    },
    41454: (e, a, d) => {
      var t = d(62229),
        o = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, d) {
        var t, l = {},
          f = null,
          i = null;
        for (t in void 0 !== d && (f = "" + d), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (i = a.ref), a) r.call(a, t) && !s.hasOwnProperty(t) && (l[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === l[t] && (l[t] = a[t]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: i,
          props: l,
          _owner: n.current
        }
      }
      a.Fragment = l, a.jsx = f, a.jsxs = f
    }
  }
]);