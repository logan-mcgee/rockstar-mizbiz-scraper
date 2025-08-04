try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "13edfd7b-7534-4a4d-9bd1-275fa8e209cb", e._sentryDebugIdIdentifier = "sentry-dbid-13edfd7b-7534-4a4d-9bd1-275fa8e209cb")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [954], {
    70954: (e, d, t) => {
      e.exports = t(92834)
    },
    92834: (e, d, t) => {
      var a = t(62229),
        o = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        n = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, d, t) {
        var a, r = {},
          l = null,
          i = null;
        for (a in void 0 !== t && (l = "" + t), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (i = d.ref), d) s.call(d, a) && !f.hasOwnProperty(a) && (r[a] = d[a]);
        if (e && e.defaultProps)
          for (a in d = e.defaultProps) void 0 === r[a] && (r[a] = d[a]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: i,
          props: r,
          _owner: n.current
        }
      }
      d.Fragment = r, d.jsx = l, d.jsxs = l
    }
  }
]);