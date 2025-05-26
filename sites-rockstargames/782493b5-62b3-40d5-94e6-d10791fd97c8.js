! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "782493b5-62b3-40d5-94e6-d10791fd97c8", e._sentryDebugIdIdentifier = "sentry-dbid-782493b5-62b3-40d5-94e6-d10791fd97c8")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [2487, 5854, 6854], {
    25854: (e, a, t) => {
      e.exports = t(41454)
    },
    41454: (e, a, t) => {
      var d = t(62229),
        o = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        n = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, t) {
        var d, r = {},
          f = null,
          i = null;
        for (d in void 0 !== t && (f = "" + t), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (i = a.ref), a) l.call(a, d) && !s.hasOwnProperty(d) && (r[d] = a[d]);
        if (e && e.defaultProps)
          for (d in a = e.defaultProps) void 0 === r[d] && (r[d] = a[d]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: i,
          props: r,
          _owner: n.current
        }
      }
      a.Fragment = r, a.jsx = f, a.jsxs = f
    }
  }
]);