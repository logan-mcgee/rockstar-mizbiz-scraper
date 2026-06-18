try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "54b0632d-9448-47d4-b4e2-474e38b63390", e._sentryDebugIdIdentifier = "sentry-dbid-54b0632d-9448-47d4-b4e2-474e38b63390")
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
  [680], {
    299(e, t, a) {
      a.r(t), a.d(t, {
        AgeGate: () => u
      });
      var d = a(39793),
        n = a(93082),
        s = a(28504),
        r = a(26388),
        l = a(97824),
        i = a(19727),
        o = a(13331),
        c = a(90799);
      const g = {
          agegate: "rockstargames-sites-red-dead-redemption-2f9427878ee67735075cd3e245d49eabe",
          bg: "rockstargames-sites-red-dead-redemption-2aa5cfbd26930aee31e4643edcda52b39",
          inputs: "rockstargames-sites-red-dead-redemption-2ca3ab235303ed1b84f9c867fe5393c3a"
        },
        f = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        u = (0, o.withTranslations)(({
          ageGatePassAge: e = 17,
          children: t,
          options: a = {},
          ga: u = {},
          t: m,
          ...p
        }) => {
          const {
            data: b
          } = (0, c.Wx)(), {
            track: h
          } = (0, c.h)(), y = (0, o.getCookieValueByName)("UAGC"), [_, w] = (0, n.useState)("1" === (x = y) ? f.PASSED : "0" === x ? f.FAILED : f.NOT_SUBMITTED);
          var x;
          const [I, j] = (0, n.useState)(), D = (0, n.createRef)(), k = (0, n.createRef)(), v = (0, n.createRef)(), {
            style: E
          } = a;
          return (0, n.useEffect)(() => {
            h({
              event: "age_gate_popup",
              element_placement: u.element_placement ?? ""
            })
          }, []), _ === f.PASSED || !1 === b?.isAMinor ? t : _ === f.FAILED ? (0, d.jsxs)("div", {
            className: g.agegate,
            style: E,
            children: [a?.header, (0, d.jsx)("h2", {
              children: m("agegate_fail")
            })]
          }) : (0, d.jsxs)("div", {
            className: g.agegate,
            style: E,
            ...p,
            children: [a?.header, (0, d.jsx)("div", {
              className: g.bg,
              style: a?.bgImg ? {
                backgroundImage: `url(${a.bgImg})`
              } : {}
            }), !1 === I && (0, d.jsx)("h5", {
              className: g.error,
              children: m("Please enter a valid age")
            }), (0, d.jsx)("form", {
              name: "agegate",
              onSubmit: async t => {
                t.preventDefault();
                const a = new Date(v?.current?.value, D?.current?.value, k?.current?.value),
                  d = (0, s.j)(new Date, {
                    years: 150
                  }),
                  n = (0, r.f)(a) && (0, l.d)(a, d);
                if (j(n), n) {
                  const t = (0, i.V)(new Date, a) >= e;
                  h(t ? {
                    event: "age_gate_passed",
                    element_placement: u.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: u.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const d = t ? "1" : "0";
                  (0, o.setCookieValue)("UAGC", d), w(d)
                }
              },
              "data-testid": "agegate-form",
              children: (0, d.jsxs)("fieldset", {
                children: [(0, d.jsx)("legend", {
                  children: m("agegate_header")
                }), (0, d.jsxs)("div", {
                  className: g.inputs,
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
                      ref: k,
                      placeholder: m("DD"),
                      maxLength: 2,
                      type: "number",
                      required: !0
                    })]
                  }), (0, d.jsxs)("label", {
                    htmlFor: "yearInput",
                    children: [m("Year"), (0, d.jsx)("input", {
                      id: "yearInput",
                      ref: v,
                      className: g.year,
                      placeholder: m("YYYY"),
                      maxLength: 4,
                      type: "number",
                      required: !0
                    })]
                  }), (0, d.jsx)("button", {
                    type: "submit",
                    className: g.submit,
                    children: m("SUBMIT")
                  })]
                })]
              })
            }), a?.footer]
          })
        })
    }
  }
]);