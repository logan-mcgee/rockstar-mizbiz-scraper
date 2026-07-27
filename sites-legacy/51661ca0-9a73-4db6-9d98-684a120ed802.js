try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "51661ca0-9a73-4db6-9d98-684a120ed802", e._sentryDebugIdIdentifier = "sentry-dbid-51661ca0-9a73-4db6-9d98-684a120ed802")
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
  [3115, 7419, 9793], {
    94931(e, a, d) {
      var t = d(93082),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, d) {
        var t, o = {},
          l = null,
          i = null;
        for (t in void 0 !== d && (l = "" + d), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (i = a.ref), a) r.call(a, t) && !f.hasOwnProperty(t) && (o[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === o[t] && (o[t] = a[t]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: o,
          _owner: s.current
        }
      }
      a.Fragment = o, a.jsx = l, a.jsxs = l
    },
    39793(e, a, d) {
      e.exports = d(94931)
    }
  }
]);