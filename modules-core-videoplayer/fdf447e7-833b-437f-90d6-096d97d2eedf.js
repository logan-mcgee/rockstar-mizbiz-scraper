try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "fdf447e7-833b-437f-90d6-096d97d2eedf", e._sentryDebugIdIdentifier = "sentry-dbid-fdf447e7-833b-437f-90d6-096d97d2eedf")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [793], {
    4931(e, d, o) {
      var r = o(3082),
        n = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, d, o) {
        var r, t = {},
          s = null,
          i = null;
        for (r in void 0 !== o && (s = "" + o), void 0 !== d.key && (s = "" + d.key), void 0 !== d.ref && (i = d.ref), d) f.call(d, r) && !l.hasOwnProperty(r) && (t[r] = d[r]);
        if (e && e.defaultProps)
          for (r in d = e.defaultProps) void 0 === t[r] && (t[r] = d[r]);
        return {
          $$typeof: n,
          type: e,
          key: s,
          ref: i,
          props: t,
          _owner: a.current
        }
      }
      d.Fragment = t, d.jsx = s, d.jsxs = s
    },
    9793(e, d, o) {
      e.exports = o(4931)
    }
  }
]);