try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "057536c9-620b-4ffd-98f6-99ecd4ab700c", e._sentryDebugIdIdentifier = "sentry-dbid-057536c9-620b-4ffd-98f6-99ecd4ab700c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [954, 5716, 8573], {
    70954: (e, d, o) => {
      e.exports = o(92834)
    },
    92834: (e, d, o) => {
      var a = o(71127),
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

      function l(e, d, o) {
        var a, n = {},
          l = null,
          i = null;
        for (a in void 0 !== o && (l = "" + o), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (i = d.ref), d) t.call(d, a) && !s.hasOwnProperty(a) && (n[a] = d[a]);
        if (e && e.defaultProps)
          for (a in d = e.defaultProps) void 0 === n[a] && (n[a] = d[a]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: i,
          props: n,
          _owner: f.current
        }
      }
      d.Fragment = n, d.jsx = l, d.jsxs = l
    }
  }
]);