try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "9147fcdf-767a-42b6-9e4e-fa70bf70ef96", e._sentryDebugIdIdentifier = "sentry-dbid-9147fcdf-767a-42b6-9e4e-fa70bf70ef96")
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
  [2174, 4555, 6936, 9793], {
    94931(e, o, d) {
      var a = d(4637),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, o, d) {
        var a, n = {},
          l = null,
          b = null;
        for (a in void 0 !== d && (l = "" + d), void 0 !== o.key && (l = "" + o.key), void 0 !== o.ref && (b = o.ref), o) t.call(o, a) && !s.hasOwnProperty(a) && (n[a] = o[a]);
        if (e && e.defaultProps)
          for (a in o = e.defaultProps) void 0 === n[a] && (n[a] = o[a]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: b,
          props: n,
          _owner: f.current
        }
      }
      o.Fragment = n, o.jsx = l, o.jsxs = l
    },
    39793(e, o, d) {
      e.exports = d(94931)
    }
  }
]);