try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "de57c1e2-0e4b-493f-86f5-1c2448877a42", e._sentryDebugIdIdentifier = "sentry-dbid-de57c1e2-0e4b-493f-86f5-1c2448877a42")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "61ad12580c14ee5147480faf673e214137f57fe1",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "61ad12580c14ee5147480faf673e214137f57fe1"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [1325], {
    27354: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => u
      });
      var n = t(62229),
        s = t(27554),
        d = t(33085),
        r = t(16534),
        l = t(85914),
        i = t(95966),
        o = t(66871);
      const c = {
        agegate: "rockstargames-sites-red-dead-redemption-2f9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-sites-red-dead-redemption-2ca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-sites-red-dead-redemption-2aa5cfbd26930aee31e4643edcda52b39"
      };
      var f = t(70954);
      const g = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        u = (0, i.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: u = {},
            ga: m = {},
            t: p
          } = e;
          const {
            data: h
          } = (0, o.Wx)(), {
            track: b
          } = (0, o.h)(), y = (0, i.getCookieValueByName)("UAGC"), [_, w] = (0, n.useState)("1" === (x = y) ? g.PASSED : "0" === x ? g.FAILED : g.NOT_SUBMITTED);
          var x;
          const [I, D] = (0, n.useState)(), j = (0, n.createRef)(), k = (0, n.createRef)(), v = (0, n.createRef)(), {
            style: E
          } = u;
          return (0, n.useEffect)((() => {
            b({
              event: "age_gate_popup",
              element_placement: m.element_placement ?? ""
            })
          }), []), _ === g.PASSED || !1 === h?.isAMinor ? t : _ === g.FAILED ? (0, f.jsxs)("div", {
            className: c.agegate,
            style: E,
            children: [u?.header, (0, f.jsx)("h2", {
              children: p("agegate_fail")
            })]
          }) : (0, f.jsxs)("div", {
            className: c.agegate,
            style: E,
            children: [u?.header, (0, f.jsx)("div", {
              className: c.bg,
              style: u?.bgImg ? {
                backgroundImage: `url(${u.bgImg})`
              } : {}
            }), !1 === I && (0, f.jsx)("h5", {
              className: c.error,
              children: p("Please enter a valid age")
            }), (0, f.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(v?.current?.value, j?.current?.value, k?.current?.value),
                  n = (0, s.j)(new Date, {
                    years: 150
                  }),
                  o = (0, d.f)(t) && (0, r.d)(t, n);
                if (D(o), o) {
                  const e = (0, l.V)(new Date, t) >= a;
                  b(e ? {
                    event: "age_gate_passed",
                    element_placement: m.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: m.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const n = e ? "1" : "0";
                  (0, i.setCookieValue)("UAGC", n), w(n)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, f.jsx)("h5", {
                children: p("agegate_header")
              }), (0, f.jsxs)("div", {
                className: c.inputs,
                children: [(0, f.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [p("Month"), (0, f.jsx)("input", {
                    id: "monthInput",
                    ref: j,
                    placeholder: p("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, f.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [p("Day"), (0, f.jsx)("input", {
                    id: "dayInput",
                    ref: k,
                    placeholder: p("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, f.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [p("Year"), (0, f.jsx)("input", {
                    id: "yearInput",
                    ref: v,
                    className: c.year,
                    placeholder: p("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, f.jsx)("button", {
                  type: "submit",
                  className: c.submit,
                  children: p("SUBMIT")
                })]
              })]
            }), u?.footer]
          })
        }))
    }
  }
]);