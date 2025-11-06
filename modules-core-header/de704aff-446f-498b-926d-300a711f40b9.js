try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "de704aff-446f-498b-926d-300a711f40b9", e._sentryDebugIdIdentifier = "sentry-dbid-de704aff-446f-498b-926d-300a711f40b9")
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
  [2295, 4676, 7533], {
    42295: (e, o, d) => {
      e.exports = d(69245)
    },
    69245: (e, o, d) => {
      var a = d(71127),
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
          i = null;
        for (a in void 0 !== d && (l = "" + d), void 0 !== o.key && (l = "" + o.key), void 0 !== o.ref && (i = o.ref), o) t.call(o, a) && !s.hasOwnProperty(a) && (n[a] = o[a]);
        if (e && e.defaultProps)
          for (a in o = e.defaultProps) void 0 === n[a] && (n[a] = o[a]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: i,
          props: n,
          _owner: f.current
        }
      }
      o.Fragment = n, o.jsx = l, o.jsxs = l
    }
  }
]);