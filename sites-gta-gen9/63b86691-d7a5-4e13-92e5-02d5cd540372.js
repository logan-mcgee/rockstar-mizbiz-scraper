try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "63b86691-d7a5-4e13-92e5-02d5cd540372", e._sentryDebugIdIdentifier = "sentry-dbid-63b86691-d7a5-4e13-92e5-02d5cd540372")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2174, 4555, 9793], {
    94931(e, t, d) {
      var n = d(93082),
        a = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, d) {
        var n, o = {},
          l = null,
          i = null;
        for (n in void 0 !== d && (l = "" + d), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) r.call(t, n) && !f.hasOwnProperty(n) && (o[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === o[n] && (o[n] = t[n]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: i,
          props: o,
          _owner: s.current
        }
      }
      t.Fragment = o, t.jsx = l, t.jsxs = l
    },
    39793(e, t, d) {
      e.exports = d(94931)
    }
  }
]);