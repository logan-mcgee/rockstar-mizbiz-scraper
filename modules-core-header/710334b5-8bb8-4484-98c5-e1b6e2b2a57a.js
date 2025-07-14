try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "710334b5-8bb8-4484-98c5-e1b6e2b2a57a", e._sentryDebugIdIdentifier = "sentry-dbid-710334b5-8bb8-4484-98c5-e1b6e2b2a57a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "2a74753c0c949d4b2cbcf6cb65742761c430cda0",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2a74753c0c949d4b2cbcf6cb65742761c430cda0"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [616, 3473, 5854], {
    25854: (e, o, a) => {
      e.exports = a(41454)
    },
    41454: (e, o, a) => {
      var d = a(71127),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        s = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, o, a) {
        var d, n = {},
          f = null,
          c = null;
        for (d in void 0 !== a && (f = "" + a), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (c = o.ref), o) t.call(o, d) && !l.hasOwnProperty(d) && (n[d] = o[d]);
        if (e && e.defaultProps)
          for (d in o = e.defaultProps) void 0 === n[d] && (n[d] = o[d]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: c,
          props: n,
          _owner: s.current
        }
      }
      o.Fragment = n, o.jsx = f, o.jsxs = f
    }
  }
]);