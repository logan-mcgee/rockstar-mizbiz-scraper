try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "54b0632d-9448-47d4-b4e2-474e38b63390", e._sentryDebugIdIdentifier = "sentry-dbid-54b0632d-9448-47d4-b4e2-474e38b63390")
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
    299(e, a, t) {
      t.r(a), t.d(a, {
        AgeGate: () => b
      });
      var d = t(39793),
        n = t(93082),
        s = t(28504),
        r = t(26388),
        l = t(97824),
        i = t(19727),
        o = t(13331),
        c = t(90799);
      const g = {
          agegate: "rockstargames-sites-red-dead-redemption-2f9427878ee67735075cd3e245d49eabe",
          bg: "rockstargames-sites-red-dead-redemption-2aa5cfbd26930aee31e4643edcda52b39",
          inputs: "rockstargames-sites-red-dead-redemption-2ca3ab235303ed1b84f9c867fe5393c3a"
        },
        u = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        b = (0, o.withTranslations)(({
          ageGatePassAge: e = 17,
          children: a,
          options: t = {},
          ga: b = {},
          t: f,
          ...m
        }) => {
          const {
            data: p
          } = (0, c.Wx)(), {
            track: h
          } = (0, c.h)(), y = (0, o.getCookieValueByName)("UAGC"), [_, w] = (0, n.useState)("1" === (x = y) ? u.PASSED : "0" === x ? u.FAILED : u.NOT_SUBMITTED);
          var x;
          const [I, j] = (0, n.useState)(), D = (0, n.createRef)(), k = (0, n.createRef)(), v = (0, n.createRef)(), {
            style: E
          } = t;
          return (0, n.useEffect)(() => {
            h({
              event: "age_gate_popup",
              element_placement: b.element_placement ?? ""
            })
          }, []), _ === u.PASSED || !1 === p?.isAMinor ? a : _ === u.FAILED ? (0, d.jsxs)("div", {
            className: g.agegate,
            style: E,
            children: [t?.header, (0, d.jsx)("h2", {
              children: f("agegate_fail")
            })]
          }) : (0, d.jsxs)("div", {
            className: g.agegate,
            style: E,
            ...m,
            children: [t?.header, (0, d.jsx)("div", {
              className: g.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === I && (0, d.jsx)("h5", {
              className: g.error,
              children: f("Please enter a valid age")
            }), (0, d.jsx)("form", {
              name: "agegate",
              onSubmit: async a => {
                a.preventDefault();
                const t = new Date(v?.current?.value, D?.current?.value, k?.current?.value),
                  d = (0, s.j)(new Date, {
                    years: 150
                  }),
                  n = (0, r.f)(t) && (0, l.d)(t, d);
                if (j(n), n) {
                  const a = (0, i.V)(new Date, t) >= e;
                  h(a ? {
                    event: "age_gate_passed",
                    element_placement: b.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: b.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const d = a ? "1" : "0";
                  (0, o.setCookieValue)("UAGC", d), w(d)
                }
              },
              "data-testid": "agegate-form",
              children: (0, d.jsxs)("fieldset", {
                children: [(0, d.jsx)("legend", {
                  children: f("agegate_header")
                }), (0, d.jsxs)("div", {
                  className: g.inputs,
                  children: [(0, d.jsxs)("label", {
                    htmlFor: "monthInput",
                    children: [f("Month"), (0, d.jsx)("input", {
                      id: "monthInput",
                      ref: D,
                      placeholder: f("MM"),
                      maxLength: 2,
                      type: "number",
                      required: !0
                    })]
                  }), (0, d.jsxs)("label", {
                    htmlFor: "dayInput",
                    children: [f("Day"), (0, d.jsx)("input", {
                      id: "dayInput",
                      ref: k,
                      placeholder: f("DD"),
                      maxLength: 2,
                      type: "number",
                      required: !0
                    })]
                  }), (0, d.jsxs)("label", {
                    htmlFor: "yearInput",
                    children: [f("Year"), (0, d.jsx)("input", {
                      id: "yearInput",
                      ref: v,
                      className: g.year,
                      placeholder: f("YYYY"),
                      maxLength: 4,
                      type: "number",
                      required: !0
                    })]
                  }), (0, d.jsx)("button", {
                    type: "submit",
                    className: g.submit,
                    children: f("SUBMIT")
                  })]
                })]
              })
            }), t?.footer]
          })
        })
    }
  }
]);