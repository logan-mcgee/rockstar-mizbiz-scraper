try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "69a709ed-a39b-4dcd-9c52-3739bed145d2", e._sentryDebugIdIdentifier = "sentry-dbid-69a709ed-a39b-4dcd-9c52-3739bed145d2")
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
    70954: (e, d, a) => {
      e.exports = a(92834)
    },
    92834: (e, d, a) => {
      var o = a(71127),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, d, a) {
        var o, n = {},
          l = null,
          i = null;
        for (o in void 0 !== a && (l = "" + a), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (i = d.ref), d) t.call(d, o) && !f.hasOwnProperty(o) && (n[o] = d[o]);
        if (e && e.defaultProps)
          for (o in d = e.defaultProps) void 0 === n[o] && (n[o] = d[o]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: i,
          props: n,
          _owner: s.current
        }
      }
      d.Fragment = n, d.jsx = l, d.jsxs = l
    }
  }
]);