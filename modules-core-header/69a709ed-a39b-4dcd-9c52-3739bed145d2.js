try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "69a709ed-a39b-4dcd-9c52-3739bed145d2", e._sentryDebugIdIdentifier = "sentry-dbid-69a709ed-a39b-4dcd-9c52-3739bed145d2")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139"
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
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, d, o) {
        var a, n = {},
          f = null,
          i = null;
        for (a in void 0 !== o && (f = "" + o), void 0 !== d.key && (f = "" + d.key), void 0 !== d.ref && (i = d.ref), d) t.call(d, a) && !l.hasOwnProperty(a) && (n[a] = d[a]);
        if (e && e.defaultProps)
          for (a in d = e.defaultProps) void 0 === n[a] && (n[a] = d[a]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: i,
          props: n,
          _owner: s.current
        }
      }
      d.Fragment = n, d.jsx = f, d.jsxs = f
    }
  }
]);