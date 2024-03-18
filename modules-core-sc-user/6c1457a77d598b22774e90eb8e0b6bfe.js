! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "94c7f112-1980-4a68-9d02-d33902623f81", e._sentryDebugIdIdentifier = "sentry-dbid-94c7f112-1980-4a68-9d02-d33902623f81")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-sc-user",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [596], {
    596: (e, d, a) => {
      a.r(d), a.d(d, {
        default: () => o
      });
      var s = a(792);
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
//# sourceMappingURL=6c1457a77d598b22774e90eb8e0b6bfe.js.map