try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "da4596f0-7439-4561-916f-9c8dc1fd2ad0", e._sentryDebugIdIdentifier = "sentry-dbid-da4596f0-7439-4561-916f-9c8dc1fd2ad0")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [954], {
    70954: (e, d, t) => {
      e.exports = t(92834)
    },
    92834: (e, d, t) => {
      var a = t(62229),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        r = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, d, t) {
        var a, o = {},
          l = null,
          i = null;
        for (a in void 0 !== t && (l = "" + t), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (i = d.ref), d) f.call(d, a) && !s.hasOwnProperty(a) && (o[a] = d[a]);
        if (e && e.defaultProps)
          for (a in d = e.defaultProps) void 0 === o[a] && (o[a] = d[a]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: o,
          _owner: r.current
        }
      }
      d.Fragment = o, d.jsx = l, d.jsxs = l
    }
  }
]);