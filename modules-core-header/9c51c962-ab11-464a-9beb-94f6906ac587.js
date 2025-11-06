try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "9c51c962-ab11-464a-9beb-94f6906ac587", e._sentryDebugIdIdentifier = "sentry-dbid-9c51c962-ab11-464a-9beb-94f6906ac587")
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
  [2295, 4202, 4676, 7533, 7864], {
    42295: (e, o, a) => {
      e.exports = a(69245)
    },
    69245: (e, o, a) => {
      var r = a(71127),
        n = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, o, a) {
        var r, t = {},
          l = null,
          c = null;
        for (r in void 0 !== a && (l = "" + a), void 0 !== o.key && (l = "" + o.key), void 0 !== o.ref && (c = o.ref), o) d.call(o, r) && !f.hasOwnProperty(r) && (t[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === t[r] && (t[r] = o[r]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: c,
          props: t,
          _owner: s.current
        }
      }
      o.Fragment = t, o.jsx = l, o.jsxs = l
    }
  }
]);