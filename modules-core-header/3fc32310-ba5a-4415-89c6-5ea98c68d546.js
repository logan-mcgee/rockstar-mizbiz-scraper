try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "3fc32310-ba5a-4415-89c6-5ea98c68d546", e._sentryDebugIdIdentifier = "sentry-dbid-3fc32310-ba5a-4415-89c6-5ea98c68d546")
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
  [1913, 2295, 4676, 6827, 7533], {
    42295: (e, o, a) => {
      e.exports = a(69245)
    },
    69245: (e, o, a) => {
      var d = a(71127),
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

      function l(e, o, a) {
        var d, n = {},
          l = null,
          c = null;
        for (d in void 0 !== a && (l = "" + a), void 0 !== o.key && (l = "" + o.key), void 0 !== o.ref && (c = o.ref), o) t.call(o, d) && !f.hasOwnProperty(d) && (n[d] = o[d]);
        if (e && e.defaultProps)
          for (d in o = e.defaultProps) void 0 === n[d] && (n[d] = o[d]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: c,
          props: n,
          _owner: s.current
        }
      }
      o.Fragment = n, o.jsx = l, o.jsxs = l
    }
  }
]);