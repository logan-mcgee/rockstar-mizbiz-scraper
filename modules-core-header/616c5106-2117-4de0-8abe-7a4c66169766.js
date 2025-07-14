try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "616c5106-2117-4de0-8abe-7a4c66169766", e._sentryDebugIdIdentifier = "sentry-dbid-616c5106-2117-4de0-8abe-7a4c66169766")
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
  [616, 2487, 3473, 5854, 6854], {
    25854: (e, o, d) => {
      e.exports = d(41454)
    },
    41454: (e, o, d) => {
      var a = d(71127),
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

      function f(e, o, d) {
        var a, n = {},
          f = null,
          c = null;
        for (a in void 0 !== d && (f = "" + d), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (c = o.ref), o) t.call(o, a) && !l.hasOwnProperty(a) && (n[a] = o[a]);
        if (e && e.defaultProps)
          for (a in o = e.defaultProps) void 0 === n[a] && (n[a] = o[a]);
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