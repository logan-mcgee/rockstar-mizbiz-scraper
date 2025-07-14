try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "21b09438-5a70-45fd-a7f6-bf2e0037e109", e._sentryDebugIdIdentifier = "sentry-dbid-21b09438-5a70-45fd-a7f6-bf2e0037e109")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [5854], {
    25854: (e, o, d) => {
      e.exports = d(41454)
    },
    41454: (e, o, d) => {
      var a = d(62229),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, d) {
        var a, n = {},
          s = null,
          i = null;
        for (a in void 0 !== d && (s = "" + d), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (i = o.ref), o) t.call(o, a) && !l.hasOwnProperty(a) && (n[a] = o[a]);
        if (e && e.defaultProps)
          for (a in o = e.defaultProps) void 0 === n[a] && (n[a] = o[a]);
        return {
          $$typeof: r,
          type: e,
          key: s,
          ref: i,
          props: n,
          _owner: f.current
        }
      }
      o.Fragment = n, o.jsx = s, o.jsxs = s
    }
  }
]);