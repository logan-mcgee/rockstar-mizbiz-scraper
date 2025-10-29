try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d2cbbebb-ebbe-4e5e-bb32-9c6d15439e1c", e._sentryDebugIdIdentifier = "sentry-dbid-d2cbbebb-ebbe-4e5e-bb32-9c6d15439e1c")
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
  [1145, 1695, 2295, 4676, 7533], {
    42295: (e, d, o) => {
      e.exports = o(69245)
    },
    69245: (e, d, o) => {
      var r = o(71127),
        n = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, d, o) {
        var r, t = {},
          l = null,
          b = null;
        for (r in void 0 !== o && (l = "" + o), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (b = d.ref), d) a.call(d, r) && !f.hasOwnProperty(r) && (t[r] = d[r]);
        if (e && e.defaultProps)
          for (r in d = e.defaultProps) void 0 === t[r] && (t[r] = d[r]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: b,
          props: t,
          _owner: s.current
        }
      }
      d.Fragment = t, d.jsx = l, d.jsxs = l
    }
  }
]);