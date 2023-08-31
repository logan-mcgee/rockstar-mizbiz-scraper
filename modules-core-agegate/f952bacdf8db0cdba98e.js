(self.webpackChunk_rockstargames_modules_core_agegate = self.webpackChunk_rockstargames_modules_core_agegate || []).push([
  [142], {
    45: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        fbar: () => o,
        useAgegated: () => u
      });
      var t = s(711),
        r = s(929),
        l = s(932),
        n = s(332),
        c = s.n(n);
      const g = {
        agegate: "_0f1b97ed8fd3c9f0e71539fe6bb9b9e28ba7",
        inputs: "_0f1b97ed8fd3c9f0da2aa579abb1e629fef1",
        bg: "_0f1b97ed8fd3c9f0e41bb30580c6f06dbafc"
      };
      var d = s(160);
      const i = (0, r.withTranslations)((e => {
          let {
            agegateValue: a,
            options: s = {},
            t
          } = e;
          const {
            mutateLSSettings: n,
            settingsReactive: i
          } = (0, r.useRockstarWebLSSettings)(), [u, o] = (0, l.useState)(null), f = (0, l.createRef)(), h = (0, l.createRef)(), b = (0, l.createRef)(), {
            style: m
          } = s;
          return !1 === a ? (0, d.jsxs)("div", {
            className: g.agegate,
            style: m,
            children: [s?.header, (0, d.jsx)("h2", {
              children: t("agegate_fail")
            })]
          }) : null === a ? (0, d.jsxs)("div", {
            className: g.agegate,
            style: m,
            children: [s?.header, (0, d.jsx)("div", {
              className: g.bg,
              style: s?.bgImg ? {
                backgroundImage: `url(${s.bgImg})`
              } : {}
            }), !1 === u ? (0, d.jsx)("h5", {
              className: g.error,
              children: t("Please enter a valid age")
            }) : "", (0, d.jsxs)("form", {
              onSubmit: e => {
                e.preventDefault();
                const a = `${b.current.value}-${f.current.value.padStart(2,0)}-${h.current.value.padStart(2,0)}`,
                  s = c()(a, "YYYY-MM-DD", !0).isValid();
                if (o(s), s) {
                  const e = c()().diff(a, "years"),
                    s = n({
                      key: "agegatePass",
                      value: e >= 17
                    });
                  i(s)
                }
              },
              children: [(0, d.jsx)("h5", {
                children: t("agegate_header")
              }), (0, d.jsxs)("div", {
                className: g.inputs,
                children: [(0, d.jsxs)("label", {
                  children: [t("Month"), (0, d.jsx)("input", {
                    ref: f,
                    placeholder: t("MM"),
                    maxLength: 2
                  })]
                }), (0, d.jsxs)("label", {
                  children: [t("Day"), (0, d.jsx)("input", {
                    ref: h,
                    placeholder: t("DD"),
                    maxLength: 2
                  })]
                }), (0, d.jsxs)("label", {
                  children: [t("Year"), (0, d.jsx)("input", {
                    ref: b,
                    className: g.year,
                    placeholder: t("YYYY"),
                    maxLength: 4
                  })]
                }), (0, d.jsx)("button", {
                  type: "submit",
                  className: g.submit,
                  children: t("SUBMIT")
                })]
              })]
            }), s?.footer]
          }) : null
        })),
        u = () => {
          const {
            lsSettings: e
          } = (0, r.useRockstarWebLSSettings)(), {
            data: a
          } = (0, t.useRockstarUser)();
          return function(s) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const r = e?.agegatePass ?? null,
              l = a?.agegate_pass ?? r ?? null;
            return l ? s : (0, d.jsx)(i, {
              agegateValue: l,
              options: t
            })
          }
        },
        o = 12
    },
    988: e => {
      function a(e) {
        var a = new Error("Cannot find module '" + e + "'");
        throw a.code = "MODULE_NOT_FOUND", a
      }
      a.keys = () => [], a.resolve = a, a.id = 988, e.exports = a
    }
  }
]);