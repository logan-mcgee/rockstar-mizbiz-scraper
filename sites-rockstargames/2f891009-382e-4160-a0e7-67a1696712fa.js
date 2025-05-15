! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2f891009-382e-4160-a0e7-67a1696712fa", e._sentryDebugIdIdentifier = "sentry-dbid-2f891009-382e-4160-a0e7-67a1696712fa")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9464], {
    9464: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => l
      });
      var d = t(62229),
        s = t(9623),
        o = t(2918);
      const l = () => {
        const {
          data: e,
          loggedIn: a
        } = (0, o.useRockstarUser)(), {
          hasGtaPlus: t,
          accountSynced: l
        } = e ?? {}, {
          setCharactersNeeded: n
        } = (0, o.useRockstarUserState)(), r = (0, s.useNavigate)();
        return (0, d.useLayoutEffect)((() => (n("gtao"), () => {
          n(null)
        })), []), (0, d.useEffect)((() => {
          !1 !== a ? l && r(t ? "./benefits" : "./join", {
            replace: !0
          }) : r("./join", {
            replace: !0
          })
        }), [t, l, a, r]), null
      }
    }
  }
]);