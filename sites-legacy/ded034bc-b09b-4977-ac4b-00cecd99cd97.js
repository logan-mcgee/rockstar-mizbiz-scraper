try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "ded034bc-b09b-4977-ac4b-00cecd99cd97", e._sentryDebugIdIdentifier = "sentry-dbid-ded034bc-b09b-4977-ac4b-00cecd99cd97")
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
  [1503, 1583, 9793], {
    94931(e, d, t) {
      var a = t(93082),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, d, t) {
        var a, o = {},
          f = null,
          i = null;
        for (a in void 0 !== t && (f = "" + t), void 0 !== d.key && (f = "" + d.key), void 0 !== d.ref && (i = d.ref), d) r.call(d, a) && !l.hasOwnProperty(a) && (o[a] = d[a]);
        if (e && e.defaultProps)
          for (a in d = e.defaultProps) void 0 === o[a] && (o[a] = d[a]);
        return {
          $$typeof: n,
          type: e,
          key: f,
          ref: i,
          props: o,
          _owner: s.current
        }
      }
      d.Fragment = o, d.jsx = f, d.jsxs = f
    },
    39793(e, d, t) {
      e.exports = t(94931)
    }
  }
]);