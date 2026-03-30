try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1171e2c6-ff74-4c10-99ab-f38a1222409b", e._sentryDebugIdIdentifier = "sentry-dbid-1171e2c6-ff74-4c10-99ab-f38a1222409b")
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
    42295: (e, a, t) => {
      e.exports = t(69245)
    },
    69245: (e, a, t) => {
      var o = t(71127),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, t) {
        var o, s = {},
          l = null,
          i = null;
        for (o in void 0 !== t && (l = "" + t), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (i = a.ref), a) n.call(a, o) && !d.hasOwnProperty(o) && (s[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === s[o] && (s[o] = a[o]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: i,
          props: s,
          _owner: f.current
        }
      }
      a.Fragment = s, a.jsx = l, a.jsxs = l
    }
  }
]);