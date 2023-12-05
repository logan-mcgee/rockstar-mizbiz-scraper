(self.webpackChunk_rockstargames_modules_core_agegate = self.webpackChunk_rockstargames_modules_core_agegate || []).push([
  [245], {
    792: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        fbar: () => i,
        useAgegated: () => u
      });
      var s = t(711),
        r = t(929),
        l = t(927),
        n = t(598),
        c = t.n(n);
      const o = {
        agegate: "rockstargames-modules-core-agegatec39defb542dc4e5ef231dbb5cde104dc",
        inputs: "rockstargames-modules-core-agegatef8405e61173c4c88818c181a18449963",
        bg: "rockstargames-modules-core-agegated241eb8a1bb208791acde5d536c7e295"
      };
      var g = t(705);
      const d = (0, r.withTranslations)((e => {
          let {
            agegateValue: a,
            options: t = {},
            t: s
          } = e;
          const {
            mutateLSSettings: n
          } = (0, r.useRockstarWebLSSettings)(), [d, u] = (0, l.useState)(null), i = (0, l.createRef)(), h = (0, l.createRef)(), m = (0, l.createRef)(), {
            style: p
          } = t;
          return !1 === a ? (0, g.jsxs)("div", {
            className: o.agegate,
            style: p,
            children: [t?.header, (0, g.jsx)("h2", {
              children: s("agegate_fail")
            })]
          }) : null === a ? (0, g.jsxs)("div", {
            className: o.agegate,
            style: p,
            children: [t?.header, (0, g.jsx)("div", {
              className: o.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === d ? (0, g.jsx)("h5", {
              className: o.error,
              children: s("Please enter a valid age")
            }) : "", (0, g.jsxs)("form", {
              onSubmit: async e => {
                e.preventDefault();
                const a = `${m.current.value}-${i.current.value.padStart(2,0)}-${h.current.value.padStart(2,0)}`,
                  t = c()(a, "YYYY-MM-DD", !0).isValid();
                if (u(t), t) {
                  const e = c()().diff(a, "years");
                  n({
                    key: "agegatePass",
                    value: e >= 17
                  })
                }
              },
              children: [(0, g.jsx)("h5", {
                children: s("agegate_header")
              }), (0, g.jsxs)("div", {
                className: o.inputs,
                children: [(0, g.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [s("Month"), (0, g.jsx)("input", {
                    id: "monthInput",
                    ref: i,
                    placeholder: s("MM"),
                    maxLength: 2
                  })]
                }), (0, g.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [s("Day"), (0, g.jsx)("input", {
                    id: "dayInput",
                    ref: h,
                    placeholder: s("DD"),
                    maxLength: 2
                  })]
                }), (0, g.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [s("Year"), (0, g.jsx)("input", {
                    id: "yearInput",
                    ref: m,
                    className: o.year,
                    placeholder: s("YYYY"),
                    maxLength: 4
                  })]
                }), (0, g.jsx)("button", {
                  type: "submit",
                  className: o.submit,
                  children: s("SUBMIT")
                })]
              })]
            }), t?.footer]
          }) : null
        })),
        u = () => {
          const {
            lsSettings: e
          } = (0, r.useRockstarWebLSSettings)(), {
            data: a,
            loading: t
          } = (0, s.useRockstarUser)();
          return function(s) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const l = e?.agegatePass ?? null,
              n = a?.agegate_pass ?? l ?? null;
            return !n && t ? null : n ? s : (0, g.jsx)(d, {
              agegateValue: n,
              options: r
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