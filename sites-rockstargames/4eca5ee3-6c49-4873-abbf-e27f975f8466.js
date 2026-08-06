try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4eca5ee3-6c49-4873-abbf-e27f975f8466", e._sentryDebugIdIdentifier = "sentry-dbid-4eca5ee3-6c49-4873-abbf-e27f975f8466")
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
  [3534], {
    83534(e, a, d) {
      d.r(a);
      var s = d(93082),
        t = d(99225),
        n = d(82199);
      d.d(a, ["default", 0, () => {
        const {
          data: e,
          loggedIn: a
        } = (0, n.useRockstarUser)(), {
          hasGtaPlus: d,
          accountSynced: o
        } = e ?? {}, l = (0, t.useNavigate)();
        return (0, s.useEffect)(() => {
          !1 !== a ? o && l(d ? "./benefits" : "./join", {
            replace: !0
          }) : l("./join", {
            replace: !0
          })
        }, [d, o, a, l]), null
      }])
    }
  }
]);