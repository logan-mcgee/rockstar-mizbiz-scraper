try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "da01bc44-106d-4f19-b362-e035bf54e52c", e._sentryDebugIdIdentifier = "sentry-dbid-da01bc44-106d-4f19-b362-e035bf54e52c")
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
  [981], {
    40981: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => o
      });
      var t = a(62229),
        d = a(9623),
        n = a(2918);
      const o = () => {
        const {
          data: e,
          loggedIn: s
        } = (0, n.useRockstarUser)(), {
          hasGtaPlus: a,
          accountSynced: o
        } = e ?? {}, f = (0, d.useNavigate)();
        return (0, t.useEffect)(() => {
          !1 !== s ? o && f(a ? "./benefits" : "./join", {
            replace: !0
          }) : f("./join", {
            replace: !0
          })
        }, [a, o, s, f]), null
      }
    }
  }
]);