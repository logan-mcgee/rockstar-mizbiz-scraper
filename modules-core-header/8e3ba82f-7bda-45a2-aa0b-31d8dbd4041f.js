try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "8e3ba82f-7bda-45a2-aa0b-31d8dbd4041f", e._sentryDebugIdIdentifier = "sentry-dbid-8e3ba82f-7bda-45a2-aa0b-31d8dbd4041f")
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
  [2174, 2559, 4555, 6936, 9793], {
    94931(e, o, r) {
      var t = r(4637),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, o, r) {
        var t, s = {},
          i = null,
          f = null;
        for (t in void 0 !== r && (i = "" + r), void 0 !== o.key && (i = "" + o.key), void 0 !== o.ref && (f = o.ref), o) a.call(o, t) && !l.hasOwnProperty(t) && (s[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === s[t] && (s[t] = o[t]);
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: f,
          props: s,
          _owner: d.current
        }
      }
      o.Fragment = s, o.jsx = i, o.jsxs = i
    },
    39793(e, o, r) {
      e.exports = r(94931)
    },
    47279(e, o, r) {
      r.d(o, {
        A: () => i,
        C: () => d
      });
      var t = r(54028),
        n = r.n(t),
        s = r(15963),
        a = r.n(s);
      const d = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        l = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        i = () => {
          let e;
          const {
            location: o
          } = window, r = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), t = l.findIndex(o => Object.entries(o.sites).findIndex(([o, t]) => t === r && (e = {
            site: o,
            subDomain: t
          }, !0)) >= 0), s = l[t >= 0 ? t : 0], d = l.find(e => e.id === s.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), a()(n()({}, d, {
            currentSite: e
          }, s), "fallbackEnvironment")
        }
    }
  }
]);