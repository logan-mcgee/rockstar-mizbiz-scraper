try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2ae73ca1-66a7-4f3f-a764-e99248f7f7cf", e._sentryDebugIdIdentifier = "sentry-dbid-2ae73ca1-66a7-4f3f-a764-e99248f7f7cf")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [5854], {
    25854: (e, a, o) => {
      e.exports = o(41454)
    },
    41454: (e, a, o) => {
      var r = o(62229),
        n = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        f = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, o) {
        var r, t = {},
          l = null,
          i = null;
        for (r in void 0 !== o && (l = "" + o), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (i = a.ref), a) d.call(a, r) && !s.hasOwnProperty(r) && (t[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === t[r] && (t[r] = a[r]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: t,
          _owner: f.current
        }
      }
      a.Fragment = t, a.jsx = l, a.jsxs = l
    }
  }
]);