try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e7a39c47-f36a-4ff8-9629-fe8888706f01", e._sentryDebugIdIdentifier = "sentry-dbid-e7a39c47-f36a-4ff8-9629-fe8888706f01")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [7609, 8169, 9793], {
    94931(e, a, t) {
      var n = t(93082),
        o = Symbol.for("react.element"),
        f = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, t) {
        var n, f = {},
          l = null,
          i = null;
        for (n in void 0 !== t && (l = "" + t), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (i = a.ref), a) r.call(a, n) && !d.hasOwnProperty(n) && (f[n] = a[n]);
        if (e && e.defaultProps)
          for (n in a = e.defaultProps) void 0 === f[n] && (f[n] = a[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: i,
          props: f,
          _owner: s.current
        }
      }
      a.Fragment = f, a.jsx = l, a.jsxs = l
    },
    39793(e, a, t) {
      e.exports = t(94931)
    }
  }
]);