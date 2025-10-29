try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "1c007c97-680b-40c5-a117-5d2235274001", e._sentryDebugIdIdentifier = "sentry-dbid-1c007c97-680b-40c5-a117-5d2235274001")
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
  [4518], {
    3860: (e, o, t) => {
      t.d(o, {
        A: () => d
      });
      var s = t(42295);
      const d = ({
        to: e,
        target: o,
        className: t,
        onNavigate: d,
        onClick: a,
        reloadDocument: n,
        children: r,
        ...l
      }) => {
        const i = e?.startsWith("http");
        return (0, s.jsx)("a", {
          href: e,
          className: t,
          onClick: o => {
            a?.(o), i || n || (d ? (o.preventDefault(), d(e)) : (o.preventDefault(), window.history.pushState({}, "", e)))
          },
          target: o,
          ...l,
          children: r
        })
      }
    },
    79867: (e, o, t) => {
      t.d(o, {
        A: () => a,
        C: () => s
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        d = [{
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
        a = () => {
          let e;
          const {
            location: o
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), s = d.findIndex((o => Object.entries(o.sites).findIndex((([o, s]) => s === t && (e = {
            site: o,
            subDomain: s
          }, !0))) >= 0)), a = d[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    }
  }
]);