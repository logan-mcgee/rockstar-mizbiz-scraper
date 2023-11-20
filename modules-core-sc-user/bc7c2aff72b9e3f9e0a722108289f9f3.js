"use strict";
(self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [139], {
    139: (e, s, r) => {
      r.r(s), r.d(s, {
        default: () => t
      });
      var a = r(929);
      const t = {
        RockstarGames_Users_Model_Entity_User_o: {
          fields: {
            logged_in: {
              read(e, s) {
                let {
                  readField: r
                } = s;
                return Number.isInteger(r("id"))
              }
            },
            agegate_pass: {
              read(e, s) {
                let {
                  readField: r
                } = s;
                const t = void 0 !== r("isAMinor") && !r("isAMinor"),
                  _ = (0, a.lsSettingsReactive)()?.agegatePass;
                return t ?? _
              }
            }
          }
        }
      }
    }
  }
]);