try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "22a898e7-5062-4985-8077-61e32dd70e42", e._sentryDebugIdIdentifier = "sentry-dbid-22a898e7-5062-4985-8077-61e32dd70e42")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "2a74753c0c949d4b2cbcf6cb65742761c430cda0",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2a74753c0c949d4b2cbcf6cb65742761c430cda0"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [616, 2327, 3473, 5854], {
    25854: (e, o, t) => {
      e.exports = t(41454)
    },
    40148: (e, o, t) => {
      t.d(o, {
        A: () => n,
        C: () => r
      });
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          supportNew: "support"
        },
        s = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        n = () => {
          let e;
          const {
            location: o
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), r = s.findIndex((o => Object.entries(o.sites).findIndex((o => {
            let [r, s] = o;
            return s === t && (e = {
              site: r,
              subDomain: s
            }, !0)
          })) >= 0)), n = s[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
            currentSite: e
          }
        }
    },
    41454: (e, o, t) => {
      var r = t(71127),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, o, t) {
        var r, n = {},
          i = null,
          f = null;
        for (r in void 0 !== t && (i = "" + t), void 0 !== o.key && (i = "" + o.key), void 0 !== o.ref && (f = o.ref), o) d.call(o, r) && !l.hasOwnProperty(r) && (n[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === n[r] && (n[r] = o[r]);
        return {
          $$typeof: s,
          type: e,
          key: i,
          ref: f,
          props: n,
          _owner: a.current
        }
      }
      o.Fragment = n, o.jsx = i, o.jsxs = i
    }
  }
]);