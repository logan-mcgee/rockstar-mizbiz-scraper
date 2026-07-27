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
    94931(e, a, o) {
      var d = o(4637),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        s = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, o) {
        var d, n = {},
          l = null,
          c = null;
        for (d in void 0 !== o && (l = "" + o), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (c = a.ref), a) t.call(a, d) && !f.hasOwnProperty(d) && (n[d] = a[d]);
        if (e && e.defaultProps)
          for (d in a = e.defaultProps) void 0 === n[d] && (n[d] = a[d]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: c,
          props: n,
          _owner: s.current
        }
      }
      a.Fragment = n, a.jsx = l, a.jsxs = l
    },
    39793(e, a, o) {
      e.exports = o(94931)
    }
  }
]);