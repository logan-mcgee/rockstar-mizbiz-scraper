try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "57a2b8da-4ad7-48aa-baf7-a220c05d1e30", e._sentryDebugIdIdentifier = "sentry-dbid-57a2b8da-4ad7-48aa-baf7-a220c05d1e30")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2295, 4676, 7533, 7595, 8421], {
    42295: (e, d, a) => {
      e.exports = a(69245)
    },
    69245: (e, d, a) => {
      var o = a(71127),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, d, a) {
        var o, n = {},
          l = null,
          i = null;
        for (o in void 0 !== a && (l = "" + a), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (i = d.ref), d) t.call(d, o) && !s.hasOwnProperty(o) && (n[o] = d[o]);
        if (e && e.defaultProps)
          for (o in d = e.defaultProps) void 0 === n[o] && (n[o] = d[o]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: i,
          props: n,
          _owner: f.current
        }
      }
      d.Fragment = n, d.jsx = l, d.jsxs = l
    }
  }
]);