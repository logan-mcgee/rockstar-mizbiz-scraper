try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4d5dfebe-a2ca-4d1a-86f4-dd0cb5325db2", e._sentryDebugIdIdentifier = "sentry-dbid-4d5dfebe-a2ca-4d1a-86f4-dd0cb5325db2")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [981], {
    40981: (e, a, d) => {
      d.r(a), d.d(a, {
        default: () => o
      });
      var s = d(62229),
        t = d(9623),
        n = d(2918);
      const o = () => {
        const {
          data: e,
          loggedIn: a
        } = (0, n.useRockstarUser)(), {
          hasGtaPlus: d,
          accountSynced: o
        } = e ?? {}, {
          setCharactersNeeded: f,
          setCrewsNeeded: l
        } = (0, n.useRockstarUserState)(), r = (0, t.useNavigate)();
        return (0, s.useLayoutEffect)((() => (f("gtao"), l("true"), () => {
          f(null), l(null)
        })), []), (0, s.useEffect)((() => {
          !1 !== a ? o && r(d ? "./benefits" : "./join", {
            replace: !0
          }) : r("./join", {
            replace: !0
          })
        }), [d, o, a, r]), null
      }
    }
  }
]);