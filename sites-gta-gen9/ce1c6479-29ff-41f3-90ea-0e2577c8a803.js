try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ce1c6479-29ff-41f3-90ea-0e2577c8a803", e._sentryDebugIdIdentifier = "sentry-dbid-ce1c6479-29ff-41f3-90ea-0e2577c8a803")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [954], {
    70954: (e, t, n) => {
      e.exports = n(92834)
    },
    92834: (e, t, n) => {
      var d = n(62229),
        a = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        r = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, n) {
        var d, o = {},
          l = null,
          i = null;
        for (d in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) f.call(t, d) && !s.hasOwnProperty(d) && (o[d] = t[d]);
        if (e && e.defaultProps)
          for (d in t = e.defaultProps) void 0 === o[d] && (o[d] = t[d]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: i,
          props: o,
          _owner: r.current
        }
      }
      t.Fragment = o, t.jsx = l, t.jsxs = l
    }
  }
]);