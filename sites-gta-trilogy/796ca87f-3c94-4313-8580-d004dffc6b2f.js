try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "796ca87f-3c94-4313-8580-d004dffc6b2f", e._sentryDebugIdIdentifier = "sentry-dbid-796ca87f-3c94-4313-8580-d004dffc6b2f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [793], {
    4931(e, t, d) {
      var o = d(3082),
        a = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, d) {
        var o, n = {},
          l = null,
          i = null;
        for (o in void 0 !== d && (l = "" + d), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) r.call(t, o) && !s.hasOwnProperty(o) && (n[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === n[o] && (n[o] = t[o]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: i,
          props: n,
          _owner: f.current
        }
      }
      t.Fragment = n, t.jsx = l, t.jsxs = l
    },
    9793(e, t, d) {
      e.exports = d(4931)
    }
  }
]);