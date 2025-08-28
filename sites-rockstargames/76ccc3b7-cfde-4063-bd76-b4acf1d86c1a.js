try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "76ccc3b7-cfde-4063-bd76-b4acf1d86c1a", e._sentryDebugIdIdentifier = "sentry-dbid-76ccc3b7-cfde-4063-bd76-b4acf1d86c1a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "793af7f1166af90e36185780de33260abbd44330",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "793af7f1166af90e36185780de33260abbd44330"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3653], {
    63653: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => o
      });
      var t = s(62229),
        d = s(9623),
        n = s(2918);
      const o = () => {
        const {
          data: e,
          loggedIn: a
        } = (0, n.useRockstarUser)(), {
          hasGtaPlus: s,
          accountSynced: o
        } = e ?? {}, {
          setCharactersNeeded: f,
          setCrewsNeeded: l
        } = (0, n.useRockstarUserState)(), r = (0, d.useNavigate)();
        return (0, t.useLayoutEffect)((() => (f("gtao"), l("true"), () => {
          f(null), l(null)
        })), []), (0, t.useEffect)((() => {
          !1 !== a ? o && r(s ? "./benefits" : "./join", {
            replace: !0
          }) : r("./join", {
            replace: !0
          })
        }), [s, o, a, r]), null
      }
    }
  }
]);