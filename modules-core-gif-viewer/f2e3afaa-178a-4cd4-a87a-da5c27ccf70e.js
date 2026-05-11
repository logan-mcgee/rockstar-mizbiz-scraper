try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f2e3afaa-178a-4cd4-a87a-da5c27ccf70e", e._sentryDebugIdIdentifier = "sentry-dbid-f2e3afaa-178a-4cd4-a87a-da5c27ccf70e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [2295], {
    9245(e, a, o) {
      var d = o(1127),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        f = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, o) {
        var d, n = {},
          l = null,
          i = null;
        for (d in void 0 !== o && (l = "" + o), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (i = a.ref), a) t.call(a, d) && !s.hasOwnProperty(d) && (n[d] = a[d]);
        if (e && e.defaultProps)
          for (d in a = e.defaultProps) void 0 === n[d] && (n[d] = a[d]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: i,
          props: n,
          _owner: f.current
        }
      }
      a.Fragment = n, a.jsx = l, a.jsxs = l
    },
    2295(e, a, o) {
      e.exports = o(9245)
    }
  }
]);