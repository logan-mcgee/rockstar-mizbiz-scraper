try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "9461ed44-de81-4b4c-ae06-40cfb59b4305", e._sentryDebugIdIdentifier = "sentry-dbid-9461ed44-de81-4b4c-ae06-40cfb59b4305")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [954], {
    70954: (e, d, o) => {
      e.exports = o(92834)
    },
    92834: (e, d, o) => {
      var r = o(62229),
        n = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, d, o) {
        var r, t = {},
          f = null,
          i = null;
        for (r in void 0 !== o && (f = "" + o), void 0 !== d.key && (f = "" + d.key), void 0 !== d.ref && (i = d.ref), d) a.call(d, r) && !s.hasOwnProperty(r) && (t[r] = d[r]);
        if (e && e.defaultProps)
          for (r in d = e.defaultProps) void 0 === t[r] && (t[r] = d[r]);
        return {
          $$typeof: n,
          type: e,
          key: f,
          ref: i,
          props: t,
          _owner: l.current
        }
      }
      d.Fragment = t, d.jsx = f, d.jsxs = f
    }
  }
]);