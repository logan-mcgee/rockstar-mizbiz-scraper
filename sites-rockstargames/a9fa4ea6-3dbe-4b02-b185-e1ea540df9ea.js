try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a9fa4ea6-3dbe-4b02-b185-e1ea540df9ea", e._sentryDebugIdIdentifier = "sentry-dbid-a9fa4ea6-3dbe-4b02-b185-e1ea540df9ea")
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
    40981: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => o
      });
      var t = s(71127),
        d = s(10181),
        n = s(61874);
      const o = () => {
        const {
          data: e,
          loggedIn: a
        } = (0, n.useRockstarUser)(), {
          hasGtaPlus: s,
          accountSynced: o
        } = e ?? {}, f = (0, d.useNavigate)();
        return (0, t.useEffect)(() => {
          !1 !== a ? o && f(s ? "./benefits" : "./join", {
            replace: !0
          }) : f("./join", {
            replace: !0
          })
        }, [s, o, a, f]), null
      }
    }
  }
]);