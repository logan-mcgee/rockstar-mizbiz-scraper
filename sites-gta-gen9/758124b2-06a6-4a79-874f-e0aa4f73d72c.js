try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "758124b2-06a6-4a79-874f-e0aa4f73d72c", e._sentryDebugIdIdentifier = "sentry-dbid-758124b2-06a6-4a79-874f-e0aa4f73d72c")
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
    42295: (e, a, t) => {
      e.exports = t(69245)
    },
    69245: (e, a, t) => {
      var n = t(71127),
        o = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        r = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, t) {
        var n, d = {},
          l = null,
          i = null;
        for (n in void 0 !== t && (l = "" + t), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (i = a.ref), a) f.call(a, n) && !s.hasOwnProperty(n) && (d[n] = a[n]);
        if (e && e.defaultProps)
          for (n in a = e.defaultProps) void 0 === d[n] && (d[n] = a[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: i,
          props: d,
          _owner: r.current
        }
      }
      a.Fragment = d, a.jsx = l, a.jsxs = l
    }
  }
]);