try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "266e0347-ff9d-42c4-93bf-50745447c562", e._sentryDebugIdIdentifier = "sentry-dbid-266e0347-ff9d-42c4-93bf-50745447c562")
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
  [793], {
    4931(e, o, a) {
      var f = a(3082),
        d = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        t = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, a) {
        var f, s = {},
          l = null,
          i = null;
        for (f in void 0 !== a && (l = "" + a), void 0 !== o.key && (l = "" + o.key), void 0 !== o.ref && (i = o.ref), o) r.call(o, f) && !t.hasOwnProperty(f) && (s[f] = o[f]);
        if (e && e.defaultProps)
          for (f in o = e.defaultProps) void 0 === s[f] && (s[f] = o[f]);
        return {
          $$typeof: d,
          type: e,
          key: l,
          ref: i,
          props: s,
          _owner: n.current
        }
      }
      o.jsx = s, o.jsxs = s
    },
    9793(e, o, a) {
      e.exports = a(4931)
    }
  }
]);