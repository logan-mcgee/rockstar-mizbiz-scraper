try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "06def2c2-9d5a-475f-a892-df26cfc22973", e._sentryDebugIdIdentifier = "sentry-dbid-06def2c2-9d5a-475f-a892-df26cfc22973")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2295, 4676, 5423, 7333, 7533], {
    42295: (e, d, o) => {
      e.exports = o(69245)
    },
    69245: (e, d, o) => {
      var a = o(71127),
        f = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        t = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, d, o) {
        var a, r = {},
          l = null,
          i = null;
        for (a in void 0 !== o && (l = "" + o), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (i = d.ref), d) n.call(d, a) && !s.hasOwnProperty(a) && (r[a] = d[a]);
        if (e && e.defaultProps)
          for (a in d = e.defaultProps) void 0 === r[a] && (r[a] = d[a]);
        return {
          $$typeof: f,
          type: e,
          key: l,
          ref: i,
          props: r,
          _owner: t.current
        }
      }
      d.Fragment = r, d.jsx = l, d.jsxs = l
    }
  }
]);