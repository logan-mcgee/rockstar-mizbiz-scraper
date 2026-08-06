try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "73eb28c7-2a6e-43cc-a5c1-ac98e2524f26", e._sentryDebugIdIdentifier = "sentry-dbid-73eb28c7-2a6e-43cc-a5c1-ac98e2524f26")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2174, 4555, 9793], {
    94931(e, a, d) {
      var o = d(4637),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, d) {
        var o, n = {},
          f = null,
          i = null;
        for (o in void 0 !== d && (f = "" + d), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (i = a.ref), a) t.call(a, o) && !l.hasOwnProperty(o) && (n[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === n[o] && (n[o] = a[o]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: i,
          props: n,
          _owner: s.current
        }
      }
      a.Fragment = n, a.jsx = f, a.jsxs = f
    },
    39793(e, a, d) {
      e.exports = d(94931)
    }
  }
]);