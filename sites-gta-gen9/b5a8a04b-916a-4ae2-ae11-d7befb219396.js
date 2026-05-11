try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b5a8a04b-916a-4ae2-ae11-d7befb219396", e._sentryDebugIdIdentifier = "sentry-dbid-b5a8a04b-916a-4ae2-ae11-d7befb219396")
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
  [2295], {
    69245(e, a, t) {
      var n = t(71127),
        o = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, t) {
        var n, d = {},
          l = null,
          b = null;
        for (n in void 0 !== t && (l = "" + t), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (b = a.ref), a) r.call(a, n) && !f.hasOwnProperty(n) && (d[n] = a[n]);
        if (e && e.defaultProps)
          for (n in a = e.defaultProps) void 0 === d[n] && (d[n] = a[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: b,
          props: d,
          _owner: s.current
        }
      }
      a.Fragment = d, a.jsx = l, a.jsxs = l
    },
    42295(e, a, t) {
      e.exports = t(69245)
    }
  }
]);