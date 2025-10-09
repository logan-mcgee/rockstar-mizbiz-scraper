try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "400ddd7c-edb6-4fc4-81ef-6fd116bb9455", e._sentryDebugIdIdentifier = "sentry-dbid-400ddd7c-edb6-4fc4-81ef-6fd116bb9455")
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
    42295: (e, d, o) => {
      e.exports = o(69245)
    },
    69245: (e, d, o) => {
      var r = o(71127),
        n = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, d, o) {
        var r, t = {},
          l = null,
          i = null;
        for (r in void 0 !== o && (l = "" + o), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (i = d.ref), d) f.call(d, r) && !s.hasOwnProperty(r) && (t[r] = d[r]);
        if (e && e.defaultProps)
          for (r in d = e.defaultProps) void 0 === t[r] && (t[r] = d[r]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: t,
          _owner: a.current
        }
      }
      d.Fragment = t, d.jsx = l, d.jsxs = l
    }
  }
]);