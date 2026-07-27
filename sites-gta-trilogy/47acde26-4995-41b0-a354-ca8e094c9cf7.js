try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "47acde26-4995-41b0-a354-ca8e094c9cf7", e._sentryDebugIdIdentifier = "sentry-dbid-47acde26-4995-41b0-a354-ca8e094c9cf7")
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
    4931(e, t, a) {
      var o = a(3082),
        n = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, a) {
        var o, d = {},
          l = null,
          i = null;
        for (o in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) r.call(t, o) && !f.hasOwnProperty(o) && (d[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === d[o] && (d[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: d,
          _owner: s.current
        }
      }
      t.Fragment = d, t.jsx = l, t.jsxs = l
    },
    9793(e, t, a) {
      e.exports = a(4931)
    }
  }
]);