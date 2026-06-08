try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ec6cf6cf-ab6a-49f7-bb76-a7f95a92c796", e._sentryDebugIdIdentifier = "sentry-dbid-ec6cf6cf-ab6a-49f7-bb76-a7f95a92c796")
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
  [299, 680], {
    299(e, a, t) {
      t.r(a), t.d(a, {
        AgeGate: () => u
      });
      var n = t(39793),
        s = t(93082),
        d = t(28504),
        r = t(26388),
        l = t(97824),
        i = t(19727),
        o = t(13331),
        c = t(90799);
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
        u = (0, o.withTranslations)(({
          ageGatePassAge: e = 17,
          children: a,
          options: t = {},
          ga: u = {},
          t: m,
          ...b
        }) => {
          const {
            data: p
          } = (0, c.Wx)(), {
            track: h
          } = (0, c.h)(), y = (0, o.getCookieValueByName)("UAGC"), [_, w] = (0, s.useState)("1" === (x = y) ? g.PASSED : "0" === x ? g.FAILED : g.NOT_SUBMITTED);
          var x;
          const [I, j] = (0, s.useState)(), D = (0, s.createRef)(), k = (0, s.createRef)(), v = (0, s.createRef)(), {
            style: E
          } = t;
          return (0, s.useEffect)(() => {
            h({
              event: "age_gate_popup",
              element_placement: u.element_placement ?? ""
            })
          }, []), _ === g.PASSED || !1 === p?.isAMinor ? a : _ === g.FAILED ? (0, n.jsxs)("div", {
            className: f.agegate,
            style: E,
            children: [t?.header, (0, n.jsx)("h2", {
              children: m("agegate_fail")
            })]
          }) : (0, n.jsxs)("div", {
            className: f.agegate,
            style: E,
            ...b,
            children: [t?.header, (0, n.jsx)("div", {
              className: f.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === I && (0, n.jsx)("h5", {
              className: f.error,
              children: m("Please enter a valid age")
            }), (0, n.jsx)("form", {
              name: "agegate",
              onSubmit: async a => {
                a.preventDefault();
                const t = new Date(v?.current?.value, D?.current?.value, k?.current?.value),
                  n = (0, d.j)(new Date, {
                    years: 150
                  }),
                  s = (0, r.f)(t) && (0, l.d)(t, n);
                if (j(s), s) {
                  const a = (0, i.V)(new Date, t) >= e;
                  h(a ? {
                    event: "age_gate_passed",
                    element_placement: u.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: u.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const n = a ? "1" : "0";
                  (0, o.setCookieValue)("UAGC", n), w(n)
                }
              },
              "data-testid": "agegate-form",
              children: (0, n.jsxs)("fieldset", {
                children: [(0, n.jsx)("legend", {
                  children: m("agegate_header")
                }), (0, n.jsxs)("div", {
                  className: f.inputs,
                  children: [(0, n.jsxs)("label", {
                    htmlFor: "monthInput",
                    children: [m("Month"), (0, n.jsx)("input", {
                      id: "monthInput",
                      ref: D,
                      placeholder: m("MM"),
                      maxLength: 2,
                      type: "number",
                      required: !0
                    })]
                  }), (0, n.jsxs)("label", {
                    htmlFor: "dayInput",
                    children: [m("Day"), (0, n.jsx)("input", {
                      id: "dayInput",
                      ref: k,
                      placeholder: m("DD"),
                      maxLength: 2,
                      type: "number",
                      required: !0
                    })]
                  }), (0, n.jsxs)("label", {
                    htmlFor: "yearInput",
                    children: [m("Year"), (0, n.jsx)("input", {
                      id: "yearInput",
                      ref: v,
                      className: f.year,
                      placeholder: m("YYYY"),
                      maxLength: 4,
                      type: "number",
                      required: !0
                    })]
                  }), (0, n.jsx)("button", {
                    type: "submit",
                    className: f.submit,
                    children: m("SUBMIT")
                  })]
                })]
              })
            }), t?.footer]
          })
        })
    }
  }
]);