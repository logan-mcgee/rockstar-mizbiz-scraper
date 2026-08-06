try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "380debc6-ccca-413f-a780-bcd85778b20e", e._sentryDebugIdIdentifier = "sentry-dbid-380debc6-ccca-413f-a780-bcd85778b20e")
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
  [82, 2174, 4555, 7874, 9793], {
    94931(e, d, a) {
      var o = a(4637),
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

      function f(e, d, a) {
        var o, n = {},
          f = null,
          i = null;
        for (o in void 0 !== a && (f = "" + a), void 0 !== d.key && (f = "" + d.key), void 0 !== d.ref && (i = d.ref), d) t.call(d, o) && !l.hasOwnProperty(o) && (n[o] = d[o]);
        if (e && e.defaultProps)
          for (o in d = e.defaultProps) void 0 === n[o] && (n[o] = d[o]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: i,
          props: n,
          _owner: s.current
        }
      }
      d.Fragment = n, d.jsx = f, d.jsxs = f
    },
    39793(e, d, a) {
      e.exports = a(94931)
    }
  }
]);