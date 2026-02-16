try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8d00ba13-8ab3-4ee1-b522-537523a478d5", e._sentryDebugIdIdentifier = "sentry-dbid-8d00ba13-8ab3-4ee1-b522-537523a478d5")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1335, 2295, 6637], {
    42295: (e, t, a) => {
      e.exports = a(69245)
    },
    69245: (e, t, a) => {
      var d = a(62229),
        o = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        n = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, a) {
        var d, r = {},
          l = null,
          i = null;
        for (d in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) s.call(t, d) && !f.hasOwnProperty(d) && (r[d] = t[d]);
        if (e && e.defaultProps)
          for (d in t = e.defaultProps) void 0 === r[d] && (r[d] = t[d]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: i,
          props: r,
          _owner: n.current
        }
      }
      t.Fragment = r, t.jsx = l, t.jsxs = l
    }
  }
]);