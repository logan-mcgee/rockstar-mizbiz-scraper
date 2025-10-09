try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "67ef14e9-36d9-4d5f-ae75-599b009c00f5", e._sentryDebugIdIdentifier = "sentry-dbid-67ef14e9-36d9-4d5f-ae75-599b009c00f5")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [2217, 4598], {
    42217: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => u
      });
      var d = t(42295),
        n = t(62229),
        s = t(75413),
        r = t(92649),
        l = t(11915),
        i = t(44550),
        o = t(95966),
        c = t(32169);
      const f = {
          agegate: "rockstargames-sites-red-dead-redemption-2f9427878ee67735075cd3e245d49eabe",
          bg: "rockstargames-sites-red-dead-redemption-2aa5cfbd26930aee31e4643edcda52b39",
          inputs: "rockstargames-sites-red-dead-redemption-2ca3ab235303ed1b84f9c867fe5393c3a"
        },
        g = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        u = (0, o.withTranslations)((({
          ageGatePassAge: e = 17,
          children: a,
          options: t = {},
          ga: u = {},
          t: m
        }) => {
          const {
            data: p
          } = (0, c.Wx)(), {
            track: b
          } = (0, c.h)(), h = (0, o.getCookieValueByName)("UAGC"), [y, _] = (0, n.useState)("1" === (w = h) ? g.PASSED : "0" === w ? g.FAILED : g.NOT_SUBMITTED);
          var w;
          const [x, I] = (0, n.useState)(), D = (0, n.createRef)(), j = (0, n.createRef)(), k = (0, n.createRef)(), {
            style: v
          } = t;
          return (0, n.useEffect)((() => {
            b({
              event: "age_gate_popup",
              element_placement: u.element_placement ?? ""
            })
          }), []), y === g.PASSED || !1 === p?.isAMinor ? a : y === g.FAILED ? (0, d.jsxs)("div", {
            className: f.agegate,
            style: v,
            children: [t?.header, (0, d.jsx)("h2", {
              children: m("agegate_fail")
            })]
          }) : (0, d.jsxs)("div", {
            className: f.agegate,
            style: v,
            children: [t?.header, (0, d.jsx)("div", {
              className: f.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === x && (0, d.jsx)("h5", {
              className: f.error,
              children: m("Please enter a valid age")
            }), (0, d.jsxs)("form", {
              name: "agegate",
              onSubmit: async a => {
                a.preventDefault();
                const t = new Date(k?.current?.value, D?.current?.value, j?.current?.value),
                  d = (0, s.j)(new Date, {
                    years: 150
                  }),
                  n = (0, r.f)(t) && (0, l.d)(t, d);
                if (I(n), n) {
                  const a = (0, i.V)(new Date, t) >= e;
                  b(a ? {
                    event: "age_gate_passed",
                    element_placement: u.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: u.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const d = a ? "1" : "0";
                  (0, o.setCookieValue)("UAGC", d), _(d)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, d.jsx)("h5", {
                children: m("agegate_header")
              }), (0, d.jsxs)("div", {
                className: f.inputs,
                children: [(0, d.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [m("Month"), (0, d.jsx)("input", {
                    id: "monthInput",
                    ref: D,
                    placeholder: m("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, d.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [m("Day"), (0, d.jsx)("input", {
                    id: "dayInput",
                    ref: j,
                    placeholder: m("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, d.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [m("Year"), (0, d.jsx)("input", {
                    id: "yearInput",
                    ref: k,
                    className: f.year,
                    placeholder: m("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, d.jsx)("button", {
                  type: "submit",
                  className: f.submit,
                  children: m("SUBMIT")
                })]
              })]
            }), t?.footer]
          })
        }))
    }
  }
]);