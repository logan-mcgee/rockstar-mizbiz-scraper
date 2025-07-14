try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "b1bec8ea-634c-4c17-b395-4e9a6a6be32e", e._sentryDebugIdIdentifier = "sentry-dbid-b1bec8ea-634c-4c17-b395-4e9a6a6be32e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [5854], {
    1454: (e, o, a) => {
      var r = a(2229),
        n = Symbol.for("react.element"),
        t = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, o, a) {
        var r, f = {},
          l = null,
          i = null;
        for (r in void 0 !== a && (l = "" + a), void 0 !== o.key && (l = "" + o.key), void 0 !== o.ref && (i = o.ref), o) t.call(o, r) && !s.hasOwnProperty(r) && (f[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === f[r] && (f[r] = o[r]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: f,
          _owner: d.current
        }
      }
      o.jsx = f, o.jsxs = f
    },
    5854: (e, o, a) => {
      e.exports = a(1454)
    }
  }
]);