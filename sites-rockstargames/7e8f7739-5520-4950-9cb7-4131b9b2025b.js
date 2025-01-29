! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "7e8f7739-5520-4950-9cb7-4131b9b2025b", e._sentryDebugIdIdentifier = "sentry-dbid-7e8f7739-5520-4950-9cb7-4131b9b2025b")
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
  [7882], {
    27882: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => f
      });
      var t = a(62229),
        d = a(9623),
        n = a(2918);
      const f = () => {
        const [e, s] = (0, t.useState)(), a = (0, n.useRockstarUser)(), {
          currentCharId: f
        } = (0, n.useRockstarUserState)(), o = (0, d.useNavigate)(), r = (0, n.useIsUserGtaPlus)(a.data, f);
        return (0, t.useEffect)((() => {
          if (!a) return;
          const {
            loggedIn: e
          } = a;
          null != e && (!1 !== e ? void 0 !== f && s(r) : s(!1))
        }), [r, a, f]), (0, t.useEffect)((() => {
          null != e && o(e ? "./benefits" : "./join", {
            replace: !0
          })
        }), [e, o]), null
      }
    }
  }
]);