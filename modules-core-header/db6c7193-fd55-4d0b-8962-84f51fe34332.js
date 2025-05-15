! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "db6c7193-fd55-4d0b-8962-84f51fe34332", e._sentryDebugIdIdentifier = "sentry-dbid-db6c7193-fd55-4d0b-8962-84f51fe34332")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [616, 2487, 3473, 5854, 6854], {
    25854: (e, a, o) => {
      e.exports = o(41454)
    },
    41454: (e, a, o) => {
      var t = o(71127),
        d = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, o) {
        var t, l = {},
          f = null,
          b = null;
        for (t in void 0 !== o && (f = "" + o), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (b = a.ref), a) r.call(a, t) && !s.hasOwnProperty(t) && (l[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === l[t] && (l[t] = a[t]);
        return {
          $$typeof: d,
          type: e,
          key: f,
          ref: b,
          props: l,
          _owner: n.current
        }
      }
      a.Fragment = l, a.jsx = f, a.jsxs = f
    }
  }
]);