try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "457dce00-b7a7-41fc-8ccd-e88d002a21cf", e._sentryDebugIdIdentifier = "sentry-dbid-457dce00-b7a7-41fc-8ccd-e88d002a21cf")
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
  [3653], {
    63653: (e, a, d) => {
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
          setCharactersNeeded: f
        } = (0, n.useRockstarUserState)(), l = (0, t.useNavigate)();
        return (0, s.useLayoutEffect)((() => (f("gtao"), () => {
          f(null)
        })), []), (0, s.useEffect)((() => {
          !1 !== a ? o && l(d ? "./benefits" : "./join", {
            replace: !0
          }) : l("./join", {
            replace: !0
          })
        }), [d, o, a, l]), null
      }
    }
  }
]);