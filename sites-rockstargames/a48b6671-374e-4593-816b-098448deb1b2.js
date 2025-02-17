! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a48b6671-374e-4593-816b-098448deb1b2", e._sentryDebugIdIdentifier = "sentry-dbid-a48b6671-374e-4593-816b-098448deb1b2")
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
  [2828], {
    72828: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => o
      });
      var t = s(62229),
        d = s(9623),
        n = s(2918);
      const o = () => {
        const {
          data: e
        } = (0, n.useRockstarUser)(), {
          hasGtaPlus: a
        } = e ?? {}, {
          setCharactersNeeded: s
        } = (0, n.useRockstarUserState)(), o = (0, d.useNavigate)();
        return (0, t.useLayoutEffect)((() => (s("gtao"), () => {
          s(null)
        })), []), (0, t.useEffect)((() => {
          void 0 !== a && o(a ? "./benefits" : "./join", {
            replace: !0
          })
        }), [a, o]), null
      }
    }
  }
]);