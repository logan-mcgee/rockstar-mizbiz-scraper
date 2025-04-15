! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0298a4ec-4171-4202-9d2f-c85a3ec96e61", e._sentryDebugIdIdentifier = "sentry-dbid-0298a4ec-4171-4202-9d2f-c85a3ec96e61")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [5918], {
    45918: (e, a, s) => {
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