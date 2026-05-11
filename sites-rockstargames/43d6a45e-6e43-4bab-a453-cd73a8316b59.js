try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "43d6a45e-6e43-4bab-a453-cd73a8316b59", e._sentryDebugIdIdentifier = "sentry-dbid-43d6a45e-6e43-4bab-a453-cd73a8316b59")
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
    40981(e, a, s) {
      s.r(a), s.d(a, {
        default: () => o
      });
      var d = s(71127),
        t = s(10181),
        n = s(82199);
      const o = () => {
        const {
          data: e,
          loggedIn: a
        } = (0, n.useRockstarUser)(), {
          hasGtaPlus: s,
          accountSynced: o
        } = e ?? {}, l = (0, t.useNavigate)();
        return (0, d.useEffect)(() => {
          !1 !== a ? o && l(s ? "./benefits" : "./join", {
            replace: !0
          }) : l("./join", {
            replace: !0
          })
        }, [s, o, a, l]), null
      }
    }
  }
]);