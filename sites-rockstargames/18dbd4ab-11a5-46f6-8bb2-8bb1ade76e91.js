try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "18dbd4ab-11a5-46f6-8bb2-8bb1ade76e91", e._sentryDebugIdIdentifier = "sentry-dbid-18dbd4ab-11a5-46f6-8bb2-8bb1ade76e91")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9464], {
    9464: (e, a, s) => {
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
          setCharactersNeeded: l
        } = (0, n.useRockstarUserState)(), r = (0, d.useNavigate)();
        return (0, t.useLayoutEffect)((() => (l("gtao"), () => {
          l(null)
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