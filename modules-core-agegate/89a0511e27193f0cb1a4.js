(self.webpackChunk_rockstargames_modules_core_agegate = self.webpackChunk_rockstargames_modules_core_agegate || []).push([
  [707, 337], {
    337: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        setUserAgegatePass: () => n,
        userAgegatePass: () => l
      });
      var t = s(859);
      const r = "RockstarGamesAgeRestrictionPassage",
        l = (0, t.makeVar)(JSON.parse(localStorage?.getItem(r) ?? null)),
        n = e => {
          localStorage.setItem(r, String(Boolean(e))), l(e)
        }
    },
    188: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        setUserAgegatePass: () => o.setUserAgegatePass,
        useAgegated: () => h,
        userAgegatePass: () => o.userAgegatePass
      });
      var t = s(822),
        r = s(711),
        l = s(859),
        n = s(929),
        g = s(611),
        c = s.n(g),
        o = s(337);
      const u = {
        agegate: "e71539fe6bb9b9e28ba7",
        inputs: "da2aa579abb1e629fef1",
        bg: "e41bb30580c6f06dbafc"
      };
      var i = s(668);
      const d = (0, n.withTranslations)((e => {
          let {
            agegateValue: a,
            options: s = {},
            t: r
          } = e;
          const [l, n] = (0, t.useState)(null), g = (0, t.createRef)(), d = (0, t.createRef)(), h = (0, t.createRef)(), {
            style: m
          } = s;
          return !1 === a ? (0, i.jsxs)("div", {
            className: u.agegate,
            style: m,
            children: [s?.header, (0, i.jsx)("h2", {
              children: r("agegate_fail")
            })]
          }) : null === a ? (0, i.jsxs)("div", {
            className: u.agegate,
            style: m,
            children: [s?.header, (0, i.jsx)("div", {
              className: u.bg,
              style: s?.bgImg ? {
                backgroundImage: `url(${s.bgImg})`
              } : {}
            }), !1 === l ? (0, i.jsx)("h5", {
              className: u.error,
              children: r("Please enter a valid age")
            }) : "", (0, i.jsxs)("form", {
              onSubmit: e => {
                e.preventDefault();
                const a = `${h.current.value}-${g.current.value.padStart(2,0)}-${d.current.value.padStart(2,0)}`,
                  s = c()(a, "YYYY-MM-DD", !0).isValid();
                if (n(s), s) {
                  const e = c()().diff(a, "years");
                  (0, o.setUserAgegatePass)(e >= 17)
                }
              },
              children: [(0, i.jsx)("h5", {
                children: r("agegate_header")
              }), (0, i.jsxs)("div", {
                className: u.inputs,
                children: [(0, i.jsxs)("label", {
                  children: [r("Month"), (0, i.jsx)("input", {
                    ref: g,
                    placeholder: r("MM"),
                    maxLength: 2
                  })]
                }), (0, i.jsxs)("label", {
                  children: [r("Day"), (0, i.jsx)("input", {
                    ref: d,
                    placeholder: r("DD"),
                    maxLength: 2
                  })]
                }), (0, i.jsxs)("label", {
                  children: [r("Year"), (0, i.jsx)("input", {
                    ref: h,
                    className: u.year,
                    placeholder: r("YYYY"),
                    maxLength: 4
                  })]
                }), (0, i.jsx)("button", {
                  type: "submit",
                  className: u.submit,
                  children: r("SUBMIT")
                })]
              })]
            }), s?.footer]
          }) : null
        })),
        h = () => {
          const e = (0, l.useReactiveVar)(o.userAgegatePass),
            {
              data: a
            } = (0, r.useRockstarUser)({
              pingPeriodically: !1
            });
          return (0, t.useCallback)((function(s) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const r = a?.user?.agegate_pass ?? e ?? null;
            return r ? s : (0, i.jsx)(d, {
              agegateValue: r,
              options: t
            })
          }), [a, e])
        }
    },
    674: e => {
      function a(e) {
        var a = new Error("Cannot find module '" + e + "'");
        throw a.code = "MODULE_NOT_FOUND", a
      }
      a.keys = () => [], a.resolve = a, a.id = 674, e.exports = a
    }
  }
]);