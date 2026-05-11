try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e74f5bd6-2416-4c2c-abac-008b50863617", e._sentryDebugIdIdentifier = "sentry-dbid-e74f5bd6-2416-4c2c-abac-008b50863617")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [2295], {
    69245(e, t, a) {
      var n = a(71127),
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

      function l(e, t, a) {
        var n, d = {},
          l = null,
          i = null;
        for (n in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) r.call(t, n) && !f.hasOwnProperty(n) && (d[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === d[n] && (d[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: i,
          props: d,
          _owner: s.current
        }
      }
      t.Fragment = d, t.jsx = l, t.jsxs = l
    },
    42295(e, t, a) {
      e.exports = a(69245)
    }
  }
]);