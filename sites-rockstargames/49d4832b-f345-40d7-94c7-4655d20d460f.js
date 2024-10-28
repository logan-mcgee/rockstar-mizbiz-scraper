! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "49d4832b-f345-40d7-94c7-4655d20d460f", e._sentryDebugIdIdentifier = "sentry-dbid-49d4832b-f345-40d7-94c7-4655d20d460f")
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
  [5427], {
    85427: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => o
      });
      var t = s(71403),
        d = s(25076),
        n = s(40207);
      const o = () => {
        const [e, a] = (0, t.useState)(), s = (0, n.useRockstarUser)(), {
          currentCharId: o
        } = (0, n.useRockstarUserState)(), r = (0, d.useNavigate)(), l = (0, n.useIsUserGtaPlus)(s.data, o);
        return (0, t.useEffect)((() => {
          if (!s) return;
          const {
            loggedIn: e
          } = s;
          null != e && (!1 !== e ? void 0 !== o && a(l) : a(!1))
        }), [l, s, o]), (0, t.useEffect)((() => {
          null != e && r(e ? "./benefits" : "./join", {
            replace: !0
          })
        }), [e, r]), null
      }
    }
  }
]);