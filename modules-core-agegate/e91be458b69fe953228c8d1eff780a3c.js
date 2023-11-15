(self.webpackChunk_rockstargames_modules_core_agegate = self.webpackChunk_rockstargames_modules_core_agegate || []).push([
  [245], {
    792: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        fbar: () => i,
        useAgegated: () => u
      });
      var t = s(711),
        r = s(929),
        l = s(927),
        c = s(598),
        n = s.n(c);
      const g = {
        agegate: "rockstargames-modules-core-agegatec39defb542dc4e5ef231dbb5cde104dc",
        inputs: "rockstargames-modules-core-agegatef8405e61173c4c88818c181a18449963",
        bg: "rockstargames-modules-core-agegated241eb8a1bb208791acde5d536c7e295"
      };
      var o = s(705);
      const d = (0, r.withTranslations)((e => {
          let {
            agegateValue: a,
            options: s = {},
            t
          } = e;
          const {
            mutateLSSettings: c,
            settingsReactive: d
          } = (0, r.useRockstarWebLSSettings)(), [u, i] = (0, l.useState)(null), h = (0, l.createRef)(), m = (0, l.createRef)(), b = (0, l.createRef)(), {
            style: f
          } = s;
          return !1 === a ? (0, o.jsxs)("div", {
            className: g.agegate,
            style: f,
            children: [s?.header, (0, o.jsx)("h2", {
              children: t("agegate_fail")
            })]
          }) : null === a ? (0, o.jsxs)("div", {
            className: g.agegate,
            style: f,
            children: [s?.header, (0, o.jsx)("div", {
              className: g.bg,
              style: s?.bgImg ? {
                backgroundImage: `url(${s.bgImg})`
              } : {}
            }), !1 === u ? (0, o.jsx)("h5", {
              className: g.error,
              children: t("Please enter a valid age")
            }) : "", (0, o.jsxs)("form", {
              onSubmit: e => {
                e.preventDefault();
                const a = `${b.current.value}-${h.current.value.padStart(2,0)}-${m.current.value.padStart(2,0)}`,
                  s = n()(a, "YYYY-MM-DD", !0).isValid();
                if (i(s), s) {
                  const e = n()().diff(a, "years"),
                    s = c({
                      key: "agegatePass",
                      value: e >= 17
                    });
                  d(s)
                }
              },
              children: [(0, o.jsx)("h5", {
                children: t("agegate_header")
              }), (0, o.jsxs)("div", {
                className: g.inputs,
                children: [(0, o.jsxs)("label", {
                  children: [t("Month"), (0, o.jsx)("input", {
                    ref: h,
                    placeholder: t("MM"),
                    maxLength: 2
                  })]
                }), (0, o.jsxs)("label", {
                  children: [t("Day"), (0, o.jsx)("input", {
                    ref: m,
                    placeholder: t("DD"),
                    maxLength: 2
                  })]
                }), (0, o.jsxs)("label", {
                  children: [t("Year"), (0, o.jsx)("input", {
                    ref: b,
                    className: g.year,
                    placeholder: t("YYYY"),
                    maxLength: 4
                  })]
                }), (0, o.jsx)("button", {
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
            return l ? s : (0, o.jsx)(d, {
              agegateValue: l,
              options: t
            })
          }
        },
        i = 12
    },
    162: e => {
      function a(e) {
        var a = new Error("Cannot find module '" + e + "'");
        throw a.code = "MODULE_NOT_FOUND", a
      }
      a.keys = () => [], a.resolve = a, a.id = 162, e.exports = a
    }
  }
]);