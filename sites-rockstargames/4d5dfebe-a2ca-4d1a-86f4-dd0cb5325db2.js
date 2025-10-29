try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "4d5dfebe-a2ca-4d1a-86f4-dd0cb5325db2", e._sentryDebugIdIdentifier = "sentry-dbid-4d5dfebe-a2ca-4d1a-86f4-dd0cb5325db2")
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
    40981: (e, d, a) => {
      a.r(d), a.d(d, {
        default: () => o
      });
      var s = a(62229),
        t = a(9623),
        n = a(2918);
      const o = () => {
        const {
          data: e,
          loggedIn: d
        } = (0, n.useRockstarUser)(), {
          hasGtaPlus: a,
          accountSynced: o
        } = e ?? {}, {
          setCharactersNeeded: l,
          setCrewsNeeded: r
        } = (0, n.useRockstarUserState)(), f = (0, t.useNavigate)();
        return (0, s.useLayoutEffect)((() => (l("gtao"), r("true"), () => {
          l(null), r(null)
        })), []), (0, s.useEffect)((() => {
          !1 !== d ? o && f(a ? "./benefits" : "./join", {
            replace: !0
          }) : f("./join", {
            replace: !0
          })
        }), [a, o, d, f]), null
      }
    }
  }
]);