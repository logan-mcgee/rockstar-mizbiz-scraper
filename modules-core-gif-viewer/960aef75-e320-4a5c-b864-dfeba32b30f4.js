try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "960aef75-e320-4a5c-b864-dfeba32b30f4", e._sentryDebugIdIdentifier = "sentry-dbid-960aef75-e320-4a5c-b864-dfeba32b30f4")
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
    2295: (e, o, a) => {
      e.exports = a(9245)
    },
    9245: (e, o, a) => {
      var f = a(1127),
        r = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        t = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, a) {
        var f, s = {},
          l = null,
          i = null;
        for (f in void 0 !== a && (l = "" + a), void 0 !== o.key && (l = "" + o.key), void 0 !== o.ref && (i = o.ref), o) n.call(o, f) && !d.hasOwnProperty(f) && (s[f] = o[f]);
        if (e && e.defaultProps)
          for (f in o = e.defaultProps) void 0 === s[f] && (s[f] = o[f]);
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