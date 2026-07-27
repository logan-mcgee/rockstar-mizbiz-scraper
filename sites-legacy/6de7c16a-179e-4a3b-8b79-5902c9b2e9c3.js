try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6de7c16a-179e-4a3b-8b79-5902c9b2e9c3", e._sentryDebugIdIdentifier = "sentry-dbid-6de7c16a-179e-4a3b-8b79-5902c9b2e9c3")
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
  [9793], {
    94931(e, a, t) {
      var n = t(93082),
        d = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, t) {
        var n, o = {},
          l = null,
          i = null;
        for (n in void 0 !== t && (l = "" + t), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (i = a.ref), a) r.call(a, n) && !f.hasOwnProperty(n) && (o[n] = a[n]);
        if (e && e.defaultProps)
          for (n in a = e.defaultProps) void 0 === o[n] && (o[n] = a[n]);
        return {
          $$typeof: d,
          type: e,
          key: l,
          ref: i,
          props: o,
          _owner: s.current
        }
      }
      a.Fragment = o, a.jsx = l, a.jsxs = l
    },
    39793(e, a, t) {
      e.exports = t(94931)
    }
  }
]);