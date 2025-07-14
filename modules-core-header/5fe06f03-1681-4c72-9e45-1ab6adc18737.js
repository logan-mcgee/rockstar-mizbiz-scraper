try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5fe06f03-1681-4c72-9e45-1ab6adc18737", e._sentryDebugIdIdentifier = "sentry-dbid-5fe06f03-1681-4c72-9e45-1ab6adc18737")
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
  [616, 2327, 2982, 3473, 5854], {
    25459: (e, t, o) => {
      o.d(t, {
        A: () => s
      });
      var r = o(25854);
      const s = e => {
        let {
          to: t,
          target: o,
          className: s,
          onNavigate: n,
          onClick: a,
          reloadDocument: d,
          children: l,
          ...i
        } = e;
        const c = t?.startsWith("http");
        return (0, r.jsx)("a", {
          href: t,
          className: s,
          onClick: e => {
            a?.(e), c || d || (n ? (e.preventDefault(), n(t)) : (e.preventDefault(), window.history.pushState({}, "", t)))
          },
          target: o,
          ...i,
          children: l
        })
      }
    },
    25854: (e, t, o) => {
      e.exports = o(41454)
    },
    40148: (e, t, o) => {
      o.d(t, {
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
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = s.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [r, s] = t;
            return s === o && (e = {
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
    41454: (e, t, o) => {
      var r = o(71127),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, t, o) {
        var r, n = {},
          i = null,
          c = null;
        for (r in void 0 !== o && (i = "" + o), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (c = t.ref), t) a.call(t, r) && !l.hasOwnProperty(r) && (n[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === n[r] && (n[r] = t[r]);
        return {
          $$typeof: s,
          type: e,
          key: i,
          ref: c,
          props: n,
          _owner: d.current
        }
      }
      t.Fragment = n, t.jsx = i, t.jsxs = i
    }
  }
]);