try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "551f10c7-dc0f-47ce-ac96-870d8cff664e", e._sentryDebugIdIdentifier = "sentry-dbid-551f10c7-dc0f-47ce-ac96-870d8cff664e")
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
  [2295, 4618, 4676, 7533, 9980], {
    42295: (e, d, o) => {
      e.exports = o(69245)
    },
    69245: (e, d, o) => {
      var f = o(71127),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        a = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, d, o) {
        var f, n = {},
          l = null,
          c = null;
        for (f in void 0 !== o && (l = "" + o), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (c = d.ref), d) t.call(d, f) && !s.hasOwnProperty(f) && (n[f] = d[f]);
        if (e && e.defaultProps)
          for (f in d = e.defaultProps) void 0 === n[f] && (n[f] = d[f]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: c,
          props: n,
          _owner: a.current
        }
      }
      d.Fragment = n, d.jsx = l, d.jsxs = l
    }
  }
]);