! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "94c7f112-1980-4a68-9d02-d33902623f81", e._sentryDebugIdIdentifier = "sentry-dbid-94c7f112-1980-4a68-9d02-d33902623f81")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-core-sc-user",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [596], {
    596: (e, a, d) => {
      d.r(a), d.d(a, {
        default: () => o
      });
      var s = d(792);
      const o = {
        RockstarGames_Users_Model_Entity_User_o: {
          fields: {
            logged_in: {
              read(e, a) {
                let {
                  readField: d
                } = a;
                return Number.isInteger(d("id"))
              }
            },
            agegate_pass: {
              read(e, a) {
                let {
                  readField: d
                } = a;
                const o = void 0 !== d("isAMinor") && !d("isAMinor"),
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
//# sourceMappingURL=65cadc25e07a542d61a663982b076063.js.map