(self.webpackChunk_rockstargames_modules_core_agegate = self.webpackChunk_rockstargames_modules_core_agegate || []).push([
  [527], {
    726: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        fbar: () => d,
        useAgegated: () => o
      });
      var t = s(711),
        r = s(929),
        l = s(822),
        n = s(943),
        c = s.n(n);
      const g = {
        agegate: "e71539fe6bb9b9e28ba7",
        inputs: "da2aa579abb1e629fef1",
        bg: "e41bb30580c6f06dbafc"
      };
      var i = s(322);
      const u = (0, r.withTranslations)((e => {
          let {
            agegateValue: a,
            options: s = {},
            t
          } = e;
          const {
            mutateLSSettings: n,
            settingsReactive: u
          } = (0, r.useRockstarWebLSSettings)(), [o, d] = (0, l.useState)(null), h = (0, l.createRef)(), b = (0, l.createRef)(), f = (0, l.createRef)(), {
            style: m
          } = s;
          return !1 === a ? (0, i.jsxs)("div", {
            className: g.agegate,
            style: m,
            children: [s?.header, (0, i.jsx)("h2", {
              children: t("agegate_fail")
            })]
          }) : null === a ? (0, i.jsxs)("div", {
            className: g.agegate,
            style: m,
            children: [s?.header, (0, i.jsx)("div", {
              className: g.bg,
              style: s?.bgImg ? {
                backgroundImage: `url(${s.bgImg})`
              } : {}
            }), !1 === o ? (0, i.jsx)("h5", {
              className: g.error,
              children: t("Please enter a valid age")
            }) : "", (0, i.jsxs)("form", {
              onSubmit: e => {
                e.preventDefault();
                const a = `${f.current.value}-${h.current.value.padStart(2,0)}-${b.current.value.padStart(2,0)}`,
                  s = c()(a, "YYYY-MM-DD", !0).isValid();
                if (d(s), s) {
                  const e = c()().diff(a, "years"),
                    s = n({
                      key: "agegatePass",
                      value: e >= 17
                    });
                  u(s)
                }
              },
              children: [(0, i.jsx)("h5", {
                children: t("agegate_header")
              }), (0, i.jsxs)("div", {
                className: g.inputs,
                children: [(0, i.jsxs)("label", {
                  children: [t("Month"), (0, i.jsx)("input", {
                    ref: h,
                    placeholder: t("MM"),
                    maxLength: 2
                  })]
                }), (0, i.jsxs)("label", {
                  children: [t("Day"), (0, i.jsx)("input", {
                    ref: b,
                    placeholder: t("DD"),
                    maxLength: 2
                  })]
                }), (0, i.jsxs)("label", {
                  children: [t("Year"), (0, i.jsx)("input", {
                    ref: f,
                    className: g.year,
                    placeholder: t("YYYY"),
                    maxLength: 4
                  })]
                }), (0, i.jsx)("button", {
                  type: "submit",
                  className: g.submit,
                  children: t("SUBMIT")
                })]
              })]
            }), s?.footer]
          }) : null
        })),
        o = () => {
          const {
            lsSettings: e
          } = (0, r.useRockstarWebLSSettings)(), {
            data: a
          } = (0, t.useRockstarUser)();
          return function(s) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const r = e?.agegatePass ?? null,
              l = a?.user?.agegate_pass ?? r ?? null;
            return l ? s : (0, i.jsx)(u, {
              agegateValue: l,
              options: t
            })
          }
        },
        d = 12
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