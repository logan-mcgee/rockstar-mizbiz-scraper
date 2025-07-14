try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "cd7ac0ac-4d42-463c-8c84-079bd45ea610", e._sentryDebugIdIdentifier = "sentry-dbid-cd7ac0ac-4d42-463c-8c84-079bd45ea610")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [8583], {
    50964: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => f
      });
      var d = t(62229),
        n = t(6926),
        s = t(96672),
        r = t(20148),
        l = t(9085),
        i = t(95966),
        o = t(57895);
      const c = {
        agegate: "rockstargames-sites-red-dead-redemption-2f9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-sites-red-dead-redemption-2ca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-sites-red-dead-redemption-2aa5cfbd26930aee31e4643edcda52b39"
      };
      var g = t(25854);
      const u = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        f = (0, i.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: f = {},
            ga: m = {},
            t: p
          } = e;
          const {
            data: b
          } = (0, o.Wx)(), {
            track: h
          } = (0, o.h)(), y = (0, i.getCookieValueByName)("UAGC"), [_, w] = (0, d.useState)("1" === (x = y) ? u.PASSED : "0" === x ? u.FAILED : u.NOT_SUBMITTED);
          var x;
          const [I, D] = (0, d.useState)(), j = (0, d.createRef)(), k = (0, d.createRef)(), v = (0, d.createRef)(), {
            style: E
          } = f;
          return (0, d.useEffect)((() => {
            h({
              event: "age_gate_popup",
              element_placement: m.element_placement ?? ""
            })
          }), []), _ === u.PASSED || !1 === b?.isAMinor ? t : _ === u.FAILED ? (0, g.jsxs)("div", {
            className: c.agegate,
            style: E,
            children: [f?.header, (0, g.jsx)("h2", {
              children: p("agegate_fail")
            })]
          }) : (0, g.jsxs)("div", {
            className: c.agegate,
            style: E,
            children: [f?.header, (0, g.jsx)("div", {
              className: c.bg,
              style: f?.bgImg ? {
                backgroundImage: `url(${f.bgImg})`
              } : {}
            }), !1 === I && (0, g.jsx)("h5", {
              className: c.error,
              children: p("Please enter a valid age")
            }), (0, g.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(v?.current?.value, j?.current?.value, k?.current?.value),
                  d = (0, n.j)(new Date, {
                    years: 150
                  }),
                  o = (0, s.f)(t) && (0, r.d)(t, d);
                if (D(o), o) {
                  const e = (0, l.V)(new Date, t) >= a;
                  h(e ? {
                    event: "age_gate_passed",
                    element_placement: m.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: m.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const d = e ? "1" : "0";
                  (0, i.setCookieValue)("UAGC", d), w(d)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, g.jsx)("h5", {
                children: p("agegate_header")
              }), (0, g.jsxs)("div", {
                className: c.inputs,
                children: [(0, g.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [p("Month"), (0, g.jsx)("input", {
                    id: "monthInput",
                    ref: j,
                    placeholder: p("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, g.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [p("Day"), (0, g.jsx)("input", {
                    id: "dayInput",
                    ref: k,
                    placeholder: p("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, g.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [p("Year"), (0, g.jsx)("input", {
                    id: "yearInput",
                    ref: v,
                    className: c.year,
                    placeholder: p("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, g.jsx)("button", {
                  type: "submit",
                  className: c.submit,
                  children: p("SUBMIT")
                })]
              })]
            }), f?.footer]
          })
        }))
    }
  }
]);