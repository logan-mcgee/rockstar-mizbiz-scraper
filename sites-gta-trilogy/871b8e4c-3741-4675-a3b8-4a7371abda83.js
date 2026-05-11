try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "871b8e4c-3741-4675-a3b8-4a7371abda83", e._sentryDebugIdIdentifier = "sentry-dbid-871b8e4c-3741-4675-a3b8-4a7371abda83")
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
    69245(e, t, a) {
      var o = a(71127),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, t, a) {
        var o, r = {},
          f = null,
          i = null;
        for (o in void 0 !== a && (f = "" + a), void 0 !== t.key && (f = "" + t.key), void 0 !== t.ref && (i = t.ref), t) d.call(t, o) && !l.hasOwnProperty(o) && (r[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === r[o] && (r[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: f,
          ref: i,
          props: r,
          _owner: s.current
        }
      }
      t.Fragment = r, t.jsx = f, t.jsxs = f
    },
    42295(e, t, a) {
      e.exports = a(69245)
    }
  }
]);