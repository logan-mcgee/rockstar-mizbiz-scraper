try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "2a9c6619-752a-452e-9e2f-f92b15a99260", e._sentryDebugIdIdentifier = "sentry-dbid-2a9c6619-752a-452e-9e2f-f92b15a99260")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [954], {
    70954: (e, o, r) => {
      e.exports = r(92834)
    },
    92834: (e, o, r) => {
      var n = r(62229),
        t = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        f = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, o, r) {
        var n, a = {},
          l = null,
          i = null;
        for (n in void 0 !== r && (l = "" + r), void 0 !== o.key && (l = "" + o.key), void 0 !== o.ref && (i = o.ref), o) d.call(o, n) && !s.hasOwnProperty(n) && (a[n] = o[n]);
        if (e && e.defaultProps)
          for (n in o = e.defaultProps) void 0 === a[n] && (a[n] = o[n]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: i,
          props: a,
          _owner: f.current
        }
      }
      o.Fragment = a, o.jsx = l, o.jsxs = l
    }
  }
]);