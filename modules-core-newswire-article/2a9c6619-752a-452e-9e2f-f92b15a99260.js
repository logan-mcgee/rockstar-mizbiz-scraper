try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "2a9c6619-752a-452e-9e2f-f92b15a99260", e._sentryDebugIdIdentifier = "sentry-dbid-2a9c6619-752a-452e-9e2f-f92b15a99260")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [954], {
    70954: (e, o, d) => {
      e.exports = d(92834)
    },
    92834: (e, o, d) => {
      var r = d(62229),
        n = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, o, d) {
        var r, t = {},
          l = null,
          i = null;
        for (r in void 0 !== d && (l = "" + d), void 0 !== o.key && (l = "" + o.key), void 0 !== o.ref && (i = o.ref), o) a.call(o, r) && !f.hasOwnProperty(r) && (t[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === t[r] && (t[r] = o[r]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: t,
          _owner: s.current
        }
      }
      o.Fragment = t, o.jsx = l, o.jsxs = l
    }
  }
]);