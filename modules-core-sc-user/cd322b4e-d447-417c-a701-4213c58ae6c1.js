! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "cd322b4e-d447-417c-a701-4213c58ae6c1", e._sentryDebugIdIdentifier = "sentry-dbid-cd322b4e-d447-417c-a701-4213c58ae6c1")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-sc-user",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [847], {
    847: (e, d, a) => {
      a.r(d), a.d(d, {
        default: () => o
      });
      var s = a(756);
      const o = {
        RockstarGames_Users_Model_Entity_User_o: {
          fields: {
            logged_in: {
              read(e, d) {
                let {
                  readField: a
                } = d;
                return Number.isInteger(a("id"))
              }
            },
            agegate_pass: {
              read(e, d) {
                let {
                  readField: a
                } = d;
                const o = void 0 !== a("isAMinor") && !a("isAMinor"),
                  n = (0, s.lsSettingsReactive)()?.agegatePass;
                return o ?? n
              }
            }
          }
        }
      }
    }
  }
]);