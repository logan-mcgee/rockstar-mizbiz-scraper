try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "6b6a82e4-9c10-4139-8b83-2f187d838061", e._sentryDebugIdIdentifier = "sentry-dbid-6b6a82e4-9c10-4139-8b83-2f187d838061")
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
    2295: (e, d, o) => {
      e.exports = o(9245)
    },
    9245: (e, d, o) => {
      var a = o(2229),
        r = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        t = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, d, o) {
        var a, s = {},
          l = null,
          i = null;
        for (a in void 0 !== o && (l = "" + o), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (i = d.ref), d) n.call(d, a) && !f.hasOwnProperty(a) && (s[a] = d[a]);
        if (e && e.defaultProps)
          for (a in d = e.defaultProps) void 0 === s[a] && (s[a] = d[a]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: i,
          props: s,
          _owner: t.current
        }
      }
      d.jsx = s, d.jsxs = s
    }
  }
]);