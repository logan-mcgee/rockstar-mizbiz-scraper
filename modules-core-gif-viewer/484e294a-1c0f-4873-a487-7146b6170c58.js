try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "484e294a-1c0f-4873-a487-7146b6170c58", e._sentryDebugIdIdentifier = "sentry-dbid-484e294a-1c0f-4873-a487-7146b6170c58")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [954], {
    954: (e, o, a) => {
      e.exports = a(2834)
    },
    2834: (e, o, a) => {
      var d = a(2229),
        r = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        t = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, a) {
        var d, s = {},
          l = null,
          i = null;
        for (d in void 0 !== a && (l = "" + a), void 0 !== o.key && (l = "" + o.key), void 0 !== o.ref && (i = o.ref), o) n.call(o, d) && !f.hasOwnProperty(d) && (s[d] = o[d]);
        if (e && e.defaultProps)
          for (d in o = e.defaultProps) void 0 === s[d] && (s[d] = o[d]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: i,
          props: s,
          _owner: t.current
        }
      }
      o.jsx = s, o.jsxs = s
    }
  }
]);