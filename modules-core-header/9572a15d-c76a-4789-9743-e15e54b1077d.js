try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "9572a15d-c76a-4789-9743-e15e54b1077d", e._sentryDebugIdIdentifier = "sentry-dbid-9572a15d-c76a-4789-9743-e15e54b1077d")
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
  [616, 3473, 5854], {
    25854: (e, d, o) => {
      e.exports = o(41454)
    },
    41454: (e, d, o) => {
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
          c = null;
        for (a in void 0 !== o && (f = "" + o), void 0 !== d.key && (f = "" + d.key), void 0 !== d.ref && (c = d.ref), d) t.call(d, a) && !l.hasOwnProperty(a) && (n[a] = d[a]);
        if (e && e.defaultProps)
          for (a in d = e.defaultProps) void 0 === n[a] && (n[a] = d[a]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: c,
          props: n,
          _owner: s.current
        }
      }
      d.Fragment = n, d.jsx = f, d.jsxs = f
    }
  }
]);