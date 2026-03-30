try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c2b8670d-37da-4e0b-9d31-c69ea6d74c7d", e._sentryDebugIdIdentifier = "sentry-dbid-c2b8670d-37da-4e0b-9d31-c69ea6d74c7d")
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
  [2295], {
    42295: (e, t, a) => {
      e.exports = a(69245)
    },
    69245: (e, t, a) => {
      var d = a(71127),
        o = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        s = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, a) {
        var d, n = {},
          l = null,
          i = null;
        for (d in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) r.call(t, d) && !f.hasOwnProperty(d) && (n[d] = t[d]);
        if (e && e.defaultProps)
          for (d in t = e.defaultProps) void 0 === n[d] && (n[d] = t[d]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: i,
          props: n,
          _owner: s.current
        }
      }
      t.Fragment = n, t.jsx = l, t.jsxs = l
    }
  }
]);