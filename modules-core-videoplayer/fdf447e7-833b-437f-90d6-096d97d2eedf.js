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
      var a = o(3082),
        f = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        t = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, d, o) {
        var a, r = {},
          s = null,
          i = null;
        for (a in void 0 !== o && (s = "" + o), void 0 !== d.key && (s = "" + d.key), void 0 !== d.ref && (i = d.ref), d) n.call(d, a) && !l.hasOwnProperty(a) && (r[a] = d[a]);
        if (e && e.defaultProps)
          for (a in d = e.defaultProps) void 0 === r[a] && (r[a] = d[a]);
        return {
          $$typeof: f,
          type: e,
          key: s,
          ref: i,
          props: r,
          _owner: t.current
        }
      }
      d.Fragment = r, d.jsx = s, d.jsxs = s
    },
    9793(e, d, o) {
      e.exports = o(4931)
    }
  }
]);