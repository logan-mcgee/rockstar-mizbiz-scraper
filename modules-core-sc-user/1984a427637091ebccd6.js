(self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [570], {
    487: (e, s, r) => {
      "use strict";
      r.r(s), r.d(s, {
        default: () => d
      });
      var t = r(562),
        a = r.n(t),
        o = r(929);
      const d = {
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
                const t = (0, o.lsSettingsReactive)()?.agegatePass ?? null;
                if (null === t && r("dob")) {
                  const e = r("dob"),
                    s = a()().diff(e, "years");
                  if (a()(e, "YYYY-MM-DD").isValid(!0) && s >= 17) return !0
                }
                return t
              }
            }
          }
        }
      }
    },
    674: e => {
      function s(e) {
        var s = new Error("Cannot find module '" + e + "'");
        throw s.code = "MODULE_NOT_FOUND", s
      }
      s.keys = () => [], s.resolve = s, s.id = 674, e.exports = s
    }
  }
]);