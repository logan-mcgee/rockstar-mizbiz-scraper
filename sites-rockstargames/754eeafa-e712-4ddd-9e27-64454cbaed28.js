try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "754eeafa-e712-4ddd-9e27-64454cbaed28", e._sentryDebugIdIdentifier = "sentry-dbid-754eeafa-e712-4ddd-9e27-64454cbaed28")
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
  [1913, 2295, 6827], {
    42295: (e, a, d) => {
      e.exports = d(69245)
    },
    69245: (e, a, d) => {
      var t = d(62229),
        o = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, d) {
        var t, r = {},
          l = null,
          i = null;
        for (t in void 0 !== d && (l = "" + d), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (i = a.ref), a) s.call(a, t) && !f.hasOwnProperty(t) && (r[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === r[t] && (r[t] = a[t]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: i,
          props: r,
          _owner: n.current
        }
      }
      a.Fragment = r, a.jsx = l, a.jsxs = l
    }
  }
]);