(self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [543], {
    321: (e, r, s) => {
      "use strict";
      s.r(r), s.d(r, {
        default: () => d
      });
      var a = s(943),
        o = s.n(a),
        t = s(370);
      const d = {
        RockstarGames_Users_Model_Entity_User_o: {
          fields: {
            logged_in: {
              read(e, r) {
                let {
                  readField: s
                } = r;
                return Number.isInteger(s("id"))
              }
            },
            agegate_pass: {
              read(e, r) {
                let {
                  readField: s
                } = r;
                const a = (0, t.userAgegatePass)();
                if (null === a && s("dob")) {
                  const e = s("dob"),
                    r = o()().diff(e, "years");
                  if (o()(e, "YYYY-MM-DD").isValid(!0) && r >= 17) return !0
                }
                return a
              }
            }
          }
        }
      }
    },
    674: e => {
      function r(e) {
        var r = new Error("Cannot find module '" + e + "'");
        throw r.code = "MODULE_NOT_FOUND", r
      }
      r.keys = () => [], r.resolve = r, r.id = 674, e.exports = r
    }
  }
]);